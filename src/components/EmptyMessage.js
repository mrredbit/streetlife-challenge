import React from 'react';

class EmptyMessage extends React.Component {
    render() {
        return (
            <div className='empty-state-message'>
                <div className='animated-cover'/>
                <div className='main-post'>
                    <div className='author-info'>
                        <div className='avatar'/>
                        <div className='right-container'>
                            <div className='display-name text-block'></div>
                            <div className='nearest-area text-block'></div>
                        </div>
                    </div>
                    <div className='subject text-block'/>
                    <div className='body'>
                        <div className='text-block-long text-block'/>
                        <div className='text-block-medium text-block'/>
                        <div className='text-block-short text-block'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmptyMessage;
