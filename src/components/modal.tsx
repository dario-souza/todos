import React, { FormEvent } from 'react'
import { Tasks } from './todo'
import InputTask from './input.task'
import Button from './button'

type ModalProps = {
  task: Tasks
  close: () => void
  taskUpdate: (task: Tasks) => void
}

const Modal = ({ task, close, taskUpdate }: ModalProps) => {
  const [editedTask, setEditedTask] = React.useState(task.task)

  const saveTask = (event: FormEvent) => {
    event.preventDefault()
    if (!editedTask.trim()) return
    taskUpdate({ ...task, task: editedTask })
    close()
  }

  return (
    <div
      className={`fixed w-full h-screen bg-zinc-500/50 top-0 left-0 flex justify-center items-center`}
    >
      <div className="bg-white p-6 rounded-sm">
        <form onSubmit={saveTask} className="flex gap-4">
          <InputTask
            text="Edite sua task"
            value={editedTask}
            onChange={({ target }) => setEditedTask(target.value)}
          />
          <Button className="bg-[#06B6D4]" text="Salvar" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Modal
