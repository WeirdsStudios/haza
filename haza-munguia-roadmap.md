# HAZA MUNGUIA STUDIO — MASTER ROADMAP
**Documento de referencia para Claude Code y para Haza.**
Última actualización: Junio 2025

---

## VISIÓN DEL PRODUCTO

Haza Munguia Studio construye Apps Integradas y Apps a Medida para empresas mexicanas con operación real. El portafolio de demos muestra 5 industrias completas, cada una con vista de cliente y vista de dueño de negocio.

---

## PRODUCTOS (lo que se vende)

| Producto | Descripción | Precio base |
|---|---|---|
| App Integrada | Plataforma modular por industria | Desde $15,000 MXN |
| App a Medida | Arquitectura exclusiva por operación | Desde $35,000 MXN |
| Acompañamiento | Soporte y evolución mensual | Desde $6,000 MXN/mes |

### Módulos (Domos) disponibles:
- **Reservas y CRM** — citas, agenda, lista de espera (+$10,000)
- **Ventas Digitales** — tienda, POS, delivery (+$15,000)
- **Cotizador Inteligente** — propuestas automáticas (+$10,000)
- **Atención Automatizada** — agente IA 24/7 (+$15,000)

---

## REPOSITORIOS EN GITHUB (WeirdsStudios)

| Repo | URL demo | Template base | Stack |
|---|---|---|---|
| `haza` | hazamunguia.com | Orisa React v3 | React + Bootstrap |
| `reserva-plus` | demos.hazamunguia.com/reserva-plus | Chisfis | Next.js 16 + Tailwind |
| `vida-clinica` | demos.hazamunguia.com/vida-clinica | Clinicmaster | Next.js + TypeScript |
| `la-carta` | demos.hazamunguia.com/la-carta | Restan + FoodDesk | Next.js + Vite React |
| `selecto` | demos.hazamunguia.com/selecto | Shofy | Next.js + TypeScript |
| `cotiza-pro` | demos.hazamunguia.com/cotiza-pro | NeonWizard | React + TypeScript |

### Backend compartido:
- **Firebase**: un solo proyecto `hazamunguia-demos` con colecciones separadas por demo
- **Deploy**: Vercel para todos los repos
- **Dominio**: hazamunguia.com (sitio principal), demos.hazamunguia.com (subdomain Vercel)

---

## ESTRUCTURA DE CARPETAS POR REPO DE DEMO

Cada demo sigue esta estructura adicional a la del template:

```
[nombre-demo]/
├── public/
│   ├── hm-brand/               ← assets de Haza Munguia
│   │   ├── logohm_bco_logo.svg
│   │   ├── logohm_isotipo.svg
│   │   └── favicon.svg
│   └── manifest.json           ← PWA manifest
├── src/
│   ├── hm/                     ← carpeta exclusiva Haza Munguia
│   │   ├── HMSubheader.tsx     ← barra "Vista Dueño" en todos los demos
│   │   ├── HMAdminView.tsx     ← panel de admin simplificado
│   │   ├── firebase.ts         ← config Firebase compartida
│   │   ├── demo-data/          ← datos ficticios del demo
│   │   │   ├── clientes.ts
│   │   │   ├── reservas.ts
│   │   │   └── productos.ts
│   │   └── theme.ts            ← colores y fuentes de la marca del demo
│   └── [archivos del template original]
├── .env.local                  ← Firebase keys (no subir a git)
├── next.config.js
└── README.md                   ← instrucciones de Claude Code
```

### El HMSubheader (igual en todos los demos):
```tsx
// Barra fija arriba de todo — 32px de alto
// Fondo: #0A0A0A | texto: blanco | 12px uppercase
// Izquierda: "Explorando como: Cliente"
// Derecha: botón "[ Vista de Dueño de Negocio ]"
// Al dar click: toggle que muestra el panel admin (HMAdminView)
// Al fondo del demo: CTA "¿Quieres esto para tu negocio? →"
//   link: https://hazamunguia.com/#cotizador
```

---

## ROADMAP POR FASES

### FASE 0 — Preparación (2-3 horas, una sola sesión)
**Objetivo:** Tener todos los repos listos antes de escribir una sola línea de código de demo.

