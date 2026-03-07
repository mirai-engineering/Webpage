# Investigación: navbar no funciona en Who we are y Blog

## Cambios revertidos
- Eliminado el bloque `<style id="nav-mobile-override">` de **about.html** y **blog.html**.

---

## Comparación de páginas

### Estructura HTML del nav
- **Idéntica** en index, about, blog, contact, ai-service, industries: mismo `<nav class="navigation">`, `<ul class="nav-menu">`, `<div class="hamburger">` (3 spans). No hay duplicados de `.nav-menu` o `.hamburger` en el body (solo en mobile/, que no se usa).

### Carga de scripts (final del body)
- **about:** `script.js?v=7` → `components.js` → inline (AnimatedNodeBackground + TimelineAnimationController).
- **blog:** `script.js` → `components.js` → inline (AnimatedNodeBackground + AIDiscoveryTimelineController).
- **contact:** `script.js` → `components.js` → inline.
- **index:** `script.js?v=8` → `components.js` → inline.

Todas usan el mismo orden; `script.js` se ejecuta primero y registra `DOMContentLoaded` → `initMobileNavigation()`.

### components.js
- Solo hace `getElementById('footer-container')` e `innerHTML =` con el HTML del footer. No toca el nav. El footer usa clase `footer-nav`, no `nav-menu`.

### Estilos inline
- **about.html:** Segundo `<style>` con `.card-grid`, `.card`, `.card-full`, etc., y `@media (max-width: 768px)` para `.card-grid`. **Ninguna regla usa `.hamburger`, `.nav-menu` ni `.navigation`.**
- **blog.html:** No tiene segundo bloque de estilos (solo fuentes). No hay reglas que afecten al nav.

### Z-index y capas
- Nav en `styles.css`: `z-index: 1000`, `position: fixed`. Contenido en about/blog: `z-index: 1, 2, 3` dentro de secciones. El nav debería quedar por encima. Los fondos animados tienen `pointer-events: none`.

### CSS del hamburger en styles.css
- Base: `.hamburger { display: none; }` (línea ~308).
- En `@media (max-width: 992px)`: `.navigation .hamburger { display: flex !important; }` y `.navigation .nav-menu { position: fixed; ... }` etc. Especificidad mayor que cualquier regla inline de about (solo `.card` con una clase).

---

## Hipótesis que quedan

1. **Caché del navegador**  
   about y blog cargan `styles.css?v=52`. Si el navegador tiene una versión antigua de ese mismo URL (sin las reglas de 992px), solo esas dos páginas verían el nav “roto”. Las demás usan otros `?v=` (p. ej. contact v=15, index v=29) y podrían tener CSS actualizado.

2. **Script no enlaza con el nav correcto**  
   Poco probable porque el DOM es igual, pero se puede hacer más robusto usando solo el nav: `document.querySelector('nav.navigation')` y luego `nav.querySelector('.hamburger')` y `nav.querySelector('.nav-menu')` para asegurar que se enlaza el menú del header.

3. **Algo específico del viewport o del orden de carga**  
   No se ha encontrado diferencia en viewport meta ni en orden de carga entre páginas que funcionan y las que no.

---

## Próximos pasos recomendados

1. **Forzar recarga de CSS en about y blog**  
   Cambiar a `styles.css?v=53` (o valor nuevo) en about.html y blog.html para descartar caché.

2. **Hacer el JS del nav más robusto**  
   En `script.js`, obtener hamburger y navMenu desde `nav.navigation` (como arriba) para no depender de que sean los únicos en la página.

3. **Si sigue fallando**  
   Añadir en esas dos páginas un `<style>` mínimo que fuerce solo en `@media (max-width: 992px)`:
   - `nav.navigation .hamburger { display: flex !important; }`
   - y las reglas mínimas de `nav.navigation .nav-menu` (position, visibility, opacity) para el panel desplegable.
