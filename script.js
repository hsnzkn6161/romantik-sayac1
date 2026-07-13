// Başlangıç tarihi
const startDate = new Date("2022-06-15T00:00:00");

// Gerekli elemanlar
const intro = document.getElementById("intro");
const card = document.querySelector(".card");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Açılış ekranı
window.onload = () => {

    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";
            card.style.display = "block";

        },1000);

    },2500);

};


// Sayaç

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const totalSeconds = Math.floor(diff/1000);

    const d = Math.floor(totalSeconds / 86400);

    const h = Math.floor((totalSeconds % 86400) / 3600);

    const m = Math.floor((totalSeconds % 3600) / 60);

    const s = totalSeconds % 60;

    days.textContent = d;

    hours.textContent = String(h).padStart(2,"0");

    minutes.textContent = String(m).padStart(2,"0");

    seconds.textContent = String(s).padStart(2,"0");

}

updateCounter();

setInterval(updateCounter,1000);
// Mektup Aç / Kapat

const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterModal = document.getElementById("letterModal");

openLetter.onclick = function () {
    letterModal.style.display = "flex";
}

closeLetter.onclick = function () {
    letterModal.style.display = "none";
}

letterModal.onclick = function (e) {
    if (e.target === letterModal) {
        letterModal.style.display = "none";
    }
}

/* ========================= */
/* YILDIZ OLUŞTUR */
/* ========================= */

const stars = document.getElementById("stars");

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    const size=Math.random()*3+1;

    star.style.width=size+"px";

    star.style.height=size+"px";

    star.style.animationDuration=(2+Math.random()*4)+"s";

    stars.appendChild(star);

}
/* ========================= */
/* KAYAN YILDIZ */
/* ========================= */

const shootingStar = document.getElementById("shooting-star");

function startShootingStar(){

    shootingStar.style.top = Math.random()*200 + "px";
    shootingStar.style.left = "-250px";

    shootingStar.classList.add("active");

    setTimeout(()=>{
        shootingStar.classList.remove("active");
    },1600);

}

setInterval(startShootingStar,18000);
