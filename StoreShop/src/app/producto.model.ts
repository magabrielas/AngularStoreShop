/*Se coloca export para que pueda ser utilizado
por otros componentes y/o archivos

Buena practica, tipar los objetos. en este caso con 
la palabra reservada interface  
*/
export interface Producto{
    id:string;
    image:string;
    title:string;
    price:number;
    description:string;
}