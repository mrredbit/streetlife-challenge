require('normalize.css/normalize.css');
require('styles/gridResponsive.scss');
require('styles/general.scss');
require('styles/mainLayout.scss');


import React from 'react';
import MediaQuery from 'react-responsive';
import config from 'config';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import NavbarContainer from '../containers/NavbarContainer';
import LeftSectionContainer from '../containers/LeftSectionContainer';
import RightSectionContainer from '../containers/RightSectionContainer';


class App extends React.Component {
    render() {
        return (
            <div>
                <div id='main-content' className='col sm-12-12 md-fix lg-fix'>
                    {/* Render left section only when the width at least tablet size */}
                    <MediaQuery query={'(min-width: ' + config.BREAKPOINT_MD_TABLET + 'px)'}>
                        <LeftSectionContainer />
                    </MediaQuery>

                    <NewsFeedContainer />

                    {/* Render right section only when the width is at least desktop size */}
                    <MediaQuery query={'(min-width: ' + config.BREAKPOINT_LG_DESKTOP + 'px)'}>
                        <RightSectionContainer />
                    </MediaQuery>
                </div>

                <NavbarContainer/>
            </div>
        );
    }
}

export default App;
