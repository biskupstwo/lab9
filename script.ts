let Print = () => console.log("podmianka styli.");
Print();

const dynamicstyle = () => {
    const headd: HTMLHeadElement = document.head;
    let link: HTMLLinkElement = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css';
    headd.append(link);
}

dynamicstyle();
//nwm

const changestyle1 = () => {
    const oldlink: HTMLLinkElement = document.getElementsByTagName("link").item(0);
    let link: HTMLLinkElement = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css';
    document.getElementsByTagName("head").item(0).replaceChild(link, oldlink);
    console.log("zmiana stylu na 1");
}

const changestyle2 = () => {  
    const oldlink: HTMLLinkElement = document.getElementsByTagName("link").item(0);
    let link2: HTMLLinkElement = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'style2.css';
    document.getElementsByTagName("head").item(0).replaceChild(link2, oldlink);
    console.log("zmiana stylu na 2");
}



const generuj = () => {
    const navbarr: HTMLElement = document.getElementById("header");
    const element: HTMLAnchorElement = document.createElement("a");
    element.id = "alink";
    element.innerHTML = "Strona 1";
    element.addEventListener('click', changestyle1);
    navbarr.appendChild(element);

    let imie: HTMLElement = document.createElement("b");
    imie.id = "imie";
    imie.innerHTML = "Jan Biskupski";
    navbarr.appendChild(imie);

    let element2: HTMLAnchorElement = document.createElement("a");
    element2.id = "alink";
    element2.innerHTML = "Strona 2";
    element2.addEventListener('click', changestyle2);
    navbarr.appendChild(element2);
}

generuj();

