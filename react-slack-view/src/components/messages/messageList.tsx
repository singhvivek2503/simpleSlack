import * as React from 'react';
import Message from './message';
import { MessageModel } from '../../models/messageModel';
class MessageListProp {
    messages : MessageModel[];
}
export default class MessageList extends React.Component<MessageListProp,
any> {
    render() {
        return (
            <ul>
                {this.props.messages.length > 0 && 
                    this.props.messages
                    .map((chn, i) =>
                    <Message key={i} message={chn}></Message>)
                }
            </ul>
        )
    }
}