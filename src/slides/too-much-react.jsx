import React from 'react';

const TooMuchReact = React.createClass({
  displayName: 'TooMuchReact',

  propTypes: {
    sub: React.PropTypes.number
  },

  render() {
    return (
      <div>
        <h1>Flux requires manual flow management</h1>

        <h2>Let's concentrate on what React is good at</h2>
        {this.props.sub === 1 &&
          <div>
            <h3>Functional composition</h3>
            <img height="400" src="../../img/react_structure.svg" />
          </div>
        }
        {this.props.sub === 2 &&
          <div>
            <h3>Functional composition !== manual observation</h3>
            <img height="400" src="../../img/flux_structure.svg" />
          </div>
        }

      </div>
    );
  }
});

export default TooMuchReact;
