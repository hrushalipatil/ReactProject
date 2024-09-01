import React ,{Component} from "react";

class Form extends Component {


    constructor() {
        super()
        this.state = {
            username: " ",
            comments: " ",
            topic: "react"
        }

    }


    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    changeTopicName =(event) =>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit =(event)=>{

        alert(`${this.state.topic}${this.state.username}${this.state.comments}`)
        event.preventDefault()
    }


    render() {
        return (
            <form onSubmit= {this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                        value={this.state.comments}
                        onChange={this.handleCommentsChange}
                    />
                </div>
                <div>
                    <label>Topics</label>
                    <select value={this.state.topic} onChange={this.changeTopicName}>
                        <option value = "react">React</option>
                        <option value = "html">Html</option>
                        <option value = "css">Css</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }

}

export default Form;