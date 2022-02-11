import React, {Component} from 'react';


class Column extends Component<any, any> {
    state = {}

    render(){
        return (
            <>
                <main>
                    <div className="min-h-md max-w-xs ml-12">
                        <div className="px-4 py-6 sm:px-0">
                            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                                <div className="flex justify-center text-black bg-gray-200 rounded-sm">{this.props.title}</div>

                           </div>
                            <button className="relative flex bottom-6 justify-center text-white" onClick={()=>this.props.addCard(this.props.idCard)}>Add</button>
                        </div>
                    </div>
                </main>
            </>
        );
    }

}

export default Column;
