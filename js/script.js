var typed = new Typed(".typing", {
    strings: ["Web Designer", "Programmer", "Full Stack Developer", "Youtuber"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})


const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");


    a.addEventListener("click", function () {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section")
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (windows.innerWidtch < 1200) {
            asideSectionTogglerBtn();
        }

    })
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("herf").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("herf").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("herf").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {

    showSection(this);
    updateNav(this);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}




document.querySelector(".hire-me").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    showSection(this);
    updateNav(this);
});

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}


document.querySelector(".hire-me").addEventListener("click", function (event) {
    event.preventDefault();
    const contactSection = document.querySelector("#contacts");
    if (contactSection) {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active");
        }
        contactSection.classList.add("active");
        for (let i = 0; i < totalNavList; i++) {
            navList[i].querySelector("a").classList.remove("active");
            if (navList[i].querySelector("a").getAttribute("href") === "#contacts") {
                navList[i].querySelector("a").classList.add("active");
            }
        }
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
});





