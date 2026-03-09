import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false
})
export class ListPage implements OnInit {
  public titulo: string = 'Recetas';
  public recetas: any[] = [];
  public recetasFiltradas: any[] = []; // <-- ESTO ES LO QUE TE FALTA

  public baseDeDatos: any = {
    'Mexicana': [
      { 
        nombre: 'Chilaquiles Rojos', 
        img: 'https://www.lamichoacanameatmarket.com/wp-content/uploads/2019/03/Chilaquiles-Rojos-300x300.jpg', 
        desc: 'Desayuno tradicional de totopos bañados en salsa picante.',
        ingredientes: ['12 Tortillas de maíz cortadas en triángulos', '4 Jitomates maduros', '2 Chiles de árbol secos', '1 diente de Ajo', '1/4 Cebolla blanca', 'Queso fresco desmoronado', 'Crema ácida'],
        pasos: ['Fríe las tortillas.', 'Haz la salsa.', 'Mezcla.', 'Sirve.']
      },
      { 
        nombre: 'Enmoladas de Pollo', 
        img: 'https://laroussecocina.mx/wp-content/uploads/2021/11/Enmoladas-de-pollo.jpg', 
        desc: 'Tortillas rellenas de pollo bañadas en mole poblano artesanal.',
        ingredientes: ['Pollo', 'Tortillas', 'Mole'],
        pasos: ['Calienta el mole.', 'Pasa tortillas por aceite.', 'Rellena y sirve.']
      },
      { 
        nombre: 'Pozole Rojo', 
        img: 'https://static.wixstatic.com/media/d6fe55_16179d1f19314cf2b8f9d2a892edf3de~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/d6fe55_16179d1f19314cf2b8f9d2a892edf3de~mv2.png', 
        desc: 'Caldo sustancioso de maíz cacahuazintle con carne de cerdo.',
        ingredientes: ['Maíz', 'Cerdo', 'Chiles'],
        pasos: ['Cuece el maíz.', 'Añade carne.', 'Añade salsa y hierve.']
      },
      { 
        nombre: 'Tacos al Pastor', 
        img: 'https://www.elfinanciero.com.mx/resizer/sHxNsN7b0EJ3AJql0HxA_JNEvmc=/arc-photo-elfinanciero/arc2-prod/public/PI7RTVF57RBAVEASTTWNJTW4OU.jpg', 
        desc: 'Cerdo marinado en adobo de achiote con un toque de piña.',
        ingredientes: ['Cerdo', 'Achiote', 'Piña'],
        pasos: ['Marina.', 'Cocina.', 'Pica y sirve.']
      }
    ],
    'Vegetariana': [
      { 
        nombre: 'Tostadas de Aguacate', 
        img: 'https://recetasdecocina.elmundo.es/wp-content/uploads/2025/04/tostada-de-aguacate-1024x683.jpg', 
        desc: 'Base crujiente con puré de aguacate y especias.',
        ingredientes: ['Tostadas', 'Aguacate'],
        pasos: ['Machaca aguacate.', 'Unta.', 'Sazona.']
      },
      { 
        nombre: 'Burger de Lentejas', 
        img: 'https://www.pcrm.org/sites/default/files/hamburguesa-lentejas-7.jpg', 
        desc: 'Medallón vegetal alto en fibra y proteína.',
        ingredientes: ['Lentejas', 'Pan rallado'],
        pasos: ['Mezcla ingredientes.', 'Forma medallón.', 'Fríe.']
      },
      { 
        nombre: 'Pasta Primavera', 
        img: 'https://comedera.com/wp-content/uploads/sites/9/2022/04/Pastas-primavera-shutterstock_1689065998.jpg', 
        desc: 'Pasta italiana clásica con vegetales salteados al dente.',
        ingredientes: ['Pasta', 'Vegetales'],
        pasos: ['Cuece pasta.', 'Saltea vegetales.', 'Mezcla.']
      },
      { 
        nombre: 'Ensalada de Quinoa', 
        img: 'https://danzadefogones.com/wp-content/uploads/2024/08/ensalada-de-quinoa-facil.jpg', 
        desc: 'Superalimento refrescante con vegetales picados.',
        ingredientes: ['Quinoa', 'Pepino'],
        pasos: ['Cuece quinoa.', 'Pica vegetales.', 'Mezcla.']
      }
    ],
    'Postres': [
      { 
        nombre: 'Arroz con Leche', 
        img: 'https://www.recetasnestle.com.co/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/8b80d005d2b35d7a583470e3f19c9c1f.jpeg?itok=7TbncD74', 
        desc: 'Postre casero cremoso aromatizado con canela.',
        ingredientes: ['Arroz', 'Leche', 'Canela'],
        pasos: ['Cuece arroz.', 'Agrega leche.', 'Espesa.']
      },
      { 
        nombre: 'Churros Crujientes', 
        img: 'https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Masa frita tradicional pasada por azúcar y canela.',
        ingredientes: ['Harina', 'Agua'],
        pasos: ['Haz la masa.', 'Fríe.', 'Azucara.']
      },
      { 
        nombre: 'Flan de Caramelo', 
        img: 'https://premier.com.co/wp-content/uploads/2024/04/flan-de-leche.webp', 
        desc: 'Clásico flan de huevo horneado a baño maría.',
        ingredientes: ['Huevos', 'Leche condensada'],
        pasos: ['Haz caramelo.', 'Mezcla leches.', 'Hornea.']
      },
      { 
        nombre: 'Pastel de Chocolate', 
        img: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Bizcocho húmedo de chocolate con cacao puro.',
        ingredientes: ['Harina', 'Cacao'],
        pasos: ['Mezcla.', 'Hornea.']
      }
    ]
  };

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      const cat = params['cat'];
      if (cat && this.baseDeDatos[cat]) {
        this.titulo = cat;
        this.recetas = this.baseDeDatos[cat];
        this.recetasFiltradas = [...this.recetas]; // <-- IMPORTANTE
      }
    });
  }

  // ESTA ES LA FUNCIÓN QUE TE FALTA Y QUE EL ERROR RECLAMA
  buscarReceta(event: any) {
    const texto = event.target.value.toLowerCase();
    
    if (texto && texto.trim() !== '') {
      this.recetasFiltradas = this.recetas.filter((r) => {
        return (r.nombre.toLowerCase().indexOf(texto.toLowerCase()) > -1);
      });
    } else {
      this.recetasFiltradas = [...this.recetas];
    }
  }

  goToDetail(r: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: { special: JSON.stringify(r) }
    };
    this.navCtrl.navigateForward(['home'], navigationExtras);
  }
}