import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllTasks, postNewTask } from 'reducers/reducer';
import Task from './Task';

class Home extends Component {
  constructor(props){
    super(props);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.postNewTask(evt.target.taskName.value);
    evt.target.taskName.value = "";
  }

  componentDidMount(){
    this.props.getAllTasks();
  }

  render() {
    return (
      <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
           <h1>To-Do App!!</h1>
            <form onSubmit={evt => {
               evt.preventDefault();
               this.props.postNewTask(evt.target.taskName.value);
               evt.target.taskName.value = "";
              }
             }>
              <div className="form-group">
              <label htmlFor="exampleInputEmail1">Add New To-Do</label>
              <input name="taskName" placeholder="Enter new task" />
              </div>
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3>Let's get some work done!</h3>
          </div>
        </div>
      </div>
      <div className="container">
        {
          this.props.tasks && this.props.tasks.map((task) => {
            return (
              <Task key={task._id} Obj={task} isComplete={task.metafields[0].value} Name={task.title}/>
            )
          })
        }
      </div>
      </div>
    )
  }
}
const mapState = ({tasks}) => ({tasks});
const mapDispatch = {getAllTasks, postNewTask};
export default connect(mapState, mapDispatch)(Home);