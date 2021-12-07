const insertObj = {
    anchorUrl: '1.html',
    anchorText: 'これです',
    imageUrl: 'bookmark.png',
    imageAlt: 'ブックマーク'
};

const createElem= (obj)=> {
    const parentElement = document.getElementById('js-lists');
    const listElement = document.createElement('li');
    const anchorElement = document.createElement('a');
    const imageElement = document.createElement('img');

    anchorElement.href = obj.anchorUrl;
    anchorElement.textContent = obj.anchorText;
    imageElement.src = obj.imageUrl;
    imageElement.alt = obj.imageAlt;

    parentElement.appendChild(listElement);
    listElement.appendChild(anchorElement);
    anchorElement.insertAdjacentElement('afterbegin', imageElement);
};

document.addEventListener('DOMContentLoaded', () => {
    createElem(insertObj);
});