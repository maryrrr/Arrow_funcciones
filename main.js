document.write('Hola')

//Convierte la siguiente función en una función flecha:

const saludar=(a)=>{
  return'Hola'
}
console.log(saludar())

//Convierte la siguiente función en una función flecha en línea:
const division = (a,b) => a / b;
console.log(division(12,3))

//Convierte la siguiente función en una función flecha:
const miNombre=(nombre)=> {
    return `Mi nombre es ${nombre}`;
  }
console.log(miNombre('Mariana')) 

//Convierte las siguientes funciones en funciones flecha:
const test2=()=> {
    console.log("Función test 2 ejecutada.");
  }
  const test1=(callback)=> {
    return callback();
  }	
test1(test2)

//Utiliza la siguiente array para resolver los próximos ejercicios: 
//Crea un array con la gente mayor de 25 años y muéstralo por consola.
//Crea un array con la gente que empieza por J. 


let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

//Crea un array con la gente mayor de 25 años y muéstralo por consola.

const list_nueva=[]
gente.forEach(age =>{
  if(age.edad>25)
  list_nueva.push({nombre:age.nombre,edad:age.edad})
})
console.log(list_nueva)


const start='J'
const start_J=gente.filter(usuario => usuario.nombre.startsWith(start))
    
console.log(start_J)

//Crea un array con la gente que empieza por J. 


const start_gente='J'
const gente_nueva=[]
gente.forEach(usuario =>{ 
  if(usuario.nombre.startsWith(start_gente))
   gente_nueva.push(usuario)
  console.log(gente_nueva)

})


//map
//Crea un array con la gente que empieza por J. 

const my_genteTwo = gente.map(age =>{
  if(age.edad>25){
    return {
      edad:age.edad,
      nombre:age.nombre,
    }
  }
  })
  console.log(my_genteTwo)

//Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [ 4, 5, 6, 7, 8, 9, 10];
const numbers_arr= numbers.map(num =>Math.pow(num,num))
console.log(numbers_arr)


//4.filter
/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filter_arr=numbers.filter(number => number%2==1)
console.log(filter_arr)*/


//Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:

const foodList = [
  { name: 'Tempeh', isVeggie: true },
  { name: 'Cheesbacon burguer', isVeggie: false },
  { name: 'Tofu burguer', isVeggie: true },
  { name: 'Entrecot', isVeggie: false }
];
const vegano_arr=foodList.filter(element =>{
  if (element.name==='Tempeh' && element.isVeggie ){
    console.log('Que rico Tempeh me voy a comer')
  }
  else if( element.isVeggie ){
    console.log('Que rico Tofu bureger me voy a comer ')
  } 
})

//5.Reduce
//Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];
const reduce_numeros=numeros.reduce((a,b) => a*b)
console.log(reduce_numeros)


//Extras

/*const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];
const new_staff=staff.map(element => {
  return `${element.name} es ${element.role} de ${element.hobbies[0]} y ${element.hobbies[1]} `
})
console.log(new_staff) */


//Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
/*const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
const new_food=foodList.map(element => {
  return `Como soy de Italia, amo comer ${foodList[0]},Como soy de Japón, amo comer ${foodList[1]},Como soy de Valencia, amo comer${foodList[2]} Aunque no como carne, el ${foodList[3]}, el es sabroso.`
})
console.log(new_food)*/

//Filter
//Dado el siguiente array, devolver un array con los  nombres de los elementos que valgan más de 300 euros


const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]*/

const filter_arr=inventory.filter(precio => {
  if (precio.price>300){
    return `${precio.name}`
  }
})
console.log(filter_arr);

//Reduce
//Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
  'Me',
  'llamo',
  'Mariana',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
  ];
  const sentence_arr=sentenceElements.reduce((a,b) => a+" "+b)
  console.log(sentence_arr);
