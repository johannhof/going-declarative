import React from 'react';

const FromTheTrenches = React.createClass({
  displayName: 'FromTheTrenches',

  propTypes: {
    sub: React.PropTypes.number
  },

  render() {
    return (
      <div>
        {this.props.sub === 0 &&
          <div>
            <h1>Bacon and React in production</h1>
            <h2>Some lessons learned</h2>
          </div>
        }
        {this.props.sub === 1 &&
          <div>
            <h1>Bacon and React in production</h1>
            <h2>It's extremly easy to scale, so start simple</h2>

            <h3>If you want, just start off with a <b>single file</b></h3>
            <h3>The modular nature of both React and Bacon will allow for easy reorganization</h3>
            <img height={400} src="../../img/bacon_structure.svg" />
          </div>
        }
        {this.props.sub === 2 &&
          <div>
            <h1>Bacon and React in production</h1>
            <h2>Not all streams are born equal</h2>
            <h3>One-way-dataflow doesn't mean data has to enter the flow at the same point</h3>
            <h3>You will have some VIP properties that half the app will depend on (user, settings)</h3>
            <h3>A group of streams can only manage view matters (routing, language)</h3>
          </div>
        }
        {this.props.sub === 3 &&
          <div>
            <h1>Bacon and React in production</h1>
            <h2>Testing</h2>
            <h3>We run Jest to test both streams and React views</h3>
            <h3>Jest uses its own module loader, which means you can restart streams</h3>
          </div>
        }
        {this.props.sub === 4 &&
          <div>
            <h1>Bacon and React in production</h1>
            <h2>Our apps became extremly stable</h2>
            <h3>...as long as we played by the rules</h3>
            <h3>Some features you should be careful with:</h3>
            <ul>
              <li>doAction</li>
              <li>Bacon.Bus</li>
              <li>setState</li>
            </ul>
          </div>
        }
        {this.props.sub === 5 &&
          <div>
            <h1>Bacon and React in production</h1>
            <h2>Bacon (and friends) are good for a rewrite, but harder to gradually integrate</h2>
            <h3>You'll have a hard time getting imperative and declarative to be friends</h3>
            <pre><code>
{`
  const user = Bacon
    .fromPromise(storage.load('user'))
    .toProperty();

  class Features {
    ...
    getFeatureSet() {
      if(user.isPremium()){ // doesn't work :(
        return this.premiumFeatures;
      }
      return this.simpleFeatures;
    }
  }
`}
            </code></pre>
          </div>
        }

      </div>
    );
  }
});

export default FromTheTrenches;
