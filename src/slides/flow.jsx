import React from 'react';

const Flow = React.createClass({
  displayName: 'Flow',

  propTypes: {
    sub: React.PropTypes.number
  },
  render() {
    return (
      <div>
        <h1>This is how (our) apps "flow"</h1>
        <img src="img/flow.svg" />
        {this.props.sub > 0 &&
          <img src="img/flow1.svg" />
        }
        {this.props.sub > 1 &&
        <img src="img/flow2.svg" />
        }
        {this.props.sub === 3 &&
          <img src="img/flow3.svg" />
        }
        {this.props.sub > 3 &&
          <img src="img/flow4.svg" />
        }
      </div>
    );
  }
});

export default Flow;
