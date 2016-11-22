var React = require('react'),
    ReactDOM = require('react-dom'),
    Header = require('./components/header/header'),
    Filters = require('./components/filters/filters'),
    Category = require('./components/category/category'),
    Item = require('./components/item/item');

require('./index.scss');

var rootElement = <div className='main-container'>
    <Header />
    <Filters />
    <div className="row mt-1">
        <div className="category-wrapper col-md-4">
            <Category title="Category 1" />
            <Category title="Category 2" />
            <Category title="Category 3" />
        </div>
        <div className="item-wrapper col-md-8">
            <Item title="To-Do Item1"/>
            <Item title="To-Do Item2"/>
            <Item title="To-Do Item3"/>
            <Item title="To-Do Item4"/>
            <Item title="To-Do Item5"/>
            <Item title="To-Do Item6"/>
        </div>
    </div>
</div>;

ReactDOM.render(rootElement, document.getElementById("container"));
