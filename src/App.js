import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { routes, CustomRoute } from "./components/Routes";
import './styles/styles.scss';

class App extends React.Component {
  render() {
    return (
     <ApplicationRouter /> 
    )
  }
}

const ApplicationRouter = () => {
  return (
    <Router>
      <Switch>
        {
          routes.map(item => <CustomRoute {...item} />)
        }
      </Switch >
    </Router>
  )
}



export default App;
