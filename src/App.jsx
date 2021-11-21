import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true
    }
  ]);

  useEffect(() => {
    const fecthTasks = async () => {
      const response = await axios.get("http://localhost:8080/tasks/alltasks")

      console.log(response)
    }



    fecthTasks();
  }, [tasks]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      },
    ];

    setTasks(newTask);

  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => {
      return task.id !== taskId;
    })
    setTasks(newTasks);
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
          path="/:taskTitle"
          exact component = {
            TaskDetails
          }
        />
      </div>
    </Router>

  );
}

export default App;
