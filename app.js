const images = [
  { id: "1", aspect: "square", url: "https://i.imgur.com/EwMfYkr.jpeg" },
  { id: "2", aspect: "square", url: "https://i.imgur.com/5gH2ih8.jpeg" },
  { id: "3", aspect: "tall", url: "https://i.imgur.com/p0sfQNW.jpeg" },
  { id: "4", aspect: "square", url: "https://i.imgur.com/ceIYBph.jpeg" },
  { id: "5", aspect: "wide", url: "https://i.imgur.com/tICk3M5.jpeg" },
  { id: "6", aspect: "square", url: "https://i.imgur.com/LGiZAbp.jpeg" },
  { id: "7", aspect: "square", url: "https://i.imgur.com/8gOFK3T.jpeg" },
  { id: "8", aspect: "tall", url: "https://i.imgur.com/J3gKcnr.jpeg" },
  { id: "9", aspect: "square", url: "https://i.imgur.com/O89s96y.jpeg" },
  { id: "10", aspect: "wide", url: "https://i.imgur.com/hdieTfi.jpeg" },
  { id: "11", aspect: "square", url: "https://i.imgur.com/9hFAmmo.jpeg" },
  { id: "12", aspect: "square", url: "https://i.imgur.com/kCQ3tpH.jpeg" },
  { id: "13", aspect: "tall", url: "https://i.imgur.com/WHJVY1h.jpeg" },
  { id: "14", aspect: "square", url: "https://i.imgur.com/TgWpEr7.jpeg" },
  { id: "15", aspect: "wide", url: "https://i.imgur.com/xCOdYDa.jpeg" },
  { id: "16", aspect: "square", url: "https://i.imgur.com/8L8CXfW.jpeg" },
  { id: "17", aspect: "square", url: "https://i.imgur.com/jOif1Px.jpeg" },
  { id: "18", aspect: "tall", url: "https://i.imgur.com/PHDykic.jpeg" },
  { id: "19", aspect: "square", url: "https://i.imgur.com/RLJMdHU.jpeg" },
  { id: "20", aspect: "wide", url: "https://i.imgur.com/4qIzhgV.jpeg" },
  { id: "21", aspect: "square", url: "https://i.imgur.com/Z46skKF.jpeg" },
  { id: "22", aspect: "square", url: "https://i.imgur.com/jx5SAyB.jpeg" },
  { id: "23", aspect: "tall", url: "https://i.imgur.com/vDXvToG.jpeg" },
  { id: "24", aspect: "square", url: "https://i.imgur.com/f6e44ig.jpeg" },
  { id: "25", aspect: "wide", url: "https://i.imgur.com/IVPXipv.jpeg" },
  { id: "26", aspect: "square", url: "https://i.imgur.com/fyrxrqr.jpeg" },
  { id: "27", aspect: "square", url: "https://i.imgur.com/vxoIsi5.jpeg" },
  { id: "28", aspect: "tall", url: "https://i.imgur.com/9NCd4yB.jpeg" },
  { id: "29", aspect: "square", url: "https://i.imgur.com/0JLME9m.jpeg" },
  { id: "30", aspect: "wide", url: "https://i.imgur.com/on9tnp2.jpeg" },
  { id: "31", aspect: "square", url: "https://i.imgur.com/T7KxUsX.jpeg" },
  { id: "32", aspect: "square", url: "https://i.imgur.com/apgBwPe.jpeg" },
  { id: "33", aspect: "tall", url: "https://i.imgur.com/U5t34ZU.jpeg" },
  { id: "34", aspect: "square", url: "https://i.imgur.com/3xvpdRx.jpeg" },
  { id: "35", aspect: "wide", url: "https://i.imgur.com/2h7jksP.jpeg" },
  { id: "36", aspect: "square", url: "https://i.imgur.com/yUNVMox.jpeg" },
  { id: "37", aspect: "square", url: "https://i.imgur.com/Z4hY5XW.jpeg" },
  { id: "38", aspect: "tall", url: "https://i.imgur.com/ReXcg73.jpeg" },
  { id: "39", aspect: "square", url: "https://i.imgur.com/PRO06fN.jpeg" },
  { id: "40", aspect: "wide", url: "https://i.imgur.com/gH3YNrR.jpeg" },
  { id: "41", aspect: "square", url: "https://i.imgur.com/aGZSbaj.jpeg" },
  { id: "42", aspect: "tall", url: "https://i.imgur.com/kR8gz8o.jpeg" }
];

