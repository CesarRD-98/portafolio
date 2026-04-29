# 🎨 Design System — Portfolio Fullstack (SaaS + Blue + Light/Dark)

---

## 🧠 Principios

* Jerarquía clara
* Colores controlados (azul como acento)
* Bordes duros (minimalismo estructural)
* Soporte completo Light / Dark (con clases, sin toggle)
* Profundidad con blur y capas sutiles

---

# 🌗 MODO DARK (DEFAULT)

## Base

| Token          | Clase                |
| -------------- | -------------------- |
| Background     | `bg-neutral-950`     |
| Surface        | `bg-neutral-900`     |
| Surface Alt    | `bg-neutral-800`     |
| Border         | `border-neutral-800` |
| Text Primary   | `text-neutral-100`   |
| Text Secondary | `text-neutral-400`   |

---

## 🔵 Blue

| Token         | Clase                |
| ------------- | -------------------- |
| Primary       | `text-blue-500`      |
| Soft          | `text-blue-400`      |
| Bg Accent     | `bg-blue-500/10`     |
| Border Accent | `border-blue-500/30` |

---

# ☀️ MODO LIGHT

## Base

| Token          | Clase                |
| -------------- | -------------------- |
| Background     | `bg-white`           |
| Surface        | `bg-neutral-100`     |
| Surface Alt    | `bg-neutral-200`     |
| Border         | `border-neutral-200` |
| Text Primary   | `text-neutral-900`   |
| Text Secondary | `text-neutral-600`   |

---

## 🔵 Blue

| Token         | Clase                |
| ------------- | -------------------- |
| Primary       | `text-blue-600`      |
| Soft          | `text-blue-500`      |
| Bg Accent     | `bg-blue-500/10`     |
| Border Accent | `border-blue-500/30` |

---

# 🌫️ FONDOS Y BLUR (CLAVE NUEVO)

## Fondo base con profundidad

```txt
layer 1: background base
layer 2: gradiente sutil
layer 3: blur decorativo
```

---

## Gradientes

* `bg-gradient-to-b from-neutral-900 to-neutral-950` (dark)
* `bg-gradient-to-b from-white to-neutral-100` (light)

---

## Surface real (SaaS feel)

* `bg-white/60`
* `dark:bg-neutral-900/60`

---

## Blur decorativo (NO excesivo)

```txt
uso:
- fondos
- blobs suaves
- detrás de contenido

NO:
- texto
- cards principales
```

Clases:

* `blur-3xl opacity-20`
* `bg-blue-500/20`
* posición absoluta

---

# 📏 ESPACIADO

| Uso        | Clase            |
| ---------- | ---------------- |
| Section    | `py-24 md:py-32` |
| Container  | `px-6 md:px-8`   |
| Gap Large  | `gap-12`         |
| Gap Medium | `gap-6`          |

---

# 🔤 TIPOGRAFÍA

| Elemento | Clase                                               |
| -------- | --------------------------------------------------- |
| H1       | `text-4xl md:text-6xl font-bold tracking-tight`     |
| H2       | `text-3xl md:text-4xl font-semibold tracking-tight` |
| Body     | `text-base leading-relaxed`                         |

---

# 🔲 BORDES

| Uso     | Clase          |
| ------- | -------------- |
| Default | `rounded-full` |
| Soft    | `rounded-lg`   |

---

# 📦 COMPONENTES

## Card

Base:

* `bg-white/60 dark:bg-neutral-900/60`
* `border border-neutral-200 dark:border-neutral-800`
* `rounded-sm p-6 transition-all duration-200`

Hover:

* `hover:border-blue-500`
* `hover:shadow-md`

---

## Button

### Primary

* `bg-blue-600/75 text-white`
* `hover:bg-blue-600`

Base:

* `px-5 py-2.5 rounded-sm cursor-pointer`

---

### Secondary

* `border border-neutral-300 dark:border-neutral-700`
* `hover:border-blue-500`
* `hover:bg-neutral-200 dark:hover:bg-neutral-800`
* `cursor-pointer`

---

## Badge

* `bg-blue-500/10`
* `text-blue-500`
* `border border-blue-500/20`
* `rounded-sm text-xs`

---

# ✨ EFECTOS

* `transition-all duration-200`

---

# 🎬 ANIMACIONES

* duración: `0.25s - 0.4s`
* tipo: `ease-out`

---

# 📱 RESPONSIVE

* mobile-first
* layout fluido
* navbar → menú lateral

---

# ♿ ACCESIBILIDAD

* labels en inputs
* aria-label
* contraste correcto

---

# ⚡ PERFORMANCE

* blur limitado
* gradientes ligeros
* nada pesado

---

# 🧠 RESULTADO FINAL

Debe sentirse:

* moderno
* con profundidad
* no plano
* profesional SaaS
* con identidad propia
* acento azul limpio (no saturado)

---
