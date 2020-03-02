import React, {Component} from 'react';
import Axios from 'axios';



class Main extends Component {
    constructor() {
        super();
        this.state = {
          jokes: '',
          loading: false
        };
      }



// sent a GET request//

getRandomJokes = () => {
    Axios.get('http://api.icndb.com/jokes/random')
    .then((response) => {
        const data = response.data;
        const randomJokes = data.value.joke;
        this.setState ({
            jokes: randomJokes
        });
    })
}


render() {
    return (
        <div>
        <button onClick={this.getRandomJokes}>Get your Jokes here</button><br></br>
        <p>{this.state.jokes}</p>
        </div>
    )
}
}

export default Main;