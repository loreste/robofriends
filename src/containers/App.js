import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField } from '../action';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDisptatchToProps = (disptach) => {
  return {
  onSearchChange: (event) => disptach(setSearchField(event.target.value))
 }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
    }
  }

  fetchUsers = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(fetchedUsers => fetchedUsers);
    this.setState({ robots: users });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;

    if (!robots) {
      return <h1>Loading</h1>;
    }

    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange = { onSearchChange }/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
    );
  }
}

export default connect(mapStateToProps,mapDisptatchToProps)(App);
