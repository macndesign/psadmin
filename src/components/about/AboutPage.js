"use strict";

var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1>About</h1>
        <ul>
          <li>React</li>
          <li>ReactRouter</li>
          <li>Flux</li>
          <li>Node</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
