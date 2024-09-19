let starsCCount = 0;

function stars(count) {
    resetStars();
    switch (count) {
        case 1:
            document.getElementById("starOne").classList.remove("fa-regular")
            document.getElementById("starOne").classList.add("fa-solid")
            starsCCount = count
            break;
        case 2:
            document.getElementById("starOne").classList.remove("fa-regular")
            document.getElementById("starOne").classList.add("fa-solid")
            document.getElementById("starTwo").classList.remove("fa-regular")
            document.getElementById("starTwo").classList.add("fa-solid")
            starsCCount = count
            break;
        case 3:
            document.getElementById("starOne").classList.remove("fa-regular")
            document.getElementById("starOne").classList.add("fa-solid")
            document.getElementById("starTwo").classList.remove("fa-regular")
            document.getElementById("starTwo").classList.add("fa-solid")
            document.getElementById("starThree").classList.remove("fa-regular")
            document.getElementById("starThree").classList.add("fa-solid")
            starsCCount = count
            break;
        case 4:
            document.getElementById("starOne").classList.remove("fa-regular")
            document.getElementById("starOne").classList.add("fa-solid")
            document.getElementById("starTwo").classList.remove("fa-regular")
            document.getElementById("starTwo").classList.add("fa-solid")
            document.getElementById("starThree").classList.remove("fa-regular")
            document.getElementById("starThree").classList.add("fa-solid")
            document.getElementById("starFour").classList.remove("fa-regular")
            document.getElementById("starFour").classList.add("fa-solid")
            starsCCount = count
            break;
        case 5:
            document.getElementById("starOne").classList.remove("fa-regular")
            document.getElementById("starOne").classList.add("fa-solid")
            document.getElementById("starTwo").classList.remove("fa-regular")
            document.getElementById("starTwo").classList.add("fa-solid")
            document.getElementById("starThree").classList.remove("fa-regular")
            document.getElementById("starThree").classList.add("fa-solid")
            document.getElementById("starFour").classList.remove("fa-regular")
            document.getElementById("starFour").classList.add("fa-solid")
            document.getElementById("starFive").classList.remove("fa-regular")
            document.getElementById("starFive").classList.add("fa-solid")
            starsCCount = count
            break;

        default:
            break;
    }
}

function resetStars() {
    document.getElementById("starOne").classList.remove("fa-solid")
    document.getElementById("starOne").classList.add("fa-regular")
    document.getElementById("starTwo").classList.remove("fa-solid")
    document.getElementById("starTwo").classList.add("fa-regular")
    document.getElementById("starThree").classList.remove("fa-solid")
    document.getElementById("starThree").classList.add("fa-regular")
    document.getElementById("starFour").classList.remove("fa-solid")
    document.getElementById("starFour").classList.add("fa-regular")
    document.getElementById("starFive").classList.remove("fa-solid")
    document.getElementById("starFive").classList.add("fa-regular")
}

function addItem() {
    let name = document.getElementById("name").value;
    let price = Number(document.getElementById("price").value);
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;
    let availabile = document.getElementById("checkBox").checked ? '<i class="fa-solid fa-check text-success"></i>' : '<i class="fa-solid fa-x text-danger"></i>'
    let stars = starsCount(starsCCount);
    if (validInputs(name, price, category, description)) {



        document.getElementById("tableAdd1").innerHTML += `<tr>
                    <td>
                        ${name}
                    </td>
                    <td>
                        ${price}
                    </td>
                    <td>
                        ${category}
                    </td>
                    <td>
                        ${description}
                    </td>
                    <td>
                        ${availabile}
                    </td>
                    <td>
                        ${stars}
                    </td>
                </tr>` ;
        resetStars();
        starsCCount = 0;
        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("category").value = "";
        document.getElementById("description").value = "";
        document.getElementById("checkBox").checked = false;
    }
};

function validInputs(name, price, category, description) {
    let isValid = true;
    let arr = [name, price, category, description];
    let arrName = ["name", "price", "category", "description"];

    if (starsCCount == 0) {
        isValid = false;
        document.getElementById("idRating").style.color = "red"
    } else {
        document.getElementById("idRating").style.color = ""
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "") {
            document.getElementById(arrName[i]).classList.add("is-invalid")
            isValid = false;
        } else {
            document.getElementById(arrName[i]).classList.remove("is-invalid")
        }
    }
    if (isNaN(price) || price <= 0) {
        isValid = false;
        document.getElementById("price").classList.add("is-invalid");
    } else {
        document.getElementById("price").classList.remove("is-invalid");
    }
    return isValid;
}


function starsCount(count) {
    switch (count) {
        case 0:
            return (`
            <i class="star fa-regular fa-star"></i>
            <i class="star fa-regular fa-star"></i>
            <i class="star fa-regular fa-star"></i>
            <i class="star fa-regular fa-star"></i>
            <i class="star fa-regular fa-star"></i>`)
            break;
        case 1:
            return (`
            <i class="star fa-solid fa-star"></i>
            <i class="star fa-regular fa-star"></i>
            <i class="star fa-regular fa-star"></i>
            <i class="star fa-regular fa-star"></i>
            <i class="star fa-regular fa-star"></i>`)
            break;
        case 2:
            return (`
            <i class="star fa-solid fa-star"></i>
            <i class="star fa-solid fa-star"></i>
            <i class="star fa-regular fa-star"></i>
            <i class="star fa-regular fa-star"></i>
            <i class="star fa-regular fa-star"></i>`)

            break;
        case 3: return (`
            <i class="star fa-solid fa-star"></i>
            <i class="star fa-solid fa-star"></i>
            <i class="star fa-solid fa-star"></i>
            <i class="star fa-regular fa-star"></i>
            <i class="star fa-regular fa-star"></i>`)

            break;
        case 4: return (`
            <i class="star fa-solid fa-star"></i>
            <i class="star fa-solid fa-star"></i>
            <i class="star fa-solid fa-star"></i>
            <i class="star fa-solid fa-star"></i>
            <i class="star fa-regular fa-star"></i>`)

            break;
        case 5: return (`
            <i class="star fa-solid fa-star"></i>
            <i class="star fa-solid fa-star"></i>
            <i class="star fa-solid fa-star"></i>
            <i class="star fa-solid fa-star"></i>
            <i class="star fa-solid fa-star"></i>`)

            break;

        default:
            break;
    }
}

console.log(typeof (9));
