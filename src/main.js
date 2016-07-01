$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/HomePage');
var Authors = require('./components/authors/AuthorPage');
var About = require('./components/about/AboutPage');
var Header = require('./components/common/Header');

(function(win){
  "use strict";

  var App = React.createClass({
    render: function() {
      var Child;

      switch(this.props.route) {
        case 'about': Child = About; break;
        case 'authors': Child = Authors; break;
        default: Child = Home;
      }

      return (
        <div>
          <Header />
          <Child />
        </div>
      );
    }
  });

  function render() {
    var route = win.location.hash.substr(1);
    ReactDOM.render(<App route={route} />, document.getElementById('app'));
  }

  win.addEventListener('hashchange', render);
  render();

})(window);
