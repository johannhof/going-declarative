import React from 'react';

const BaconAndReact = React.createClass({
  displayName: 'BaconAndReact',

  propTypes: {
    sub: React.PropTypes.number
  },

  render() {
    return (
      <div>
        {this.props.sub === 0 &&
          <div>
            <h1>Bacon embraces the good parts of React</h1>
            <img height="600" src="../../img/bacon_structure.svg" />
          </div>
        }
        {this.props.sub === 1 &&
          <div>
            <h1>And keeps logic where it needs to be</h1>
            <img height="600" src="../../img/bacon_structure1.svg" />
          </div>
        }
      </div>
    );
  }
});

export default BaconAndReact;
