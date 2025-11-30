// FOTOS IMGUR CON COMILLAS
const galleryPhotos = [
  { url: "https://i.imgur.com/EwMfYkr.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/5gH2ih8.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/p0sfQNW.jpeg", aspect: "tall" },
  { url: "https://i.imgur.com/ceIYBph.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/tICk3M5.jpeg", aspect: "wide" },
  { url: "https://i.imgur.com/LGiZAbp.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/8gOFK3T.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/J3gKcnr.jpeg", aspect: "tall" },
  { url: "https://i.imgur.com/O89s96y.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/hdieTfi.jpeg", aspect: "wide" },
  { url: "https://i.imgur.com/9hFAmmo.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/kCQ3tpH.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/WHJVY1h.jpeg", aspect: "tall" },
  { url: "https://i.imgur.com/TgWpEr7.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/xCOdYDa.jpeg", aspect: "wide" },
  { url: "https://i.imgur.com/8L8CXfW.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/jOif1Px.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/PHDykic.jpeg", aspect: "tall" },
  { url: "https://i.imgur.com/RLJMdHU.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/4qIzhgV.jpeg", aspect: "wide" },
  { url: "https://i.imgur.com/Z46skKF.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/jx5SAyB.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/vDXvToG.jpeg", aspect: "tall" },
  { url: "https://i.imgur.com/f6e44ig.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/IVPXipv.jpeg", aspect: "wide" },
  { url: "https://i.imgur.com/fyrxrqr.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/vxoIsi5.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/9NCd4yB.jpeg", aspect: "tall" },
  { url: "https://i.imgur.com/0JLME9m.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/on9tnp2.jpeg", aspect: "wide" },
  { url: "https://i.imgur.com/T7KxUsX.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/apgBwPe.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/U5t34ZU.jpeg", aspect: "tall" },
  { url: "https://i.imgur.com/3xvpdRx.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/2h7jksP.jpeg", aspect: "wide" },
  { url: "https://i.imgur.com/yUNVMox.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/Z4hY5XW.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/ReXcg73.jpeg", aspect: "tall" },
  { url: "https://i.imgur.com/PRO06fN.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/gH3YNrR.jpeg", aspect: "wide" },
  { url: "https://i.imgur.com/aGZSbaj.jpeg", aspect: "square" },
  { url: "https://i.imgur.com/kR8gz8o.jpeg", aspect: "tall" }
];

const timelineEvents = [
  { date: "15 Agosto 2024", title: "Primer dia", description: "El primer dia de clases, y yo amargado, me senté a lado de una compañera porque no conozco a nadie más, y te vi del otro lado del salón, y la verdad te me hiciste demasiado linda, la verdad no escuche como te llamas por que no preste atención", icon: "✨" },
  { date: "16 Agosto 2024", title: "La silla", description: "La verdad yo estaba en mi pedo, hasta que me hablaste para ver si la silla la estaba ocupando, pero pues X, no la estaba ocupando, mi contestación fue la mas normal del mundo", icon: "❤️" },
  { date: "10 Septiembre 2024", title: "Hablamos", description: "Hoy me pediste mi sudadera, mi unica sudadera, pero tampoco me enojé, la verdad te me haces muy linda", icon: "✨" },
  { date: "15 Octubre 2024", title: "Simi campanita", description: "Hoy me dijiste que te sentias mal, la verdad si me preocupe, y te queria llevar a consultar, y terminamos en un SIMI, la verdad no me importa eso, solo queria que mejorarás", icon: "✨" },
  { date: "18 Octubre 2024", title: "Quitate la mascara", description: "Hoy hablamos muchisimo más, me estabas contando sobre la graduación de tu hermana, y me estabas mandando fotos, la verdad me gustas demasiado", icon: "❤️" },
  { date: "21 Octubre 2024", title: "Gomitas", description: "Hoy te enojaste conmigo, y la verdad queria que te acontentaras conmigo, te compre todas las gomitas de la coperativa, hoy definitivamente me enamoré mas de ti", icon: "✨" },
  { date: "24 Octubre 2024", title: "Taquitotss", description: "Hoy fue lo de la ONU, y te enojaste conmigo, pero lo solucionamos, lo mas bonito fue que me invitaste unos taquitos, yo la verdad estaba muy nervioso", icon: "❤️" },
  { date: "31 Octubre 2024", title: "Jargolin", description: "Hoy nos la pasamos juntos todo el dia, fuimos a starbuts, y nos la pasamos platicando, no sé en que momento se fue el dia tan rapido, siempre me la he pasado solo", icon: "✨" },
  { date: "25 Noviembre 2024", title: "La primera visita", description: "Hoy me dijiste que te dolia tu hombro, y la verdad si te queria ver, y te lleve una sudadera cafe, por que había frio, la verdad si me gustas", icon: "❤️" },
  { date: "20 Diciembre 2024", title: "Viajesito", description: "Hoy estuvimos en busqueda de quien te ponga las uñas, acabamos en la plaza las americas, y en lo que esperabamos tu cita, fuimos a comprarte unas cositas", icon: "✨" },
  { date: "5 Enero 2025", title: "Regalo de navidad", description: "Hoy despues de mucho tiempo nos volvimos a ver, ya te extrañaba demasiado, fuimos a cenar y nos dimos nuestros regalitos, el mio fue la playerita de Real Madrid", icon: "❤️" },
  { date: "11 Enero 2025", title: "La primera vez", description: "Hoy salimos a cenar pero nos pusimos peditos, y terminamos haciendo cosas de adultos, no me arrepiento de nada, en verdad te amo", icon: "✨" },
  { date: "13 Febrero 2025", title: "La boda", description: "Hoy fue evento de la escuela, por el dia de san valentin, nos casamos ahi mismo, y hubieron muchos besitos, jamás me arrepentiré de haberte conocido", icon: "❤️" },
  { date: "14 Febrero 2025", title: "San Valentin", description: "Hoy fuimos a comer, y te regale una pulsera que llegue a escuchar que te gustaba, y ese dia me compraste unos legos, me gustó mucho la salida", icon: "✨" },
  { date: "22 Febrero 2025", title: "Minions", description: "Hoy fuimos por primera vez a un motel, y fue muy lindo todo, fue un momento tan intimo que genero mas confianza entre los 2, en verdad te adoro", icon: "❤️" }
];

