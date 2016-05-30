import React from 'react';
import adStores from '../styles/img/RightSection/ad-stores.png';
import serverError from '../styles/img/RightSection/server-error.svg';

class RightSection extends React.Component {
    render() {
        return (
            <div id='right-section' className='col lg-fix'>
                <div className='container error-demo-toggle-section'>
                    <img src={serverError} className='server-error-img'/>

                    <div className='content'>
                        {this.props.isApiErrorDemo ? 'Now displaying how we handle error during fetching data. Click "View earlier replies" to try.' : 'Here comes the demo when there is error fetching data.'}
                    </div>

                    <button className='full-width'
                            onClick={this.props.toggleApiErrorDemo.bind(this)}> {this.props.isApiErrorDemo ? 'Return to normal state' : 'Check it out!'}</button>
                </div>

                <div className='container advert'>
                    <a href='https://www.facebook.com/hkgoodstore' target="_blank">
                        <img src={adStores} className='image'/>

                        <div className='title'>Find local stores nearby</div>
                        <div className='content'>Explore independent local stores in Hong Kong. Join us to be one of
                            the
                            community!
                        </div>
                    </a>

                    <div className='sponsered'>Sponsored</div>
                </div>
            </div>
        );
    }
}

export default RightSection;
