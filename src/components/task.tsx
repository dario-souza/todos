'use client'
import React from 'react'
import { Tasks } from './todo'
import Modal from './modal'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import {
  IoIosCheckmarkCircle,
  IoIosCheckmarkCircleOutline,
} from 'react-icons/io'

type TaskItemProp = {
  tasks: Tasks[]
  setTask: React.Dispatch<React.SetStateAction<Tasks[]>>
}

const TaskItems = ({ tasks, setTask }: TaskItemProp) => {
  const [selectedTask, setSelectedTask] = React.useState<Tasks | null>(null)
  const [taskCompleted, setTaskCompleted] = React.useState<string[]>([])

  const deleteTask = (id: string) => {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  const updateTask = (updatedTask: Tasks) => {
    setTask((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    )
  }

  const openModal = (task: Tasks) => {
    setSelectedTask(task)
  }

  const finishTask = (id: string) => {
    setTaskCompleted((prev) =>
      prev.includes(id) ? prev.filter((taskId) => taskId !== id) : [...prev, id]
    )
  }

  const closeModal = () => {
    setSelectedTask(null)
  }

  return (
    <>
      {tasks.map((item) => (
        <div key={item.id} className="flex justify-between mb-1">
          <span
            className={`block transition-all duration-300 ${
              taskCompleted.includes(item.id) && 'line-through text-gray-500'
            }`}
          >
            {item.task}
          </span>
          <div className="flex gap-2 items-center">
            <FaTrashAlt
              className="cursor-pointer text-red-600"
              size={20}
              onClick={() => deleteTask(item.id)}
            />
            <FaEdit
              className="cursor-pointer text-[#06B6D4]"
              size={20}
              onClick={() => openModal(item)}
            />
            {taskCompleted.includes(item.id) ? (
              <IoIosCheckmarkCircle
                size={22}
                className="cursor-pointer text-green-500"
                onClick={() => finishTask(item.id)}
              />
            ) : (
              <IoIosCheckmarkCircleOutline
                size={22}
                className="cursor-pointer text-green-300"
                onClick={() => finishTask(item.id)}
              />
            )}
          </div>
        </div>
      ))}
      {selectedTask && (
        <Modal taskUpdate={updateTask} task={selectedTask} close={closeModal} />
      )}
    </>
  )
}

export default TaskItems
