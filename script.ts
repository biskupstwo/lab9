let Print = () => console.log("podmianka styli.");
Print();

const changestyle1 = () => {
    const oldlink = document.getElementsByTagName("link").item(0);
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css';
    document.getElementsByTagName("head").item(0).replaceChild(link, oldlink);
    console.log("zmiana stylu na 1");
}

const changestyle2 = () => {  
    const oldlink = document.getElementsByTagName("link").item(0);
    let link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'style2.css';
    document.getElementsByTagName("head").item(0).replaceChild(link2, oldlink);
    console.log("zmiana stylu na 2");
}



const generuj = () => {
    const navbarr = document.getElementById("#header");
    const element = document.createElement("a");
    element.id = "alink";
    element.innerHTML = "Strona 1";
    element.addEventListener('click', changestyle1);
    navbarr.appendChild(element);

    let imie = document.createElement("b");
    imie.id = "imie";
    imie.innerHTML = "Jan Biskupski";
    navbarr.appendChild(imie);

    let element2 = document.createElement("a");
    element2.id = "alink";
    element2.innerHTML = "Strona 2";
    element2.addEventListener('click', changestyle2);
    navbarr.appendChild(element2);
}

generuj();

