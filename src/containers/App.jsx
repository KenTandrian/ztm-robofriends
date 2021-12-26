import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundary";
import './App.css';

// This is a SMART COMPONENT = CONTAINERS
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        } // always use class if you want to use state
    }

    // Part of React lifecycle
    componentDidMount() {
        // Take data from a website
        fetch('https://jsonplaceholder.typicode.com/users') // A method from window object
            .then(response => response.json())
            .then(users => {this.setState({ robots: users })}); // react updating again, re-run render()
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        // console.log(filteredRobot);
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return (!robots.length) ? // (robots.length === 0)
            <h1 className="tc">Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            ); // the state is passed to the children as props
    }
}
export default App;