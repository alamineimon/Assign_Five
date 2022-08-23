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

