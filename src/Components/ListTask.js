import React from 'react';
import Task from './Task';
import { useSelector } from "react-redux";

function ListTask() {
    const tasks = useSelector(state => state)
    return (
        <div className="my-4">
            {tasks.map(task => <Task key={task.id} task={task} />)}
        </div>
    )
}

export default ListTask
