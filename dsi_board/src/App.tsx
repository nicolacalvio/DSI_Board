import React, {Component} from 'react';
import Header from "./components/Header";
import Column from "./components/Column";
import './App.css';

interface StateCol {
  column: { id:number, columnTitle:string, focus:boolean}[];
}

class App extends Component<any, any> {
  
  state: Readonly<StateCol> = {
    column: []
  }

  _handleKeyDown = (e:any, id:number) => {
    if (e.key === 'Enter') {
        this.props.modifyTitle(id, e.target.value)
        this.props.removeFocus(id)
    }
  }

  addColumn = () => {
    const column = [...this.state.column];
    const columnTitle:string = "";
    const length:number = column.length;
    column.push(
        {id:length, columnTitle:columnTitle, focus:true}
    )
    this.setState({column})
  }

  modifyTitle = (id:number, title:string) =>{
    const column = [...this.state.column];
    column[id].columnTitle = title
    this.setState({column})
}

  removeFocus =(key:number) =>{
    const column = [...this.state.column];
    column[key].focus = false
    this.setState({column})
  }

  render(){
    let titolo=[];
    this.state.column.forEach((elem, index)=>{
      if (this.props.focus) {
        titolo[index] = (
            <input className='placeholder:italic mb-1 my-4 h-12 w-full p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900' type="text" placeholder="Insert the name of the card" onKeyDown={this._handleKeyDown(event, index)}/>
        );
        document.querySelectorAll("input").forEach((el)=>{
            el.focus();
        })
    } else {
        titolo[index] = (
            <div className='mx-2 my-4 h-20 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900'>{elem.columnTitle}</div>
        );
    }
    })  
    
      return (
          <>
              <Header />
              <div className='ml-12 mt-6'>
                <button className='bg-white h-8 w-32 text-black rounded-md hover:bg-cyan-100' onClick={()=>this.addColumn()}>Add column</button>
              </div>
              <div className="grid grid-cols-4 gap-0">
                {this.state.column.map(col=>
                                    <Column key={col.id} id={col.id} focus={col.focus} removeFocus={this.removeFocus} title={col.columnTitle} modifyTitle={this.modifyTitle} />)
                }
              </div>
          </>
      );
  }

}

export default App;
