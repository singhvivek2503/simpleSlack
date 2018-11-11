import * as React from 'react';
import ChannelSection from './components/channel/channelSection';
import {ChannelModel} from './models/channelModel';
import UserSection from './components/users/userSection';
import { UserModel } from 'src/models/userModel';
import { MessageModel } from './models/messageModel';
import MessageSection from './components/messages/messageSection';
import { Socket } from './socket';
class AppState {
  channels : ChannelModel[];
  activeChannel : ChannelModel | null;
  users:UserModel[];
  messages:MessageModel[];
  connected:boolean;
}
class App extends React.Component < any,AppState > {
  ws:Socket;
  constructor(props : any) {
    super(props);
    this.state = {
      channels: [],
      activeChannel: null,
      users:[],
      messages:[],
      connected:false
    }
  }

  componentDidMount(){
    this.ws = new Socket();
     this.ws.on('connect',this.onConnect);
     this.ws.on('disconnect',this.onDisConnect);
     this.ws.on('channel add',this.onAddChannel);
     this.ws.on('user add',this.onAddUser);
     this.ws.on('user edit',this.onEditUser);
     this.ws.on('user remove',this.onRemoveUser);

     this.ws.on('message add',this.onMessageAdd);
  }
  onMessageAdd=(message)=>{
    let {messages} = this.state;
    messages.push(message);
    this.setState({messages});
  }

  onRemoveUser=(removeUser)=>{
    let {users} = this.state;
    users = users.filter(f=>f.id!==removeUser.id);

    this.setState({users});
  }

  onEditUser=(editUser)=>{
    let {users} = this.state;
    users = users.map(user=>{
      if(user.id == editUser.id){
        return editUser;
      }
      return user;
    })
    this.setState({users});
  }

  onAddUser=(user)=>{
    let {users} = this.state;
    users.push(user);
    this.setState({users});
  }
  onConnect=()=>{
    this.setState({connected:true});
    this.ws.emit('channel subscribe',null);
    this.ws.emit('user subscribe',null);
  }
  onDisConnect=()=>{
    this.setState({connected:false});
  }
  onAddChannel=(channel)=>{
    let{channels} = this.state;
    channels.push(channel);
    this.setState({channels});
  }
  newChannel=(channel)=>{
    let {channels}= this.state;
    channels.push(channel);
    this.setState({channels});
  }
  _addChannel = (name) => {
    this.ws.emit('channel add',{name});
  }
  _setChannel = (channel) => {
    this.setState({activeChannel: channel});
    this.ws.emit('message subscribe',null);
    this.setState({messages:[]});
    this.ws.emit('message subscribe',{channelId:channel.id})
  }
  _setUserName=(username)=>{
    this.ws.emit('user edit',{name});
  }
  _addMessage=(body)=>{
    let {activeChannel} = this.state;
    this.ws.emit('message add',{channelId:activeChannel.id,body});
  }
 public render() {
    return (
      <div className="container app">
        <div className="nav">
          <ChannelSection
            {...this.state}
            activeChannel={this.state.activeChannel}
            addChannel={(chnName) => this._addChannel(chnName)}
            setChannel={(chn) => this._setChannel(chn)}></ChannelSection>
            <UserSection {...this.state} setUserName={(usrName)=>this._setUserName(usrName)}></UserSection>
        </div>
        <MessageSection {...this.state} addMessage={(body)=>this._addMessage(body)}></MessageSection>
      </div>

    )
  }
}

export default App;
