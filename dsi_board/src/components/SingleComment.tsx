import React, {Component} from 'react';

interface State {
    testo:string
}

class SingleComment extends Component<any, any> {


    state: Readonly<State> = {
        testo: this.props.text
    }



    render(){
        let comment:JSX.Element;
        if(this.props.user !== "me"){
            comment = (<><li className="flex justify-start">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span className="block">{this.state.testo}</span>
                </div>
            </li></>)
        }else{
            comment=(
                <>
                    <li className="flex justify-end">
                        <div
                            className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                            <span className="block">{this.state.testo}</span>
                        </div>
                    </li>
                </>
            )
        }
        return (

            <>
                {comment}
            </>
        );
    }

}

export default SingleComment;