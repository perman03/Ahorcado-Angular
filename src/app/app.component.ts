import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//LOGICA DEL JUEGO

export class AppComponent {
  
  //Aqui se cambia la palabra de juego
  palabra = 'AGUACATE'; 
  palabraOculta = '_ ';
  intentos = 0; 
  gano = false; 
  perdio = false; 

  //Arreglo de abecedario
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



  constructor(){
    //REPITE EL GUION BAJO DEPENDIENDO DE LA EXTENSION DE LA PALABRA
    this.palabraOculta = '_ '.repeat(this.palabra.length); 
    }

    comprobar(letra: string){
      
      this.existeLetra(letra); 
      const palabrasOcultaArr = this.palabraOculta.split(' '); 

     for(let i=0; i<this.palabra.length; i++){

      if(this.palabra[i] === letra){
        palabrasOcultaArr[i] = letra; 
        
      }

     }
     
     this.palabraOculta = palabrasOcultaArr.join(' ');
     this.verificaGane(); 

    }

    verificaGane(){
      const palabraArr = this.palabraOculta.split(' '); 
      const palabraEvaluar = palabraArr.join(''); 

      if(palabraEvaluar === this.palabra){
        this.gano = true; 
        console.log('FELICIDADES! Has ganado'); 
      }

      if(this.intentos >= 9){
        this.perdio = true; 
        console.log('Lo siento, has perdido'); 
      }
      
    }

    existeLetra(letra: string){
      if(this.palabra.indexOf(letra) >= 0){
      }else{
        this.intentos++; 
      }
    }



}
