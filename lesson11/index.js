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

const createErrorMessage = (error) => {
    const li = document.createElement("li");
    li.textContent =`エラー内容：${error.message}`;
    ul.appendChild(li);
    console.error(error.message);
};

/**
 * Async関数 
 * @return {Array} 
 */
const jsonUrl = 'http://myjson.dit.upm.es/api/bins/4tpn';
const fetchData = async () => {
    try {
        const response = await fetch(jsonUrl) // 中身はresponseオブジェクトを含むpromise
        const json = await response.json(); //response オブジェクトから JSON を抽出
        return json.data;

    } catch(error) {
        console.error(error);
    } 
};

/**
 * Async関数
 * fetchData関数から値が返ってきた後、その値を返す
 */
const fetchListData = async () => {
    createLoading();
    try {
        const data = await fetchData();
        if( data.length === 0 ) {
            throw new Error('データが空です。');
        }
        return data;

    } catch(error) {
        createErrorMessage(error);

    }  finally {
        removeLoading();
    }
};
