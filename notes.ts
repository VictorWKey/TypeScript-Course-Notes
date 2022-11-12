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



"INTERFACE VS CLASS"

//INTEFACE: Solo existe en tiempo de compilacion y solo se usan para la verificacion de tipos, basicamente una herramiento de desarrllo
//CLASS: Funciona normalmente como en JavaScript


"-----Inteface------"

interface Book {
    id: number;
    title: string;
    author: string;
    coAuthor?: string;
    isLoan?: (id: number) => void
} // Basicamente al crear una interface, creamos un tipo de variable que debe contener un objeto con esas propiedades  y valores, algunas opcionales.

const book: Book = {
    id: 1,
    title: 'The truth tables',
    author: 'Victor Lopez'
};

const books: Book[] = [{id: 2, title: 'The life', author: 'Alonso'} ]; // Este sera un array que solo tendra elementos con interfaces de book

const getBook = (): Book => {
    return { id: 2, title: 'The life', author: 'Alonso'}
}

const myBook = getBook();

const createBook = ( book: Book ) : Book => {
    return book;
}

const myCreatedBook = createBook( {id: 2, title: 'The life', author: 'Alonso'});

//Heredar
interface Person {
    id: number;
    name: string;
}

interface Employee extends Person {
    dept: string;
} // Le agregamos a esta interface las propiedades de la otra interface

//Implements
interface Animal {
    name: string;
    getDogs: () => void;
    getCats?: () => void;
}

class Zoo implements Animal { 
    name = 'Joselito';
    getDogs() {

    }
} // Lo que hara implements es solicitar las propiedades y metodos de una interface, sino dara error

"-----Class-----"

class Animal {
    public color = 'green'; // En cualquier clase (si es heredada tambien) y se puede acceder a su valor
    private country = 'Russia'; // Solo en el scope de esta clase y no se puede acceder a su valor
    protected extintionDanger = true; // Solo en el scope de otro clase a la que se le hereda y no se puede acceder a su valor

}

class Zoo extends Animal { 

    // Las propiedades que vamos a utlizar en esta clase (constructor), deben estar declaradas afuera del constructor con su respectivo tipo, si no no funcionara
    // name: string; // Aqui declaramos las propiedades (variables) y en el constructor les damos su valor, ya que a fuerza necesitan un valor de su respectivo tipo debido a la interface (si es que utilizamos una) y si no tambien se deben declarar afuera del constructor de esta manera
    // type: string; // Estas por defeecto tienen public
    // public age: number;

    constructor(public readonly name: string, private type: string, private age: number) { // Al asignarle un public (puede ser cualquier otro), por defecto ya estamos declarando esos atributos y por lo tanto se implementan automaticamente las proopiedades de la interface (si es que la usamos) sin tener que ser declardas fuera del constructor. Si les ponemos private, el implements no funcionara. Al ponerle un acceso, tampoco es necesario que pongamos this.name = name; porque pro defecto el acceso ya lo hace
        super(); // Recuerda que este se agrega cuando se uso de extends
        //this.name = name; // Esto se quita pq al ponerle un modificador de acceso a los parametros, esto ya se hace en automatico, si no tuvieramos modificadores de acceso entonces si se tendria que hacer esto y lo que hicmos arriba del constructor
        this.getDogs();
        // lo que hace readonly es que su valor no podra ser cambiado fuera de la clase o despues de crear una instancia, por ejemplo no podremos hacer un animal.name = "Juanito" porque dara error
    }

    getDogs() { 
        console.log(this.name, this.age, this.color, this.extintionDanger ); 
        // No podemos llamar a this.country debido a que es heredado y es privado, por lo tanto solo puede ser llamado en su scope, es decir en su clase. Basicamente se podria decir que esa propiedad no se hereda
    }
} // Lo que hara implements es solicitar las propiedades y metodos de una interface, sino dara error

const animal = new Zoo("Joselito", "Bulldog", 8);