import React from 'react';

const Flux = React.createClass({
  displayName: 'Flux',

  propTypes: {
    sub: React.PropTypes.number
  },

  render() {
    return (
      <div>
        <h1>Isn't this what Flux solves?</h1>
        {this.props.sub > 0 &&
          <img src="../../img/flux_flow.svg" />
        }
        {this.props.sub > 1 &&
          <h2>React Views have to do logic to handle application flow</h2>
        }
        {this.props.sub > 2 &&
          <h2>Managing flow manually without losing track is very hard</h2>
        }
      </div>
    );
  }
});

export default Flux;
