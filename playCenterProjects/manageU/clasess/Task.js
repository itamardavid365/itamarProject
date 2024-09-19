class Task {
    constructor(description) {
        this.id = Math.floor(Math.random() * 1001);
        this.description = description;
        this.completed = false;
    }
}

// let num1 = 10

// שילוח של קלאס אחד
export default Task;

// שילוח של כמה דברים
// export{Task,num1}