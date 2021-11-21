import React from 'react'
import Button from '../Button';
import './style.css';
import { useParams, useHistory } from 'react-router-dom';


const TaskDetails = ({tasks}) => {
    const history = useHistory();
    const params = useParams();

    const handleBackButtonClick = () => {
        history.goBack();
    }
    
    const task = tasks.filter( task => {

        if(task.id === Number(params.idTask))
            return task;
        else
            return null
    })

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{task[0].title}</h2>
                <p>
                    {task[0].description}
                </p>
            </div>

        </>
    );
}

export default TaskDetails;