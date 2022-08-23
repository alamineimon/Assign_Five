/*
//Player Name in this Array *************************Vip
const playerNameArray = []

function displayPlayerName() {
    const perPlayerTableName = document.getElementById('totalBestPlayerName')
    perPlayerTableName.innerHTML = playerNameArray.length

    const playerName = document.getElementById('perPlayerName')
    playerName.innerText = ''
    
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <th></th>
    <td>Player Name</td>
    <td>${playerNameArray.length}</td>
    `
    playerName.appendChild(tr)

    for (let i = 0; i < playerNameArray.length; i++){
        const totalName = playerNameArray[i].playerName

        const tr = document.createElement('tr')
        tr.innerHTML = `
        <tr>
        <th></th> 
        <td>${totalName}</td>
        </tr>
        `
        playerName.appendChild(tr)
    }
}

function addToCart(elemnet) {
    const playerName = elemnet.parentNode.children[0].innerText
    const PlayerNameObject = {
        playerName: playerName
    }
    playerNameArray.push(PlayerNameObject)
    // console.log(playerName);
    displayPlayerName(playerNameArray)
}
*/




//Player Name in this Array *************************Vip
const playerNameArray = []

function displayPlayerName() {
    const playerName = document.getElementById('perPlayerName')
    playerName.innerText = ''
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <th></th>
    <td>Player Name</td>
    <td></td>
    `
    playerName.appendChild(tr)
    for (let i = 0; i < playerNameArray.length; i++){
        if (i > 4) {
            alert("You can't add more than 5")
            return
        } 
        const totalName = playerNameArray[i].playerName
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <tr>
        <th>${i + 1}</th>
        <td>${totalName}</td>
        </tr>
        `
        playerName.appendChild(tr)
    }
    const perPlayerTableName = document.getElementById('totalBestPlayerName')
    perPlayerTableName.innerHTML = playerNameArray.length
}

// Select Button ********************

function addToCart(elemet) {
    const btnDisable = elemet.setAttribute("disabled"," ")
    const playerName = elemet.parentNode.children[0].innerText
    const PlayerNameObject = {
        playerName: playerName
    }
    playerNameArray.push(PlayerNameObject)
    // console.log(playerName);
    displayPlayerName(playerNameArray)
}

// budget Section**********************************

function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId)
    const inputFieldValueStr = inputField.value
    const inputFieldValue = parseFloat(inputFieldValueStr)
    inputField.value = ''
    return inputFieldValue
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId)
    const textElementValue = textElement.innerText
    return textElementValue
}

function setTextElementValueById(elementId, newValue) {
    const textTotalElement = document.getElementById(elementId)
    textTotalElement.innerText = newValue
}

//calculate button************************************************

document.getElementById('calculat-btn').addEventListener('click', function () {


    const perPlayerInput = getInputFieldValueById('perPlayerInputField')
    // console.log(perPlayerInput);


    const playerQuentity = getTextElementValueById('totalBestPlayerName')
    // console.log(playerQuentity);




    const totalAmount = perPlayerInput * playerQuentity
    // console.log(totalAmount);

    let totalExpenceValueStr = document.getElementById('totalExpence')
    let totalExpenceValue = totalExpenceValueStr.innerText
    let totalExpence = parseFloat(totalExpenceValue)

    totalExpenceValueStr.innerText = totalAmount


})









//calculate Total button************************************************



document.getElementById('calculat-total-btn').addEventListener('click', function () {

    const managerInput = getInputFieldValueById('managerInput')
    // console.log(managerInput);
    
    const coachInput = getInputFieldValueById('coachInput')
    // console.log(coachInput);


    const totalInput = coachInput + managerInput
    // console.log(totalInput);
    

//need total enter amount fron calculate button
    let totalExpenceValueStr = document.getElementById('totalExpence')
    let totalExpenceValue = totalExpenceValueStr.innerText
    let totalExpence = parseFloat(totalExpenceValue)
    totalExpence.innerText = totalInput


    const totalExpenceAmount = totalExpence + totalInput

    const totalAmountValueStr = document.getElementById('totalAmount')
    const totalAmountValues = totalAmountValueStr.innerText
    const totalAmountValue = parseFloat(totalAmountValues)


    totalAmountValueStr.innerText = totalExpenceAmount




})



