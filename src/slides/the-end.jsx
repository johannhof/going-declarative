import React from 'react';

const TheEnd = React.createClass({
  displayName: 'TheEnd',

  propTypes: {
    sub: React.PropTypes.number
  },

  render() {
    return (
      <div>
        <h1>Questions!</h1>
        <h4>This talk will be available as a webpage</h4>
      </div>
    );
  }
});

export default TheEnd;