Tareas:
- [ ] Commit y push del sitio principal (`haza` repo) con todo lo actual
- [ ] Crear proyecto Firebase `hazamunguia-demos` en console.firebase.google.com
- [ ] Crear los 5 repos vacíos en GitHub (WeirdsStudios)
- [ ] Descargar los 5 templates de Envato Elements
- [ ] Configurar subdomain `demos.hazamunguia.com` en Vercel

**Cómo hacerlo:**
```bash
# Para cada demo, en terminal:
git clone [URL del repo vacío]
cd [nombre-repo]
# Copiar archivos del template descargado aquí
npm install
git add . && git commit -m "feat: template base instalado"
git push
```

---

### FASE 1 — CotizaPro (1 semana)
**Demo:** Sistema de cotización para una empresa de servicios profesionales
**Industria que muestra:** Consultoría, despachos, arquitectos, ingeniería
**Marca inventada:** "CotizaPro — Cotizaciones inteligentes para tu despacho"
**Template:** NeonWizard dark version
**Complejidad:** BAJA — sin backend, solo lógica de preguntas

Módulos que demuestra:
- Cotizador Inteligente (el flujo completo de preguntas → propuesta)
- Atención Automatizada (respuesta automática con la propuesta generada)

Flujo del demo:
1. Landing de CotizaPro (hero + descripción del servicio)
2. Botón "Cotizar mi proyecto" → abre el wizard
3. 4-5 preguntas sobre el proyecto (tipo, alcance, urgencia, presupuesto)
4. Resultado: propuesta con desglose, precio estimado y botón de WhatsApp
5. Vista Dueño: lista de cotizaciones recibidas en Jampack

**Sesiones Claude Code estimadas:** 3

---

### FASE 2 — Reserva+ (1 semana)
**Demo:** Sistema de reservas para hotel boutique y experiencias
**Industria que muestra:** Hospitalidad, turismo, experiencias, eventos
**Marca inventada:** "Reserva+ — Experiencias a tu medida"
**Template:** Chisfis (Next.js 16 + Tailwind)
**Complejidad:** MEDIA — Firebase para reservas reales

Módulos que demuestra:
- Reservas y CRM (calendario, disponibilidad, confirmación)
- Atención Automatizada (confirmaciones automáticas)

Flujo del demo:
1. Landing de Reserva+ (catálogo de experiencias/habitaciones)
2. Selección de fecha y disponibilidad (calendario real)
3. Checkout de reserva (datos del huésped)
4. Confirmación con código de reserva (datos a Firebase)
5. Vista Dueño: dashboard con reservas del día, calendario, listado de huéspedes

**Sesiones Claude Code estimadas:** 4

---

### FASE 3 — VidaClínica (1 semana)
**Demo:** Sistema de citas para clínica/spa/estética
**Industria que muestra:** Salud, belleza, wellness, consultorios
**Marca inventada:** "VidaClínica — Tu salud, a tu tiempo"
**Template:** Clinicmaster (Next.js)
**Complejidad:** MEDIA — Firebase para citas reales

Módulos que demuestra:
- Reservas y CRM (agenda de citas, recordatorios, historial de pacientes)
- Cotizador Inteligente (cotización de tratamientos)

Flujo del demo:
1. Landing de VidaClínica (servicios, doctores/especialistas, galería)
2. "Agendar cita" → selección de especialidad + doctor + fecha
3. Confirmación (datos a Firebase, email/WhatsApp automático)
4. Vista Dueño: agenda del día, pacientes, historial, estadísticas

**Sesiones Claude Code estimadas:** 4

---

### FASE 4 — La Carta (1.5 semanas)
**Demo:** Menú digital + sistema de pedidos para restaurante
**Industria que muestra:** Restaurantes, cafeterías, dark kitchens, catering
**Marca inventada:** "La Carta — Tu menú, siempre al día"
**Templates:** Restan (cliente) + FoodDesk (admin)
**Complejidad:** ALTA — dos templates que se conectan via Firebase

Módulos que demuestra:
- Ventas Digitales (menú, pedidos, delivery)
- Reservas y CRM (reserva de mesa, historial de clientes)
- Atención Automatizada (confirmación de pedido automática)

Flujo del demo:
1. Landing de La Carta (menú del restaurante, ambiente)
2. "Ver menú" → catálogo con categorías y precios
3. Hacer pedido → carrito → datos de entrega o mesa
4. Confirmación de pedido (número de orden, tiempo estimado)
5. Vista Dueño: FoodDesk — pedidos en tiempo real, menú editable, estadísticas

