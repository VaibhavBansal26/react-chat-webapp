import React from 'react';
import {Menu} from 'semantic-ui-react';
import UserPanel from '../SidePanel/UserPanel';
import Channels from '../SidePanel/Channels';
import DirectMessages from '../SidePanel/DirectMessages';
import Starred from '../SidePanel/Starred';
class SidePanel extends React.Component{
    render(){
        const {currentUser,primaryColor} = this.props;
        return(
            <Menu size="large" inverted fixed="left" vertical
            style={{background:primaryColor, fontSize:'1.2rem'}}>
                <UserPanel primaryColor={primaryColor} currentUser={currentUser} />
                <Starred currentUser={currentUser} />
                <Channels currentUser={currentUser}/>
                <DirectMessages currentUser={currentUser} />
            </Menu>
        )
    }
}


export default SidePanel;