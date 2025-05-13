export default function () {
    const button = document.createElement('button')
    const buttonIEl = document.createElement('i')
    buttonIEl.className = 'fa-solid fa-square-plus'
    button.appendChild(buttonIEl)
    return button
}