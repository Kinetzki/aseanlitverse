const cards = document.querySelectorAll('.card');
const cardsImgs = [
    "url(https://github.com/Kinetzki/Kineimages/blob/main/cards/brunei.png?raw=true)",
    "url(https://github.com/Kinetzki/Kineimages/blob/main/cards/philippines.png?raw=true)",
    "url(https://github.com/Kinetzki/Kineimages/blob/main/cards/malaysia.png?raw=true)",
    "url(https://github.com/Kinetzki/Kineimages/blob/main/cards/laos.png?raw=true)",
    "url(https://github.com/Kinetzki/Kineimages/blob/main/cards/singapore.png?raw=true)",
    "url(https://github.com/Kinetzki/Kineimages/blob/main/cards/thailand.png?raw=true)",
    "url(https://github.com/Kinetzki/Kineimages/blob/main/cards/vietnam.png?raw=true)",
    "url(https://github.com/Kinetzki/Kineimages/blob/main/cards/myanmar.png?raw=true)",
    "url(https://github.com/Kinetzki/Kineimages/blob/main/cards/indonesia.png?raw=true)",    
    "url(https://github.com/Kinetzki/Kineimages/blob/main/cards/cambodia.png?raw=true)"
]
const countries = ["Brunei", "Philippines", "Malaysia", "Laos", "Singapore", "Thailand", "Vietnam", "Myanmar", "Indonesia", "Cambodia"]

var index = 0;
cards.forEach(card => {
    card.style.backgroundImage = cardsImgs[index];
    var overlay = card.querySelector('.overlay');
    overlay.textContent = countries[index];
    index++;
});