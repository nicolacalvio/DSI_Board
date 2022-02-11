import React, {Component} from 'react';


class Card extends Component<any, any> {
    state = {}

    render(){
        return (
            <>
                <div className='w-h-full h-2 bg-cyan-200' onClick={()=> this.props.openDesc}>
                    <div className='top-0.5 left-0.5 right-0.5 overflow-hidden text-ellipsis text-xs text-neutral-900'>{this.props.cardtitle}</div>
                </div>
            </>
        );
    }

}

export default Card;