import React, {Component} from 'react';
import DescriptionCard from './DescriptionCard';

interface State {
    description? : { id:number, title:string, desc:string } | undefined;
    title:string;
    desc:string;
}

class Card extends Component<any, any> {
    //update title and description of cards
    updateTitle =(title:string)=>{
        this.setState({title});
    }
    updateDesc =(desc:string)=>{
        this.setState({desc});
    }

    _handleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
            this.props.modifyTitle(this.props.id, e.target.value)
            this.updateTitle(e.target.value)
            this.props.removeFocus(this.props.id)
        }
    }

    setNewTitle = (title: string) => {
        if(this.state.description){
            this.updateTitle(title);
            const description = {
                id:this.state.description.id,
                title:title,
                desc:this.state.description.desc,
            }
            this.setState({description})
        }
    }

    setNewDesc = (descri: string) => {
        if(this.state.description){
            this.updateDesc(descri);
            const description = {
                id:this.state.description.id,
                title:this.state.description.title,
                desc:descri
            }
            this.setState({description})
        }
    }

    state: Readonly<State> = {
        description: undefined,
        title: this.props.cardTitle,
        desc: ""
    }

    openDesc = () => {
        let description = this.state.description;
        console.log(this.state.description?.desc)
        description = {id:1, title:this.state.title, desc:this.state.desc}
        this.setState({description})
    }
    closeDesc = () =>{
        const description = undefined;
        this.setState({description});
    }

    render(){
        let titolo;
        if (this.props.focus) {
            titolo = (
                <input className='placeholder:italic mb-1 my-4 h-12 w-full p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900' type="text" placeholder="Insert the name of the card" onKeyDown={this._handleKeyDown}/>
            );
            document.querySelectorAll("input").forEach((el)=>{
                el.focus();
            })
        } else {
            titolo = (
                <div className='mx-2 my-4 h-20 p-4 align-middle flex-auto overflow-hidden text-ellipsis text-base text-neutral-900'>{this.state.title}</div>
            );
        }
        let description
        if(this.state.description){
           description =( <DescriptionCard key={this.state.description?.id} cardTitle={this.state.description?.title} desc={this.state.description?.desc} setNewTitle={this.setNewTitle} setNewDesc={this.setNewDesc} closeDesc={this.closeDesc}/> )
        }
        return (
            <>
            
                <div className='w-h-full h-20 mx-4 my-4 bg-zinc-100 rounded-lg' onClick={()=> (!this.props.focus) ? this.openDesc() : ()=> {}}>
                    {titolo}
                </div>
                {description}
            </>
        );
    }

}

export default Card;