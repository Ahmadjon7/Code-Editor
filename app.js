const htmlEl = document.querySelector("#html");
const cssEl = document.querySelector("#css");
const jsEl = document.querySelector("#js");
const outputEl = document.querySelector("#output");

function run(){
    
    localStorage.setItem('htmlEl',htmlEl.value);
    localStorage.setItem("cssEl",cssEl.value);
    localStorage.setItem("jsEl",jsEl.value);

    outputEl.contentDocument.body.innerHTML =
     `<style>${localStorage.cssEl}</style>` + localStorage.htmlEl;

    outputEl.contentWindow.eval(localStorage.jsEl);
}

htmlEl.addEventListener('keyup',()=>{run()})
cssEl.addEventListener('keyup',()=>{run()})
jsEl.addEventListener('keyup',()=>{run()})

htmlEl.value = localStorage.htmlEl
cssEl.value = localStorage.cssEl
jsEl.value = localStorage.jsEl