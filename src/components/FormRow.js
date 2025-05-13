export default function ({labelText, input, name}) {
    const label = document.createElement("label");
    label.textContent = labelText;
    const row = document.createElement("div");
    input.name = name
    row.appendChild(label);
    row.appendChild(input);
    return row
}