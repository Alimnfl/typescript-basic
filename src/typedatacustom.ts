// Custom type, Type Data Custom
type TemanType = {
    namanya: string;
    isKampret: boolean;
    hutang: number;
    // bisa dipakai tanda tanya agar tidak error jika tidak diisi
    // contoh = hutang?: number;
}
let temanKita: TemanType;

temanKita= {
    namanya: "Zaddy",
    isKampret: true,
    hutang: 45000
}

console.log({temanKita})
