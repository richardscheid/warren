import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <>
        <input {...this.props} min='1' required autoComplete='off' />
      </>
    );
  }
}
