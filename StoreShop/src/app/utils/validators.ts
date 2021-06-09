import { AbstractControl } from '@angular/forms';

//Debe ser un metodo estatico
export class MyValidators{
    static isPriceValid( control:AbstractControl){
        const value = control.value;
        console.log("Value.IsPriceValid()",value);
        if(value>10000){
            return {price_invalid:true};
        }
        return null; 
    }
}

