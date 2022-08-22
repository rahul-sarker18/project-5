const cart =[];

function displayProduct(){
    const cartContainer = document.getElementById("products-cart");
    cartContainer.textContent = '';

    for(let i =0; i <5; i++){
        cart.length[i];
        const tr = document.createElement("tr");

            tr.innerHTML = `
            <th>${i+1}</th>
            <td>${cart[i].pdName}</td>
            `;

        cartContainer.appendChild(tr);
    }
}

function addToCart(element){
    const pdName = element.parentNode.parentNode.children[0].innerText;
    element.disabled = true;
  
    const pd ={
        pdName: pdName
    }
    cart.push(pd);
    console.log(cart);

    displayProduct();
   
}


// calclutar section stard 

function calclutar(){
    const parPlayer =document.getElementById('par-player');
    const parPlayertring = parPlayer.value;
    const parPlayerNumber = parseInt(parPlayertring);

    console.log(cart.length)

    const allPlayer = parPlayerNumber * cart.length;

    // console.log(allPlayer)

    const playerCosd =document.getElementById('player-cosd');
    const allPlayerCosd = playerCosd.innerText;
    
    playerCosd.innerText =allPlayer;

  return allPlayer;

}

// calclutar total 
function calclutarTotals(){
    const managerInput = document.getElementById('ManagerInput').value;
    const manager = parseInt(managerInput);

    const coachInput =document.getElementById('coach-input').value;
    const coach = parseInt(coachInput);

    const total= manager + coach + calclutar();
   
    const totalElemant =document.getElementById('total-elemant')
    const totalInner = totalElemant.innerText;

    totalElemant.innerText = total;

    console.log(total);

    calclutar();
}
