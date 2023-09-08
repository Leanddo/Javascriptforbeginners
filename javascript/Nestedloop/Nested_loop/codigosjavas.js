let filas = window.prompt("Entroduza o numero de filas");
let colunas = window.prompt("Entroduza o numero de colunas");
let simbolo = window.prompt("Entroduza o simbolo");

for (let i = 1; i <= filas; i++) {
  for (let j = 1; j <= colunas; j++) {
    document.getElementById("res").innerHTML += simbolo;
  }
  document.getElementById("res").innerHTML += "<br>";
}
