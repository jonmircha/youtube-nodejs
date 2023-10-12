import { resolve } from "path";

const rutaRelativa = "../carpeta/archivo.txt";

const rutaAbsoluta = resolve(rutaRelativa);

console.log("Ruta absoluta:", rutaAbsoluta);
