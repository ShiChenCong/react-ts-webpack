import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/Home';

@connect((states) => states
    , dispath => ({ actions: bindActionCreators(actions, dispath) }))

export default class Home extends React.Component<any, any> {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        return <div onClick={() => { this.props.history.push('/') }}>Home page !</div>
    }
}