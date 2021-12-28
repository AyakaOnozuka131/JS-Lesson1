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

const createLoading = () => {
    const li = document.createElement("li");
    const loadingImg = document.createElement('img');

    li.style.listStyle = "none";
    li.id = "js-loading";
    loadingImg.src = 'loading-circle.gif';
    ul.appendChild(li).appendChild(loadingImg);
};

const removeLoading = () => {
    const li = document.getElementById('js-loading');

    ul.removeChild(li);
};

const addList = (val) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < val.length; i++) {
        const li = document.createElement('li');
        const img = document.createElement('img');
    
        li.textContent = val[i].text;
        img.src = val[i].img;
        img.alt = val[i].alt;
    
        fragment.appendChild(li).appendChild(img);
    }

    ul.appendChild(fragment);
};

const fetchData = () => {
    createLoading();
    promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(imageArray);
        }, 3000);
    });
    return promise;
};

fetchData().then((val) => {
    removeLoading();
    addList(val);
});
