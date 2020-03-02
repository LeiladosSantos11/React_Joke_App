import React, {Component} from 'react';
import axios from 'axios';


class Main extends Component {
    getRandomJoke() {
    // sent a GET request
    axios.get('http://api.icndb.com/jokes/random')
    .then(response => {
        console.log(response);
      });
    }


componentDidMount() {
    this.getRandomJoke();
}

render() {
    return (
        <div>Main</div>
    )
}
}

export default Main;