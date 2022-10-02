const categoriesRef = document.querySelector('#categories');

const counter = parent => {return parent.childElementCount};
const message = elements => {
    elements.forEach(element => {
        const firstElem = element.firstElementChild;
        const secondElem = firstElem.nextElementSibling
        console.log(`Category: ${firstElem.textContent}`);
        console.log(`Elements: ${counter(secondElem)}`);
    });
};

const subCategories = categoriesRef.querySelectorAll('.item');
console.log(`Number of categories: ${counter(categoriesRef)}`);
message(subCategories);