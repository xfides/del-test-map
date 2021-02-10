import axios from 'axios';

//bd32ba25-0301-432f-8889-b11c5c83891d - secret for yandex maps geokoder

const findBtn = document.querySelector('.address__btn')!;
const findInput = document.querySelector('.address__input')! as HTMLInputElement;

findBtn.addEventListener('click', showAddressOnMap)

function getInputValue(inputDomElem: HTMLInputElement): string {
    return inputDomElem.value.trim();
}

function getData(address:string){
    const urlStirng:string = 'https://geocode-maps.yandex.ru/1.x/?apikey=bd32ba25-0301-432f-8889-b11c5c83891d&format=json&geocode=';

    return urlStirng+address;
}

function sendRequest(urlString:string){
    console.log(54345);
    axios.get(urlString)
        .then(function (response) {
            // handle success
            console.log(13232213);
            console.log(response.data.response);
        })
}

function showAddressOnMap() {
    const userInput = getInputValue(findInput);
    let urlString:string = getData(userInput);
    sendRequest(urlString);
}

