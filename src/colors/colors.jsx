import React from 'react';
import {events} from '../emitter';

function getContrastYIQ({r, g, b}){
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 160) ? "black" : "white";
}

const Color = React.createClass({
  displayName: 'Color',

  propTypes: {
    sub: React.PropTypes.number,
    id: React.PropTypes.string,
    fa: React.PropTypes.string,
    color: React.PropTypes.shape({
      r: React.PropTypes.number,
      g: React.PropTypes.number,
      b: React.PropTypes.number
    })
  },

  render() {
    const color = this.props;
    const style = {
      backgroundColor: `rgb(${color.r},${color.g},${color.b})`
    };
    return (
      <div id={this.props.id} className="color" style={style}>
        {this.props.sub > 4 &&
          <i style={{color: getContrastYIQ(color)}} className={"fa fa-" + this.props.fa} />
        }
      </div>
    );
  }
});

const Colors = React.createClass({
  displayName: 'Colors',

  propTypes: {
    sub: React.PropTypes.number,
    color1: React.PropTypes.object,
    color2: React.PropTypes.object,
    color3: React.PropTypes.object,
    combined1: React.PropTypes.object,
    combined2: React.PropTypes.object,
    combined3: React.PropTypes.object,
    merged: React.PropTypes.object
  },

  render() {
    return (
      <div>
        <div className="color-container">
          {this.props.sub > 6 &&
            <div>
              <button onClick={() => events.trigger('colorTrigger')}>
                <Color id="3" fa="cart-plus" sub={this.props.sub} {...this.props.color3} />
              </button>
            </div>
          }
          <Color id="2" fa="star-o" sub={this.props.sub} {...this.props.color2} />
          <Color id="1" fa="wrench" sub={this.props.sub} {...this.props.color1} />
        </div>
        <div className="color-container">
          {this.props.sub > 2 &&
            <Color id="c2" fa="shopping-cart" sub={this.props.sub} {...this.props.combined2} />
          }
          {this.props.sub > 0 && this.props.sub !== 2 &&
            <Color id="c1" fa="user" sub={this.props.sub} {...this.props.combined1} />
          }
          {this.props.sub === 2 &&
            <Color id="c1" fa="user" sub={this.props.sub} {...this.props.merged} />
          }
        </div>
        <div className="color-container">
          {this.props.sub > 2 &&
            <Color id="c3" fa="refresh" sub={this.props.sub} {...this.props.combined3} />
          }
        </div>
      </div>
    );
  }
});

export default Colors;
