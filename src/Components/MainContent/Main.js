import React, {Component} from 'react';
import Axios from 'axios';
import chuck from './chuck.jpg';
import 'react-bootstrap';
import button, { Button } from 'react-bootstrap';


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
        <div className= "main">
            <div className="row">
            <div className="col-md-8 col-lg-3" id="col_button"> 
            <p1>Time to have fun with Chuck Norris</p1>
            </div>
            <div className="col-md-4 col-lg-3" id="col_button">    
           
        <Button onClick={this.getRandomJokes}>Get your jokes here:</Button>
        
        <br></br>
        </div>
        <div className="col-md-4 col-lg-3">
        <p>{this.state.jokes}</p>
        </div>
        <div className="col-md-6 col-lg-3"> 
        <img className="chuck" src={chuck} alt='Chuck Norris'/>
        </div>
        </div>
        </div>
        
    )
}
}

export default Main;