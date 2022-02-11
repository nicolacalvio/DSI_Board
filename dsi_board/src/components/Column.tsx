import React, {Component} from 'react';
import Card from './Card';


interface State {
    cards: { id:number, cardTitle:string, focus:boolean }[];
}

class Column extends Component<any, any> {

    state: Readonly<State> = {
        cards: []
    }

    addCard = () => {
        const cards = [...this.state.cards];
        const cardTitle:string = "";
        const length:number = cards.length;
        cards.push(
            {id:length, cardTitle:cardTitle, focus:true}
        )
        this.setState({cards})
    }
    modifyTitle = (idTitle:number, title:string) =>{
        const cards = [...this.state.cards];
        cards[idTitle].cardTitle = title
        this.setState({cards})
    }
    removeFocus =(key:number) =>{
        const cards = [...this.state.cards];
        cards[key].focus = false
        this.setState({cards})
    }

    render(){
        return (
            <>
                <main>
                    <div className="min-h-md max-w-xs ml-12">
                        <div className=" py-6 sm:px-0">
                            <div className="border-4 border-dashed h-auto">
                                <div className="flex justify-center text-black bg-gray-200 rounded-sm border-gray-200 rounded-lg">{this.props.title}</div>
                                {this.state.cards.map(card=>
                                    <Card key={card.id} id={card.id} focus={card.focus} removeFocus={this.removeFocus} cardTitle={card.cardTitle} modifyTitle={this.modifyTitle}/>)
                                }
                                <div className="flex justify-center">
                                    <button className="relative bottom-0 text-white" onClick={()=>this.addCard()}>Add</button>
                                </div>
                           </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }

}

export default Column;
