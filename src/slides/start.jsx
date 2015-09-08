import React from 'react';

const Start = React.createClass({
  displayName: 'Start',

  propTypes: {
    sub: React.PropTypes.number
  },

  render() {
    return (
      <div>
        <div style={{height: 150}} />
        <h1>
          Going Declarative
        </h1>
        <h2>
          Our journey to stream-based programming
        </h2>
        <div style={{height: 40}} />
        <h3>
          Johann Hofmann
          <br />
          <a href="https://github.com/johannhof">github.com/johannhof</a>
        </h3>
        <h3>
          ZenMate
          <br />
          <a href="https://zenmate.com">zenmate.com</a>
          <br />
          <a href="https://zenmate.com/jobs">zenmate.com/jobs</a>
        </h3>
      </div>
    );
  }
});

export default Start;
