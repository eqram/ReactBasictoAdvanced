import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TodoItem from './todoItemCompo';
import DumbTodoItem from './dumbTodoItemCompo';

class App extends Component {

  state={
    inputArray:[],
    todoText:'',
    count:0
  }

  doClick=()=>{
    let tempArray = this.state.inputArray;
    let tempCount = this.state.count;
    tempArray.push({
      id:tempCount++,
      taskTest:this.state.todoText
    })
    this.setState({
      inputArray:tempArray, count:tempCount
    })
  }

  deleteClick=(e)=>{
    var array = this.state.inputArray;
    let tempCount = this.state.count;
    var index = array.findIndex(x => x.id===e);
    array.splice(index,1);;
    this.setState({inputArray:array, count:tempCount});
  }

  handleChange = (e) => {
    if (e.target.name === "taskTest")
      this.setState({ todoText: e.target.value });
  };

  render() {
    return (
      <div>
          <TextField name='taskTest' value={this.state.todoText} placeholder='enter task' onChange={this.handleChange} />
          <Button onClick={this.doClick} > ADD </Button>
          <div>
            {/*
              this.state.inputArray.map(item => 
                <div key={item.id}>
                  <TextField name='id' value={item.id}/>
                  <TextField name='taskTest' value={item.taskTest}/>
                  <Button name='btnDel' onClick={()=>{ this.deleteClick(item.id) }} > Delete </Button>
                </div>)
              */}
              {
                this.state.inputArray.map(item => <DumbTodoItem key={item.id} id={item.id} name={item.taskTest} doDelete={()=>{ this.deleteClick(item.id) }} /> )
              }
          </div>
      </div>
    );
  }
}

export default App;
