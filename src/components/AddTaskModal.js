import FormRow from "./FormRow";

export default function () {
    const modal = document.createElement('dialog')
    modal.classList.add('addTaskModal')

    const form = document.createElement('form')
    const title = document.createElement('input')
    const description = document.createElement('textarea')
    const closeButton = document.createElement('button')
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
    const closeButtonIEl = document.createElement("i")
    closeButtonIEl.className = "fa-solid fa-xmark"
    closeButton.appendChild(closeButtonIEl)
    title.type = 'text'
    title.maxLength = 50
    description.maxLength = 200
    const date = document.createElement('input')
    date.type = 'date'
    modal.appendChild(form)
    form.appendChild(FormRow({labelText: 'Title', input: title}))
    form.appendChild(FormRow({labelText: 'Description', input: description}))
    form.appendChild(FormRow({labelText: "Date", input: date}))
    form.appendChild(closeButton)
    return modal
}
