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

new Promise((resolve) => {
    setTimeout(() => {
        resolve(imageArray);
    }, 3000);

}).then((val) => {
    for (let i = 0; i < val.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');
    
        a.href = `/${val[i].to}`;
        a.textContent = `${val[i].text}`;
        img.src = `${val[i].img}`;
        img.alt = `${val[i].alt}`;
    
        fragment.appendChild(li).appendChild(a).insertAdjacentElement('afterbegin', img);
    }

    // ulリスト内にfragmentを追加する
    ul.appendChild(fragment);
});
