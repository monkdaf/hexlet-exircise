// index.js
import ReactDOM from 'react-dom';
import React from 'react';
import Box from './Box';

ReactDOM.render(
  <Box />,
  document.getElementById('container')
);
//box.js
import React from 'react';
import Item from './Item';

const Box = React.createClass({
  getInitialState: function() {
    return {value: "", items: []};
  },

  // BEGIN (write your solution here)
  handleOnChange: function(e) {
    e.preventDefault();
    this.setState({value: e.target.value})
  },


  handleOnClick: function(e){
    e.preventDefault();
    let value = this.state.value;
    let items = this.state.items.slice();
    const item = {value:value, id: Math.random()}
    items.push(item)
    this.setState({value: "", items: items})
  },

  handleOnRemove: function(id){
    const oldItems = this.state.items;
    const items = oldItems.filter(function(item){return item.id !== id});
    this.setState({items: items});
  },


  // END

  render: function() {
    var value = this.state.value;
    var items = this.state.items;

    return (
      <div>
        <form action="">
          <input className="text" type="text" value={value} onChange={this.handleOnChange} />
          <input className="submit" type="submit" onClick={this.handleOnClick} />
        </form>

        <div className="items">
          {/* BEGIN (write your solution here) */}
          {items.map(function(item) {
            return <Item item={item} onRemove={this.handleOnRemove} />;
          }, this)}
          {/* END */}
        </div>
      </div>
    );
  }
});

module.exports = Box;
//item.js
import React from 'react';

const Item = React.createClass({
  handleOnRemove() {
    // BEGIN (write your solution here)
    this.props.onRemove(this.props.item.id);
    // END
    // END
  },

  render() {
    return (<div>
      {this.props.item.value}
      <input type="button" className="remove" value="remove" onClick={this.handleOnRemove} />
    </div>);
  }
})

module.exports = Item;

