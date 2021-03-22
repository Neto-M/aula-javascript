//alert("Meu primeiro js")



function cliclou() {
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por passar o mouse aqui</b>";
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por clicar");
}
function redirecionar() {
    window.open("https://web.digitalinnovation.one/home");
    //window.location.href="https://web.digitalinnovation.one/home";
}
function trocar(elemento) {
    //document.getElementById("movermouse").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");

}
function voltar(elemento) {
    //document.getElementById("movermouse").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load() {
    alert("Pagina carregada")
}
function funcaoChange(elemento) {
    console.log(elemento.value)
}


/*
function validaidade(idade){
    var validar;
    if(idade >=18 ){
        validar = true
    }else{
        validar = false
    }
    return validar
}
var idade = prompt("Qual a sua idade?");
console.log(validaidade(idade));

*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for (count= 0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log (count);
    alert(count);
    count++;
}
*/


/*
var idade = prompt("Qual a sua idade?");
if( idade >= 18 ){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
};
*/

/*var frutas = [{nome:"Maça", cor:"Vermelho"}, {nome:"Uva", cor:"Roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/


//var fruta = {nome:"maça", cor:"Vermelha"};
//console.log(fruta.nome);
//alert(fruta.cor);



//var lista = ["maça", "Pêra", "Laranja"]
//lista.push("Uva");
//lista.pop();


//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));



/*
var nome = "Manoel Neto";
var n1 = 7;
var n2 = 8;
var frase = "Japão é o melhor time do mundo";
alert(nome + "tem" + idade + "anos");
alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"));
*/