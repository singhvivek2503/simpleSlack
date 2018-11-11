import * as React from 'react';
import {UserModel} from 'src/models/userModel';
import UserList from './userList';
import UserForm from './userForm';

class UserSectionProp {
    users : UserModel[];
    setUserName : any;
}
export default class UserSection extends React.Component <UserSectionProp,any> {

    render() {
        return (
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Users</strong>
                </div>
                <div className='panel-body users'>
                    <UserList {...this.props}></UserList>
                    <UserForm {...this.props}></UserForm>
                </div>
            </div>
        )
    }
}