import React, { Component } from 'react';
import './App.css';
import { AddTodoComponent } from './AddTodoComponent'
var moment = require('moment');

//import {moment} from 'moment'
class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      response: {},
      content: '',
      id: null,
      actionList : []
    };
    
  }
  componentDidMount() {
    console.log("in componentdidmount")
    this.callApi()
      .then(res => {console.log(res); 
        this.extractActionList(res)
        const content = res.map((item) =>
          <div key={item.id}>
            <h3>{item.todo}</h3>
          </div>
        );
        // this.setState({ response: content })
        console.log("resss::  " + res.length)
        this.setState({response : res,content: content, id:res.length})
      })
      .catch(err => console.log(err));
  }

  extractActionList(list){
    console.log("in extractActionList")
    let todoList = []
    //let todaysDate = new Date()
    let today = moment().format('YYYY-MM-DD').toString()
    console.log(today)
    //let mommentDay = moment();
    //console.log(mommentDay)
    
    //console.log(todaysDate.tomorrow())
    //console.log(todaysDate)
    for(let i in list){
      console.log(list[i].by)
      console.log(today == list[i].by)
    }
  }

  rerender = ()=>{ console.log("in rerender")
    this.callApi().then(res => {console.log(res); 
    this.extractActionList(res)
    const content = res.map((item) =>
      <div key={item.id}>
        <h3>{item.todo}</h3>
      </div>
    );
    // this.setState({ response: content })
    console.log("resss::  " + res.length)
    this.setState({response : res,content: content, id:res.length})
  })
  .catch(err => console.log(err));; console.log(this.state.response); this.forceUpdate()};

  callApi = async () => {
    console.log("in callApi")
    const response = await fetch('/todoList?_sort=id&_order=DESC');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  render() {
    console.log("App render")
    console.log(this.state.response[0])
    console.log(typeof(this.state.response))
    console.log(this.state.id)
    //Object.keys(this.state.response).map(item=> console.log(item))
    return (
      <div className="App">
        <h2>TO DO APP</h2>
        <AddTodoComponent id={51} rerender={this.rerender}/>
        {this.state.content}
        

        <button>Add Todo</button>
        {/* <ul>
          {Object.keys(this.state.response).map((item) =>
            <li>
              {item.todo}
            </li>
          )}
        </ul> */}
      </div>
    );
  }
}

export default App;
