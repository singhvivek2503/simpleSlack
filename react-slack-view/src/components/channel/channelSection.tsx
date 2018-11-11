import * as React from 'react';
import {ChannelModel} from 'src/models/channelModel';
import ChannelList from './channelList';
import ChannelForm from './channelForm';

class ChannelSectionProp {
    channels : ChannelModel[];
    setChannel : any;
    addChannel : any;
    activeChannel : any;
}
export default class ChannelSection extends React.Component < ChannelSectionProp,
any > {

    render() {
        return (
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Channels</strong>
                </div>
                <div className='panel-body channels'>
                    <ChannelList {...this.props}></ChannelList>
                    <ChannelForm {...this.props}></ChannelForm>
                </div>
            </div>
        )
    }
}