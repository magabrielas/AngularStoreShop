/*Se coloca export para que pueda ser utilizado
por otros componentes y/o archivos

Buena practica, tipar los objetos. en este caso con 
la palabra reservada interface  
*/

export interface User{
    id:string,
    name:string,
    password:string,
    image:string
}