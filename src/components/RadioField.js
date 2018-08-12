import React from 'react';
import { Form } from 'semantic-ui-react';

export class RadioField extends React.Component {
  render() {
    return (
        <Form.Field>
          <div className="ui radio checkbox">
            <input type="radio" name="Radio"/>
            <label> Radio</label>
          </div>
        </Form.Field>
      )
  }
};