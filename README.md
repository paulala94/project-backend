# PROJECT BACKEND

Es una aplicación web que te permite saber que películas y series están disponibles en las principales plataformas de streaming. Podrás seleccionar entre películas o series más populares, nuevas, mejor puntuadas, etc.

---

## Instalación

Sólo es necesario contar con un servidor web con Node.js

---

## Uso

### Routes

#### 1. Authenticated Routs

| HTTP Method | URL Path        | Description          | JSON |
| ----------- | --------------- | -------------------- | ---- |
| GET         | /               | Index page           |      |
| GET         | /registro       | Sign Up form render  |      |
| POST        | /registro       | Sign Up form handler |      |
| GET         | /iniciar-sesion | Login form render    |      |
| POST        | /iniciar-sesion | Login form handler   |      |
| GET         | /desconectar/   | Logout               |      |

#### 2. API Routs

| HTTP Method | URL Path         | Description    | JSON |
| ----------- | ---------------- | -------------- | ---- |
| GET         | /api/movies      | Movie List     | ✅   |
| GET         | /api/movies/{id} | Movie details  | ✅   |
| GET         | /api/series      | Series List    | ✅   |
| GET         | /api/series/{id} | Series details | ✅   |

---

## Technologies

| Dependencies  | version |
| ------------- | ------- |
| cookie-parser | 1.4.6   |
| dotenv        | 16.0.3  |
| express       | 4.18.2  |
| hbs           | 4.2.0   |
| mongoose      | 7.1.1   |
| morgan        | 1.10.0  |
| serve-favicon | 2.5.0   |
| nodemon       | 2.0.22  |
| axios         | 1.4.0   |

---

## License

The source code for the site is licensed under the MIT license
