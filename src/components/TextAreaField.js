import React from 'react';
import { Form } from 'semantic-ui-react';

export class TextAreaField extends React.Component {
  render() {
    return (
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
      )
  }
};