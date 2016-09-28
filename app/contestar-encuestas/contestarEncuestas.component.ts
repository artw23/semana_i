import { Component } from '@angular/core';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Component({
  moduleId: module.id,
  templateUrl: './contestar-encuestas.html'
})


@Injectable()
export class ContestarEncuestasComponent {

  public libros_data;
  public generos = ['Ficcion', 'Novela', 'Misterio'];
  public topUsuarios =[
    {
      nombre: "Fernando",
      puntuacion: 160
    },
    {
      nombre: "Manuel",
      puntuacion: 130
    },
    {
      nombre: "Maria",
      puntuacion: 90
    },
    {
      nombre: "Raul",
      puntuacion: 80
    },
    {
      nombre: "Toño",
      puntuacion: 65
    }
  ];
  constructor(private http: Http) {

    http.get("http://semanaiaaa.herokuapp.com/libro")
        .map(response => response.json())
        .subscribe(
          data => this.libros_data = data,
          err => this.logError(err),
          () => this.success()
      );
   }

   success(){
     console.log("asda");
     console.log(this.libros_data)
   }

   logError(err) {
    console.error('There was an error: ' + err);
  }

  public libros = [{
    genero: 'fantasia',
    id: 0,
    titulo: "Harry Potter",
    imagen: "/img/books/harry-potter.jpg",
    descripcion: "Siempre fue difícil ser Harry Potter y no es mucho más fácil ahora que él es un empleado con exceso de trabajo del Ministerio de Magia, un marido y padre de tres hijos en edad escolar. Mientras Harry se enfrenta con un pasado que se niega a..."
  },
  {
    genero:'novela',
    seccion: 'fantasia',
    id: 1,
    titulo: "El principito",
    imagen: "/img/books/principito.png",
    descripcion: "El principito es un cuento poético que viene acompañado de ilustraciones hechas con acuarelas por el mismo Saint-Exupéry.10 En él, un piloto se encuentra perdido en el desierto del Sahara después de que su avión sufriera una avería, pero para..."
  },
  {
    genero:'novela',
    id: 2,
    titulo: "Los juegos del Hambre",
    imagen: "/img/books/hunger-games.jpg",
    descripcion: "Cada año, en las ruinas de lo que en su día fue Norteamérica, el Capitolio de la nación de Panem obliga a cada uno de sus doce distritos a enviar un chico o chica adolescente a competir en los Juegos del Hambre. Los Juegos del..."
  }
];


  public showList = true;
  public showSurvey = false;
  public showCreate = false;

  public nombreDeLaEncuesta = "Harry Potter";
  public encuestaActualId = 0;







  back(){
    this.showList = true;
    this.showSurvey = false;
    this.showCreate = false;
  }

  fn (id){
    this.showList = false;
    this.showSurvey = true;
    this.showCreate = false;
    this.nombreDeLaEncuesta = this.libros[id].titulo;
    this.encuestaActualId = id;
  }

  fn2 (id){
    this.showList = false;
    this.showSurvey = false;
    this.showCreate = true;
    this.nombreDeLaEncuesta = this.libros[id].titulo;
    this.encuestaActualId = id;
  }

  submit(){
    
  }


public preguntas = [
  {
     titulo: 'harry-potter',
     preguntas:[
       {
         nombre: '¿Quienes son los personajes Principales?',
         respuesta: 3,
         respuestas:[
           'Albus y Harry ',
           'Harry y Germione',
           'Harry y Draco',
           'Albus y Scorpius'
         ]
       },

       {
         nombre: '¿De qué casa es Albus Potter?',
         respuesta: 2,
         respuestas:[
           'Griffindor',
           'Ravenclaw',
           'Slytherin',
           'Hufflepuff'
         ]
       },
       {
         nombre: '¿Cuál es el segundo nombre de Albus Potter?',
         respuesta: 1,
         respuestas:[
           'Ronald',
           'Severus',
           'Fred',
           'James'
         ]
       },

        {
         nombre: '¿Cuál es el objetivo primordial de los personajes principales?',
         respuesta: 1,
         respuestas:[
           'Salvar a Cedric Diggory.',
           'Hacer que Voldermort no regrese de la muerte.',
           'Conocer a Dombuldore. ',
           'Evitar que Sirius no muera'
         ]
       }




     ]
   },
   {
     titulo: 'principito',
   preguntas:[
     {
       nombre: 'El principito le pide que dibuje al aviador una animal; el animal es:',
       respuesta: 1,
       respuestas:[
         'Una cabra',
         'Un cordero',
         'Una vaca',
         'Una oveja'
       ],

     },
     {
       nombre: '¿A quién ama el principito ?',
       respuesta: 1,
       respuestas:[
         'Una hoja',
         'A la flor',
         'Un zorro',
         'A la serpiente'
       ],

     },
     {
       nombre: '¿Qué le dice el zorro al principito ?',
       respuesta: 0,
       respuestas:[
         'Sólo se ve bien con el corazón, lo esencial es invisible a los ojos',
         'Conozco un planeta donde vive un señor muy colorado, que nunca ha olido una flor, ni ha mirado una estrella y que jamás ha querido a nadie. En toda su vida no ha hecho más que sumas.',
         'Los hombres carecen de imaginación; no hacen más que repetir lo que se les dice…',
         'Él se enamoró de sus flores y no de sus raíces, y en otoño no supo qué hacer.'
       ]
     },
     {
       nombre: 'Completa la frase: “Es muy triste olvidar a un amigo..”',
       respuesta: 2,
       respuestas:[
         'Si, es muy triste',
         'Me gusta estar solo.',
         'No todos han tenido un amigo',
         'Más triste que no tener a mi flor. '
       ]
     }
   ]
 },
{
    titulo: 'juegos',
  preguntas:[
    {
      nombre: '¿Cómo muere Rue en los Juegos del Hambre?',
      respuesta: 1,
      respuestas:[
        'Golpeada hasta morir',
        'Atravesada por una lanza en el estómago',
        'Envenenada',
        'Congelada'
      ],

    },
    {
      nombre: '¿A quién mata Katniss el primero?',
      respuesta: 2,
      respuestas:[
        ' A la chica del Distrito 4',
        'A la chica del Distrito 13',
        'Al chico del Distrito 1',
        'Al chico del Distrito 7'
      ],

    },
    {
      nombre: '¿Cuántos tributos mueren el pimer día de los Juegos del Hambre?',
      respuesta: 0,
      respuestas:[
        '8',
        '9',
        '11',
        '5'
      ]
    },
    {
      nombre: '¿Quién es el último tributo en morir en los 74 Juegos del Hambre?',
      respuesta: 0,
      respuestas:[
        ' Cato',
        ' Peeta',
        'Thresh',
        'Rue'
      ]
    }
  ]
  }
]
}
