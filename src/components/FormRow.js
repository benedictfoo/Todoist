export default function ({labelText, input}) {
    const label = document.createElement("label");
    label.textContent = labelText;
    const row = document.createElement("div");
    row.appendChild(label);
    row.appendChild(input);
    return row
}