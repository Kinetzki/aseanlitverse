const background = document.querySelector('.main-container-top');
var sampleBg = new Image();
sampleBg.src = "https://github.com/Kinetzki/Kineimages/blob/main/brunei-mosque.png?raw=true"
var sampleBg1 = new Image();
sampleBg1.src = "https://github.com/Kinetzki/Kineimages/blob/main/brunei-darussalam.jpg?raw=true"
var sampleBg2 = new Image();
sampleBg2.src = "https://github.com/Kinetzki/Kineimages/blob/main/pxfuel.jpg?raw=true"
var sampleBg3 = new Image();
sampleBg3.src = "https://github.com/Kinetzki/Kineimages/blob/main/brunei-rainforest2.png?raw=true"

const changeBg = (newBg) => {
    background.style.backgroundImage = newBg;
}

const sliderButtons = document.querySelectorAll('.button');

sliderButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        activate(btn);
        if (btn.id === "1") {
            changeBg("url(https://github.com/Kinetzki/Kineimages/blob/main/brunei-darussalam.jpg?raw=true)")
        }
        if (btn.id === "2") {
            changeBg("url(https://github.com/Kinetzki/Kineimages/blob/main/brunei-mosque.png?raw=true)")
        }
        if (btn.id === "3") {
            changeBg("url(https://github.com/Kinetzki/Kineimages/blob/main/pxfuel.jpg?raw=true)")
        }
        if (btn.id === "4") {
            changeBg("url(https://github.com/Kinetzki/Kineimages/blob/main/brunei-rainforest2.png?raw=true)")
        }
    })
})

const activate = (e) => {
    sliderButtons.forEach(btn => {
        if (btn !== e) {
            if (btn.classList.contains('button-active')) {
                btn.classList.remove('button-active')
            }
        }
    });
    e.classList.add('button-active');
}