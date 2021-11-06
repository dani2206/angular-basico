import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    nombre: string ='Ironman';
    edad : number = 45;
    get nombrecapitalizado (){
        return this.nombre.toUpperCase();
    }

    obtenernombre(): string{
        return ` ${this.nombre}- ${this.edad}`;
    }
    cambiarnombre(): void {
        this.nombre='Spiderman';
    }
    cambiaredad(): void {
        console.log('hey......')
        this.edad=30;
    }

}