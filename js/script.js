// Сохраняем иконки в переменные

const btnIconlinearGradient = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-intersect" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 
    10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5zm6-8V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2V6a2 2 0 0 1 2-2h5z"/>
    </svg>`;

const btnIconRadialGradient = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bullseye" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
    <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>`;

const btnIconMoon = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349
     8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 
     0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734
     1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0
      1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
    </svg>`;

const btnIconSun = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 
    8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 
    0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0
    .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
    </svg>`;

const btnIconDisco = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-tropical-storm" viewBox="0 0 16 16">
    <path d="M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
    <path d="M9.5 2c-.9 0-1.75.216-2.501.6A5 5 0 0 1 13 7.5a6.5 6.5 0 1 1-13 0 .5.5 0 0 1 1 0 5.5 5.5 0 0 0 8.001 4.9A5 5 0 0 1 3 7.5a6.5 6.5 0 0 1 13 0 .5.5 0 0 1-1 0A5.5 5.5 0 0 0 9.5 2zM8 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
    </svg>`;

const btnIconPause = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
    </svg>`;


// Сохраняем Ноды в переменные

const wrapper = document.querySelector(".wrapper");
const block = document.querySelectorAll(".color_block");
const btn = document.querySelectorAll(".menu_btn");
const infoText = document.querySelector(".info_wrapper");
const colorWrapper = document.querySelector(".color_wrapper");
const menuWrapper = document.querySelector(".menu_wrapper");


// Тут мы храним стандартны текущие значения переменных

const blockColor = ["#020024","#097969","#00d4ff"];
let gradientNow = "linear-gradient(45deg, #020024 0%, #097969 50%, #00d4ff 100%)";
let degreesNow = 45;
let percentNow = 50;

let circleMod = false;
let infoMod = false;
let darkMode = false;
let discoMode = false;


// Объявляем Функции

    // - тут все что связанно с генерацией цвета и его добавлением в HTML

function getColor() {
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
};

function getInfo() {
    const info = `<h2>HEX: ${blockColor};</h2><p>background: ${gradientNow};</p>`
    infoText.innerHTML = `${info}`;
};

function addColor(block) {
    const color = getColor();
    block.style.backgroundColor = `${color}`;
    return color;
};

function getGradient() {
    let degOrCircle = "";

    if( circleMod ) {
        degOrCircle = "radial-gradient(circle";
    } else {
        degOrCircle = `linear-gradient(${degreesNow}deg`;
    };

    if( infoMod ) getInfo();

    const gradient = `${degOrCircle}, 
        ${blockColor[0]} 0%, ${blockColor[1]} ${percentNow}%, ${blockColor[2]} 100%)`;
    gradientNow = gradient;
    wrapper.style.background = `${gradient}`;

    return gradient;
};

    //- тут функции для изменения значения degrees 

function changeDegreesRight() {
    if( degreesNow === 360 ) degreesNow = 0;
    degreesNow = degreesNow + 15;
};

function changeDegreesLeft() {
    if( degreesNow === 0 ) degreesNow = 360;
    degreesNow = degreesNow - 15;
};

    //- тут функции для изменения значения percent

function changePercentRight() {
    if( percentNow < 95 ) percentNow = percentNow + 5;
};

function changePercentLeft() {
    if( percentNow > 5 ) percentNow = percentNow - 5;
};

    //-тут мы включаем и отключаем различные модификаторы

function circleModOnOff() {
    if( !circleMod ) {
        btn[2].innerHTML = btnIconlinearGradient;
        btn[3].disabled = true;
        btn[4].disabled = true;
    } else {
        btn[2].innerHTML = btnIconRadialGradient;
        btn[3].disabled = false;
        btn[4].disabled = false;
    };

    circleMod = !circleMod;
};

function infoModOnOff() {
    infoText.classList.toggle("none");
    infoMod = !infoMod; 
};

function noneModOnOff() {
    colorWrapper.classList.toggle("none");
    menuWrapper.classList.toggle("none");
    btn[10].classList.toggle("none");
};

function darkModeOnOff() {
    colorWrapper.classList.toggle("dark_mode");
    menuWrapper.classList.toggle("dark_mode");
    infoText.classList.toggle("dark_mode_btn");
    
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.toggle("dark_mode_btn");
    };

    if( !darkMode ) {
        darkMode = true;
        btn[7].innerHTML = btnIconSun; 
    } else {
        darkMode = false
        btn[7].innerHTML = btnIconMoon;
    };
};

function dickoModeOnOff() {
    if( !discoMode ) {
        discoMode = true;
        btn[6].innerHTML = btnIconPause;

        const id = setInterval(() => {
            for (let i = 0; i < block.length; i++) {
                setTimeout(() => {
                    const color = addColor(block[i]);
                    blockColor[i] = `${color}`;
                    getGradient();
                }, i * 1000)
            }
        }, 3000);

        btn[6].addEventListener("click", () => clearInterval(id));   

    } else {
        discoMode = false
        btn[6].innerHTML = btnIconDisco;
    };

};


    
// Обраюотчики
for (let i = 0; i < block.length; i++) {
    block[i].addEventListener("click", () => {
        const color = addColor(block[i]);
        blockColor[i] = `${color}`;
        getGradient();
    })
};

btn[0].addEventListener("click", () => {
    changePercentLeft();
    getGradient();
});

btn[1].addEventListener("click", () => {
    changePercentRight();
    getGradient();
});

btn[2].addEventListener("click", () => {
    circleModOnOff();
    getGradient();
});

btn[3].addEventListener("click", () => {
    changeDegreesLeft()
    getGradient();
});

btn[4].addEventListener("click", () => {
    changeDegreesRight();
    getGradient();
});

btn[6].addEventListener("click", () => {
    dickoModeOnOff();
});

btn[7].addEventListener("click", () => {
    darkModeOnOff()
});

btn[8].addEventListener("click", () => {
    infoModOnOff();
});

btn[9].addEventListener("click", () => {
    noneModOnOff();
});

btn[10].addEventListener("click", () => {
    noneModOnOff();
});