import * as React from 'react';
import { ChannelModel } from 'src/models/channelModel';

class MessageFormProp {
    activeChannel:ChannelModel;
    addMessage : any;
}
export default class MessageForm extends React.Component < MessageFormProp,
any > {
    textInput : any;

    constructor(props : any, context : any) {
        super(props, context);
        this.textInput = React.createRef();
    }
    chanName : any;
    _onSubmit = (e : any) => {
        e.preventDefault();
        let input = this.textInput.current;
        const chanName = input.value;
        this
            .props
            .addMessage(chanName);
        input.value = "";
    }
    render() {
        let input;
        if(this.props.activeChannel && this.props.activeChannel.id !==undefined){
            input =(
                <input ref={this.textInput} type="text" className="form-control"
                placeholder="Add Message..."/>
            )
        }
        return (
            <form onSubmit={(e) => this._onSubmit(e)} className="form form-horizontal">
                <div className="form-group">
                    {input}
                </div>
            </form>
        )
    }
}