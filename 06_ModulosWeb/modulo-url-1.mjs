import { parse } from "url";

const urlString =
  "https://www.ejemplo.com:8080/ruta?parametro1=valor1&parametro2=valor2";

const parsedUrl = parse(urlString, true);

console.log("Protocolo:", parsedUrl.protocol);
console.log("Hostname:", parsedUrl.hostname);
console.log("Pathname:", parsedUrl.pathname);
console.log("Parámetros de consulta:", parsedUrl.query);
