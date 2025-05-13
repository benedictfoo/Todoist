import Inbox from "./Inbox";
import Upcoming from "./Upcoming";
import Overdue from "./Overdue";
import Completed from "./Completed";

export default function Nav() {
    const nav = document.createElement('nav')
    const navList = document.createElement('ul')
    nav.appendChild(navList)
    const navListItems = [Inbox(), Upcoming(), Overdue(), Completed()]
    navListItems.forEach(navItem => {
        navList.appendChild(navItem)
    })
    return nav
}