let currentImageIndex = 0;
let timelineExpanded = false;

document.addEventListener("DOMContentLoaded", () => {
  loadGallery();
  loadTimeline();
  setupEventListeners();
  updateNavOnScroll();
});

function loadGallery() {
  const galleryGrid = document.getElementById("gallery-grid");
  galleryPhotos.forEach((photo, index) => {
    const item = document.createElement("div");
    item.className = `gallery-item ${photo.aspect}`;
    item.setAttribute("data-testid", `gallery-item-${index + 1}`);
    item.onclick = () => openLightbox(index);
    item.innerHTML = `
      <img src="${photo.url}" alt="Foto ${index + 1}" loading="lazy">
      <div class="gallery-item-overlay">
        <div class="gallery-item-icon">📷</div>
      </div>
    `;
    galleryGrid.appendChild(item);
  });
  document.getElementById("lightbox-total").textContent = galleryPhotos.length;
}

function loadTimeline() {
  const timeline = document.getElementById("timeline");
  timelineEvents.forEach((event, index) => {
    const isLeft = index % 2 === 0;
    const item = document.createElement("div");
    item.className = index >= 4 ? "timeline-item hidden" : "timeline-item";
    item.setAttribute("data-testid", `timeline-event-${index + 1}`);
    
    const leftContent = isLeft ? `
      <div class="timeline-left">
        <div class="timeline-content">
          <div class="timeline-date">
            <span style="font-size: 0.8rem;">📅</span> ${event.date}
          </div>
          <div class="timeline-title">${event.title}</div>
          <div class="timeline-description">${event.description}</div>
        </div>
      </div>
    ` : `<div class="timeline-left"></div>`;

    const rightContent = !isLeft ? `
      <div class="timeline-right">
        <div class="timeline-content">
          <div class="timeline-date">
            <span style="font-size: 0.8rem;">📅</span> ${event.date}
          </div>
          <div class="timeline-title">${event.title}</div>
          <div class="timeline-description">${event.description}</div>
        </div>
      </div>
    ` : `<div class="timeline-right"></div>`;

    const center = `
      <div class="timeline-center">
        <div class="timeline-dot">${event.icon}</div>
      </div>
    `;

    item.innerHTML = leftContent + center + rightContent;
    timeline.appendChild(item);
  });
}

function openLightbox(index) {
  currentImageIndex = index;
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = galleryPhotos[index].url;
  document.getElementById("lightbox-current").textContent = index + 1;
  lightbox.classList.add("active");
  updateLightboxDots();
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "";
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryPhotos.length;
  openLightbox(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
  openLightbox(currentImageIndex);
}

function updateLightboxDots() {
  const dotsContainer = document.getElementById("lightbox-dots");
  dotsContainer.innerHTML = "";
  galleryPhotos.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = index === currentImageIndex ? "lightbox-dot active" : "lightbox-dot";
    dot.onclick = (e) => {
      e.stopPropagation();
      openLightbox(index);
    };
    dotsContainer.appendChild(dot);
  });
}

function toggleTimeline() {
  const hiddenItems = document.querySelectorAll(".timeline-item.hidden");
  const btn = document.getElementById("ver-mas-btn");
  
  if (!timelineExpanded) {
    hiddenItems.forEach(item => item.classList.remove("hidden"));
    btn.textContent = "Ver menos";
  } else {
    hiddenItems.forEach(item => item.classList.add("hidden"));
    btn.textContent = "Ver más";
  }
  timelineExpanded = !timelineExpanded;
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburger = document.getElementById("hamburger-btn");
  mobileMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

function closeMobileMenu() {
  document.getElementById("mobile-menu").classList.remove("active");
  document.getElementById("hamburger-btn").classList.remove("active");
}

function setupEventListeners() {
  // Hamburger
  document.getElementById("hamburger-btn").addEventListener("click", toggleMobileMenu);
  document.getElementById("close-menu-btn").addEventListener("click", closeMobileMenu);

  // Mobile links
  document.querySelectorAll(".mobile-menu-links a").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Lightbox
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", (e) => {
    e.stopPropagation();
    prevImage();
  });
  document.getElementById("lightbox-next").addEventListener("click", (e) => {
    e.stopPropagation();
    nextImage();
  });
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });

  // Timeline
  document.getElementById("ver-mas-btn").addEventListener("click", toggleTimeline);

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("lightbox").classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });
}

function updateNavOnScroll() {
  const nav = document.getElementById("nav-main");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      nav.style.background = "rgba(255, 255, 255, 0.98)";
      nav.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
    } else {
      nav.style.background = "rgba(255, 255, 255, 0.95)";
      nav.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
  });
}