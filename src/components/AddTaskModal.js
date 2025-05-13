import FormRow from "./FormRow";
import TaskModel from "../models/TaskModel";

export default function () {
    const modal = document.createElement('dialog')
    const form = document.createElement('form')
    const title = document.createElement('input')
    const description = document.createElement('textarea')
    const closeButton = document.createElement('button')
    const closeButtonIEl = document.createElement("i")
    const date = document.createElement('input')
    modal.classList.add('addTaskModal')
    closeButton.addEventListener('click', (e) => {
        e.preventDefault()
        form.reset()
        modal.close()
    })
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            form.reset()
            modal.close()
        }
    })
    form.addEventListener('submit', function (e) {
        e.preventDefault()

    })
    closeButtonIEl.className = "fa-solid fa-xmark"
    closeButton.appendChild(closeButtonIEl)
    title.type = 'text'
    title.maxLength = TaskModel.getTitleMaxLength()
    description.maxLength = TaskModel.getDescriptionMaxLength()
    date.type = 'date'
    modal.appendChild(form)
    form.appendChild(FormRow({labelText: 'Title: ', input: title}))
    form.appendChild(FormRow({labelText: 'Description: ', input: description}))
    form.appendChild(FormRow({labelText: "Date: ", input: date}))
    form.appendChild(closeButton)
    return modal
}
