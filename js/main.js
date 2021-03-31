function changeColor() {
   
    const h2Element = document.getElementById('important-h2-element');
    if (h2Element.style.color === 'red') {
        h2Element.style.color = 'black';
        h2Element.style.fontSize = '24px';
        // h2Element.innerText = 'Some h2 element';

    } else {
    h2Element.style.color = 'red';
    h2Element.style.fontSize = '36px';
    // h2Element.innerText = 'Hello world!';
}

}


