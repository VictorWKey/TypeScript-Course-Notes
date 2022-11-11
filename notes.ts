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