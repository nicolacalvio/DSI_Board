import React, {Component} from 'react';
import x from '../images/677910.png'


class DescriptionCard extends Component<any, any> {
    state = {}

    _handleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
            this.props.setNewTitle(e.target.value)
        }
    }

    render(){
        let titolo;

        const changeTitle = () =>{
            titolo = (
                <input className='mx-2 my-4 h-12 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900' type="text" placeholder="Insert the name of the card" onKeyDown={this._handleKeyDown}/>
            );
            document.querySelectorAll("input").forEach((el)=>{
                el.focus();
            })
        }

        titolo = (
            <div className='mx-2 my-4 h-12 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-lg text-neutral-900' onClick={() => changeTitle()}>{this.props.cardTitle}</div>
        );
        return (
            <>
                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true">
                        </div>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <img src={x} className='w-6 h-6 absolute top-4 right-4' onClick={()=>this.props.close}/>
                                <div className="sm:flex sm:items-start">
                                    {titolo}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default DescriptionCard;