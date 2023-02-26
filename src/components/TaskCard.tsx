import { Task } from '../types'
import { FaTrash } from 'react-icons/fa'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'

type TaskCardProps = {
    task: Task
    handleDelete: (id: number) => void
    handleComplete: (id: number, complete: boolean) => void
}

const TaskCard = (props: TaskCardProps) => {
    return (
        <div className="task-card">
            <div className="task-details">
                <button
                    className="button-icon icon-complete greehover"
                    onClick={() => props.handleComplete(props.task.id, !props.task.complete)}
                >
                    {props.task.complete ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleLine />}
                </button>
                <div className={`task-desc ${props.task.complete ? 'strikethrough' : ''}`}>
                    <h3>{props.task.title}</h3>
                    <p>{props.task.description}</p>
                </div>
            </div>

            <button className="button-icon redhover" onClick={() => props.handleDelete(props.task.id)}>
                <FaTrash />
            </button>
        </div>
    )
}

export default TaskCard
