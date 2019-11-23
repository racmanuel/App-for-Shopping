const listofShop = document.getElementById('list-products');

eventListeners();

//Like a Main in Java
function eventListeners() {
    document.querySelector('#form').addEventListener('submit', addProduct);
}

function addProduct(e) {
    e.preventDefault();
    //Get a value of the input
    const product = document.getElementById('product').value;
    //Delete
    const buttonDelete= document.createElement('a');
    buttonDelete.classList = 'deleteProduct waves-effect waves-light btn-small #e53935 red darken-1';
    buttonDelete.innerHTML =`<i class="tiny material-icons deleteIcon">clear</i>`;

    //Delete list items
    listofShop.addEventListener('click',deleteProduct);
    //Create a list and add to the list
    const list = document.createElement('li');
    list.classList='collection-item';
    list.innerText= product;
    list.appendChild(buttonDelete);
    listofShop.appendChild(list);
}

function deleteProduct(e) {
    e.preventDefault();
    console.log('diste click')
}