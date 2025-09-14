import React,{Component} from 'react';
class Message extends Component{
    constructor(){
        super() // making call to base class
        this.state={
            message:'setState() allows us to-'
        }
    }

    changeMessage(){
        this.setState({
            message: "dynamically update the state! "
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>enroll!</button>
            </div>
        
        )
    }
}
export default Message;
