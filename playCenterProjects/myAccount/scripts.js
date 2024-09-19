// import Action from "./classes/action.js";
import { Action, ActionsManager } from "./classes/actionsManager.js";

let manager = new ActionsManager;

window.addNewAction = function addNewAction() {
    let type = document.getElementById("type").value;
    let amount = +document.getElementById("amount").value;
    let description = document.getElementById("description").value;
    if (!validInp(description, amount)) return;
    manager.addAction(new Action(type, description, amount))
    console.log(manager.actions);
    showActions()
}

function showActions() {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    let balance = document.getElementById("balance");
    balance.innerHTML = "";
    for (let action of manager.actions) {

        tbody.innerHTML += `
                        <tr>
                            <td id="des${action.id}">${action.description}</td>
                            <td id="amo${action.id}">${action.amount}</td>
                            <td style="cursor: pointer" onclick='editAction(${action.id})'><i class="fa-regular fa-pen-to-square text-success"></td>
                            <td style="cursor: pointer" onclick='removeAction(${action.id})'><i class="fa-solid fa-trash-can text-danger"></i></td>
                        </tr>
    `
        if (action.amount >= 0) {
            document.getElementById(`des${action.id}`).style.color = "green"
            document.getElementById(`amo${action.id}`).style.color = "green"
        } else {
            document.getElementById(`des${action.id}`).style.color = "red"
            document.getElementById(`amo${action.id}`).style.color = "red"
        }
    }
    balance.innerHTML = `Balance: ${manager.balance}`;
    manager.balance >= 0 ? balance.style.color = "green" : balance.style.color = "red"

}

window.editAction = function editAction(id) {
    let newDescription = prompt("Enter new description:", "description");
    let newAmount = +prompt("Enter new amount", "0");
    if (isNaN(newAmount)) {
        alert("Pls enter a valid number!")
        return
    }
    manager.updateActionDescription(id, newDescription);
    manager.updateActionAmount(id, newAmount);
    showActions()
}

window.removeAction = function removeAction(id) {
    if (confirm("Are you sure?")) manager.deleteAction(id);
    showActions()
}

function validInp(description, amount) {
    let flag = true;
    if (!description) {
        document.getElementById("description").classList.add("is-invalid");
        flag = false
    } else {
        document.getElementById("description").classList.remove("is-invalid");
        flag = true;
    }
    if (amount <= 0) {
        document.getElementById("amount").classList.add("is-invalid");
        flag = false;
    } else {
        document.getElementById("amount").classList.remove("is-invalid")
        flag = true;
    }
    return flag
}
