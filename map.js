const flagImgs = {
"myan": "url(https://github.com/Kinetzki/Kineimages/blob/main/flags/myanmar.png?raw=true)",
"laos": "url(https://github.com/Kinetzki/Kineimages/blob/main/flags/laos.png?raw=true)",
"sing": "url(https://github.com/Kinetzki/Kineimages/blob/main/flags/singapore.png?raw=true)",
"thai": "url(https://github.com/Kinetzki/Kineimages/blob/main/flags/thailand.png?raw=true)",
"phil": "url(https://github.com/Kinetzki/Kineimages/blob/main/flags/philippines.png?raw=true)",
"brun": "url(https://github.com/Kinetzki/Kineimages/blob/main/flags/brunei.png?raw=true)",
"camb": "url(https://github.com/Kinetzki/Kineimages/blob/main/flags/cambodia.png?raw=true)",
"mala": "url(https://github.com/Kinetzki/Kineimages/blob/main/flags/malaysia.png?raw=true)",
"viet": "url(https://github.com/Kinetzki/Kineimages/blob/main/flags/vietnam.png?raw=true)",
"indo": "url(https://github.com/Kinetzki/Kineimages/blob/main/flags/indonesia.png?raw=true)"};

const flags = document.querySelectorAll('.flag');
const popup = document.querySelector('.popup');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 1});

var activeCountry;

flags.forEach(flag => {
    flag.style.backgroundImage = flagImgs[flag.id];
    observer.observe(flag);
    flag.addEventListener("click", function() {
       if (typeof activeCountry === "undefined") {
        activeCountry = flag;
        flag.classList.add('flag-active');
        popup.classList.toggle('popup-show');
       } else {
        if (activeCountry === flag) {
            popup.classList.toggle('popup-show');
            flag.classList.remove('flag-active');
            activeCountry = undefined;
        }
        else if (activeCountry !== flag){
            activeCountry.classList.remove('flag-active');
            activeCountry = flag;
            flag.classList.add('flag-active');
            popup.classList.remove('popup-show');
            setTimeout(() => {
                popup.classList.add('popup-show');
            }, 100);
        }
       }
    });
});



