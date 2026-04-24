// PERSISTENT LANGUAGE STATE
let lang = localStorage.getItem('siteLang') || 'zh';

function applyLanguage() {
  // Save selection to storage
  localStorage.setItem('siteLang', lang);

  // Update text for all elements with data-en/data-zh
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  // Update placeholders (for forms)
  document.querySelectorAll("[placeholder]").forEach(el => {
    // Only update if we have defined specific translations for placeholders 
    // or use a simple logic: "en" uses the first part, "zh" uses the second part of a split
    // For simplicity, let's target data attributes if you add them:
    if(el.hasAttribute(`data-${lang}-placeholder`)) {
        el.setAttribute('placeholder', el.getAttribute(`data-${lang}-placeholder`));
    }
  });

  // Update Button Labels
  const btn = document.getElementById("langToggle");
  const btnMob = document.getElementById("langToggleMobile");
  if(btn) btn.textContent = (lang === "en" ? "中文" : "EN");
  if(btnMob) btnMob.textContent = (lang === "en" ? "中文" : "EN");
}

// TOGGLE HANDLERS
if(document.getElementById("langToggle")) {
    document.getElementById("langToggle").onclick = () => {
        lang = (lang === "en" ? "zh" : "en");
        applyLanguage();
    };
}

if(document.getElementById("langToggleMobile")) {
    document.getElementById("langToggleMobile").onclick = () => {
        lang = (lang === "en" ? "zh" : "en");
        applyLanguage();
    };
}

// INITIALIZE ON LOAD
window.addEventListener('DOMContentLoaded', applyLanguage);

// --- OTHER FUNCTIONS (POPUPS, SLIDERS, COUNTERS) ---

function openPopup() { document.getElementById("popup").style.display = "block"; }
function closePopup() { document.getElementById("popup").style.display = "none"; }

function openTerms() { document.getElementById("termsPopup").style.display = "block"; }
function closeTerms() { document.getElementById("termsPopup").style.display = "none"; }

function openPrivacy() { document.getElementById("privacyPopup").style.display = "block"; }
function closePrivacy() { document.getElementById("privacyPopup").style.display = "none"; }

function openMenu() { document.getElementById("mobileMenu").style.display = "flex"; }
function closeMenu() { document.getElementById("mobileMenu").style.display = "none"; }

if(document.getElementById("hamburger")) {
    document.getElementById("hamburger").onclick = openMenu;
}

// ANIMATED COUNTERS
const counters = document.querySelectorAll(".counter");
if(counters.length > 0) {
    counters.forEach(counter => {
        let update = () => {
            let target = +counter.getAttribute("data-target");
            let count = +counter.innerText;
            let speed = target / 50;
            if (count < target) {
                counter.innerText = Math.ceil(count + speed);
                setTimeout(update, 30);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
}

// TESTIMONIAL ROTATION
let t = document.querySelectorAll(".testimonial");
if(t.length > 0) {
    let i = 0;
    setInterval(() => {
        t.forEach(el => el.classList.remove("active"));
        t[i].classList.add("active");
        i = (i + 1) % t.length;
    }, 4000);
}

// SLIDER (For Contact Page)
let slides = document.querySelectorAll(".slide");
if(slides.length > 0) {
    let index = 0;
    setInterval(() => {
        slides.forEach(s => s.classList.remove("active"));
        slides[index].classList.add("active");
        index = (index + 1) % slides.length;
    }, 2500);
}
