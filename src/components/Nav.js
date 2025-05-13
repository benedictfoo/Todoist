import Inbox from "./Inbox";
import Upcoming from "./Upcoming";
import Overdue from "./Overdue";

export default function Nav() {
    const nav = document.createElement('nav')
    const navList = document.createElement('ul')
    nav.appendChild(navList)
    const navListItems = [Inbox(), Upcoming(), Overdue()]
    navListItems.forEach(navItem => {
        navList.appendChild(navItem)
    })
    return nav
}