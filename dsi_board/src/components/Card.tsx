import React, {Component} from 'react';


class Card extends Component<any, any> {
    state = {}
    render(){
        let titolo;
        if (this.props.focus) {
            titolo = (
                <input className='mx-2 my-4 h-12 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900' type="text">Insert the name of the card</input>
            );
            document.querySelectorAll("input").forEach((el)=>{
                el.focus();
            })
        } else {
            titolo = (
                <div className='mx-2 my-4 h-12 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900'>this.props.cardTitle</div>
            );
        }
        return (
            <>
            
                <div className='w-h-full h-16 mx-4 my-4 bg-zinc-100 rounded-lg' onClick={()=> this.props.openDesc}>
                    {titolo}
                </div>

            </>
        );
    }

}

export default Card;