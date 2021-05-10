import renderPlant from '../renderPlants';

const test = QUnit.test;

QUnit.module('Render Plants');

test('renders a plant', assert => {
    // arrange
    const fern = {
        id: 'fern',
        name: 'Kimberly Queen Fern',
        image: 'fern.jpeg',
        description: 'Graceful and timeless. This soft fern is low-maintenance and easy to care for.',
        price: 35.00,
        cost: 15.00
    };
    const expected = '<li class="fern" title="Graceful and timeless. This soft fern is low-maintenance and easy to care for."><h3>Kimberly Queen Fern</h3><img src="../images/fern.jpeg" alt="Fern Image"><p class="price">$35.00<button value="fern">Add</button></p></li>';

    // act
    const dom = renderPlant(fern);
    const html = dom.outerHTML;

    // assert
    assert.equal(html, expected);
});