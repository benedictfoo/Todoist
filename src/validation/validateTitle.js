import TaskModel from "../models/TaskModel";

export default function (title) {
    if (title?.length === 0) {
        alert('Title is required')
        return false
    } else if (title.length > TaskModel.getTitleMaxLength()) {
        alert('Title cannot be more than ' + TaskModel.getTitleMaxLength() + ' characters long')
        return false
    }
    return true
}