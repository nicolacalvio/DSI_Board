import React, {Component} from 'react';
import Header from "./components/Header";
import Column from "./components/Column";
import './App.css';


class App extends Component<any, any> {
state = {}

addCard:any = (idCard:number) =>{

}

  render(){
      return (
          <>
              <Header />
              <div className="grid grid-cols-4 gap-4">
                <Column title="TO DO" addCard={this.addCard(1)}/>
              </div>
          </>
      );
  }

}

export default App;
