const ul = document.getElementById('js-list');

const createLoading = () => {
    const li = document.createElement("li");
    const loadingImg = document.createElement('img');

    li.style.listStyle = "none";
    li.id = "js-loading";
    loadingImg.src = 'loading-circle.gif';
    ul.appendChild(li).appendChild(loadingImg);
};

/**
 * Promiseを実行し、rejectの値を返す関数
 * @return {promise object} 
 */
const fetchData = () => {
    createLoading();
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            reject(new Error("ERROR!"));
        }, 3000);
    });
};

/**
 * fetchDataで返ってきたエラーをキャッチしてconsoleにエラーを出力する
 */
fetchData().then((val) => {
    console.log(val);

}).catch((error) => {
    console.error(error);
});
