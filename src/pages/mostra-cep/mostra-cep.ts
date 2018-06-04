import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CepProvider } from '../../providers/cep/cep';

@IonicPage()
@Component({
  selector: 'page-mostra-cep',
  templateUrl: 'mostra-cep.html',
  providers:[
    CepProvider
  ]
})
export class MostraCepPage {
  public ceps;
  public cepEspecifico;
  constructor(public navCtrl: NavController, public navParams: NavParams,public cepProviders: CepProvider) {
  }

  ionViewDidLoad() {
    console.log('entrou MostraCepPage');
    console.log('param: '+this.navParams.get('param'));
    var cepEspecifico = this.navParams.get('param');
    this.cepProviders.getCep(cepEspecifico).subscribe(data=>{
      let retorno = (data as any);
      this.ceps = retorno;
      console.log(retorno);        
    },error=>{
      console.log(error);
    })
  }
  opa(cep){
    console.log(cep);
  }
}
