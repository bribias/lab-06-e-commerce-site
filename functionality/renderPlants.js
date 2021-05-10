function renderPlants(plants) {
    const li = document.createElement('li');
    li.className = plants.category;
    li.title = plants.description;

    const h3 = document.createElement('h3');
    h3.textContent = plants.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + plants.image;
    img.alt = plants.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + plants.price.toFixed(2);
    // const usd = plants.price.toLocaleString('en-US', { 
    //     style: 'currency', 
    //     currency: 'USD' 
    // });
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = plants.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderplants;