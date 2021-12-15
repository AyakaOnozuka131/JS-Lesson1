const imageArray = [
    {
        to: "bookmark.html", 
        img: "1.png", 
        alt:"画像1", 
        text: "ブックマーク"
    }, 
    {
        to: "message.html", 
        img: "2.png", 
        alt:"画像2", 
        text: "メッセージ"
    }
];
const ul = document.getElementById('js-list');
const fragment = document.createDocumentFragment();

for (let i = 0; i < imageArray.length; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    a.href = `/${imageArray[i].to}`;
    a.textContent = `${imageArray[i].text}`;
    img.src = `${imageArray[i].img}`;
    img.alt = `${imageArray[i].alt}`;

    fragment.appendChild(li).appendChild(a).insertAdjacentElement('afterbegin', img);
}

ul.appendChild(fragment);
