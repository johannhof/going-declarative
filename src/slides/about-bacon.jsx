import React from 'react';

const Flow = React.createClass({
  render() {
    return (
      <div>
        {this.props.sub < 2 &&
          <div>
            <h1>We need a flow management tool</h1>
            {this.props.sub === 0 &&
              <img src="img/flow_management.svg" />
            }
            {this.props.sub === 1 &&
              <img src="img/flow_management1.svg" />
            }
          </div>
        }
        {this.props.sub > 1 &&
          <div>
            <h1>Bacon.js</h1>
            {this.props.sub > 2 &&
              <ul>
                <li>
                  A toolset for reactive/declarative/stream-based/{"{buzzwords[3]}"} programming
                </li>
                <li>
                  It's really just a supercharged implementation of the observer pattern.
                </li>
                <li>
                  It's a good library to get started with reactive
                </li>
                <li>
                  It has some performance and memory issues
                </li>
                <ul>
                  <li>
                    <a href="https://github.com/baconjs/bacon.js/issues/446">https://github.com/baconjs/bacon.js/issues/446</a>
                  </li>
                  <li>
                    (That didn't bother us so far)
                  </li>
                  <li>
                    Alternatives are Rx.js and Kefir
                  </li>
                </ul>
                <li>
                  It's easily extendable
                </li>
                <ul>
                  <li>
                    <a href="https://github.com/baconjs/bacon.model">github.com/baconjs/bacon.model</a>
                  </li>
                  <li>
                    <a href="https://github.com/johannhof/typed-bacon">github.com/johannhof/typed-bacon</a>
                  </li>
                </ul>
              </ul>
            }
          </div>
        }
      </div>
    );
  }
});

export default Flow;
