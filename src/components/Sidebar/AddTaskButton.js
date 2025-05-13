export default function () {
    const button = document.createElement('button')
    const buttonIEl = document.createElement('i')
    buttonIEl.className = 'fa-solid fa-square-plus'
    button.appendChild(buttonIEl)
    button.addEventListener('click', function () {
        document.querySelector('.addTaskModal').showModal()
    })
    return button
}