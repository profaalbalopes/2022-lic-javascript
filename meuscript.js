
function trocarTexto(){
    var p = document.getElementById("olamundo");
    p.innerHTML="A mágica já aconteceu!";
    p.style.color="pink";
    console.log('Exemplo de texto no console');
}

function alterar(){
    texto = document.getElementById("p1").innerHTML;
    document.getElementById("p2").innerHTML = texto;
    document.getElementById("p2").style.backgroundColor = "purple";
}

function reverter(){
    p = document.getElementById("p2");
    p.innerHTML = "aqui não tem nada";
    p.style.backgroundColor = "white";
}

function somar(){
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    var r = parseInt(x) + parseInt(y);
    document.getElementById("resultado").value = r;
}

function corrigir(){
    r = document.getElementById("resposta").value;
    if (r == "lumus"){
        document.write('Parabéns, você acendeu a luz!')
        document.body.style.backgroundColor = "yellow";
    }else{
        document.write('Que pena.. continua escuro!')
        document.body.style.backgroundColor = "grey";
    }
}