// Contohnya membuat interface processor

type CoreCount = 2 | 4 | 8 | 12 ;
type CoreName = "Dual Core" | "Quad Core" | "Apa Core";

// Union Type
type Core = CoreCount | CoreName;

// Kalau pakai dan harus keduanya ada didalamnya => Intersection Type
// type Core = CoreCount & CoreName;


interface Iprocessor {
    brand: string;
    brandModel: string;
    modelName: string;
    coreTotal: Core;
    clockSize: number;
}

// Intel ini properti yang ada di Iprocessor
interface Intel extends Iprocessor{
    turboBoost: boolean;
}

interface AMD extends Iprocessor{
    precisionBoost?: boolean;
}

function createIntel(processor: Intel): void{
    console.log(`
    Selamat ${processor.brand}, anda telah berhasil untuk membuat processor terbaru dengan detail berikut:

    nama Base Model : ${processor.brandModel}  
    nama Model : ${processor.modelName} 
    dengan Thread : ${processor.clockSize} Thread 
    Core totalnya adalah : ${processor.coreTotal}
    Turbo boost enable? ${processor.turboBoost} 
    ` );
}
function createAMD(processor: AMD): void{
    console.log(`
    Selamat ${processor.brand}, anda telah berhasil untuk membuat processor terbaru dengan detail berikut:

    nama Base Model : ${processor.brandModel}  
    nama Model : ${processor.modelName} 
    dengan Thread : ${processor.clockSize} Thread 
    Core totalnya adalah : ${processor.coreTotal}
    Precision boost enable? ${processor.precisionBoost ? processor.precisionBoost: "tidak ada"} 
    ` );
}

const coreI5: Intel = {
    brand: "Intel", 
    brandModel: "Core i5",
    modelName: "i5-11350F",
    clockSize: 4,
    coreTotal: 12,
    turboBoost: true,
};

const ryzen1: AMD = {
    brand: "AMD", 
    brandModel: "Ryzen 1",
    modelName: "r-1110x",
    clockSize: 2,
    coreTotal: "Quad Core",
};

const ryzen3: AMD = {
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