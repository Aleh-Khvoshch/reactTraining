import React from 'react';

class Filters extends React.Component {

    render() {
        return (
            <div className="filters">
                <div className="filters-container row">
                    <div className="col-md-3">
                        <div className="input-group px-1">
                            <input type="text" className="form-control" placeholder="Enter category title" />
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="button">Add</button>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 offset-md-6">
                        <div className="input-group px-1">
                            <input type="text" className="form-control" placeholder="Text input with button" />
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="button">Add</button>
                            </span>
                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}

module.exports = Filters;