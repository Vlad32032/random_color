// Ноды
const wrapper = document.querySelector(".wrapper");
const block = document.querySelectorAll(".color_block");
const blockColor = ["rgba(2,0,36,1)","rgba(2,0,36,1)","rgba(2,0,36,1)"];

function getColor() {
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
};

function addColor(block) {
    const color = getColor();
    block.style.backgroundColor = `${color}`;
    return color;
}

for (let i = 0; i < block.length; i++) {
    block[i].addEventListener("click", () => {
        let color = addColor(block[i]);
        blockColor[i] = `${color}`;
        wrapper.style.background = `linear-gradient(45deg, ${blockColor[0]} 10%, ${blockColor[1]} 50%, ${blockColor[2]} 90%)`;
    })
}
