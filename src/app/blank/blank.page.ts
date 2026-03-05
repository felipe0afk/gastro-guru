import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.page.html',
  styleUrls: ['./blank.page.scss'],
  standalone: false
})
export class BlankPage {
  public categorias = [
    { nombre: 'Mexicana', img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { nombre: 'Vegetariana', img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { nombre: 'Postres', img: 'https://images.aws.nestle.recipes/resized/2024_10_23T08_34_55_badun_images.badun.es_pastelitos_de_chocolate_blanco_y_queso_con_fresas_1290_742.jpg' }
  ];

  constructor(private navCtrl: NavController) {}

  goToList(cat: string) {
    this.navCtrl.navigateForward(`/list?cat=${cat}`);
  }
}