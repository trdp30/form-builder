import React from 'react';

export class FileField extends React.Component {
  render() {
    return (
        <div>
          <label>File</label>
          <input type="file" className="fluid"/>
        </div>
      )
  }
};