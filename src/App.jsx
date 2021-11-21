import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';


const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fecthTasks = async () => {
      const { data } = await axios.get("http://localhost:8080/alltasks")
      setTasks(data);
    }
    fecthTasks();
  }, []);

  const handleTaskClick = (taskToBeChecked) => {
    const fetchTaskCompleted = async () => {
      await axios.post("http://localhost:8080/save_task", {
        id: taskToBeChecked.id,
        title: taskToBeChecked.title,
        description: taskToBeChecked.description,
        isCompleted: !!taskToBeChecked.isCompleted ? false : true
      })
    }
    const newTasks = tasks.map(task => {
      if (task.id === taskToBeChecked.id) return { ...task, isCompleted: !task.isCompleted };

      return task;
    });

    setTasks(newTasks);
    fetchTaskCompleted();
  }

  const handleTaskAddition = (titleTask, descriptionTask) => {
    const fecthAddingNewTask = async () => {
      await axios.post("http://localhost:8080/save_task",
      {
        title: titleTask,
        description: descriptionTask,
        isCompleted: false
      })
      setTasks([...tasks, {
        title: titleTask,
        description: descriptionTask,
        isCompleted: false
      }]);
    }
    fecthAddingNewTask();
  }

  const handleTaskDeletion = (taskToBeRemoved) => {
    const fetchRemoveTask = async () => {
      await axios.delete(`http://localhost:8080/${taskToBeRemoved.id}`)
    }

    const newTasks = tasks.filter(task => {
      return task.id !== taskToBeRemoved.id;
    })
    setTasks(newTasks);
    fetchRemoveTask();
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Route 
          path="/:idTask"
          exact render = { () => (

            <TaskDetails tasks={tasks}/>
          )
          }
        />
      </div>
    </Router>

  );
}

export default App;