const events = [
  { id: 1, date: "15 Agosto 2024", title: "Primer dia", description: "El primer dia de clases, y yo amargado, me senté a lado de una compañera porque no conozco a nadie más, y te vi del otro lado del salón, y la verdad te me hiciste demasiado linda, la verdad no escuche como te llamas por que no preste atención", icon: "✨" },
  { id: 2, date: "16 Agosto 2024", title: "La silla", description: "La verdad yo estaba en mi pedo, hasta que me hablaste para ver si la silla la estaba ocupando, pero pues X, no la estaba ocupando, mi contestación fue la mas normal del mundo", icon: "❤️" },
  { id: 3, date: "10 Septiembre 2024", title: "Hablamos", description: "Hoy me pediste mi sudadera, mi unica sudadera, pero tampoco me enojé, la verdad te me haces muy linda", icon: "✨" },
  { id: 4, date: "15 Octubre 2024", title: "Simi campanita", description: "Hoy me dijiste que te sentias mal, la verdad si me preocupe, y te queria llevar a consultar, y terminamos en un SIMI, la verdad no me importa eso, solo queria que mejorarás, la verdad si te agarre mucho cariño y más porque dias antes nos dimos un abracito y tuvimos una platica profunda, la verdad fue algo muy bonito, y preocuparme por ti era lo de menos, enserio que te quiero, aunque no lo parezca", icon: "✨" },
  { id: 5, date: "18 Octubre 2024", title: "Quitate la mascara", description: "Hoy hablamos muchisimo más, me estabas contando sobre la graduación de tu hermana, y me estabas mandando fotos y notas, y me mandaste foto de tu carita ya maquillada, y salí con mi magnifica forma de ser, para decirte ´Quitate la mascara´ lo hice por qué no queria que sintieras que me gustabas, la verdad me gustas demasiado, pero lo controlo, no quiero hacerme falsas ilusiones", icon: "❤️" },
  { id: 6, date: "21 Octubre 2024", title: "Gomitas", description: "Hoy te enojaste conmigo, no diré el porque, pero la verdad queria que te acontentaras conmigo, somos amigos, pero no queria que te enojaras conmigo, por que neta te quiero mucho, y te compre todas las gomitas de la coperativa, porque se que te gustan mucho, al final hicimos gomitas de personajes, hoy definitivamente me enamoré mas de ti", icon: "✨" },
  { id: 7, date: "24 Octubre 2024", title: "Taquitotss", description: "Hoy fue lo de la ONU, y te enojaste conmigo, pero lo solucionamos, la verdad lo sentí raro porque lo senti como una pelea de pareja, no raro en mal plan, la neta me gustó JAJA, lo mas bonito fue que me invitaste unos taquitos, yo la verdad estaba muy nervioso, nunca me habian invitado de comer, y mucho menos que pagarás, hasta pedí coca, cuando ya no tomaba coca, asi de nervioso estaba, y pasamos a la iglesia antes de ir a comer, pero la verdad este dia lo sentí demasiado lindo, en verdad que ese gesto hizo que me gustaras definitivamente", icon: "❤️" },
  { id: 8, date: "31 Octubre 2024", title: "Jargolin", description: "Hoy nos la pasamos juntos todo el dia, fuimos a starbuts, y nos la pasamos platicando, no sé en que momento se fue el dia tan rapido, pero la verdad lo disfrute demasiado, siempre me la he pasado solo, pero la verdad me encanta compartir mi tiempo contigo", icon: "✨" },
  { id: 9, date: "25 Noviembre 2024", title: "La primera visita", description: "Hoy me dijiste que te dolia tu hombro, y la verdad si te queria ver, y te lleve una sudadera cafe, por que había frio, la verdad si me gustas, quiero que sepas que haria todo con tal de verte bien", icon: "❤️" },
  { id: 10, date: "20 Diciembre 2024", title: "Viajesito", description: "Hoy estuvimos en busqueda de quien te ponga las uñas, acabamos en la plaza las americas, y en lo que esperabamos tu cita, fuimos a comprarte unas cositas para tu viaje, al final terminamos cenando unas hamburguesitas, y nos despedimos con besitos, te extrañaré muchito", icon: "✨" },
  { id: 11, date: "5 Enero 2025", title: "Regalo de navidad", description: "Hoy despues de mucho tiempo nos volvimos a ver, ya te extrañaba demasiado, fuimos a cenar y nos dimos nuestros regalitos, el mio fue la playerita de Real Madrid, ese dia me dejaste como boiler pero no me importa por que te amo", icon: "❤️" },
  { id: 12, date: "11 Enero 2025", title: "La primera vez", description: "Hoy salimos a cenar pero nos pusimos peditos, y terminamos haciendo cosas de adultos, no me arrepiento de nada, en verdad te amo", icon: "✨" },
  { id: 13, date: "13 Febrero 2025", title: "La boda", description: "Hoy fue evento de la escuela, por el dia de san valentin, nos casamos ahi mismo, y hubieron muchos besitos, la verdad nunca me arrepentiré de haberte conocido, jamás.", icon: "❤️" },
  { id: 14, date: "14 Febrero 2025", title: "San Valentin", description: "Hoy fuimos a comer, y te regale una pulsera que llegue a escuchar que te gustaba, y la verdad no podia no dartelo, y ese dia me compraste unos legos, me gustó mucho la salida, y más por que la pasamos juntos", icon: "✨" },
  { id: 15, date: "22 Febrero 2025", title: "Minions", description: "Hoy fuimos por primera vez a un motel, y fue muy lindo todo, fue un momento tan intimo que genero mas confianza entre los 2, y no por lo que se hizo, sino por lo que pudimos platicar en un momento muy vulnerable e intimo, en verdad te adoro", icon: "❤️" }
];

