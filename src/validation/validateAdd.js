import TaskModel from "../models/TaskModel";

export default function ({title, description, date}) {
    if (!title) {
        alert('Please enter title')
    } else if (title.length < TaskModel.getTitleMaxLength()) {
    }
}