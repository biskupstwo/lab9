var Print = function () { return console.log("podmianka styli."); };
Print();
var changestyle1 = function () {
    var oldlink = document.getElementsByTagName("link").item(0);
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css';
    link.id = 'custom-style';
    document.getElementsByTagName("head").item(0).replaceChild(link, oldlink);
    console.log("zmiana stylu na 1");
};
var changestyle2 = function () {
    var oldlink = document.getElementsByTagName("link").item(0);
    //document.getElementsByTagName("link").removeE();
    var link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'style2.css';
    link2.id = 'custom-style';
    document.getElementsByTagName("head").item(0).replaceChild(link2, oldlink);
    console.log("zmiana stylu na 2");
};
var generuj = function () {
    var navbarr = document.getElementById("#header");
    var element = document.createElement("a");
    element.id = "alink";
    element.innerHTML = "Strona 1";
    element.addEventListener('click', changestyle1);
    navbarr.appendChild(element);
    var imie = document.createElement("b");
    imie.id = "imie";
    imie.innerHTML = "Jan Biskupski";
    navbarr.appendChild(imie);
    var element2 = document.createElement("a");
    element2.id = "alink";
    element2.innerHTML = "Strona 2";
    element2.addEventListener('click', changestyle2);
    navbarr.appendChild(element2);
};
generuj();
