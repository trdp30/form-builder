import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export class SelectField extends React.Component {
  render() {
    return (
        <div>
          <label></label>
          <Dropdown fluid search selection />
        </div>
      )
  }
};