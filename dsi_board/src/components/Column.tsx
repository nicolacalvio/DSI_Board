import React, {Component} from 'react';
import Card from './Card';


interface State {
    cards: { id:number, cardTitle:string }[];
}

class Column extends Component<any, any> {

    state: Readonly<State> = {
        cards: []
    }

    addCard = () => {
        const cards = [...this.state.cards];
        const cardTitle:string = "";
        const length = cards.length;
        cards.push(
            {id:length, cardTitle:cardTitle}
        )
        this.setState({cards})
    }

    render(){
        return (
            <>
                <main>
                    <div className="min-h-md max-w-xs ml-12">
                        <div className="px-4 py-6 sm:px-0">
                            <div className="border-4 border-dashed h-auto">
                                <div className="flex justify-center text-black bg-gray-200 rounded-sm border-gray-200 rounded-lg">{this.props.title}</div>
                                {this.state.cards.map(card=>
                                    ((card == this.state.cards[this.state.cards.length-1]) ? <Card key={card.id} focus={true} cardTitle={card.cardTitle} openDesc={()=>{console.log("ciao")}}/> : <Card key={card.id} cardTitle={card.cardTitle} openDesc={()=>{console.log("ciao")}}/>)
                                )}
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
