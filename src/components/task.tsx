'use client'
import React from 'react'
import { TodoProp } from './todo'
import Button from './button'
import Modal from './modal'

type TaskItemProp = {
  task: TodoProp[]
  setTask: React.Dispatch<React.SetStateAction<TodoProp[]>>
  update: (task: TodoProp) => void
}

const TaskItems = ({ task, setTask, update }: TaskItemProp) => {
  const [selectedTask, setSelectedTask] = React.useState<TodoProp | null>(null)

  const deleteTask = (id: string) => {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  const openModal = (task: TodoProp) => {
    setSelectedTask(task)
  }

  const closeModal = () => {
    setSelectedTask(null)
  }

  return (
    <>
      {task.map((item) => (
        <div key={item.id}>
          <span className="block border" onClick={() => console.log(item.id)}>
            {item.task}
          </span>
          <Button
            onClick={() => deleteTask(item.id)}
            className="bg-red-500"
            text="Deletar"
          />
          <Button
            className="bg-blue-500"
            text="Editar"
            onClick={() => openModal(item)}
          />
          <Button className="bg-amber-500" text="Concluir" />
        </div>
      ))}
      {selectedTask && (
        <Modal taskUpdate={update} task={selectedTask} close={closeModal} />
      )}
    </>
  )
}

export default TaskItems
