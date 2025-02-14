'use client'
import React, { FormEvent } from 'react'

import TaskItems from './task'
import Button from './button'
import InputTask from './input.task'

export type Tasks = { id: string; task: string }

export const Todo = () => {
  const [tasks, setTask] = React.useState<Tasks[]>([])

  const registerTask = (event: FormEvent) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries()) as Tasks
    if (!data.task.trim()) return
    const id = String(Date.now())
    setTask([...tasks, { ...data, id }])
    form.reset()
  }
  return (
    <div>
      <h1 className="text-center">Lista de tarefas</h1>
      <form className="flex mx-auto max-w-80" onSubmit={registerTask}>
        <InputTask text="Digite sua task aqui" name="task" />
        <Button
          className="bg-cyan-500 py-1 rounded-s-none rounded-e"
          text="Add Task"
        />
      </form>
      <div className="mt-4 min-h-12 max-h-[320px] overflow-y-auto">
        <TaskItems setTask={setTask} tasks={tasks} />
        {tasks.length < 1 && (
          <p className="text-center">Nenhuma tarefa cadastrada!!!</p>
        )}
      </div>
    </div>
  )
}
