import Nav from "./Nav";

export default function Sidebar() {
    const sidebar = document.createElement('aside')
    sidebar.appendChild(Nav())
    return sidebar
}
