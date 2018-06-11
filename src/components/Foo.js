import React, { Component } from 'react';

const Foo = ({ children, ...props }) => (
  <div>
    <h2>Hello World!</h2>
    {children}
    <input type="text" {...props} />
  </div>
);

class FooContainer extends Component {
  state = {
    value: 0
  };

  render() {
    return <Foo />;
  }
}

export default FooContainer;
