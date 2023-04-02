"use strict";
// Contohnya membuat interface processor
function createIntel(processor) {
    console.log(`
    Selamat ${processor.brand}, anda telah berhasil untuk membuat processor terbaru dengan detail berikut:

    nama Base Model : ${processor.brandModel}  
    nama Model : ${processor.modelName} 
    dengan Thread : ${processor.clockSize} Thread 
    Core totalnya adalah : ${processor.coreTotal}
    Turbo boost enable? ${processor.turboBoost} 
    `);
}
function createAMD(processor) {
    console.log(`
    Selamat ${processor.brand}, anda telah berhasil untuk membuat processor terbaru dengan detail berikut:

    nama Base Model : ${processor.brandModel}  
    nama Model : ${processor.modelName} 
    dengan Thread : ${processor.clockSize} Thread 
    Core totalnya adalah : ${processor.coreTotal}
    Precision boost enable? ${processor.precisionBoost ? processor.precisionBoost : "tidak ada"} 
    `);
}
const coreI5 = {
    brand: "Intel",
    brandModel: "Core i5",
    modelName: "i5-11350F",
    clockSize: 4,
    coreTotal: 12,
    turboBoost: true,
};
const ryzen1 = {
    brand: "AMD",
    brandModel: "Ryzen 1",
    modelName: "r-1110x",
    clockSize: 2,
    coreTotal: "Quad Core",
};
const ryzen3 = {
    brand: "AMD",
    brandModel: "Ryzen 3",
    modelName: "r-5570x",
    clockSize: 6,
    coreTotal: "Dual Core",
    precisionBoost: true,
};
createIntel(coreI5);
createAMD(ryzen1);
createAMD(ryzen3);
