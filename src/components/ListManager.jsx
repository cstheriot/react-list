var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
     getInitialState: function() {
         return {items: [], newItemText:''};
     },
     onChange: function(element) {
        //Update the button from getting clicks since we are using form onSubmit
        this.setState({newItemText: element.target.value}); 
     },
     handleSubmit: function(element) {
         element.preventDefault();

         //grab the current list of items
         var currentItems = this.state.items;

         //add the new item to the list
         currentItems.push(this.state.newItemText);

         //update the main item list with the new list and clear the newItemText
         this.setState({items: currentItems, newItemText:''});
     },
     render: function() {
         
         var divStyle = {
            marginTop: 10  
         };
         
         return (
             <div style={divStyle} className="col-sm-4">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="row panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-sm-9">
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                        <List items={this.state.items} />
                    </div>
                </div>
             </div>
         );
     }
});

module.exports = ListManager;
