
# Backend del Convertidor de Unidades

Este es el backend del proyecto **Convertidor de Unidades**, desarrollado utilizando Node.js, Express y MongoDB. Este servidor RESTful se encarga de gestionar las conversiones de unidades, proporcionando rutas para almacenar, consultar y eliminar las conversiones guardadas.

---

## **Características principales**

- API REST para interactuar con los datos de conversiones.
- Gestión de datos en una base de datos MongoDB.
- Endpoints para las operaciones CRUD básicas:
  - Crear una conversión.
  - Consultar todas las conversiones.
  - Eliminar una conversión específica.

---

## **Tecnologías utilizadas**

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir aplicaciones web y APIs.
- **MongoDB**: Base de datos NoSQL para el almacenamiento de las conversiones.
- **Mongoose**: Librería para modelar datos en MongoDB.
- **Cors**: Para habilitar solicitudes de origen cruzado.
- **Dotenv**: Gestión de variables de entorno.

---

## **Instalación**

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/juangabrieeel/backend_conversor.git
   ```

2. Accede al directorio del proyecto:
   ```bash
   cd backend
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor:
   ```bash
   npm start
   ```

5. El servidor estará disponible en: `http://localhost:5000`.

---

## **Endpoints**

### **Base URL**
`http://localhost:5000/api/conversions`

### **Rutas disponibles**

#### **1. Obtener todas las conversiones**
- **Método**: `GET`
- **Ruta**: `/`
- **Descripción**: Retorna una lista de todas las conversiones guardadas.
- **Ejemplo de respuesta**:
  ```json
  [
    {
      "_id": "637c0123456789abcdef1234",
      "type": "kilometers_to_miles",
      "inputValue": 100,
      "resultValue": 62.14,
      "createdAt": "2024-11-25T10:30:00.000Z"
    }
  ]
  ```

---

#### **2. Crear una conversión**
- **Método**: `POST`
- **Ruta**: `/`
- **Descripción**: Agrega una nueva conversión a la base de datos.
- **Cuerpo de la solicitud**:
  ```json
  {
    "type": "kilometers_to_miles",
    "inputValue": 100,
    "resultValue": 62.14
  }
  ```
- **Ejemplo de respuesta**:
  ```json
  {
    "_id": "637c0123456789abcdef1234",
    "type": "kilometers_to_miles",
    "inputValue": 100,
    "resultValue": 62.14,
    "createdAt": "2024-11-25T10:30:00.000Z"
  }
  ```

---

#### **3. Eliminar una conversión**
- **Método**: `DELETE`
- **Ruta**: `/:id`
- **Descripción**: Elimina una conversión específica usando su ID.
- **Ejemplo de respuesta**:
  ```json
  {
    "message": "Conversión eliminada con éxito"
  }
  ```

---

## **Estructura del proyecto**

```
backend/
├── config/
│   └── db.js          # Configuración de la conexión a MongoDB
├── controllers/
│   └── conversions.js # Lógica de las rutas de conversión
├── models/
│   └── Conversion.js  # Modelo de datos de conversiones
├── routes/
│   └── conversions.js # Definición de rutas para conversiones
├── server.js          # Punto de entrada del servidor
└── package.json       # Dependencias del proyecto
```

---

## **Pruebas**

Puedes probar la API utilizando herramientas como **Postman** o **Insomnia**. Asegúrate de que el servidor esté ejecutándose antes de realizar las solicitudes.

---

## **Contribuciones**

Si deseas contribuir al proyecto, por favor, abre un issue o un pull request con tus sugerencias y mejoras.

---