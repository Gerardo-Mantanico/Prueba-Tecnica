# 📋 Sistema de Gestión de Usuarios

Sistema web completo para la gestión de usuarios (CRUD) desarrollado con tecnologías modernas. Incluye una API REST con Node.js/Express, base de datos PostgreSQL y una interfaz de usuario moderna con React + Vite.

---

## 🚀 Características

- ✅ **Crear** nuevos usuarios
- ✅ **Ver** lista completa de usuarios
- ✅ **Editar** información de usuarios existentes
- ✅ **Eliminar** usuarios con confirmación
- ✅ **Validación** de datos en frontend y backend
- ✅ **Alertas visuales** con SweetAlert2
- ✅ **Interfaz moderna** con TailwindCSS
- ✅ **Docker** para fácil despliegue

---

## 🛠️ Tecnologías Utilizadas

### Backend (API)
- **Node.js** - Entorno de ejecución JavaScript
- **Express** - Framework web
- **Sequelize** - ORM para PostgreSQL
- **Joi** - Validación de datos
- **Swagger** - Documentación de API

### Frontend (Cliente)
- **React** - Librería de interfaces de usuario
- **Vite** - Build tool y servidor de desarrollo
- **TailwindCSS** - Framework de estilos
- **Axios** - Cliente HTTP
- **SweetAlert2** - Alertas bonitas

### Base de Datos
- **PostgreSQL 16** - Base de datos relacional

### DevOps
- **Docker & Docker Compose** - Contenedores y orquestación

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

