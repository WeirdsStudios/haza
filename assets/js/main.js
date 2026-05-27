// ── DATA ──────────────────────────────────────────────────────────
const RESULTS = {
  presencia: {
    icon: '🌐', iconBg: '#FEF2EB',
    name: 'Tu sitio web profesional',
    tag: 'La solución perfecta para que tus clientes te encuentren y confíen en ti.',
    note: '🎯 Basado en lo que me contaste, lo que más te va a beneficiar ahora mismo es tener una presencia digital sólida en Google. Cuando alguien te busque, va a encontrar exactamente lo que necesita para decidir contactarte.',
    benefits: [
      'Tus clientes te encuentran cuando buscan en Google',
      'Primera impresión profesional que genera confianza instantánea',
      'Botón de WhatsApp y formulario de contacto directo',
      'Se ve perfecto en celular — donde el 89% navega en México',
      'Tu información siempre disponible, las 24 horas del día',
    ],
    checkColor: '#E05C25', checkBg: '#FEF2EB',
    price: '$12,000', priceSub: 'MXN · pago único',
    time: '7 a 10 días', timeSub: 'días hábiles desde que iniciamos',
    maint: '$1,500/mes',
    waMsg: 'Hola%20Haza%2C%20el%20cotizador%20me%20recomienda%20un%20sitio%20web%20profesional%20(%2412%2C000).%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s.'
  },
  sistema: {
    icon: '📅', iconBg: '#EFF6FF',
    name: 'Sitio web con sistema de citas',
    tag: 'Para negocios que quieren que sus clientes agenden solos, sin intermediarios.',
    note: '🎯 Según lo que me dijiste, tu negocio necesita algo más que una presencia — necesita que los clientes puedan actuar directamente. Un sistema de citas online significa que mientras atiendes a un cliente, otro ya está agendando solo.',
    benefits: [
      'Tus clientes agendan solos — sin que tengas que contestar mensajes',
      'Notificaciones automáticas en tu celular cada que llega una cita',
      'Tu negocio trabajando para ti incluso cuando estás ocupado',
      'Catálogo de servicios claro y atractivo para que elijan',
      'Integrado con tu WhatsApp y tu correo desde el primer día',
    ],
    checkColor: '#2563EB', checkBg: '#EFF6FF',
    price: '$20,000', priceSub: 'MXN · pago único',
    time: '12 a 18 días', timeSub: 'días hábiles desde que iniciamos',
    maint: '$2,500/mes',
    waMsg: 'Hola%20Haza%2C%20el%20cotizador%20me%20recomienda%20un%20sitio%20con%20sistema%20de%20citas%20(%2420%2C000).%20Quisiera%20saber%20m%C3%A1s.'
  },
  ecommerce: {
    icon: '🛒', iconBg: '#F0FDF4',
    name: 'Tu tienda online propia',
    tag: 'Vende en internet 24/7 con tu propia marca, sin pagar comisiones a nadie.',
    note: '🎯 Vender por Mercado Libre o Instagram significa depender de otras plataformas y perder hasta el 25-30% en comisiones. Con tu propia tienda, ese dinero se queda en tu bolsillo y tu marca crece con cada venta.',
    benefits: [
      'Tus clientes compran directamente — sin intermediarios ni comisiones',
      'Acepta pagos con tarjeta, transferencia y MercadoPago',
      'Tú controlas tu catálogo, precios y pedidos desde tu celular',
      'Sin comisiones del 15-30% que cobran los marketplaces',
      'Tu marca, tu tienda, tus clientes — todo 100% tuyo',
    ],
    checkColor: '#16A34A', checkBg: '#F0FDF4',
    price: '$32,000', priceSub: 'MXN · pago único',
    time: '20 a 28 días', timeSub: 'días hábiles desde que iniciamos',
    maint: '$2,500/mes',
    waMsg: 'Hola%20Haza%2C%20el%20cotizador%20me%20recomienda%20una%20tienda%20online%20(%2432%2C000).%20Me%20gustar%C3%ADa%20hablar%20sobre%20mi%20proyecto.'
  },
  app: {
    icon: '📊', iconBg: '#F5F3FF',
    name: 'Sistema o app a medida',
    tag: 'Una solución hecha exactamente para los procesos únicos de tu negocio.',
    note: '🎯 Organizar un negocio con hojas de Excel, mensajes de WhatsApp y papeles sueltos cuesta tiempo y dinero todos los días. Una solución a medida centraliza todo y te da el control total de tu operación.',
    benefits: [
      'Diseñado exactamente para cómo funciona tu negocio, no al revés',
      'Centraliza clientes, pagos, inventario — lo que tú necesites',
      'Tu equipo trabaja más eficiente y con menos errores desde el día 1',
      'Accesible desde cualquier celular, en tiempo real',
      'Crece contigo — se ajusta cuando tu negocio evoluciona',
    ],
    checkColor: '#7C3AED', checkBg: '#F5F3FF',
    price: 'Cotización gratis', priceSub: 'según tu proyecto específico',
    time: 'A definir juntos', timeSub: 'según el alcance de tu proyecto',
    maint: 'Incluido los primeros 3 meses',
    waMsg: 'Hola%20Haza%2C%20el%20cotizador%20me%20recomienda%20un%20sistema%20a%20medida.%20Quisiera%20contarte%20sobre%20mi%20negocio.'
  }
};

