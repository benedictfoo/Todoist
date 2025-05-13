import Inbox from "./Inbox";

export default function Nav() {
    const nav = document.createElement('nav')
    const navList = document.createElement('ul')
    nav.appendChild(navList)
    const navListItems = [Inbox()]
    navListItems.forEach(navItem => {
        navList.appendChild(navItem)
    })
    return nav
}