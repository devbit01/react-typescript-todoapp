import React, { useState } from 'react'

const AddTaskModal = (props: {
    setAddTaskModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    addTask: (title: string, description: string) => void
}) => {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        props.addTask(title, description)
        setTitle('')
        props.setAddTaskModalOpen(false)
    }

    return (
        <div className="modal-bg">
            <div className="modal-container column">
                <h2>Create New Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="column">
                        <input
                            required
                            autoFocus
                            type="text"
                            placeholder="Task Name"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Task Description (optional)"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button className="button-main green" type="submit">
                            Create Note
                        </button>
                        <button
                            className="button-main red"
                            type="button"
                            onClick={() => props.setAddTaskModalOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTaskModal
