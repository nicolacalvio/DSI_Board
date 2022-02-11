import React, {Component} from 'react';
import x from '../images/677910.png'

interface State {
    titolo:JSX.Element
}

class DescriptionCard extends Component<any, any> {
    state = {
        titolo: <div className='mx-2 my-4 h-12 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900' onClick={() => this.changeTitle()}>{this.props.cardTitle}</div>
    }
    changeTitle = () =>{
        const titolo = (
            <input className='mx-2 my-4 h-12 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900' type="text" placeholder="Insert the name of the card" onKeyDown={this._handleKeyDown}/>
        )
        this.setState({titolo})
    }
    _handleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
            this.props.setNewTitle(e.target.value)
        }
    }

    render(){
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
                                    {this.state.titolo}
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