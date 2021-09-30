function addToCart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('row');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);
    var img = document.createComment('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var cartItems = document.getElementsByClassName('card-title');
    cartItems.append(selectedItem);
}