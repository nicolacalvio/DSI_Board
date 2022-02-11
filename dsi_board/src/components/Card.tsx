import React, {Component} from 'react';
import DescriptionCard from './DescriptionCard';

interface State {
    description? : { id:number, title:string, desc:string } | undefined;
}

class Card extends Component<any, any> {
    
    cardtitle: string = ""

    _handleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
            this.props.modifyTitle(this.props.id, e.target.value)
            this.cardtitle = e.target.value
            this.props.removeFocus(this.props.id)
        }
    }

    setNewTitle = (title: string) => {
        if(this.state.description){
            const description = {
                id:this.state.description.id,
                title:this.state.description.title,
                desc:this.state.description.desc,
            }
            this.setState({description})
        }
    }

    state: Readonly<State> = {
        description: undefined
    }

    openDesc = () => {
        let description = this.state.description;
        description = {id:1, title:this.cardtitle, desc:""}
        this.setState({description})
    }

    render(){
        let titolo;
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
        let description
        if(this.state.description){
           description =( <DescriptionCard key={this.state.description?.id} cardtitle={this.state.description?.title} desc={this.state.description?.desc}/> )
        }
        return (
            <>
            
                <div className='w-h-full h-16 mx-4 my-4 bg-zinc-100 rounded-lg' onClick={()=> (!this.props.focus) ? this.openDesc() : ()=> {}}>
                    {titolo}
                </div>
                {description}
            </>
        );
    }

}

export default Card;