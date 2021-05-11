import plants from './plants';
import { renderPlants } from './renderPlants.js';

const ul = document.querySelector('#plants');

for (const plant of plants) {
    const dom = renderPlants(plant);
    ul.append(dom);
}
