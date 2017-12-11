import React from 'react';

export default class Login extends React.Component<any, any> {
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return <div onClick={() => {this.props.history.push('/home')}}>Login page!</div>
    }
}