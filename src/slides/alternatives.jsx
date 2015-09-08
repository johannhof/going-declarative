import React from 'react';

const Alternatives = React.createClass({
  displayName: 'Alternatives',

  propTypes: {
    sub: React.PropTypes.number
  },

  render() {
    return (
      <div>
        <h1>Alternatives</h1>

        <h3>"But I like Flux"</h3>
        <h2>Redux</h2>
        <h3><a href="https://github.com/rackt/redux">github.com/rackt/redux</a></h3>

        <br />
        <br />
        <br />

        <h3>"If I'm doing reactive JS I might as well write Haskell"</h3>
        <h2>Elm</h2>
        <h3><a href="http://elm-lang.org">elm-lang.org</a></h3>

      </div>
    );
  }
});

export default Alternatives;
