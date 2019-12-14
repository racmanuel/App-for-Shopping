const listofShop = document.getElementById('list-products');

eventListeners();

//Like a Main in Java
function eventListeners() {
    document.querySelector('#form').addEventListener('submit', addProduct);
    listofShop.addEventListener('click', deleteProduct);
    //Load Contend from Local Storage
    document.addEventListener('DOMContentLoaded', localStorageReady)
}

function addProduct(e) {
    e.preventDefault();
    //Get a value of the input
    const product = document.getElementById('product').value;
    //Delete
    const buttonDelete = document.createElement('a');
    buttonDelete.classList = 'deleteProduct';
    buttonDelete.innerText = 'X';

    //Delete list items
    listofShop.addEventListener('click', deleteProduct);
    //Create a list and add to the list
    const list = document.createElement('li');
    list.classList = 'collection-item';
    list.innerText = product;
    list.appendChild(buttonDelete);
    listofShop.appendChild(list);

    //Add to LocalStorage
    addProductLocalStorage(product);
}

function deleteProduct(e) {
    e.preventDefault();
    if (e.target.className === 'deleteProduct') {
        console.log(e.target.parentElement.remove());
        deleteLocalStorage(e.target.parentElement.innerText);
        
    }
}

function addProductLocalStorage(product) {
    let products;
    products = getProductsLocalStorage();
    //Add a new product
    products.push(product);
    //Covert a string to a array for local storage
    localStorage.setItem('products', JSON.stringify(products));
}

function getProductsLocalStorage() {
    let products;
    if (localStorage.getItem('products') === null) {
        products = [];
    } else {
        products = JSON.parse(localStorage.getItem('products'));
    }
    return products;
}

function localStorageReady() {
    let products
    products = getProductsLocalStorage();
    products.forEach(function (product) {
        const buttonDelete = document.createElement('a');
        buttonDelete.classList = 'deleteProduct';
        buttonDelete.innerText = 'X';

        //Delete list items
        listofShop.addEventListener('click', deleteProduct);
        //Create a list and add to the list
        const list = document.createElement('li');
        list.classList = 'collection-item';
        list.innerText = product;
        list.appendChild(buttonDelete);
        listofShop.appendChild(list);
    }); 
}
function deleteLocalStorage(product) {
    let products, productDelete;

    productDelete = product.substring(0,product.length-1);

    products = getProductsLocalStorage();
    
    products.forEach(function (product,index) {
        if (productDelete === product) {
            products.splice(index,1);
        }
    });
    localStorage.setItem('products', JSON.stringify(products));
}