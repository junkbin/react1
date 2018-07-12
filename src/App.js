import React, { Component } from 'react';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Hello World ReactJS. @{this.props.title}
      </div>
    );
  }
}

export default App;
