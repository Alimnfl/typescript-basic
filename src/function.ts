// Function

// Sesuai pengisian, si create akan mengisi tipe data

// Menangkap x dan y dengan string
function add(x: number, y: number): string {
    return `${x} ditambah ${y} hasilnya adalah : ${x + y}`;
}

const result = add(30, 20);

console.log(result);


// --- Menangkap x dan y
// function add(x: number, y: number): void {
//     const z: number = x + y;
//     console.log("hasilnya adalah " + z);
// }

// add(10, 20);



// --- Cara lain untuk create Function
// function create(): void {
//     let a = 1;
//     let b = 2;
//     let z = a + b; //3
//     console.log("hahaha " + z);
// }

// create();



//  --- Versi string
// function create(): string {
//     return "Halo!!";
// }

// console.log(create());



// --- Arrow function
// const create2 = (): string => "Hello world!"

// const result = create2();