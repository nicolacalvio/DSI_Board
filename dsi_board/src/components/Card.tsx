import React, {Component} from 'react';


class Card extends Component<any, any> {
    state = {}

    render(){
        return (
            <>
                <div className='card' onClick={()=> this.props.openDesc}>
                    <div className='title'>{this.props.cardtitle}</div>
                </div>
            </>
        );
    }

}

export default Card;