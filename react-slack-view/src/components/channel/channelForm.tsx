import * as React from 'react';

class ChannelFormProp {
    addChannel : any;
}
export default class ChannelForm extends React.Component < ChannelFormProp,
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
            .addChannel(chanName);
        input.value = "";
    }
    render() {
        return (
            <form onSubmit={(e) => this._onSubmit(e)} className="form form-horizontal">
                <div className="form-group">
                    <input className="form-control" placeholder="Add Channel" ref={this.textInput} type="text"></input>
                </div>
            </form>
        )
    }
}