var Print = function () { return console.log("podmianka styli."); };
Print();
var pierwszy = function () {
    var element = document.createElement("a");
    //Assign different attributes to the element. 
    element.id
    element.onclick = changestyle1();
};
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
