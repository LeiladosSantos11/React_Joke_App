import React, {Component} from 'react';
import Axios from 'axios';


class Searchcard extends Component {
    state = {
        tasks: []
    }
}

        componentDidMount(){
          axios.get('http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe')
          .then((response => {
              this.setState ({ 
                tasks:response.data
              });
              
          }))

    

render() {
    return (
        <div>
        <button onClick={this.getRandomJokes}>Get your Jokes here</button><br></br>
        <p>{this.state.jokes}</p>
        </div>
    )
}
}

export default Searchcard;