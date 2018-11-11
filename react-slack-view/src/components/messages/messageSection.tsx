import * as React from 'react';
import {MessageModel} from 'src/models/messageModel';
import MessageList from './messageList';
import MessageForm from './messageForm';

class MessageSectionProp {
    messages : MessageModel[];
    addMessage : any;
    activeChannel : any;
}
export default class MessageSection extends React.Component < MessageSectionProp,
any > {

    render() {
        return (
            <div className='messages-container panel panel-default'>
                <div className='panel-heading'>
                    <strong>{this.props.activeChannel && this.props.activeChannel.name}</strong>
                </div>
                <div className='panel-body messages'>
                    <MessageList {...this.props}></MessageList>
                    <MessageForm {...this.props}></MessageForm>
                </div>
            </div>
        )
    }
}