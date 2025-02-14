import React, { FormEvent } from 'react'
import { TodoProp } from './todo'
import InputTask from './input.task'
import Button from './button'

type ModalProps = {
  task: TodoProp
  close: () => void
  taskUpdate: (task: TodoProp) => void
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
      <div className="bg-white w-96 p-6 rounded-sm">
        <form onSubmit={saveTask}>
          <InputTask
            text="Edite sua task"
            value={editedTask}
            onChange={({ target }) => setEditedTask(target.value)}
          />
          <Button text="Salvar" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Modal
