//3) Calcule a média aritmética das 3 notas de um aluno e mostre, 
//além do valor da média, uma mensagem de "Aprovado", 
//caso a média seja igual ou superior a 6, 
//ou a mensagem "reprovado", caso contrário.

var a = parseInt(prompt("Digite a primeira nota"));
var b = parseInt(prompt("Digite a segunda nota"));
var c = parseInt(prompt("Digite a terceira nota"));
var average = (a + b + c)/3;

if (average <6) {
    document.body.append ("Reprovado");
} else {
    if (average >=6) {
    document.body.append ("Aprovado");
    }
}
