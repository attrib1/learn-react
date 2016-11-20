var React = require('react');
var ListItems = require('./ListItems.jsx');

var List = React.createClass({
    render: function() {
        var createItem = function (text,index) {

            return <ListItems key={index + text} text={text} />;
        };

        return (<ul>{this.props.items.map(createItem)}</ul>);
    }

});

module.exports = List;
