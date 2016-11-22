require('./category.scss');
var React = require('react');

class Item extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="category mx-1">
                <div className="category-container row p-1">
                    <div className="col-md-1">
                        <div className="edit" />
                    </div>
                    <div className="col-md-8">
                        <span>{this.props.title}</span>
                    </div>
                    <div className="col-md-1">
                        <div className="delete" />
                    </div>
                    <div className="col-md-1">
                        <div className="add" />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Item;