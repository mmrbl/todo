import { nanoid } from 'nanoid'
import { Component } from 'react'
import { List } from './List'
 
export class App extends Component {
  state = {
    tasks: [
      {id: 'id1', text: 'Додавати нові таски'},
      {id: 'id2', text: 'Відмічати завершені таски'},
      {id: 'id3', text: 'Видаляти непотрібні таски'},
    ],
    text: '',
    filter: ''
  }

  addTask = (e) => {
  e.preventDefault()

  const id = nanoid()

  const newTask = {
    id,
    text: this.state.text
  }

  this.setState(prevState => ({
    tasks: [...prevState.tasks, newTask],
    text: '',
  }))
}

  onDelete = (id) => {
    const activeTasks = this.state.tasks.filter((task) => task.id !== id)
    this.setState({tasks: activeTasks})
  }

  handleChange = (e) => {
    this.setState({[e.currentTarget.name] : e.currentTarget.value})
  }

  filterTasks = () => {
    return this.state.tasks.filter((task) =>
      task.text.toLowerCase().includes(this.state.filter.toLowerCase())
    )
  }


  render() {
    const { tasks, text } = this.state
    const filteredTask = this.filterTasks()
    return (
      <>
        <h1>Add actual task</h1>
      <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="text">
            <input type="text" name="text" onChange={this.handleChange} value={text} />
          </label>
          <button type='submit' onClick={this.addTask}>Create</button>
        </form>

        <h2>Find your active task</h2>
        
        <label htmlFor="filter">
          <input type="text" name='filter' onChange={this.handleChange}/>
        </label>
        
        {filteredTask.length > 0 ? <List tasks={filteredTask} onDelete={this.onDelete} /> : <List tasks={tasks} onDelete={this.onDelete} />}

      </>
    )
  }
}


