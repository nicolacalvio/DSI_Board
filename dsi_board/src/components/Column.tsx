import React, {Component} from 'react';
import Card from './Card';




class Column extends Component<any, any> {
    state = {
        cards: []
    }
    addCard = (idCard:any) => {
        const cards:any = [...this.state.cards];
        cards.push(
            {id:idCard,descrizione:"ciao"}
        )
        this.setState({cards})
    }

    render(){
        return (
            <>
                <main>
                    <div className="min-h-md max-w-xs ml-12">
                        <div className="px-4 py-6 sm:px-0">
                            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                                <div className="flex justify-center text-black bg-gray-200 rounded-sm">{this.props.title}</div>
                           </div>
                            <div className="flex justify-center">
                                {this.state.cards.map(card=>(
                                    <Card key={1} cardTitle="Ciao" openDesc="auuu"/>
                                ))}
                                <button className="relative bottom-6 text-white" onClick={()=>this.addCard}>Add</button>
                            </div>

                        </div>
                    </div>
                </main>
            </>
        );
    }

}

export default Column;
