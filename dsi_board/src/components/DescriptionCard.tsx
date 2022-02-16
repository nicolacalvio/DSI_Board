import React, {Component} from 'react';
import { threadId } from 'worker_threads';
import x from '../images/677910.png'
import Comments from "./Comments";

interface State {
    titolo:JSX.Element
    desc: JSX.Element
}

class DescriptionCard extends Component<any, any> {
    title = this.props.cardTitle;
    desc = this.props.desc;
    state = {
        titolo: <div className='mx-2 my-4 h-12 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900' onClick={() => this.changeTitle()}>{this.title}</div>,
        desc: <div className='mx-2 my-4 h-12 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900' onClick={() => this.changeDesc()}>{this.desc}</div>
    }
    changeTitle = () =>{
        const titolo = (
            <input className='mx-2 my-4 h-12 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900' type="text" placeholder={this.title} onKeyDown={this._handleKeyDown}/>
        )
        this.setState({titolo})
    }
    changeTitleToDiv = (title:string) =>{
        const titolo = (
            <div className='mx-2 my-4 h-12 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900' onClick={() => this.changeTitle()}>{title}</div>
        )
        this.setState({titolo})
    }
    changeDesc = () =>{
        const desc = (
            <input className='mx-2 my-4 h-12 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900' type="text" placeholder={this.desc} onKeyDown={this._handleKeyDown2}/>
        )
        this.setState({desc})
    }
    changeDescToDiv = (descrizione:string) =>{
        const desc = (
            <div className='mx-2 my-4 h-12 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900' onClick={() => this.changeDesc()}>{descrizione}</div>
        )
        this.setState({desc})
    }
    _handleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
            this.props.setNewTitle(e.target.value);
            this.title = e.target.value
            this.changeTitleToDiv(e.target.value);

        }
    }
    _handleKeyDown2 = (e:any) => {
        if (e.key === 'Enter') {
            this.props.setNewDesc(e.target.value);
            this.desc = e.target.value
            this.changeDescToDiv(e.target.value);

        }
    }

    close = () => {
        if(document.getElementById("popup") != null){
            (document.getElementById("popup") as HTMLFormElement).style.display="none";
        }
        this.props.closeDesc();
    }

    render(){
        return (
            <>
                <div className="fixed z-10 inset-0 overflow-y-auto" id="popup" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true">
                        </div>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <img src={x} className='w-6 h-6 absolute top-4 right-4' onClick={()=>this.close()}/>
                                <p>Titolo</p>
                                <div className="sm:flex sm:items-start">
                                    {this.state.titolo}
                                </div>
                                <p>Descrizione</p>
                                <div className="sm:flex sm:items-start">
                                    {this.state.desc}
                                </div>
                            </div>
                            <Comments/>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default DescriptionCard;