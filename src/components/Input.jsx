import React from 'react';

export default class Input extends React.Component {
  render() {
    const { type, placeholder, name, onChange, value } = this.props;
    return (
      <input
        type={ type }
        placeholder={ placeholder }
        name={ name }
        value={ value }
        onChange={ onChange }
      />
    );
  }
}
