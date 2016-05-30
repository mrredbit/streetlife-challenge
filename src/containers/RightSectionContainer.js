import React, { Component } from 'react';
import { connect } from 'react-redux';
import RightSection from '../components/RightSection';
import generalAction from '../actions/generalAction';
import store from '../stores';

class RightSectionContainer extends Component {
    toggleApiErrorDemo() {
        store.dispatch(generalAction.toggleApiErrorDemo());
    }

    render() {
        return <RightSection isApiErrorDemo={this.props.isApiErrorDemo} toggleApiErrorDemo={this.toggleApiErrorDemo}/>
    }
}

function mapStateToProps(state) {
    const props = {
        isApiErrorDemo: state.generalState.isApiErrorDemo
    };
    return props;
}

export default connect(mapStateToProps)(RightSectionContainer);
