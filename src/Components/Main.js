import React, {Component} from 'react';
import List from './List'
import Title from './Title'
class Main extends Component {
  render(){
    return <div>
      <Title title={['My List']}/>
      <List tasks={['Mow the lawn', 'walk the dog']}/>
      <List tasks={['Take you down', 'Laugh at you']}/>
      </div>
  }
}
export default Main
