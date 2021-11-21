import React, {useState} from 'react';
import Button from '../Button';
import './style.css';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const [inputDescription, setInputDescription] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }
    const handleTextAreaChange = (e) => {
        setInputDescription(e.target.value);
    }
    
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData, inputDescription);
        setInputData('');
        setInputDescription('');
        
    }

    return (
        <>
        <div className="add-task-container">
            <input 
                onChange={handleInputChange}
                className="add-task-input"
                value={inputData}
                type="text"
                placeholder="Add a task"
            />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
            <textarea className="task-description"
                onChange={handleTextAreaChange}
                value={inputDescription}
                placeholder="Add a description"
            
            ></textarea>
        </>
    );
}

export default AddTask;