import React, {Component} from 'react';
import SingleComment from "./SingleComment";

interface State {
    comments:{text:string, user:string}[]
}

class Comments extends Component<any, any> {


    state: Readonly<State> = {
        comments : [
            {text: "Ciao", user:"Filippo"},
            {text: "Hey", user:"me"}
        ], //sarà preso dal BE
    }
    OnInit(){
        //dovrà prendere i commenti dal BE per popolare la task aggiungendoli allo stato
        //e aggiornando lo stato
    }

    addComment(){
        const comments = [...this.state.comments];
        let input = (document.getElementById("message") as HTMLInputElement);
        let text : string = input.value;
        input.value = "";
        if(text!==""){
            comments.push({text:text, user:"me"});
            this.setState({comments});
        }

    }
    _handleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
            this.addComment();

        }
    }



    render(){

        return (
            <>
                <div className="max-w-2xl border rounded">
                    <div>
                        <div className="w-full">

                            <div className="relative w-full p-6 overflow-y-auto h-[30rem]">

                                <ul className="space-y-2">
                                    {this.state.comments.map(comment=>
                                        <SingleComment user={comment.user} text={comment.text}/>)
                                    }
                                </ul>

                            </div>


                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500"
                             fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500"
                             fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
                        </svg>
                    </button>
                    <input type="text" id="message" placeholder="Message"
                           className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                           name="message" required onKeyDown={this._handleKeyDown}/>

                    <button onClick={() =>this.addComment()}>
                        <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                        </svg>
                    </button>
                </div>
            </>
        );
    }

}

export default Comments;