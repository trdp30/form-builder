import React from 'react';

export class TimeField extends React.Component {
  render() {
    return (
      <div>
        <label>Time</label>
        <input type="time" className="fluid"/>
      </div>
    )
  }
};