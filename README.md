# 🍳 GASTRO GURÚ - Recetario Premium Mobile

Gastro Gurú es una aplicación móvil multiplataforma desarrollada con **Ionic Framework** y **Angular**. La aplicación ofrece una experiencia visual de lujo diseñada para entusiastas de la cocina, permitiendo explorar recetas detalladas con una interfaz de usuario minimalista en modo oscuro con acentos dorados.

## 🚀 Características principales

- **Diseño Dark & Gold:** Interfaz de usuario optimizada para pantallas OLED, reduciendo la fatiga visual.
- **Base de Datos Local:** 12 recetas reales con procedimientos verificados y medidas precisas.
- **Arquitectura Escalable:** Separación clara entre la lógica de negocio y la presentación.
- **Navegación Fluida:** Transiciones nativas optimizadas para una experiencia de usuario tipo App Store.

## 🛠️ Tecnologías utilizadas

- [Ionic Framework](https://ionicframework.com/) (v7+)
- [Angular](https://angular.io/) (v16+)
- [Capacitor](https://capacitorjs.com/) (Para despliegue nativo en Android/iOS)
- [SASS/SCSS](https://sass-lang.com/) (Para estilos personalizados)

## 📁 Estructura del Proyecto

A continuación se detalla la jerarquía de las carpetas principales del código fuente:

```text
gastro-guru/
├── src/
│   ├── app/
│   │   ├── blank/                 # Pantalla de Inicio (Categorías)
│   │   │   ├── blank.page.html
│   │   │   ├── blank.page.scss
│   │   │   └── blank.page.ts
│   │   ├── list/                  # Listado de Recetas por Categoría
│   │   │   ├── list.page.html
│   │   │   ├── list.page.scss
│   │   │   └── list.page.ts       <-- Base de datos de recetas (12)
│   │   ├── home/                  # Detalle de Preparación
│   │   │   ├── home.page.html
│   │   │   ├── home.page.scss
│   │   │   └── home.page.ts
│   │   └── app-routing.module.ts  # Configuración de Rutas
│   ├── assets/                    # Recursos estáticos (Iconos, logos)
│   ├── theme/                     # Variables globales de CSS (Colores)
│   └── index.html                 # Punto de entrada principal
├── ionic.config.json              # Configuración de Ionic
└── package.json                   # Dependencias del proyecto


⚙️ Instalación y Configuración
Clonar el repositorio:

Bash

git clone [https://github.com/tu-usuario/gastro-guru.git](https://github.com/tu-usuario/gastro-guru.git)
Instalar dependencias:

Bash

npm install
Ejecutar en el navegador:

Bash

ionic serve
