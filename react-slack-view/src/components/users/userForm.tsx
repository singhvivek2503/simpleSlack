import * as React from 'react';

class UserFormProp {
    setUserName : any;
}
export default class UserForm extends React.Component <UserFormProp,any> {
    textInput : any;

    constructor(props : any, context : any) {
        super(props, context);
        this.textInput = React.createRef();
    }
    userName : any;
    _onSubmit = (e : any) => {
        e.preventDefault();
        let input = this.textInput.current;
        const userName = input.value;
        this.props.setUserName(userName);
        input.value = "";
    }
    render() {
        return (
            <form onSubmit={(e) => this._onSubmit(e)} className="form form-horizontal">
                <div className="form-group">
                    <input className="form-control" placeholder="Add User" ref={this.textInput} type="text"></input>
                </div>
            </form>
        )
    }
}