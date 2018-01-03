import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBqKewlDjx5_18e9hDiTBlWvQHx5WOCV-E';

// create a new component  and this component should create some html
const App = () => {
	return <div>HI!</div>;
}


// take this content generated html and put it on the page ( in the DOM)

ReactDOM.render(<App /> , document.querySelector('.container'));