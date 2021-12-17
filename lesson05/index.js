// 配列の定義
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

// 変数の定義
const ul = document.getElementById('js-list');
const fragment = document.createDocumentFragment();

// Promiseオブジェクトの定義
// Promiseオブジェクトの第一引数はresolve、第二引数にrejectを設定する
// 今回は要件として「解決された値として受け取る」のでresolveのみを定義する
const promise = new Promise((resolve) => {
    // 引数に値（今回は配列）を渡す
    resolve(imageArray);

}).then((val) => {
    // 第一引数にて、resolve関数で渡した値（imageArray）を受け取ることができる
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
