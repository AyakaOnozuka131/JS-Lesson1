const imageUrl = ['bookmark.png', 'message.png'];
const ul = document.getElementById('js-list');
const fragment = document.createDocumentFragment();

for (let i = 0; i < imageUrl.length; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    a.href = `a${i+1}.html`;
    a.textContent = `a${i+1}`;
    img.src = `/img/${imageUrl[i]}`;

    fragment.appendChild(li).appendChild(a).insertAdjacentElement('afterbegin', img);
}

ul.appendChild(fragment);
