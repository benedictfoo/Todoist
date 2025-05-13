class TaskModel {
    constructor({title, description = null, due_date = null, isCompleted = false}) {
        this.title = title;
        this.description = description;
        this.due_date = due_date;
        this.isCompleted = isCompleted;
    }
}