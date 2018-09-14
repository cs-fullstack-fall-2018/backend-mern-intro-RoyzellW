import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from "./ToDoList";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
    }

    doneWithEvent = (id) => {
        console.log(id);
        const i = this.state.data.findIndex(c => c._id === id);
        var ele = document.getElementsByClassName("id" + (i+1))[0];
        console.log(ele);
            ele.style.setProperty("text-decoration", "line-through");
    };

    deleteByID (id){
        fetch('/api/todo',
            {
                method: "DELETE",
                body: JSON.stringify({"id": id}),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
    };

    render() {
        fetch('/api/todo/Test')
            .then(data => data.json())
            .then(response => this.setState({data: response}));

        return (
            <div className="App">
                <ToDoList Array={this.state.data}
                          deleteFunction={this.deleteByID} doneFunction={this.doneWithEvent}/>

            </div>
        );
    }
}


export default App;
