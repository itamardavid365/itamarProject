class Action {
    constructor(type, description, amount) {
        this.type = type;
        this.description = description;
        this.amount = type == "income" ? amount : -amount;
        this.id = Number(Math.floor(Math.random() * 1001));
    }
}
export default Action;