const answers = {};
let currentStep = 1;

// ── WIZARD LOGIC ──────────────────────────────────────────────────
function pick(el, key, val) {
  // Deselect siblings
  el.closest('.opts').querySelectorAll('.opt').forEach(o => o.classList.remove('sel'));
  el.classList.add('sel');
  answers[key] = val;
  // Enable next button
  const nextBtn = document.getElementById('next' + currentStep);
  if (nextBtn) nextBtn.disabled = false;
}

function goStep(n) {
  // Validate current
  const keys = ['negocio', 'objetivo', 'urgencia'];
  if (!answers[keys[currentStep - 1]]) return;

  document.getElementById('step' + currentStep).classList.remove('show');
  currentStep = n;
  document.getElementById('step' + currentStep).classList.add('show');
  updateProgress();
}

function updateProgress() {
  [1,2,3].forEach(i => {
    const dot = document.getElementById('dot' + i);
    dot.classList.remove('active','done');
    if (i < currentStep) dot.classList.add('done');
    if (i === currentStep) dot.classList.add('active');
  });
  document.getElementById('stepLabel').textContent = 'Paso ' + currentStep + ' de 3';
}

function showResult() {
  if (!answers.urgencia) return;
  // Determine result
  let type = 'presencia';
  if (answers.objetivo === 'vender') type = 'ecommerce';
  else if (answers.objetivo === 'organizar') type = 'app';
  else if (answers.objetivo === 'citas' || answers.negocio === 'comida' || answers.negocio === 'belleza') type = 'sistema';

  const r = RESULTS[type];

  // Hide steps, show progress as done
  document.getElementById('step3').classList.remove('show');
  document.getElementById('progress').style.display = 'none';

  // Fill result
  const icon = document.getElementById('resultIcon');
  icon.textContent = r.icon;
  icon.style.background = r.iconBg;

  document.getElementById('resultName').textContent = r.name;
  document.getElementById('resultTag').textContent = r.tag;
  document.getElementById('resultNote').textContent = r.note;

  const benefits = document.getElementById('resultBenefits');
  benefits.innerHTML = r.benefits.map(b => `
    <div class="rb">
      <div class="rb-check" style="background:${r.checkBg};color:${r.checkColor}">✓</div>
      <span>${b}</span>
    </div>
  `).join('');

  document.getElementById('resultPrice').textContent = r.price;
  document.getElementById('resultPrice').nextElementSibling.textContent = r.priceSub;
  document.getElementById('resultTime').textContent = r.time;
  document.getElementById('resultTimeSub').textContent = r.timeSub;

  const waLink = `https://wa.me/5215612934010?text=${r.waMsg}`;
  document.getElementById('resultWA').href = waLink;

  const rs = document.getElementById('result-section');
  rs.classList.add('show');
}

function restartWiz() {
  // Reset
  Object.keys(answers).forEach(k => delete answers[k]);
  currentStep = 1;
  document.querySelectorAll('.opt').forEach(o => o.classList.remove('sel'));
  document.querySelectorAll('.btn-next').forEach(b => b.disabled = true);
  document.querySelectorAll('.wiz-section').forEach(s => s.classList.remove('show'));
  document.getElementById('result-section').classList.remove('show');
  document.getElementById('step1').classList.add('show');
  document.getElementById('progress').style.display = 'flex';
  updateProgress();
}

// ── NAV ──────────────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('up', scrollY > 50));

