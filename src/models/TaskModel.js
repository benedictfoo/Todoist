export default class TaskModel {

    static _titleMaxLength = 50;
    static _descriptionMaxLength = 200;

    constructor({title, description = null, due_date = null, isCompleted = false}) {
        this.title = title;
        this.description = description;
        this.due_date = due_date;
        this.isCompleted = isCompleted;
    }

    static getTitleMaxLength() {
        return this._titleMaxLength
    }

    static getDescriptionMaxLength() {
        return this._descriptionMaxLength
    }
}