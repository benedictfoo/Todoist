import TaskModel from "../models/TaskModel";

export default function (description) {
    if (description.length > TaskModel.getDescriptionMaxLength()) {
        alert('Description cannot be longer than' + TaskModel.getDescriptionMaxLength() + ' characters');
        return false;
    }
    return true;

}