const imageArray = [
    {
        img: "1.png", 
        alt:"画像1", 
        text: "ブックマーク"
    }, 
    {
        img: "2.png", 
        alt:"画像2", 
        text: "メッセージ"
    }
];

const ul = document.getElementById('js-list');
const loading = document.getElementById('js-loading');
const fragment = document.createDocumentFragment();

const createLoading = () => {
    const loadingImg = document.createElement('img');
    loadingImg.src = 'loading-circle.gif';
    loading.appendChild(loadingImg);
};

const addList = (val) => {
    for (let i = 0; i < val.length; i++) {
        const li = document.createElement('li');
        const img = document.createElement('img');
    
        li.textContent = val[i].text;
        img.src = val[i].img;
        img.alt = val[i].alt;
    
        fragment.appendChild(li).appendChild(img);
    }

    ul.appendChild(fragment);
    loading.removeChild(loading.firstChild);
};

new Promise((resolve) => {
    createLoading();
    setTimeout(() => {
        resolve(imageArray);
    }, 3000);

}).then((val) => {
    addList(val);
});
