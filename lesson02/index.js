const insertObj = {
    anchorUrl: '1.html',
    anchorText: 'これです',
    imageUrl: 'bookmark.png',
    imageAlt: 'ブックマーク'
};

const createElem = (obj)=> {
    const ul = document.getElementById('js-list');
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    a.href = obj.anchorUrl;
    a.textContent = obj.anchorText;
    img.src = obj.imageUrl;
    img.alt = obj.imageAlt;

    ul.appendChild(li).appendChild(a);
    a.insertAdjacentElement('afterbegin', img);
};

document.addEventListener('DOMContentLoaded', () => {
    createElem(insertObj);
});
