const jQuery = require("./jQuery");

document.title = 'Nowy tytuł - JAVASCRIPT';

let links = document.getElementsByClassName('link-blog');

links[0].style.fontSize = '40px';

for (let link of links)
    llink.style.fontSize = '40px';

function run() {
    updateHeader();
}

function updateHeader() {
    let header = document.getElementById('main-header');
    header.innerHTML = "ZMIENIONO HEADER JS!!!";
}



jQuery(document).ready(function () {

    alert('loaded');

});