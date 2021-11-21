import React from 'react'
import Button from '../Button';
import './style.css';
import { useParams, useHistory } from 'react-router-dom';


const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Consectetur dignissimos
                    magni laboriosam assumenda culpa autem
                    atque nulla quos cupiditate sit
                    quaerat qui, dolorum perferendis neque
                    rerum alias blanditiis,
                    voluptatibus accusamus.
                </p>
            </div>

        </>
    );
}

export default TaskDetails;