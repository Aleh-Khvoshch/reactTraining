require('./item.scss');
import React from 'react';

class Item extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="item mx-1">
                <div className="item-container row p-1">
                    <div className="col-md-1">
                        <input type="checkbox" />
                    </div>
                    <div className="col-md-10">
                        <span>{this.props.title}</span>
                    </div>
                    <div className="col-md-1">
                        <div className="edit"/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Item;