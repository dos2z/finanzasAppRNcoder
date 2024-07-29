### Gestor de Gastos
##### Descripción
Gestor de Gastos es una aplicación móvil construida con React Native para la gestión de finanzas personales. Permite a los usuarios agregar y administrar sus cuentas y realizar un seguimiento de sus gastos asignandoles diferentes categorias.

##### Características
- Gestión de Cuentas: Los usuarios pueden agregar sus cuentas financieras, asignándoles un nombre, un icono y un valor inicial.
- Seguimiento de Gastos: Los usuarios pueden agregar gastos, categorizarlos y realizar un seguimiento de sus gastos.
- Gráfico: Visualizacíon cuanto dinero se destinó a cada categoría.
- Gestión de Fechas: Selección de fechas para transacciones utilizando la biblioteca - DateTimePicker.
- Autenticación de Usuarios: Autenticación de usuarios utilizando Firebase Authentication.
- Base de Datos en Tiempo Real: Almacena y recupera datos utilizando Firebase Realtime Database.
- Posibilidad de tomar una foto perosnalizada para la cuenta
##### Tecnologías Utilizadas
- React Native: Framework para construir la aplicación móvil.
- React Navigation: Maneja la navegación dentro de la aplicación.
- Redux: Biblioteca de gestión de estado.
- RTK Query: Para realizar consultas y escribir datos en la base de datos.
- Firebase Authentication: Para la autenticación de usuarios.
- Firebase Realtime Database: Para almacenar y recuperar datos.
- Gifted Charts: Biblioteca utilizada para renderizar gráficos.
- DateTimePicker: Biblioteca para la selección de fechas.
- Yup: Para la validación de datos.
- Proximamente SQLite para persistir los datos de logueo

#### Instalación
(Por el momento no esta generada la APK)
Clonar el repositorio

git clone https://github.com/tu-repo/gestor-de-gastos.git

cd gestorgastos

Instalar dependencias con npm install

iniciar expo con npm start

escanear el qr con el dispositivo
Nota: Expo Go debe estar instalado en el dispositivo




##### Uso
- Iniciar Sesión o crear una cuenta (existe la opcion de iniciar como invitado, con la particularidad de que de esta forma no se pueden recuperar los datos una vez que se cierra la sesión)
- Agregar Cuenta Financiera: Navegar a la pantalla "Agregar Cuenta", ingresar los detalles de la cuenta (nombre, ícono, monto inicial) y presionar .
- Agregar Gasto: Navega a la pantalla "Agregar Gasto", ingresa los detalles del gasto (monto, categoría, fecha).
- Ver resumen: Navegar a inicio para ver el resumen de los gastos