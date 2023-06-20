const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    const text = input.value;
    if(text === '') {
        input.focus();
        return;
    }

    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({block: 'center'});

    input.value = '';
    input.focus();

}
let id = 0;

function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    itemRow.innerHTML = `<div class="item" data-id=${id}>
                            <span class="item__name">${text}</span>
                            <button class="item__delete" data-id=${id}>
                             Delete
                            </button>
                            </div
                            <div class=""item__driver"></div>`;
    id++;
    return itemRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', (event) => {
    console.log('key');
    if(event.key === 'Enter') {
        onAdd();
    }
});

