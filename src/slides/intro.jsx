import React from 'react';

const Intro = React.createClass({
  displayName: 'Intro',

  propTypes: {
    sub: React.PropTypes.number
  },

  render() {
    return (
      <div>
        {this.props.sub === 0 &&
          <div>
            <h1>
              The good old days
            </h1>
            <img src="img/paulirish.png" />
          </div>
        }
        {this.props.sub > 0 && this.props.sub < 6 &&
          <div>
            <h1>
              What's your mental model of application architecture?
            </h1>
            {this.props.sub > 1 &&
              <img height={300} src="img/MVC-Process.svg" />
            }
            {this.props.sub > 2 &&
              <img height={300} src="img/mvp.png" />
            }
            {this.props.sub > 4 &&
              <img width={300} src="img/kitten.jpg" />
            }
            {this.props.sub > 3 &&
              <img width={750} src="img/mvvm.png" />
            }
          </div>
        }
        {this.props.sub > 5 &&
            <h1>
              We never had a "mental model"
            </h1>
        }
        {this.props.sub > 6 &&
            <h2>
              But through trial and error we got a better understanding
            </h2>
        }
        {this.props.sub > 7 &&
            <h2>
              Enabling us to take a step back and think about
              principles of our architecture (and where things are going wrong)
            </h2>
        }
        {this.props.sub > 8 &&
            <ul>
              <li>
                <b>MVC is not how we think about flow in web apps</b>
              </li>
              <li>
                We didn't know how what would happen if we changed certain aspects of our MVC application
              </li>
              <li>
                If we can't reason about the flow of logic and data, we inevitably make mistakes
              </li>
              <li>
                You start to hack around every part of the flow you don't fully understand.
              </li>
            </ul>
        }
        {this.props.sub > 9 &&
            <h2>
              It's all about flow
            </h2>
        }
      </div>
    );
  }
});

export default Intro;
