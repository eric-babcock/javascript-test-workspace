import react, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


class App extends React.Component {
  state = {
    userData: [],
    count: 0
  }

  componentDidMount = () => {
    const url="http://localhost:5173/api";
    fetch(url)
    .then((result)=>result.json())
    .then((result) => {
      this.setState({userData:result});
    });
  }

  addUser = (user) => {
    this.setState({userDate:[...this.state.userDate, user]})
  }

  removeUser = (index) => {
    const { userData } = this.state;
    const data = userData.filter((value, i) => {
      return index !== i;
    });
    this.setState({ userData: data });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <p>hello, world</p>
        <p>Count: {this.state.count}</p>
        <button
          onClick ={() => this.setState({...this.state, count:this.state.count+1})}
          className='btn btn-primary'
        >
          Increment
        </button>

        {/*<div className="text-center border-bottom border-secondary p-3">
          <h1>Users DashBoard</h1>
        </div>
        <div classname="container">
          <CreateUser addUser={this.addUser} />
          <UsersContainer
            users={userData}
            removeUser={this.removeUser}
          />
        </div>*/}
      </div>
    )
  }
}

export default App;
