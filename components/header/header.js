import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div className="row header">
                <div className="header-container">
                    <h1 className="title m-y-0 col-xs-6">To-Do List</h1>
                    <div className="col-xs-6 text-xs-right p-1">
                        <input type="checkbox" id="show_active" /><label htmlFor="show_active">Show active</label>
                        <input className="search ml-1" type="text" placeholder="Search" />
                    </div>
                </div>
                <progress className="progress col-xs-12" value="50" max="100" >50%</progress>
            </div>
        );
    }
}

module.exports = Header;