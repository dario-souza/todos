'use client'
import React, { FormEvent } from 'react'

import TaskItems from './task'
import Button from './button'
import InputTask from './input.task'

export type TodoProp = { id: string; task: string }

export const Todo = () => {
  const [task, setTask] = React.useState<TodoProp[]>([])

  const updateTask = (updatedTask: TodoProp) => {
    setTask((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    )
  }

  const registerTask = (event: FormEvent) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries()) as TodoProp
    if (!data.task.trim()) return
    const id = String(Date.now())
    setTask([...task, { ...data, id }])
    form.reset()
  }
  return (
    <div>
      <form className="flex mx-auto max-w-80" onSubmit={registerTask}>
        <InputTask text="Digite sua task aqui" name="task" />
        <Button
          className="bg-cyan-500 py-1 rounded-s-none rounded-e"
          text="Add Task"
        />
      </form>
      <div className="mt-4 min-h-12 max-h-[320px] overflow-y-auto">
        <TaskItems update={updateTask} setTask={setTask} task={task} />
      </div>
    </div>
  )
}
