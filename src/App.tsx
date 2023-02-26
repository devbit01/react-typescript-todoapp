import React, { useEffect, useState } from 'react'
import TaskCard from './components/TaskCard'
import AddTaskModal from './components/AddTaskModal'
import { Task } from './types'

const taskList = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
]

function App() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [addTaskModalOpen, setAddTaskModalOpen] = useState<boolean>(false)

    useEffect(() => {
        const tasks = localStorage.getItem('tasks')
        if (tasks) {
            setTasks(JSON.parse(tasks))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (title: string, description: string) => {
        const newTask = { id: tasks.length + 1, title, description, complete: false }
        setTasks([...tasks, newTask])
    }
    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const handleComplete = (id: number, complete: boolean) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    task.complete = complete
                }
                return task
            })
        )
    }

    return (
        <div>
            <div className="container">
                <button className="button-main green" onClick={() => setAddTaskModalOpen(true)}>
                    + Add task
                </button>

                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        handleDelete={(id) => deleteTask(id)}
                        handleComplete={(id, complete) => handleComplete(id, complete)}
                    />
                ))}
            </div>
            {addTaskModalOpen && <AddTaskModal setAddTaskModalOpen={setAddTaskModalOpen} addTask={addTask} />}
        </div>
    )
}

export default App
