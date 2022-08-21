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
    console.log(pdName);

    const pd ={
        pdName: pdName
    }
    cart.push(pd);
    console.log(cart);

    displayProduct();
}