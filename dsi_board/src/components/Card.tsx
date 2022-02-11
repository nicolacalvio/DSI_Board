import React, {Component} from 'react';


class Card extends Component<any, any> {
    state = {}

    render(){
        return (
            <>
                <div className='w-h-full h-2 bg-cyan-200' onClick={()=> this.props.openDesc}>
                    <div className='title'>{this.props.cardtitle}</div>
                </div>
            </>
        );
    }

}

export default Card;