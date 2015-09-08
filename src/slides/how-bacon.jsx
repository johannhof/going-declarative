import React from 'react';

import Colors from '../colors/colors';

const HowBacon = React.createClass({
  displayName: 'HowBacon',

  propTypes: {
    sub: React.PropTypes.number,
    colors: React.PropTypes.object
  },

  render() {
    return (
      <div>
        <div style={{width: "60%", float: "left"}}>
          <h1>Basics of Bacon</h1>
          {this.props.sub > -1 && this.props.sub < 5 &&
            <div>
              <pre style={{width: "50%", display: "inline-block"}}><code>
                {`
const color1 = Bacon
  .interval(1400)
  .map(randomColors)
  .toProperty();
                `}
              </code></pre>
              <pre style={{width: "50%", display: "inline-block"}}><code>
                {`
const color2 = Bacon
  .interval(1700)
  .map(randomColors)
  .toProperty();
                `}
              </code></pre>
            </div>
          }
          {this.props.sub === 0 &&
            <div>
              <h3>Everything is an Observable (a stream)</h3>
              <h3>Observables are created using constructor functions</h3>
              <h3>Properties are Observables that keep their latest value</h3>
              <h3>Streams can be modified along the way with common functions like map, reduce, filter</h3>
            </div>
          }
          {this.props.sub === 1 &&
            <div>
              <div>
                <pre style={{width: "50%", display: "inline-block"}}><code>
                </code></pre>
                <pre style={{width: "50%", display: "inline-block"}}><code>
                  {`
const combined = Bacon
  .combineAsArray(color1, color2)
  .throttle(400)
  .map(combineColors)
  .toProperty();
                  `}
                </code></pre>
              </div>
              <div>
              <h3>Properties can be combined, so that we can operate on all the latest values</h3>
              </div>
            </div>
          }
          {this.props.sub === 2 &&
            <div>
              <div>
                <pre style={{width: "50%", display: "inline-block"}}><code>
                {`
const merged = Bacon
  .mergeAll(color1, color2)
  .throttle(400)
  .toProperty();
                `}
                </code></pre>
                <pre style={{width: "50%", display: "inline-block"}}><code>
                </code></pre>
              </div>
              <div>
              <h3>Observables can also be merged, getting the latest value of any of them</h3>
              </div>
            </div>
          }
          {this.props.sub === 3 &&
            <div>
              <div>
                <pre style={{width: "50%", display: "inline-block"}}><code>
                {`
const merged = Bacon
  .mergeAll(color1, color2)
  .throttle(400)
  .toProperty();
                `}
                </code></pre>
                <pre style={{width: "50%", display: "inline-block"}}><code>
                  {`
const combined = Bacon
  .combineAsArray(color1, color2)
  .throttle(400)
  .map(combineColors)
  .toProperty();
                  `}
                </code></pre>
              </div>
              <div>
              <h3>Any changes that happen "upstream" are automatically propagated.</h3>
              </div>
            </div>
          }
          {this.props.sub === 4 &&
            <div>
              <div>
                <pre style={{width: "50%", display: "inline-block"}}><code>
                {`
const merged = Bacon
  .mergeAll(color1, color2)
  .throttle(400)
  .toProperty();
                `}
                </code></pre>
                <pre style={{width: "50%", display: "inline-block"}}><code>
                  {`
const combined = Bacon
  .combineAsArray(color1, color2)
  .throttle(400)
  .map(combineColors)
  .toProperty();
                  `}
                </code></pre>
                <pre style={{width: "50%", display: "inline-block"}}><code>
                  {`
const combined2 = Bacon
  .combineAsArray(combined, merged)
  .throttle(400)
  .map(combineColors)
  .toProperty();
                  `}
                </code></pre>
              </div>
            </div>
          }
          {this.props.sub === 5 &&
            <div>
              <h2>Real-Life</h2>
              <div>
              <h3>
                This works even better when you're not only talking about colors,
                but actual application data
              </h3>
              </div>
            </div>
          }
          {this.props.sub === 6 &&
            <div>
              <h2>Rendering with React</h2>
              <div>
              <h3>Collect all application state in a single combined Bacon observable that renders the React app</h3>
              </div>
              <pre><code>
                {`
Bacon.combineTemplate({
  color1, color2,
  combined, merged
}).onValue(function(props){
  React.render(<App {...props} />, container);
});
                `}
              </code></pre>
              <h3>React views are "pure", idempotent functions given the same props.</h3>
            </div>
          }
          {this.props.sub === 7 &&
            <div>
              <h2>Handling user events</h2>
              <div>
              <h3>Views dispatch events based on user input only.</h3>
              </div>
              <pre><code>
                {`
<button onClick={() => events.trigger('colorTrigger')}>
  ...
</button>
                `}
              </code></pre>
              <pre><code>
                {`
const color3 = Bacon
  .interval(3000)
  .merge(Bacon.fromEvent(events, 'colorTrigger'))
  .map(randomColors)
  .toProperty();
                `}
              </code></pre>
              <h3>Should work with any event dispatcher</h3>
              <h3>(We just wrote our own)</h3>
            </div>
          }
          {this.props.sub === 8 &&
            <div>
              <h2>Wot</h2>
              <div>
              <h3>Views dispatch events based on user input only.</h3>
              </div>
            </div>
          }
        </div>
        <div style={{width: "40%", float: "left"}}>
          <Colors sub={this.props.sub} {...this.props.colors} />
        </div>
      </div>
   );
  }
});

export default HowBacon;
