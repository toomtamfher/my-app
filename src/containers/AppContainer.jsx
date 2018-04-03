import React, { Component } from 'react';
import '../App.css';
import { Route } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import InputFrom from '../components/InputFrom'
import { connect } from 'react-redux'
import { setUser} from '../actions/userActions'


class App extends Component {
    constructor(props){
        super(props);

        this.state ={
            name: "toomtam"
        };
    }
    __onChangeHander(e){
        this.setState({
            name: e.target.value
        })
    }

    __changeUser(){
        let user = {
            firstname: "aaaa",
            lastname: "bbb",
            Age: 50,
            birthday: "20/02/5555",
            email: "tttttt"
        }

        this.props.setUser(user)
    }


  render() {
    return (
      <div className="App">
          <Route exact path={"/home"} component={Home}/>
          <Route exact path={"/about"} component={About}/>

          <InputFrom __onChangeHander={this.__onChangeHander.bind(this)}/>
          <div>{this.state.name}</div>
          <div>Fisrtname: {this.props.user.firstname}</div>
          <div>Lastname: {this.props.user.lastname}</div>
          <div>Agre: {this.props.user.age}</div>
          <div>Birthday: {this.props.user.birthday}</div>
          <div>Email: {this.props.user.email}</div>
          <button onClick={this.__changeUser.bind(this)}>Change to aaa</button>


      </div>
    );
  }
}

export default connect(
    (store)=>{
        return{
            user: store.user

        }
    },
    {setUser}) (App);
