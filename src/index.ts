import axios from 'axios';


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



    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });
        console.log(myMap)
    }
