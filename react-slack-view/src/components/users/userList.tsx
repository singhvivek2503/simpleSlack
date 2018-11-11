import * as React from 'react';
import {UserModel} from '../../models/userModel';
import User from './user';
class UserListProp {
    users : UserModel[];
}
export default class UserList extends React.Component<UserListProp,
any> {
    render() {
        return (
            <ul>
                {this.props.users.length > 0 && 
                    this.props.users
                    .map((chn, i) =>
                    <User key={i} user={chn} {...this.props}></User>)
                }
            </ul>
        )
    }
}