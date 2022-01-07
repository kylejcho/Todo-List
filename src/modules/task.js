class Task {
    constructor(name, notes, dueDate, list) {
        this.name = name;
        this.notes = notes;
        this.dueDate = dueDate;
        this.list = list;
    }

    getName(name) {
        return this.name
    }

    setName(name) {
        this.name = name;
    }

    setNotes(notes) {
        this.notes = notes;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    setList(list) {
        this.list = list;
    }
}


export default Task;