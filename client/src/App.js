import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const DashBoard = () => <h2>DashBoard</h2>;
const Landing = () => <h2>Landing</h2>;
const SurveysNew = () => <h2>Surveys New</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={DashBoard} />
            <Route path="/surveys/new" component={SurveysNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
