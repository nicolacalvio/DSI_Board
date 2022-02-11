import React, {Component} from 'react';
import Header from "./components/Header";
import Column from "./components/Column";
import './App.css';


class App extends Component<any, any> {
state = {}

  render(){
      return (
          <>
              <Header />
              <div className="grid grid-cols-4 gap-0">
                <Column title="TO DO"/>
                  <Column title="Doing"/>
                  <Column title="BackLog"/>
                  <Column title="DONE"/>
              </div>
          </>
      );
  }

}

export default App;
