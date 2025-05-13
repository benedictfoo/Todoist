import Inbox from "./Inbox";
import Upcoming from "./Upcoming";
import Overdue from "./Overdue";
import Completed from "./Completed";
import AddTaskButton from "./AddTaskButton";

export default function Nav() {
    const nav = document.createElement('nav')
    const navList = document.createElement('ul')
    nav.appendChild(navList)
    const navListItems = [Inbox(), Upcoming(), Overdue(), Completed()]
    navListItems.forEach(navItem => {
        navList.appendChild(navItem)
    })
    navList.appendChild(AddTaskButton())
    return nav
}