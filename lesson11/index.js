const jsonUrl = 'https://myjson.dit.upm.es/api/bins/77w5';

const ul = document.getElementById('js-list');

const createLoading = () => {
    const li = document.createElement("li");
    const loadingImg = document.createElement('img');

    li.style.listStyle = "none";
    li.id = "js-loading";
    loadingImg.src = 'loading-circle.gif';
    ul.appendChild(li).appendChild(loadingImg);
};

const removeLoading = () => document.getElementById('js-loading').remove();

const addList = (val) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < val.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');
    
        a.href = `${val[i].a}.html`;
        a.textContent = `${val[i].text}`;
        img.src = val[i].img;
        img.alt = val[i].alt;
    
        fragment.appendChild(li).appendChild(a).appendChild(img);
    }

    ul.appendChild(fragment);
};

/**
 * Promiseを実行し、resolveの値を返す関数
 * @return {promise object} 
 */
 const fetchData = (json) => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(json);
        }, 3000);
    });
};

/**
 * Async関数
 * responseで値が返ってきた後、addList関数にその値を渡す
 */
const execution = async (url) => {
    createLoading();

    try {
        const response = await fetch(url) // 中身はresponseオブジェクトを含むpromise
        const json = await response.json(); //response オブジェクトから JSON を抽出
        const data = await fetchData(json.data); //jsonをfetchData関数に渡す
        addList(data);

    } catch(error) {
        console.error(error);

    }  finally {
        removeLoading();
    }
};

execution(jsonUrl);
