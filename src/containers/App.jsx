import React, { useState, useEffect } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundary";
import './App.css';

// This is a SMART COMPONENT = CONTAINERS
function App() {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     } // always use class if you want to use state
    // }

    // HOOKS Array Destructuring = State in function, not class
    const [robots, setRobots] = useState([]); // initial value
    const [searchField, setSearchField] = useState('');
    const [count, setCount] = useState(0);

    // Part of React lifecycle
    // componentDidMount() {
    //     // Take data from a website
    //     fetch('https://jsonplaceholder.typicode.com/users') // A method from window object
    //         .then(response => response.json())
    //         .then(users => {this.setState({ robots: users })}); // react updating again, re-run render()
    // }

    // USEEFFECT HOOKS RE-RUN WHEN THE COMPONENT RE-RENDERS
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)}); // will re-render again
        console.log(count);
        }, [count]); // only run if the variable in array changes
    // empty array means when initial render (like ComponentDidMount)

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
        // console.log(filteredRobot);
    }

    // const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (!robots.length) ? // (robots.length === 0)
        <h1 className="tc">Loading</h1> :
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                {/* <button onClick={() => setCount(count+1)}>Click Me!</button> */}
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        ); // the state is passed to the children as props
}
export default App;