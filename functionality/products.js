import plants from '../functionality/plants.js';
import { renderPlants } from '../functionality/renderPlants.js';

const ul = document.querySelector('#plants');

for (const plant of plants) {
    const dom = renderPlants(plant);
    ul.append(dom);
}