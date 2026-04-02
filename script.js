let lang="zh";

function applyLanguage(){
  document.querySelectorAll("[data-en]").forEach(el=>{
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  document.getElementById("langToggle").textContent =
    lang==="en" ? "中文" : "EN";
}

document.getElementById("langToggle").onclick=()=>{
  lang = lang==="en" ? "zh" : "en";
  applyLanguage();
};

window.onload = applyLanguage;

document.getElementById("langToggle").onclick=()=>{
lang=lang==="en"?"zh":"en";

document.querySelectorAll("[data-en]").forEach(el=>{
el.textContent=el.getAttribute(`data-${lang}`);
});

document.getElementById("langToggle").textContent=
lang==="en"?"中文":"EN";
};

function openPopup(){
document.getElementById("popup").style.display="block";
}

function closePopup(){
document.getElementById("popup").style.display="none";
}

document.querySelector("form").addEventListener("submit",()=>{
alert("Message sent. We will contact you.");
});

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{
let update=()=>{
let target=+counter.getAttribute("data-target");
let count=+counter.innerText;
let speed=target/50;

if(count<target){
counter.innerText=Math.ceil(count+speed);
setTimeout(update,30);
}else{
counter.innerText=target;
}
};
update();
});
function openTerms(){
  document.getElementById("termsPopup").style.display="block";
}

function closeTerms(){
  document.getElementById("termsPopup").style.display="none";
}

function openPrivacy(){
  document.getElementById("privacyPopup").style.display="block";
}

function closePrivacy(){
  document.getElementById("privacyPopup").style.display="none";
}
let slides=document.querySelectorAll(".slide");
let index=0;

function showSlide(){
  slides.forEach(s=>s.classList.remove("active"));
  slides[index].classList.add("active");

  index++;
  if(index>=slides.length){index=0;}
}

setInterval(showSlide,2500);
let t=document.querySelectorAll(".testimonial");
let i=0;

function rotate(){
  t.forEach(el=>el.classList.remove("active"));
  t[i].classList.add("active");
  i=(i+1)%t.length;
}

setInterval(rotate,4000);