# ExpoTecnologica 2026-2 - Sistema de Votaci&oacute;n por QR

Proyecto web est´tico (HTML5 + CSS3 + JS Vanilla) para votaci´n mediante c´digos QR, listo para desplegar en **GitHub Pages** y conectado a **Firebase Firestore** (SDK modular v11 v´a CDN, sin bundlers ni Node.js).

## Estructura

| Archivo | Descripci´n |
|---------|-------------|
| `firebase-config.js` | Inicializa Firebase y exporta la instancia de Firestore (`db`) |
| `index.html` | P´blica de votaci´n (llega el asistente al escanear el QR) |
| `resultados.html` | Tablero p´blico de resultados en tiempo real |
| `generador-qr.html` | Herramienta administrativa para generar e imprimir QRs |
| `firestore.rules` | Reglas de seguridad de Firestore |
| `README.md` | Este archivo |

## 1. Configurar Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/) y crea un proyecto.
2. En **Build > Firestore Database**, crea una base de datos en **modo modo de prueba** (despu´es aplica las reglas de `firestore.rules`).
3. Copia `firestore.rules` en **Firestore Database > Reglas** y p´blicalas.
4. Obtiene las credenciales de tu app web (`Proyecto > Configuraci´n > Tus apps > Aplicaci´n web`).
5. Edita `firebase-config.js` y reemplaza los placeholders (`apiKey`, `authDomain`, `projectId`, etc.) con tus valores reales.

## 2. Desplegar en GitHub Pages

1. Sube todos los archivos a un repositorio de GitHub.
2. En **Settings > Pages**, selecciona la rama (por ejemplo `main`) y la carpeta raíz (`/`).
3. Guarda. GitHub Pages publicar´ el sitio en `https://<usuario>.github.io/<repositorio>/`.
4. La URL base se detecta autom´ticamente en `generador-qr.html` (`window.location.origin + window.location.pathname`).

## 3. Flujo de uso

1. Abre `generador-qr.html`, pega la lista de equipos (uno por l´nea) y confirma la URL base.
2. Haz clic en **Generar QRs**, imprime la cuadr´cula y pega los c´digos en los stands.
3. El asistente escanea el QR de un equipo y llega a `index.html?equipo=NombreDelEquipo`.
4. Selecciona puntos del 1 al 10 y presiona **Votar**. Se guarda en Firestore y se bloquea el voto repetido por navegador (`localStorage`).
5. Abre `resultados.html` para ver el tablero en tiempo real ordenado por puntaje total.

## Reglas de seguridad resumen

- Lectura p´blica (`read: true`) en `/votos/{votoId}`.
- Creaci´n s´lo si `equipo` es string no vac´o y `puntos` es entero 1–10.
- `update` y `delete` denegados (`false`).
