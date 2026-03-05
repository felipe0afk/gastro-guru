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

  public baseDeDatos: any = {
    'Mexicana': [
      { 
        nombre: 'Chilaquiles Rojos', 
        img: 'https://www.lamichoacanameatmarket.com/wp-content/uploads/2019/03/Chilaquiles-Rojos-300x300.jpg', 
        desc: 'Desayuno tradicional de totopos bañados en salsa picante.',
        ingredientes: ['12 Tortillas de maíz cortadas en triángulos', '4 Jitomates maduros', '2 Chiles de árbol secos', '1 diente de Ajo', '1/4 Cebolla blanca', 'Queso fresco desmoronado', 'Crema ácida'],
        pasos: [
          'Fríe los triángulos de tortilla en aceite muy caliente hasta que estén crujientes. Escurre en papel absorbente.',
          'Hierve los jitomates y chiles por 10 minutos. Licúalos con el ajo y un poco de sal.',
          'Vierte la salsa en una sartén con una cucharada de aceite y deja que espese a fuego medio por 5 minutos.',
          'Incorpora los totopos a la salsa caliente, mezcla rápidamente para que se impregnen sin que pierdan su textura crujiente.',
          'Sirve inmediatamente y decora con abundante queso, crema y aros de cebolla.'
        ]
      },
      { 
        nombre: 'Enmoladas de Pollo', 
        img: 'https://laroussecocina.mx/wp-content/uploads/2021/11/Enmoladas-de-pollo.jpg', 
        desc: 'Tortillas rellenas de pollo bañadas en mole poblano artesanal.',
        ingredientes: ['1 Pechuga de pollo cocida y deshebrada', '12 Tortillas de maíz', '250g de Pasta de mole poblano', '500ml de Caldo de pollo', 'Ajonjolí tostado'],
        pasos: [
          'Disuelve la pasta de mole en el caldo de pollo caliente a fuego lento, moviendo constantemente para evitar que se pegue.',
          'Pasa ligeramente las tortillas por aceite caliente para que se ablanden sin dorarse.',
          'Sumerge la tortilla en el mole, rellénala con el pollo deshebrado y enróllala.',
          'Coloca en un plato, baña con más mole caliente y termina con una lluvia de ajonjolí tostado.'
        ]
      },
      { 
        nombre: 'Pozole Rojo', 
        img: 'https://static.wixstatic.com/media/d6fe55_16179d1f19314cf2b8f9d2a892edf3de~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/d6fe55_16179d1f19314cf2b8f9d2a892edf3de~mv2.png', 
        desc: 'Caldo sustancioso de maíz cacahuazintle con carne de cerdo.',
        ingredientes: ['1kg Maíz precocido', '1kg Pulpa de cerdo en cubos', '5 Chiles guajillo hidratados', '2 Chiles anchos', 'Ajo', 'Lechuga picada', 'Rábanos', 'Orégano'],
        pasos: [
          'En una olla grande, cuece el maíz en abundante agua hasta que los granos "florezcan".',
          'Añade la carne de cerdo y sal. Cocina a fuego medio hasta que la carne esté tierna.',
          'Licúa los chiles con ajo y un poco de agua. Cuela esta mezcla directamente sobre la olla del pozole.',
          'Rectifica la sal y deja hervir 20 minutos más.',
          'Sirve en platos hondos y acompaña con lechuga, rábanos, orégano, limón y tostadas.'
        ]
      },
      { 
        nombre: 'Tacos al Pastor', 
        img: 'https://www.elfinanciero.com.mx/resizer/sHxNsN7b0EJ3AJql0HxA_JNEvmc=/arc-photo-elfinanciero/arc2-prod/public/PI7RTVF57RBAVEASTTWNJTW4OU.jpg', 
        desc: 'Cerdo marinado en adobo de achiote con un toque de piña.',
        ingredientes: ['500g Lomo de cerdo rebanado fino', '50g Pasta de achiote', '1/2 taza Jugo de piña', 'Tortillas pequeñas', 'Piña fresca', 'Cebolla y Cilantro'],
        pasos: [
          'Licúa el achiote con el jugo de piña, vinagre y especias. Marina la carne al menos 3 horas.',
          'En una plancha muy caliente con poco aceite, cocina la carne hasta que esté bien dorada y caramelizada.',
          'Pica la carne finamente sobre una tabla.',
          'Sirve en tortillas calientes con trozos de piña asada, cebolla, cilantro y tu salsa picante favorita.'
        ]
      }
    ],
    'Vegetariana': [
      { 
        nombre: 'Tostadas de Aguacate', 
        img: 'https://recetasdecocina.elmundo.es/wp-content/uploads/2025/04/tostada-de-aguacate-1024x683.jpg', 
        desc: 'Base crujiente con puré de aguacate y especias.',
        ingredientes: ['4 Tostadas horneadas', '2 Aguacates Hass maduros', 'Limón', 'Aceite de oliva', 'Chile quebrado', 'Sal de mar'],
        pasos: [
          'Machaca la pulpa del aguacate con un tenedor hasta obtener una pasta rústica.',
          'Sazona con jugo de limón y sal al gusto.',
          'Unta una capa generosa sobre cada tostada.',
          'Termina con un chorrito de aceite de oliva y espolvorea chile quebrado para dar picor.'
        ]
      },
      { 
        nombre: 'Burger de Lentejas', 
        img: 'https://www.pcrm.org/sites/default/files/hamburguesa-lentejas-7.jpg', 
        desc: 'Medallón vegetal alto en fibra y proteína.',
        ingredientes: ['2 tazas Lentejas cocidas y escurridas', '1/2 taza Pan rallado', '1 Zanahoria rallada', 'Comino y ajo en polvo', 'Pan de hamburguesa'],
        pasos: [
          'Procesa la mitad de las lentejas y mezcla con el resto de los granos enteros, la zanahoria y el pan rallado.',
          'Forma discos con las manos y deja reposar en el refrigerador 20 minutos para que no se deshagan.',
          'Cocina en una sartén con poco aceite por 4 minutos de cada lado.',
          'Arma la hamburguesa con pan tostado, lechuga, tomate y aderezos vegetales.'
        ]
      },
      { 
        nombre: 'Pasta Primavera', 
        img: 'https://comedera.com/wp-content/uploads/sites/9/2022/04/Pastas-primavera-shutterstock_1689065998.jpg', 
        desc: 'Pasta italiana clásica con vegetales salteados al dente.',
        ingredientes: ['250g Pasta corta (Penne)', '1 Brócoli', '1 Calabacita', '2 dientes de Ajo', 'Parmesano vegano o natural', 'Aceite de oliva'],
        pasos: [
          'Cuece la pasta en agua con sal hasta que esté al dente.',
          'En una sartén grande, saltea el ajo picado con aceite de oliva. Agrega el brócoli y la calabacita en trozos.',
          'Vierte media taza del agua de la pasta a los vegetales para crear una emulsión ligera.',
          'Integra la pasta, salpimienta y sirve con abundante queso rallado.'
        ]
      },
      { 
        nombre: 'Ensalada de Quinoa', 
        img: 'https://danzadefogones.com/wp-content/uploads/2024/08/ensalada-de-quinoa-facil.jpg', 
        desc: 'Superalimento refrescante con vegetales picados.',
        ingredientes: ['1 taza Quinoa lavada', '1 Pepino', '15 Tomates cherry', 'Perejil fresco', 'Aceite de oliva y Limón'],
        pasos: [
          'Cuece la quinoa en 2 tazas de agua por 15 minutos hasta que el grano esté transparente. Deja enfriar.',
          'Pica finamente el pepino y corta los tomates cherry por la mitad.',
          'En un bowl, mezcla la quinoa fría con los vegetales y el perejil.',
          'Adereza con una vinagreta simple de limón, sal y aceite de oliva.'
        ]
      }
    ],
    'Postres': [
      { 
        nombre: 'Arroz con Leche', 
        img: 'https://www.recetasnestle.com.co/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/8b80d005d2b35d7a583470e3f19c9c1f.jpeg?itok=7TbncD74', 
        desc: 'Postre casero cremoso aromatizado con canela.',
        ingredientes: ['1 taza Arroz blanco', '1L Leche entera', '1 rama de Canela', '1/2 taza Azúcar', 'Vainilla'],
        pasos: [
          'Cuece el arroz con 2 tazas de agua y la rama de canela hasta que el agua se absorba.',
          'Vierte la leche y el azúcar. Cocina a fuego muy bajo para que el arroz suelte su almidón.',
          'Remueve constantemente con cuchara de madera hasta que la mezcla espese y esté muy cremosa.',
          'Retira la canela, añade vainilla y sirve frío o tibio con canela en polvo.'
        ]
      },
      { 
        nombre: 'Churros Crujientes', 
        img: 'https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Masa frita tradicional pasada por azúcar y canela.',
        ingredientes: ['250g Harina de trigo', '250ml Agua', '50g Mantequilla', 'Aceite para freír', 'Azúcar y Canela'],
        pasos: [
          'Hierve el agua con la mantequilla y una pizca de sal.',
          'Agrega la harina de un solo golpe y apaga el fuego. Remueve con fuerza hasta obtener una masa que se despegue de las paredes.',
          'Coloca la masa en una manga pastelera con boquilla de estrella.',
          'Forma tiras sobre aceite muy caliente. Fríe hasta que estén dorados y pásalos inmediatamente por la mezcla de azúcar.'
        ]
      },
      { 
        nombre: 'Flan de Caramelo', 
        img: 'https://premier.com.co/wp-content/uploads/2024/04/flan-de-leche.webp', 
        desc: 'Clásico flan de huevo horneado a baño maría.',
        ingredientes: ['5 Huevos', '1 lata Leche condensada', '1 lata Leche evaporada', '1/2 taza Azúcar (para caramelo)'],
        pasos: [
          'Derrite el azúcar en una flanera hasta obtener un caramelo oscuro. Mueve el molde para cubrir las paredes.',
          'Licúa los huevos con las dos leches.',
          'Vierte la mezcla en el molde y tapa con papel aluminio.',
          'Hornea a baño maría por 50 minutos a 180°C. Deja enfriar totalmente antes de desmoldar.'
        ]
      },
      { 
        nombre: 'Pastel de Chocolate', 
        img: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Bizcocho húmedo de chocolate con cacao puro.',
        ingredientes: ['2 tazas Harina', '1 taza Cacao amargo', '3 Huevos', '1 taza Leche', '100g Mantequilla derretida'],
        pasos: [
          'Mezcla los ingredientes secos (harina, cacao, azúcar, polvo de hornear).',
          'Incorpora los huevos, la leche y la mantequilla. Bate hasta que no queden grumos.',
          'Vierte en un molde engrasado.',
          'Hornea a 180°C por 35 minutos. Introduce un palillo; si sale limpio, está listo.'
        ]
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
      }
    });
  }

  goToDetail(r: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: { special: JSON.stringify(r) }
    };
    this.navCtrl.navigateForward(['home'], navigationExtras);
  }
}