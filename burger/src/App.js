import React, { Component } from 'react';
import Layout from "./containers/layout/layout"
import BurgerBuilder from "./containers/burgerbuilder/burgerbuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout >     
          <BurgerBuilder/>
        </Layout>        
      </div>
    );
  }
}

export default App;
