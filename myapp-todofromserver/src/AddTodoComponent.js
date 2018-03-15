import React, { Component } from 'react'


export class AddTodoComponent extends Component{
  
  constructor(props){
    super(props)
    console.log("add tod ctor")
    console.log(props)
    console.log(this.props.id)
    this.state={
      
      todo : "",
      by : "2018-07-07T06:11:33.396Z"
    }
    console.log(this.state)
    this.updateInput = this.updateInput.bind(this);
    this.updateTodo = this.updateTodo.bind(this)
    this.updateDate = this.updateDate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.foo = this.foo.bind(this)
    this.addItem = this.addItem.bind(this)
  }
  reflectTodoChange = (e)=>{
    console.log(e.traget)
      this.setState({
        todo : "hi"//e.traget.value
      })
  }

  reflectDateChange = (e)=>{
    this.setState({
      date : e.traget.value
    })
  }

  // addItem = ()=>{
  //   console.log((this.state))
  //   fetch('/todoList', {
  //               'method': 'post',
  //               'Content-Type' : 'application/json',
  //               'body': (this.state)})
  //         .then(function(response) {
  //           return response.json();
  //         })
  //         .then(function(data) {
  //            console.log('Created todo' );//data.html_url
  //            this.props.rerender()
  //         });
  //   }
  bar(){ //To re render... Re fetch updated info
    console.log("bar")
    console.log(this.props)
    this.props.rerender()
  }
    addItem(){
      console.log((this.state))
     // let _this = this;
     let this_state = this.state
     console.log("this_state : ")
     console.log(this_state)
     let dataToSend = {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(this_state)}
      console.log(dataToSend)
      fetch('/todoList', dataToSend)
          .then(function(response) {
            return response.json();
          })
          .then((data) => {
             console.log('Created todo' );//data.html_url
             this.bar()
          });
    }

    foo(event){
      console.log(event)
      console.log(event.traget.value)
    }
    updateInput(event){
      console.log(event.target.value)
      this.setState({username : event.target.value})
      }
 
      updateTodo(event){
        console.log(event.target.value)
        this.setState({todo : event.target.value})
        }

        updateDate(event){
          console.log(event.target.value)
          this.setState({by : event.target.value})
          }
      
      
      handleSubmit(){
      console.log('Your input value is: ' + this.state.username)
      //Send state to the server code
      }

  render(){
    return(
      <div>
        <label>Add To do Item</label>
        {/* <input type="text" onChange={this.foo} /> */}
        <input type="text"
              placeholder="TODO" 
              onChange = {this.updateTodo}             
        />
        <input type="date" 
               onChange = {this.updateDate}       
        />
        <button onClick = {this.addItem}>ADD</button>

      </div>
    )
  }
}