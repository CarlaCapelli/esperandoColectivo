let llegaColectivo;
console.log("esperando el colectivo");
llegaColectivo = prompt("llego el colectivo? (Y/N):");
while (llegaColectivo === "N") {
  console.log("esperando el colectivo");
  llegaColectivo = prompt("llego el colectivo? (Y/N):");
}
console.log("llego el colectivo");
