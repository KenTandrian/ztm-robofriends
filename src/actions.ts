import { Dispatch } from "redux";
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from "./constants";

export const setSearchField = (text: string) => ({
    type: CHANGE_SEARCH_FIELD, // a constant
    payload: text
}); // payload is the data

export const requestRobots = () => (dispatch: Dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users') // A method from window object
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }))
}