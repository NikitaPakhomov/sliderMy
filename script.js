let BtnNext = document.getElementsByClassName('button-next')[0];
let BtnPrev = document.getElementsByClassName('button-prev')[0];
let number = 0;
let img = document.querySelectorAll('.slider-item')

function Next() {
    if (number == img.length - 1) {
        number = 0;
    } else { number++; }
    changeImg(number);
}

function Prev() {
    if (number == 0) {
        number = img.length - 1;
    } else {
        number--;
    }
    changeImg(number);

}

function changeImg(count) {
    for (let i = 0; i < 3; i++) {
        img[i].classList.remove('active');
    }
    img[count].classList.add('active');
    console.log(img[count]);
}


BtnNext.addEventListener("click", Next);

BtnPrev.addEventListener("click", Prev);
