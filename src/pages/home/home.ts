import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { MostraCepPage } from '../mostra-cep/mostra-cep';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  

})
export class HomePage {
  todo:string;
  input = {cep: ''};
  constructor(public navCtrl: NavController,public navParams: NavParams,formbuilde: FormBuilder,public toastCtrl: ToastController ) {
    var input=document.getElementById('idCep');
    console.log(input);
  }
  
  abreMostraCep(){
    console.log(this.input.cep); 
    var todo = this.input.cep;
    if (todo == ""){ this.alerta() }else{
      console.log("como?"+todo);
      this.navCtrl.push(MostraCepPage,{param: todo});
    }
  }

  alerta(){
    let alerta = this.toastCtrl.create({
        message: "Preencha o campo cep!",
        duration:3000,
        position: 'top'
    });
    alerta.present();
  }
  
}
