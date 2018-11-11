import * as React from 'react';
import { MessageModel } from '../../models/messageModel';
import fecha from 'fecha';

class MessageProp{
    message:MessageModel;
}
export default class Message extends  React.Component<MessageProp,any>{
    constructor(props:MessageProp,context:any){
        super(props,context);
    }
    render(){
        let {message} = this.props;
        let createdAt = fecha.format(message.createdAt,'HH:mm:ss MM/DD/YYYY')
        return (<li className="message">
        <div className="author">
            <strong>{message.author}</strong>
            <i className="timestamp">{createdAt}</i>
        </div>
            <div className="body">{message.body}</div>
        </li>)
    }
}