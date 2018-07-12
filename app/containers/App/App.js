import React from "react";
import template from "./App.jsx";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    componentMode: state.componentMode
  };
}

class ConnectedApp extends React.Component {
  render() {

    return template.call(this);

  }
}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