**Sesiones Claude Code estimadas:** 5

---

### FASE 5 — Selecto (1.5 semanas)
**Demo:** Tienda de productos premium con e-commerce completo
**Industria que muestra:** Retail, moda, artesanías, productos de lujo
**Marca inventada:** "Selecto — Piezas que duran"
**Templates:** Shofy (Next.js)
**Complejidad:** ALTA — MercadoPago para pagos reales en sandbox

Módulos que demuestra:
- Ventas Digitales (tienda, carrito, checkout, pagos)
- CRM (historial de compras, perfiles de cliente)

Flujo del demo:
1. Landing de Selecto (colecciones, featured products)
2. Catálogo con filtros (categoría, precio, talla/variante)
3. Página de producto (galería, descripción, variantes)
4. Carrito → checkout → pago con MercadoPago (sandbox)
5. Confirmación de compra (número de orden, email)
6. Vista Dueño: Jampack — pedidos, inventario, clientes, facturación

**Sesiones Claude Code estimadas:** 5

---

### FASE 6 — PWA & Pulido (3-4 sesiones)
**Objetivo:** Convertir los 5 demos en PWAs instalables y dejarlos impecables.

Tareas por demo:
- [ ] Agregar `manifest.json` con nombre, ícono y colores del demo
- [ ] Service Worker para funcionamiento offline básico
- [ ] Meta tags para iOS (apple-touch-icon, apple-mobile-web-app-capable)
- [ ] Probar instalación en iPhone y Android
- [ ] Revisar performance en Lighthouse (objetivo: 90+ en todos)
- [ ] Agregar CTA "Instala esta app" en cada demo

---

### FASE 7 — Actualizar sitio principal (1-2 sesiones)
**Objetivo:** Actualizar hazamunguia.com con los demos ya construidos.

Tareas:
- [ ] Actualizar sección Creaciones con los 5 demos reales
- [ ] Actualizar cotizador con links a los demos según industria seleccionada
- [ ] Agregar sección "Explora los demos" con grid de las 5 industrias
- [ ] Commit final y deploy

---

## SISTEMA DE COMMITS Y BRANCHES

Convención de commits a seguir en todos los repos:

```
feat: nueva funcionalidad
fix: corrección de bug
content: cambio de texto o imágenes
style: cambio visual sin lógica
refactor: reorganización de código
deploy: cambios relacionados con deploy
```

Branch principal: `main` (siempre estable)
Branch de trabajo: `dev` (aquí trabaja Claude Code)
Merge a main cuando el feature esté terminado y probado.

---

## README.md PARA CADA REPO (Claude Code lo lee al entrar)

Cada repo debe tener un README con esta estructura:

```markdown
# [Nombre del Demo] — Haza Munguia Studio

## Qué es esto
[Descripción del demo y la industria que muestra]

## Stack
- Next.js 16 + TypeScript + Tailwind
- Firebase (colección: [nombre])
- Vercel deploy

## Dónde están las cosas importantes
- `src/hm/HMSubheader.tsx` — barra Vista Dueño
- `src/hm/firebase.ts` — configuración Firebase
- `src/hm/demo-data/` — datos ficticios del demo
- `.env.local` — keys de Firebase (no está en git)

## Para correr localmente
npm install
npm run dev → http://localhost:3000

## Variables de entorno necesarias
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=

## Marca del demo
- Nombre: [nombre inventado]
- Color primario: [hex]
- Font: [nombre]
```

---

## ESTADO ACTUAL DEL PROYECTO

| Item | Estado |
|---|---|
| Sitio principal hazamunguia.com | ✅ Construido, pendiente commit final |
| Repo `haza` en GitHub | ✅ Existe |
| Firebase project | ⏳ Pendiente crear |
| Repos de demos | ⏳ Pendiente crear |
| Templates descargados | ⏳ Pendiente descargar |
| Demo CotizaPro | ⏳ Fase 1 |
| Demo Reserva+ | ⏳ Fase 2 |
| Demo VidaClínica | ⏳ Fase 3 |
| Demo La Carta | ⏳ Fase 4 |
| Demo Selecto | ⏳ Fase 5 |
| PWA en todos los demos | ⏳ Fase 6 |
| Sitio principal actualizado | ⏳ Fase 7 |
