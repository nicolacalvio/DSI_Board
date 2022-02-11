import React, {Component} from 'react';
import Card from './Card';


interface State {
    cards: { id:number, description:string }[];
}

class Column extends Component<any, any> {

    state: Readonly<State> = {
        cards: []
    }

    addCard = (idCard:any) => {
        const cards = [...this.state.cards];
        cards.push(
            {id:idCard,description:"ciao"}
        )
        this.setState({cards})
    }
    contatore =0;

    render(){
        return (
            <>
                <main>
                    <div className="min-h-md max-w-xs ml-12">
                        <div className="px-4 py-6 sm:px-0">
                            <div className="border-4 border-dashed  h-32">
                                <div className="flex justify-center text-black bg-gray-200 rounded-sm border-gray-200 rounded-lg">{this.props.title}</div>
                                {this.state.cards.map(card=>(
                                    <Card key={card.id} cardTitle="Ciao" openDesc={()=>{console.log("ciao")}}/>
                                ))}
                           </div>


                            <div className="flex justify-center">
                                <button className="relative bottom-6 text-white" onClick={()=>this.addCard(this.contatore++)}>Add</button>
                            </div>

                        </div>
                    </div>
                </main>
            </>
        );
    }

}

export default Column;
