import { addToCart } from './local-storage-utils.js';

export function renderPlants(plants) {
    const outerDiv = document.createElement('div');

    outerDiv.classList.add('product');
    
    const li = document.createElement('li');
    li.className = plants.category;
    li.title = plants.description;

    const h3 = document.createElement('h3');
    h3.textContent = plants.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = './images/' + plants.image;
    img.alt = plants.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + plants.price.toFixed(2);

    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'BUY ME';
    
    button.addEventListener('click', () => {
        addToCart(plants.id);
    });

    outerDiv.append(
        li,
        h3,
        img,
        p,
        button
    );

    return outerDiv;
}