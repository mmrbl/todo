import { Component } from 'react'
import ListItem from './ListItem/ListItem'

export class List extends Component {


  render() {
    const {tasks, onDelete} = this.props 
    return (
      <ol>
        {tasks.map((task) => {
          return (  
            <ListItem key={task.id} id={task.id} text={task.text} onDelete={onDelete} />
          )
  
        })}
        
      </ol>
    )
  }
}
