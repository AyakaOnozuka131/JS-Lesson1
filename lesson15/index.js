const ul = document.getElementById('js-list');
const button = document.getElementById('js-button');
const modal = document.getElementById('js-modal');
const modalButton = document.getElementById('js-modal-button');

const createLoading = () => {
    const li = document.createElement("li");
    const loadingImg = document.createElement('img');

    li.id = "js-loading";
    loadingImg.src = 'loading-circle.gif';
    ul.appendChild(li).appendChild(loadingImg);
};

const showModal = () => modal.classList.add('isShow');

const hideModal = () => modal.classList.remove('isShow');

const removeLoading = () => document.getElementById('js-loading').remove();

const removeButton = () => document.getElementById('js-button').remove();

const createErrorMessage = (error) => {
    const li = document.createElement("li");
    li.textContent =`エラー内容：${error.message}`;
    ul.appendChild(li);
    console.error(error.message);
};

/**
 * getInputValue関数
 * モーダル内のinputの値を取得し、その値を返す
 */
const getInputValue = () => {
  const inputNumber = document.getElementById('js-input-number');
  const inputText = document.getElementById('js-input-text');
  return {
    age: inputNumber.value,
    name: inputText.value
  }
};

/**
 * Async関数 
 * @return {Array} 
 */
const fetchData = async (endpoint) => {
    try {
        const response = await fetch(endpoint) // 中身はresponseオブジェクトを含むpromise
        const json = await response.json(); //response オブジェクトから JSON を抽出
        return json.data;

    } catch(error) {
        throw new Error(error);
    } 
};

/**
 * Async関数
 * fetchData関数から値が返ってきた後、その値を返す
 */
const jsonUrl = 'https://myjson.dit.upm.es/api/bins/5tqv';
const fetchListData = async () => {
    createLoading();
    try {
        const data = await fetchData(jsonUrl);
        if( data.length === 0 ) {
            const li = document.createElement("li");
            li.textContent ='適切なデータが見つかりませんでした';
            ul.appendChild(li);
        }
        return data;

    } catch(error) {
        createErrorMessage(error);

    }  finally {
        removeLoading();
    }
};

/**
 * renderList関数
 * domのul内にli,aタグを作成し、fetchListDataで渡ってきた値を展開する
 */
const renderList = (data, inputValue) => {
    // 入力した値の確認用console（仕様には書いていないが、確認のため）
    console.log(`年齢は${inputValue.age}です`);
    console.log(`名前は${inputValue.name}です`);
    const value = data;
    const fragment = document.createDocumentFragment();
    if( value ) {
        for (let i = 0; i < value.length; i++) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            const img = document.createElement('img');
        
            a.href = `${value[i].a}.html`;
            a.textContent = `${value[i].text}`;
            img.src = value[i].img;
            img.alt = value[i].alt;
        
            fragment.appendChild(li).appendChild(a).appendChild(img);
        };
    
        ul.appendChild(fragment);
    };
};

button.addEventListener('click' , () => {
  showModal();
});

modalButton.addEventListener('click' , async (event) => {
  hideModal();
  event.preventDefault();
  removeButton();
  const data = await fetchListData();
  const inputValue = getInputValue();
  renderList(data, inputValue);
});
