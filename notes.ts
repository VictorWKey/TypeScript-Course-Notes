"TYPESCRIPT NOTES"

// tsc --outDir dist index.ts && node dist/index.js
// tsc --outDir dist index.ts --watch // Cuando hayan cambios en el index.ts, se actualizaran tambien el index.js por ejemplo
// tsc --init // Crea un archivo tsconfif.json

let config = {
    "rootDir": "./src",  // Carpeta desde donde vamos a compilar los archivos 
    "outDir": "./dist",  // Es a donde vamos a llevar los archivos que se hayan compilado
    "target": "es6",  
};

// Con la configuracion anterior ya no es necesario poner: tsc --outDir dist index.ts, sino que ahora basta con poner solo tsc

"TIPOS"

// Basic types
const myTypesString: string = 'Hello world';
const myTypeNumber: number = 69;
const myTypeBoolean: boolean = true;
const myTypeAny: any = 'Whatever type';

// Array 
const arrNumber : number[] = [1, 2, 3];
const arrString : string[] = ['Juan', 'Roberto', 'Lucas'];
const arrAny : any[] = ['Hola', 23, true];

// Tuple
const player: [string, number, boolean] = ['bugha', 19, true];
const players: [string, number, boolean][] = [
    ['bugha', 19, true],
    ['bengy', 16, false]
];

"INFERENCIA DE TIPOS"

// Basicamente significa que al declarar una variable sin especificar el tipo de dato, el tipo de dato sera por defecto el primer valor asignado
 
let test; // Por defecto sera de tipo any
let test2: number; // En este caso si sera de tipo number
let test3 = "String"; // Por defecto sera de tipo any


"COMPOSICIONES DE TIPOS"


// Unions
const variable: string | number = 3; // Este variable puede ser de dos o mas tipos 

// Enum
enum Roles {
    User = 4, // Por defecto los valores de un enum empiezan en 0 y van aumentando en 1 en 1
    Admin,       // En este ejemplo el valor de Admin sera 5 porque el anterior es 4, basicamente si una propiedad no tiene valor, tomara el del anterior y le sumara 1
    Founder = 7,
    Developer
}
// Las propiedades pueden tener otro tipo de valor
// Todos las propiedades de un enum deberan ser del mismo tipo, sino tira error

// Object
const roles = {
    User: 1,
    Admin: "2"
}
// En cambio los objetos si pueden tener propiedades con distintos tipos de valores

"TYPE ASSERTIONS"

// Type Assertion

let myName : any = 'Juan';
myName = 2; // Esto es logico

let myNameString = myName as string; // Hasta este punto seguira teniendo un valor numerico = 2, pero la variable sera de tipo string y si se le intenta reasignar un nuevo valor, solo se le podra asignar ese tipo de valor. Pero si en vez de hacerle un assertion a una variable ya declara, se lo hacemos directamente a un valor (por ejemplo: 2), ahi si nos tirara un error directamente de que no se le puede hacer un assertion si el assertion no es del mismo tipo que del valor
let myNameString = <string>myName; // Esto equivale a la linea de arriba
myNameString = "Roberto";

const myCanvas = <HTMLCanvasElement>document.getElementById('myCanvas'); // Si no le hacemos un assertion, por defecto la variable sera de tipo HTMLElement, cuando en realidad lo que estamos solicitando es un HTMLCanvasElement, es para esto que sirve un assertion. Si intentamos asignar el tipo directamente de la manera basica, esto nos tirara error ya que detecta que le estamos poniendo un valor diferente al tipo asignado. En cambio con un assertion, no da este error

console.log(myName, myNameString);



"FUNCTIONS"

function greet ( name: string ): number {
    console.log(name);
    
    return 2;
} // Su parametro solo podra ser de tipo string y sera obligatorio. En caso de que tenga un valor por defecto no sera obligatorio. Pero en caso de que no tenga un valor por defecto y lo querramos hacer opcional, solo hay que agregarle un "?" de la siguiente manera, name?: string
// Cuando retornamos un valor, la funcion por defecto sera de ese tipo de valor, pero si no lo detectara automaticamente y la funcion sera del tipo que detecte dependiendo de lo que retorne el return. Pero claramente tambien podemos especificarle de que tipo va ser (lo que va retornar) cuando declaramos la funcion.

function printPosition(position: {lat: number, long?: number}): void {
    console.log(position.lat, position.long);
} // Tambien podemos asignarle que el parametro debe recibir un objeto con ciertas propiedades con determinados tipos de valores, los cuales tambien podemos hacer opcionales.
// Si a una funcion no se le asigna tipo y encima no retorna nada, por defecto es de tipo "void"