let Print = () => console.log("podmianka styli.");
Print();

const changestyle1 = () => {
    var oldlink = document.getElementsByTagName("link").item(0);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css';
    link.id = 'custom-style';
    document.getElementsByTagName("head").item(0).replaceChild(link, oldlink);
    console.log("zmiana stylu na 1");
}

const changestyle2 = () => {
    var oldlink = document.getElementsByTagName("link").item(0);
    //document.getElementsByTagName("link").removeE();
    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'style2.css';
    link2.id = 'custom-style';
    document.getElementsByTagName("head").item(0).replaceChild(link2, oldlink);
    console.log("zmiana stylu na 2");
}
