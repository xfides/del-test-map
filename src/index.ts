import axios from 'axios';


const findBtn = document.querySelector('.address__btn')!;
const findInput = document.querySelector('.address__input')! as HTMLInputElement;

findBtn.addEventListener('click', showAddressOnMap)

function showAddressOnMap() {
    const userInput = getInputValue(findInput);
    let urlString:string = getData(userInput);
    sendRequest(urlString);
}

function getInputValue(inputDomElem: HTMLInputElement): string {
    return inputDomElem.value.trim();
}

function getData(address:string){
    const urlStirng:string = 'https://geocode-maps.yandex.ru/1.x/?apikey=bd32ba25-0301-432f-8889-b11c5c83891d&format=json&geocode=';

    return urlStirng+address;
}

let address:string;

function sendRequest(urlString:string){
    axios.get(urlString)
        .then(function (response) {
            address = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
            document.getElementById('map')!.innerHTML = "";
            ymaps.ready(init);
            // handle success
        })
}
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.




function init(){
        // Создание карты.
        new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: address.split(' ').map((elem)=>{return +elem}).reverse(),
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });
    }


