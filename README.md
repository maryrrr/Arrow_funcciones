<h1> Funciones-flecha-en-JavaScript</h1>
<h2> Ejemplos con forEach, filter,map, reduce</h2>
<h1>Funciones-flecha-en-JavaScript</h1>
<h2>Funciones flecha</h2>
<p>Convierte la siguiente función en una función flecha:
function saludar() {
  return "Hola";
}
Convierte la siguiente función en una función flecha en línea:
function division(a,b) {
  return a / b;
}
Convierte la siguiente función en una función flecha:
function miNombre(nombre) {
  return `Mi nombre es ${nombre}`;
}
Convierte las siguientes funciones en funciones flecha:
function test2() {
  console.log("Función test 2 ejecutada.");
}
function test1(callback) {
  callback();
}	</p>
<h2>2. Foreach</h2>
Utiliza la siguiente array para resolver los próximos ejercicios:<br>
      
let gente = [<br>
        {<br>
          nombre: "Jamiro",<br>
          edad: 45,<br>
        },<br>
        {<br>
          nombre: "Juan",<br>
          edad: 35,<br>
        },<br>
        {<br>
          nombre: "Paco",<br>
          edad: 34,<br>
        },<br>
        {<br>
          nombre: "Pepe",<br>
          edad: 14,<br>
        },<br>
        {<br>
          nombre: "Pilar",<br>
          nombre: "Pilar",<br>
          edad: 24,<br>
        },<br>
        {<br>
          nombre: "Laura",<br>
          edad: 24,<br>
        },<br>
        {<br>
          nombre: "Jenny",<br>
          edad: 10,<br>
        },<br>
      ];<br>
    

<p>Crea un array con la gente mayor de 25 años y muéstralo por consola.</p>
Crea un array con la gente que empieza por J. <br>


<h2>3. Map</h2>
Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.<br>
Crea un array con la gente que empieza por J.<br> 
<Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:</p>
const numbers = [ 4, 5, 6, 7, 8, 9, 10];<br>
// Resultado esperado<br>
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]<br>




<h2>4. Filter</h2>
Crea un segundo array que devuelva los impares<br>
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];<br>
Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:<br>
 const foodList = [<br>
        { name: 'Tempeh', isVeggie: true },<br>
        { name: 'Cheesbacon burguer', isVeggie: false },<br>
        { name: 'Tofu burguer', isVeggie: true },<br>
        { name: 'Entrecot', isVeggie: false }<br>
      ];<br>
       [<br>
          'Que rico Tempeh me voy a comer!',<br>
          'Que rica Tofu burguer me voy a comer!'<br>
         ]<br>
      


<h2>5. Reduce</h2>
<p>Dado el siguiente array, obtén la multiplicación de todos los elementos del array:<br>
const numeros = [39, 2, 4, 25, 62];<br>
// Salida--> 483600<br></p>


Extras<br>
Map<br>
Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:<br>
const staff = [<br>
  {<br>
    name: "Pepe",<br>
    role: "The Boss",<br>
    hobbies: ["leer", "ver pelis"],<br>
  },<br>
  {<br>
    name: "Ana",<br>
    role: "becaria",<br>
    hobbies: ["nadar", "bailar"],<br>
  },<br>
  {<br>
    name: "Luis",<br>
    role: "programador",<br>
    hobbies: ["dormir", "comprar"],<br>
  },<br>
  {<br>
    name: "Carlos",<br>
    role: "secretario",<br>
    hobbies: ["futbol", "queso"],<br>
  },<br>
];<br>


// Resultado esperado<br>

    [<br>
      'Pepe es TheBoss y le gusta leer y ver pelis',<br>
      'Ana es becaria y le gusta nadar y bailar',<br>
      'Luis es programador y le gusta dormir y comprar',<br>
      'Ana es becaria y le gusta nadar y bailar',<br>
      'Carlos es secretario y le gusta fútbol y queso'<br>
    ]<br>
 
Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:<br>
const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];<br>
//Resultado esperado<br>
 [<br>
    'Como soy de Italia, amo comer Pizza',<br>
    'Como soy de Japón, amo comer Ramen',<br>
    'Como soy de Valencia, amo comer Paella',<br>
    'Aunque no como carne, el Entrecot es sabroso'<br>
   ]<br>

<h2>Filter</h2>
Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros<br>
const inventory = [<br>
        {<br>
          name: 'Mobile phone',<br>
          price: 199<br>
        },<br>
        {<br>
          name: 'TV Samsung',<br>
          price: 459<br>
        },<br>
        {<br>
          name: 'Viaje a cancún',<br>
          price: 600<br>
        },<br>
        {<br>
          name: 'Mascarilla',<br>
          price: 1<br>
        }<br>
      ];<br>
      
        [<br>
          'TV Samsung,',<br>
          'Viaje a Cancún'<br>
        ]<br>
      
<h2>Reduce</h2>
Concatena todos los elementos del array con reduce para que devuelva una sola frase<br>
const sentenceElements = [<br>
    'Me',<br>
    'llamo',<br>
    /* Tu nombre aquí! */,<br>
    'y',<br>
    'quiero',<br>
    'sentir',<br>
    'la',<br>
    'fuerza',<br>
    'con',<br>
    'javascript'<br>
    ];<br>
   
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'<br>
