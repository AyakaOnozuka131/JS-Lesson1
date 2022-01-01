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
    document.getElementById('js-loading').remove();
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

/**
 * Promiseを実行し、resolveの値を返す関数
 * @return {promise object} 
 */
const fetchData = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(imageArray);
        }, 3000);
    });
};

/**
 * Async関数
 * fetchDataで値が返ってきた後、addList関数にその値を渡す
 */
const execution = async () => {
    await createLoading();
    const data = await fetchData();
    removeLoading();
    addList(data);
};

execution();
