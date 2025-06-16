# Tienda Angular con Fake Store API

Este proyecto es una demostración práctica del uso de Angular, integrando enrutamiento, módulos, consumo de APIs externas y uso de SCSS para estilos.

Desplegado en GitHub Pages: https://danielcaldes.github.io/angular-data-pipelines-deployments/

## Tecnologías usadas
- Angular
- SCSS
- TypeScript
- Angular Material
- Fake Store API (https://fakestoreapi.com)
- GitHub Pages para despliegue

## Cómo ejecutar localmente
1. ``git clone https://github.com/DanielCaldes/angular-data-pipelines-deployments.git``
2. ``cd angular-data-pipelines-deployments``
3. ``npm install``
4. ``ng serve``
5. Accede a la app en ``http://localhost:4200``

## Descripción del proyecto

Este proyecto contiene:

1. **Módulo: Tienda (StoreModule)**
- Permite navegar entre las distintas categorías de productos mediante un select de Material.
- Al seleccionar una categoría, muestra todos los productos asociados.
- Posibilidad de ver información detallada de cada producto seleccionado mediante los expansion panel de material.
- Como extra se ha añadido la posibilidad de ordenar el listado de los productos mediante diferentes condiciones: Nombre, Precio y Valoraciones.

2. **Consumo de datos desde Fake Store API**
- Se realiza mediante un servicio personalizado que obtienen todo el listado de productos o un producto por id.

## Estructura del proyecto
```
📁 src/
└── 📁 app/
    ├── 📁 store/
    │   ├── 📁 components/
    │   │   └── 📁 store/
    │   │   ├── 📄 store.component.html
    │   │   ├── 📄 store.component.scss
    │   │   ├── 📄 store.component.spec.ts
    │   │   └── 📄 store.component.ts
    │   ├── 📁 services/
    │   │   ├── 📄 store.service.spec.ts
    │   │   └── 📄 store.service.ts
    │   └── 📁 models/
    │       └── 📄 product.model.ts
    ├── 📄 app.component.html
    ├── 📄 app.component.css
    ├── 📄 app.component.spec.ts
    └── 📄 app.component.ts
```

El proyecto está completamente estilizado con SCSS para una mejor presentación visual.
