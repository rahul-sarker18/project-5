const cart =[];


function displayProduct(){
    const cartContainer = document.getElementById("products-cart");
    cartContainer.textContent = '';

    for(let i =0; i < cart.length; i++){

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
    parPlayer.value ='';

    // td.textContent ='';
    // const td = tr.children[0].length.innerText;
    // const tdnumber =parseInt(td);

    const allPlayer = parPlayerNumber * 5;

    console.log(allPlayer)

    const playerCosd =document.getElementById('player-cosd');
    const allPlayerCosd = playerCosd.innerText;
    
    playerCosd.innerText =allPlayer;
}