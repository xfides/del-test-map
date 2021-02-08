const findBtn = document.querySelector('.address__btn')!;
const findInput = document.querySelector('.address__input')! as HTMLInputElement;

findBtn.addEventListener('click', showAddressOnMap)

function showAddressOnMap() {
    const userInput = getInputValue(findInput);
    console.log(userInput);
}


function getInputValue(inputDomElem: HTMLInputElement): string {
    return inputDomElem.value.trim();
}

