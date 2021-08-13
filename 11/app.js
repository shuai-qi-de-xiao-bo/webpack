const fetch = require('node-fetch');

const url = 'https://www.ruanyifeng.com/blog/2021/07/weekly-issue-169.html';

const getContent = async () => {
    let res = await fetch(url);
    let body = await res.text();
    console.log(body);
}
getContent();