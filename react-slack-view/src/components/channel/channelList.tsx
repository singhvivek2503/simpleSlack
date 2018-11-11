import * as React from 'react';
import {ChannelModel} from '../../models/channelModel';
import Channel from './channel';
class ChannelListProp {
    channels : ChannelModel[];
    setChannel : any;
    activeChannel : any;
}
export default class ChannelList extends React.Component<ChannelListProp,
any> {
    render() {
        return (
            <ul>
                {this.props.channels.length > 0 && 
                    this.props.channels
                    .map((chn, i) =>
                    <Channel key={i} channel={chn} {...this.props}></Channel>)
                }
            </ul>
        )
    }
}