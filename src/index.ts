import axios from 'axios';

// console.log(123224);

const findBtn = document.querySelector('.address__btn')!;
const findInput = document.querySelector('.address__input')! as HTMLInputElement;
//bd32ba25-0301-432f-8889-b11c5c83891d - secret for yandex maps geokoder
findBtn.addEventListener('click', showAddressOnMap)

function showAddressOnMap() {
    const userInput = getInputValue(findInput);
    let urlString:string = getData(userInput);
    let response = sendRequest(urlString);

    console.log(response);
}

function getInputValue(inputDomElem: HTMLInputElement): string {
    return inputDomElem.value.trim();
}

function getData(address:string){
    const urlStirng:string = 'https://geocode-maps.yandex.ru/1.x/?apikey=bd32ba25-0301-432f-8889-b11c5c83891d&format=json&geocode=';

    return urlStirng+address;
}

function sendRequest(urlString:string){
    return axios(urlString);
}

