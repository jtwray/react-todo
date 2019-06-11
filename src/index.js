import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { isTemplateElement } from "@babel/types";

const taskslistarray = [
	{
		task: "Organize Garage",
		id: 1528817077286,
		completed: false
	},
	{
		task: "Bake Cookies",
		id: 1528817084358,
		completed: false
	}
];

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			taskslistarray
		};
	}
	toggleItemObj = id => {
		this.setState({
			taskslistarray: this.state.taskslistarray.map(itemObj => {
				if (itemObj.id === id) {
					return {
						...itemObj,
						completed: !itemObj.completed
					};
				}
				return itemObj;
			})
		});
	};
	addItem = item => {
		const copiedTasks = this.state.taskslistarray.slice();

		const newItem = {
			task: item,
			id: Date.now(),
			completed: false
		};
		copiedTasks.push(newItem);
		console.log(copiedTasks);
		this.setState({ taskslistarray: copiedTasks });
    };
    clearCompleted = () => {
        const copiedTasks = this.state.taskslistarray.slice();
        const completedTasks=copiedTasks.filter(item =>!item.completed===true);
        this.setState({taskslistarray: completedTasks });

        

     };
    //use filter
    //  loop over item of this.state.groceries
    // filter out any tasks who task.completed === true
    // setState with new filtered list
	render() {
		return (
			<div className='App'>
				<div className='header'>
					<h1> ToDoList</h1>
					<TodoForm addItem={this.addItem} />
				</div>
				<TodoList
					taskslistarray={this.state.taskslistarray}
					toggleItemObj={this.toggleItemObj}
                />
                <button onClick={this.clearCompleted}>ClearCompleted</button>
			</div>
		);
	}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
