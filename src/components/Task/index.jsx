import React from 'react';
import './style.css';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

const Task = ({task , handleTaskClick, handleTaskDeletion}) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }
    
    return ( 
        <div className="task-container" onClick={(e) => {
            e.stopPropagation();
            handleTaskClick(task.id)
        }
         } style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
            <div className="task-title" >
                {task.title}
            </div>

            <div className="buttons-container">
                <button className="see-task-details-button" onClick={handleTaskDetailsClick}>
                    <CgInfo />
                </button>
                <button className="remove-task-button" onClick={ (e) => {
                    e.stopPropagation();
                    handleTaskDeletion(task.id);
                }}>
                    <CgClose />
                </button>
            </div>
        </div>
     );
}
 
export default Task;