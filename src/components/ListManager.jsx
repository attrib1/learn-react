const React = require('react');
// const ReactDom  = require('react-dom');
const List = require('./List.jsx');

var ListManager = React.createClass({
      getInitialState: function() {
        return {items: [] , newItemsText:''};
      },
      handleSubmit: function (e) {
        e.preventDefault();
        console.log(this.state.items);
        var currentItem = this.state.items;
        currentItem.push(this.state.newItemsText);
        this.setState({items: currentItem ,newItemsText:''});
      },
      onChange:function(e) {
        //console.log(e.target.value);
        this.setState({newItemsText:e.target.value});
      },
          render: function() {
            return (
              <div>
                  <h3>{this.props.title}</h3>
                  <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.newItemsText} />
                      <button>Add</button>
                  </form>
                  <List items={this.state.items} />
              </div>
            );
          }

});
module.exports = ListManager;
