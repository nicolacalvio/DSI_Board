import React, {Component} from 'react';
import Header from "./components/Header";
import Column from "./components/Column";
import './App.css';
import Card from './components/Card';


class App extends Component<any, any> {
state = {}

  render(){
      return (
          <>
              <Header />
              <div className="grid grid-cols-4 gap-4">
                <Column title="TO DO"/>
              </div>
          </>
      );
  }

}

export default App;