let currentIndex = 0;
let timelineExpanded = false;

document.addEventListener("DOMContentLoaded", init);

function init() {
  loadGallery();
  loadTimeline();
  setupListeners();
  window.addEventListener("scroll", updateNav);
}

function loadGallery() {
  const grid = document.getElementById("galleryGrid");
  images.forEach((img, idx) => {
    const item = document.createElement("div");
    item.className = `gallery-item ${img.aspect}`;
    item.setAttribute("data-testid", `gallery-item-${img.id}`);
    item.onclick = () => openLightbox(idx);
    item.innerHTML = `
      <img src="${img.url}" alt="Foto ${img.id}" loading="lazy">
      <div class="gallery-overlay">
        <div class="gallery-icon">📷</div>
      </div>
    `;
    grid.appendChild(item);
  });
}

function loadTimeline() {
  const tlm = document.getElementById("timeline");
  events.forEach((evt, idx) => {
    const item = document.createElement("div");
    item.className = `timeline-item ${idx < 4 ? "" : "hidden"} ${idx % 2 === 0 ? "left" : "right"}`;
    item.setAttribute("data-testid", `timeline-event-${evt.id}`);
    item.innerHTML = `
      <div class="timeline-side">
        <div class="timeline-card">
          <div class="timeline-date">📅 ${evt.date}</div>
          <div class="timeline-title">${evt.title}</div>
          <div class="timeline-description">${evt.description}</div>
        </div>
      </div>
      <div class="timeline-dot">${evt.icon}</div>
      <div class="timeline-side"></div>
    `;
    tlm.appendChild(item);
  });
}

function openLightbox(idx) {
  currentIndex = idx;
  const lb = document.getElementById("lightbox");
  document.getElementById("lightboxImg").src = images[idx].url;
  document.getElementById("lightboxCount").textContent = idx + 1;
  lb.classList.add("open");
  updateDots();
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function nextImg() {
  currentIndex = (currentIndex + 1) % images.length;
  openLightbox(currentIndex);
}

function prevImg() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openLightbox(currentIndex);
}

function updateDots() {
  const dots = document.getElementById("lightboxDots");
  dots.innerHTML = "";
  images.forEach((_, idx) => {
    const dot = document.createElement("div");
    dot.className = `dot ${idx === currentIndex ? "active" : ""}`;
    dot.onclick = () => openLightbox(idx);
    dots.appendChild(dot);
  });
}

function toggleTimeline() {
  const items = document.querySelectorAll(".timeline-item");
  timelineExpanded = !timelineExpanded;
  items.forEach((item, idx) => {
    if (idx >= 4) {
      if (timelineExpanded) item.classList.remove("hidden");
      else item.classList.add("hidden");
    }
  });
  document.getElementById("verMasBtn").textContent = timelineExpanded ? "Ver menos" : "Ver más";
}

function setupListeners() {
  document.getElementById("hamburger").addEventListener("click", () => {
    const menu = document.getElementById("mobileMenu");
    const ham = document.getElementById("hamburger");
    menu.classList.toggle("open");
    ham.classList.toggle("active");
  });

  document.getElementById("closeMenu").addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.remove("open");
    document.getElementById("hamburger").classList.remove("active");
  });

  document.querySelectorAll(".mobile-menu-links a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("mobileMenu").classList.remove("open");
      document.getElementById("hamburger").classList.remove("active");
    });
  });

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => { event.stopPropagation(); prevImg(); });
  document.getElementById("lightboxNext").addEventListener("click", () => { event.stopPropagation(); nextImg(); });
  document.getElementById("lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
  document.getElementById("verMasBtn").addEventListener("click", toggleTimeline);

  document.addEventListener("keydown", (e) => {
    if (document.getElementById("lightbox").classList.contains("open")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    }
  });
}

function updateNav() {
  const nav = document.getElementById("nav");
  if (window.scrollY > 20) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
}