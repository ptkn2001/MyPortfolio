const contentMainEl = document.querySelector('#work_content_main');
const content2El = document.querySelector('#work_content_2');
const content3El = document.querySelector('#work_content_3');

contentMainEl.addEventListener('click', event => {
    let url = "https://dkn-Portfolio.herokuapp.com/";
    window.open(url);
});

content2El.addEventListener('click', event => {
    let url = "https://dkn-findmyplate.herokuapp.com/";
    window.open(url);
});

content3El.addEventListener('click', event => {
    let url = "https://npems2.herokuapp.com/";
    window.open(url);
});