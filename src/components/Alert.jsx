import React, { Component } from 'react'

export default class Alert extends Component {
    constructor(props) {
        super(props);

        this.captitalize = this.captitalize.bind(this);
    }
    captitalize(word){
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

render(){
    
    return (
        <>
            <div style={{ height: '50px' }}>
                {this.props.alert && <div className={`alert alert-${this.props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{this.captitalize(this.props.alert.type)}</strong>: {this.props.alert.msg}
                </div>}
            </div>
        </>
    )
}
}

