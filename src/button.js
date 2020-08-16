import React, { Component } from 'react';

class Button extends Component {
  render () {
    return (
      <button
        onClick={ this.props.onClick }
        style={{
          background: '#FF7E79',
          padding: '5px 15px',
          border: 'none'
        }}
      >{ this.props.text }</button>
    );
  }
}

export default Button;