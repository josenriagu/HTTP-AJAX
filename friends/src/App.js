import React, { Component } from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: [],
      editMode: false,
      name: "",
      age: 0,
      email: ""
    }
  }

  fetchFriendWithAxios = () => {
    axios.get('http://localhost:5000/friends/')
      .then(response => {
        this.setState({ ...this.state, friendsList: response.data });
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  componentDidMount() {
    this.fetchFriendWithAxios();
  }

  setEdit = () => {
    this.setState({ ...this.state, editMode: true });
    console.log("fired!!");
  }

  cNameHandler = event => {
    this.setState({ ...this.state, name: event.target.value });
  }

  cAgeHandler = event => {
    this.setState({ ...this.state, age: event.target.value });
  }

  cEmailHandler = event => {
    this.setState({ ...this.state, email: event.target.value });
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1>My Buddies</h1>
        <section className="app-section">
          <Friends
            setEdit={this.setEdit}
            friendsList={this.state.friendsList} />
          <FriendForm
            cNameHandler={this.cNameHandler}
            cAgeHandler={this.cAgeHandler}
            cEmailHandler={this.cEmailHandler}
            editMode={this.state.editMode}
          />
        </section>
      </div>
    );
  }
}