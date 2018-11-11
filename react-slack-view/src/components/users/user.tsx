import * as React from 'react';
import { UserModel } from '../../models/userModel';
class UserProp{
    user:UserModel;
}
export default class User extends  React.Component<UserProp,any>{
    constructor(props:UserProp,context:any){
        super(props,context);
    }
    render(){
        return (<li>
            {this.props.user.name}
        </li>)
    }
}