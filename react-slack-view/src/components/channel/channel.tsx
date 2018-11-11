import * as React from 'react';
import { ChannelModel } from '../../models/channelModel';
class ChannelProp{
    channel:ChannelModel;
    setChannel:any;
    activeChannel:any;
}
export default class Channel extends  React.Component<ChannelProp,any>{
    constructor(props:ChannelProp,context:any){
        super(props,context);
    }
    _onClickChannel=(e:any)=>{
        e.preventDefault();
        this.props.setChannel(this.props.channel)
    }
    render(){
        const {channel,activeChannel} = {...this.props};
        const active = channel === activeChannel?'active':'';

        return (<li className={active}>
            <a href="javascript:;" onClick={(event)=>this._onClickChannel(event)}>{this.props.channel.name}</a>
        </li>)
    }
}