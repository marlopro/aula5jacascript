function calcular() {
    var num = parseFloat(document.getElementById("numero").value);
    var resposta = document.getElementById("resposta");    
    var tabuada = '';
    for(var i=0; i<=10; i++){
        tabuada += num + " x " + i + " = " + num * i + "<br/>";
    }

    document.writeln(tabuada);
}