// ── MOBILE MENU ──────────────────────────────────────────────────
const ham = document.getElementById('ham');
const mob = document.getElementById('mob');
document.getElementById('mobClose').addEventListener('click', closeMob);
ham.addEventListener('click', () => {
  mob.classList.toggle('open');
  ham.classList.toggle('x');
});
function closeMob() { mob.classList.remove('open'); ham.classList.remove('x'); }

// ── REVEAL ──────────────────────────────────────────────────────
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// ── FORM ────────────────────────────────────────────────────────
function handleForm(e) {
  e.preventDefault();
  const name = document.getElementById('fname').value;
  const what = document.getElementById('fwhat').value;
  const need = document.getElementById('fneed').value;
  const msg  = document.getElementById('fmsg').value;
  // Build WA message
  const waText = encodeURIComponent(`Hola Haza, me llamo ${name}. Tengo un negocio de ${what} y quiero: ${need}. ${msg}`);
  window.open(`https://wa.me/5215612934010?text=${waText}`, '_blank');
  document.getElementById('cForm').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}

// ── SERVICES ─────────────────────────────────────────────────────
function svcTab(idx) {
  document.querySelectorAll('.svc-tab').forEach((t,i) => t.classList.toggle('active', i===idx));
  document.querySelectorAll('.svc-panel').forEach((p,i) => p.classList.toggle('active', i===idx));
}
function svcInner(btn, panelId) {
  const card = btn.closest('.svc-main-card');
  card.querySelectorAll('.svc-itab').forEach(t => t.classList.remove('on'));
  card.querySelectorAll('.svc-ipanel').forEach(p => p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById(panelId).classList.add('on');
}

// ── SMOOTH SCROLL ───────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});


// ── FASE SELECTOR ─────────────────────────────────────
function setFase(idx) {
  document.querySelectorAll('.fase-tab').forEach(function(t,i) {
    t.classList.toggle('active', i === idx);
  });
  document.querySelectorAll('.fase-panel').forEach(function(p,i) {
    p.classList.toggle('active', i === idx);
  });
}

// ── REVIEW STARS ──────────────────────────────────────
function setRevStar(containerId, value) {
  var btns = document.querySelectorAll('#' + containerId + ' button');
  btns.forEach(function(b, i) {
    b.classList.toggle('on', i < value);
  });
  document.getElementById(containerId).dataset.rating = value;
}

// ── REVIEW SUBMIT — envía por WhatsApp a Haza para revisión manual ─────────
function submitReview(starsId, nameId, textId, successId) {
  var rating = document.getElementById(starsId).dataset.rating || 0;
  var name   = document.getElementById(nameId).value.trim();
  var text   = document.getElementById(textId).value.trim();

  if (!rating || Number(rating) < 1) {
    alert('Selecciona una calificación de estrellas.'); return;
  }
  if (!name) {
    alert('Ingresa tu nombre y negocio.'); return;
  }
  if (text.length < 20) {
    alert('Por favor escribe al menos 20 caracteres.'); return;
  }

  var stars = '★'.repeat(Number(rating)) + '☆'.repeat(5 - Number(rating));
  var msg = encodeURIComponent(
    '⭐ Nueva opinión:\n' + stars + '\n👤 ' + name + '\n💬 ' + text
  );
  window.open('https://wa.me/5215612934010?text=' + msg, '_blank');

  document.getElementById(nameId).value = '';
  document.getElementById(textId).value = '';
  document.querySelectorAll('#' + starsId + ' button').forEach(function(b) {
    b.classList.remove('on');
  });
  delete document.getElementById(starsId).dataset.rating;

  var success = document.getElementById(successId);
  success.style.display = 'block';
  setTimeout(function() { success.style.display = 'none'; }, 5000);
}

// ── CARRUSEL DOTS ─────────────────────────────────────
function scrollToCard(carouselId, index, dotsId) {
  var carousel = document.getElementById(carouselId);
  var item = carousel.querySelector('.rev-carousel-item');
  if (!item) return;
  var itemWidth = item.offsetWidth + 10;
  carousel.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
  updateActiveDot(dotsId, index);
}

function updateDots(carousel, dotsId) {
  var item = carousel.querySelector('.rev-carousel-item');
  if (!item) return;
  var itemWidth = item.offsetWidth + 10;
  var idx = Math.round(carousel.scrollLeft / itemWidth);
  updateActiveDot(dotsId, idx);
}

function updateActiveDot(dotsId, idx) {
  document.querySelectorAll('#' + dotsId + ' .rev-carousel-dot').forEach(function(d, i) {
    d.classList.toggle('active', i === idx);
  });
}
