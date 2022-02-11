import React, {Component} from 'react';
import DescriptionCard from './DescriptionCard';


class Card extends Component<any, any> {
    state = {}
    _handleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
            this.props.modifyTitle(this.props.id, e.target.value)
            this.props.removeFocus(this.props.id)
        }
    }


    render(){
        let titolo;
        let openDesc = () => {
            console.log("ciao bello")
            return <DescriptionCard key={1}/>
        }
        if (this.props.focus) {
            titolo = (
                <input className='mx-2 my-4 h-12 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900' type="text" placeholder="Insert the name of the card" onKeyDown={this._handleKeyDown}/>
            );
            document.querySelectorAll("input").forEach((el)=>{
                el.focus();
            })
        } else {
            titolo = (
                <div className='mx-2 my-4 h-12 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900'>{this.props.cardTitle}</div>
            );
        }
        return (
            <>
            
                <div className='w-h-full h-16 mx-4 my-4 bg-zinc-100 rounded-lg' onClick={()=> openDesc()}>
                    {titolo}
                </div>

            </>
        );
    }

}

export default Card;