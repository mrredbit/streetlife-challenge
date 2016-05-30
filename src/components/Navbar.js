import React from 'react';
import config from 'config';
import logoStreetLife  from '../styles/img/navbar/logo-streetlife.svg';
import menu from '../styles/img/navbar/menu.svg';
import MediaQuery from 'react-responsive';


class Navbar extends React.Component {
    render() {
        return (
            <div id='navbar'>
                <MediaQuery query={'(max-width: ' + config.BREAKPOINT_MD_TABLET + 'px)'}>
                    <img className='menu' src={menu}/>
                </MediaQuery>
                <img className='streetlife-logo' src={logoStreetLife}/>
            </div>
        );
    }
}

export default Navbar;
