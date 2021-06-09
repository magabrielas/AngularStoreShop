/** Se considera como el ambiente pre-produccion.
 *  se debe configurar en el angular.json para crear el nuevo ambiente
 *  se agrega en configurations y en serve.
 *  para correr el ambiente: ng serve -c=stag
 */

export const environment = {
  production: true,
  url_api:'https://platzi-store-stag.herokuapp.com',
  firebaseConfig : {
    apiKey: "AIzaSyA4GUkAGTSmPAcrZORDayBrUkeZfL6KEDU",
    authDomain: "platzi-storeshop.firebaseapp.com",
    projectId: "platzi-storeshop",
    storageBucket: "platzi-storeshop.appspot.com",
    messagingSenderId: "496077283050",
    appId: "1:496077283050:web:f2e39f9bf0a023beacc193"
  }
};