1. **Docker Desktop** (incluye Docker y Docker Compose)
   - [Descargar para Windows](https://www.docker.com/products/docker-desktop/)
   - [Descargar para Mac](https://www.docker.com/products/docker-desktop/)
   - [Descargar para Linux](https://docs.docker.com/desktop/install/linux-install/)

2. **Git** (opcional, para clonar el proyecto)
   - [Descargar Git](https://git-scm.com/downloads)

---

## 🚀 Instalación y Ejecución

### Opción 1: Usando Docker (Recomendado) 🐳

Esta es la forma más fácil de ejecutar el proyecto. Docker se encargará de todo automáticamente.

#### Paso 1: Descargar el proyecto

```bash
# Si tienes Git instalado
git clone <url-del-repositorio>
cd prueba-tecnica

# O descarga el ZIP desde GitHub y descomprime
```

#### Paso 2: Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
DB_USER=postgres
DB_PASSWORD=tu_contraseña_segura
DB_NAME=mydb
```

> **Nota:** Cambia `tu_contraseña_segura` por una contraseña de tu elección.

#### Paso 3: Iniciar el proyecto

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
docker-compose up
```

¡Eso es todo! Docker descargará e instalará todo lo necesario automáticamente.

#### Paso 4: Acceder a la aplicación

Una vez que todo esté iniciado, abre tu navegador y ve a:

- **Frontend (Interfaz web):** http://localhost:5173
- **API (Backend):** http://localhost:5000
- **Documentación API (Swagger):** http://localhost:5000/api-docs

### Detener el proyecto

Para detener el proyecto, presiona `Ctrl + C` en la terminal, o ejecuta:

```bash
docker-compose down
```

---

## 📁 Estructura del Proyecto

```
prueba-tecnica/
├── api/                          # Backend (API REST)
│   ├── src/
│   │   ├── config/              # Configuración de base de datos
│   │   ├── controller/          # Controladores (lógica de rutas)
│   │   ├── model/               # Modelos de base de datos
│   │   ├── router/              # Definición de rutas
│   │   ├── service/             # Lógica de negocio
│   │   ├── validators/          # Validaciones con Joi
│   │   └── index.js            # Punto de entrada de la API
│   ├── dockerfile              # Configuración Docker para API
│   └── package.json            # Dependencias del backend
│
├── cliente/                     # Frontend (React)
│   ├── src/
│   │   ├── api/                # Configuración de Axios
│   │   ├── components/         # Componentes reutilizables
│   │   ├── hooks/              # Custom hooks de React
│   │   ├── pages/              # Páginas de la aplicación
│   │   ├── services/           # Servicios para API calls
│   │   ├── App.jsx            # Componente principal
│   │   └── main.jsx           # Punto de entrada
│   ├── dockerfile.dev         # Configuración Docker para desarrollo
│   └── package.json           # Dependencias del frontend
│
├── db/                         # Scripts de base de datos
│   └── ddl.sql                # Esquema inicial de la BD
│
├── docker-compose.yml         # Orquestación de contenedores
└── README.md                  # Este archivo
```

---

## 🔧 Configuración Manual (Sin Docker)

Si prefieres ejecutar el proyecto sin Docker, sigue estos pasos:

### Backend (API)

1. **Instalar PostgreSQL** localmente
2. **Crear la base de datos:**
   ```sql
   CREATE DATABASE mydb;
   ```
3. **Ejecutar el script DDL** ubicado en `db/ddl.sql`
4. **Configurar variables de entorno** en `api/.env`:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=tu_contraseña
   DB_NAME=mydb
   ```
5. **Instalar dependencias y ejecutar:**
   ```bash
   cd api
   npm install
   npm run dev
   ```

### Frontend (Cliente)

1. **Instalar dependencias y ejecutar:**
   ```bash
   cd cliente
   npm install
   npm run dev
   ```

---

## 📡 Endpoints de la API

| Método | Endpoint          | Descripción              |
|--------|-------------------|--------------------------|
| GET    | `/api/usuarios`   | Obtener todos los usuarios |
| GET    | `/api/usuarios/:id` | Obtener un usuario por ID |
| POST   | `/api/usuarios`   | Crear un nuevo usuario   |
| PUT    | `/api/usuarios/:id` | Actualizar un usuario    |
| DELETE | `/api/usuarios/:id` | Eliminar un usuario      |

### Ejemplo de cuerpo para crear/actualizar usuario:

```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "edad": 25
}
```

---

## 🎨 Características de la Interfaz

### Formulario de Usuario
- Validación en tiempo real
- Modo crear/editar dinámico
- Botón de cancelar al editar
- Diseño responsivo

### Tabla de Usuarios
- Listado con diseño moderno
- Botones de editar y eliminar
- Contador de usuarios
- Estado de carga visual

### Alertas SweetAlert2
- ✅ Confirmación al crear usuario
- ✅ Confirmación al actualizar usuario
- ⚠️ Confirmación antes de eliminar
- ❌ Mensajes de error descriptivos

---

## 🐛 Solución de Problemas

### El proyecto no inicia

1. **Verifica que Docker Desktop esté corriendo**
2. **Asegúrate de estar en la carpeta correcta** del proyecto
3. **Verifica que el archivo `.env` exista** con las credenciales correctas

### Error de permisos en Linux

Si tienes problemas de permisos, ejecuta:

```bash
sudo docker-compose up
```

### El frontend no se conecta a la API

1. **Verifica que la API esté corriendo** en `http://localhost:5000`
2. **Revisa la consola del navegador** para ver errores
3. **Verifica la configuración en** `cliente/src/api/axios.js`

### Cambios en el código no se reflejan

Detén y reinicia los contenedores:

```bash
docker-compose down
docker-compose up --build
```

---

## 📝 Validaciones

### Campos del Usuario

- **Nombre:** Requerido, mínimo 3 caracteres, máximo 100
- **Email:** Requerido, formato válido de email, único en BD
- **Edad:** Requerido, número entre 18 y 120

---

## 🤝 Contribuir

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

---

## 👨‍💻 Autor

**Gerardo**

---

## 📞 Soporte

Si tienes alguna pregunta o problema, no dudes en:

- Abrir un issue en GitHub
- Contactar al autor del proyecto

---

¡Gracias por usar este sistema! 🎉
