import Action from "./action.js";

class ActionsManager {
    actions;
    balance;
    constructor() {
        this.actions = [];
        this.balance = 0;
    }
    addAction(action) {
        this.actions.push(action);
        this.calcBalance()
    };

    deleteAction(id) {
        this.actions = this.actions.filter((action) => {
            return action.id !== id
        })
        this.calcBalance()

    }
    updateActionAmount(id, newAmount) {
        let indexToUpdate = this.actions.findIndex((action) => {
            return action.id == id;
        })
        this.actions[indexToUpdate].amount = newAmount;
        this.calcBalance()
    }
    updateActionDescription(id, newDescription) {
        let indexToUpdate = this.actions.findIndex((action) => {
            return action.id == id;
        })
        this.actions[indexToUpdate].description = newDescription;
    }
    calcBalance() {
        let sum = 0;
        for (let obj of this.actions) {
            sum += obj.amount;
        }
        this.balance = sum
    }
}

export { Action, ActionsManager }