import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault()
        if(this.inputRef.value !== ""){
            this.props.handleQuery(this.inputRef.value)
            this.formRef.reset();
        }
        else{
            alert("Please enter a valid query!!")
        }
    }
    render() {
        return (
            <div>
                <form id="search-query" onSubmit={this.handleSubmit} ref={input => this.formRef = input}>
                    <input placeholder="Type a topic to search" type="text" className="form-control" ref={input => this.inputRef = input} />
                    <button className="btn btn-primary">Search</button>
                </form>
            </div>
        )
    }
}
