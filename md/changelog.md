# XanderZero - React - Core

## INICIO DE REPOSITORIO

<!-- Acciones -->

### Acciones

- Creamos Estructura de Carpetas React
- Creamos y accedemos a carpeta ReactCore182
- Si estamos entro de la carpetano mencionamos el nombre de esta
- Inicializamos Git
- Inicializamos Npm

<!-- Acciones -->

<!-- Command -->

### Command

```
npx create-react-app reactcore182 
npx create-react-app . 
cd reactcore182
git init
git add .
git commit -m "Init"
```

<!-- Command -->

---

## REESTRUCTURACION

<!-- Acciones -->

### Acciones

- Creamos nuevas carpetas para el uso de React
- Creamos carpeta md para referencias
- Vinculamos con github

<!-- Acciones -->

<!-- Command -->

### Command

```
git remote add origin https://github.com/XanderZeroLabs/reactcore182.git
git commit -m "Reestructuracion"
```

<!-- Command -->

---

## REMOTE

<!-- Acciones -->

### Acciones

- Vinculamos con nuevo github

<!-- Acciones -->

<!-- Command -->

### Command

```
git remote add origin https://github.com/XanderZeroLabs/appifyland.git
git commit -m "Remote"
```

<!-- Command -->

---

## CLONE (Opcional)

<!-- Acciones -->

### Acciones

- clonamos desde Github dentro de la carpeta ya creada

<!-- Acciones -->

<!-- Command -->

### Command

```
git clone https://github.com/XanderZeroLabs/appifyland.git .
```

<!-- Command -->

---

## THEME HTML

<!-- Acciones -->

### Acciones

- Extraemos theme en html
- Acomodamos archivos

<!-- Acciones -->

<!-- Command -->

### Command

```
git commit -m "Theme Html"
```

<!-- Command -->

---

## REACT BOOTSTRAP (Opcional)

<!-- Acciones -->

### Acciones

- Incluimos Bootstrap en version para react que maneja componentes
- Vinculamos

<!-- Acciones -->

<!-- Command -->

### Command

```
npm install react-bootstrap bootstrap

git commit -m "React Bootstrap"
```

<!-- Command -->

---

## CDN BOOTSTRAP (Opcional)

<!-- Acciones -->

### Acciones

- Incluimos Bootstrap en public/index.html
- desinstalamos react-bootstrap
- Vinculamos

<!-- Acciones -->

<!-- Command -->

### Command

```
npm uninstall react-bootstrap bootstrap
git commit -m "Cdn Bootstrap"
```

<!-- Command -->

---

## DEPENDENCIA BOOTSTRAP (Opcional)

<!-- Acciones -->

### Acciones

- Instalamos Bootstrap como dependencia
- Comentamos CDN Bootstrap en public/index.html

- Importamon dependencias bootstrap en src/index.js
    import * as bootstrap from 'bootstrap'
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Alert from 'bootstrap/js/dist/alert'
    import { Tooltip, Toast, Popover } from 'bootstrap'

<!-- Acciones -->

<!-- Command -->

### Command

```
npm install bootstrap
npm install @popperjs/core

git commit -m "Dependencia Bootstrap"
```

<!-- Command -->

---

## HABILITANDO THEME BOOTSTRAP

<!-- Acciones -->

### Acciones

- Conla ultima opcion de configuracion de Bootstrap

<!-- Acciones -->

<!-- Command -->

### Command

```
git commit -m "Habilitando Theme Bootstrap"
```

<!-- Command -->

---
