import FormRow from "./FormRow";
import TaskModel from "../models/TaskModel";
import validateAdd from "../validation/validateAdd";

export default function () {
    const modal = document.createElement('dialog')
    const form = document.createElement('form')
    const title = document.createElement('input')
    const description = document.createElement('textarea')
    const submit = document.createElement('button')
    const closeButton = document.createElement('button')
    const closeButtonIEl = document.createElement("i")
    const date = document.createElement('input')
    modal.classList.add('addTaskModal')
    closeButton.addEventListener('click', (e) => {
        e.preventDefault()
        form.reset()
        modal.close()
    })

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        const formData = new FormData(form)
        const title = formData.get('title')
        const description = formData.get('description')
        const date = formData.get('date')
        const validatedFields = validateAdd({title, description, date})
        if (validatedFields) {
            console.log(new TaskModel(validatedFields))
            form.reset()
            modal.close()
        }
    })
    submit.textContent = 'Add Task'
    closeButtonIEl.className = "fa-solid fa-xmark"
    closeButton.appendChild(closeButtonIEl)
    title.type = 'text'
    title.maxLength = TaskModel.getTitleMaxLength()
    description.maxLength = TaskModel.getDescriptionMaxLength()
    date.type = 'date'
    modal.appendChild(form)
    form.appendChild(FormRow({labelText: 'Title: ', input: title, name: 'title'}))
    form.appendChild(FormRow({labelText: 'Description: ', input: description, name: 'description'}))
    form.appendChild(FormRow({labelText: "Date: ", input: date, name: 'date'}))
    form.appendChild(submit)
    form.appendChild(closeButton)
    return modal
}
