import SanduicheBuilder from "./builder/SanduicheBuilder";
import Director from "./direrctors/Director";
import Sanduiche from "./sanduiche/Sanduiche";

const builder:SanduicheBuilder = new SanduicheBuilder();

const director:Director = new Director(builder);

director.construcHoDog();
let hotdog:Sanduiche=builder.getSanduiche();
console.log("Criando um sanduiche do tipo: " + hotdog.sanduicheType);
console.log("Protein: " +hotdog.protain);
console.log("sauces: " +hotdog.sauces[0].sauce);
console.log("Salad : " +hotdog.salad);

builder.reset();

director.construcxSalada();
let xsalada:Sanduiche=builder.getSanduiche();
console.log("Criando um sanduiche do tipo: " + xsalada.sanduicheType);
console.log("Protein: " +xsalada.protain);
console.log("sauces: " +xsalada.saucesTotal);
console.log("Salad : " +xsalada.salad);
