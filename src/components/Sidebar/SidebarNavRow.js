export default function ({iconClasses, iconText}) {
    const row = document.createElement('li')
    const icon = document.createElement('i')
    icon.className = iconClasses
    const iconTextEl = document.createElement('span')
    iconTextEl.textContent = iconText
    row.appendChild(icon)
    row.appendChild(iconTextEl)
    return row
}