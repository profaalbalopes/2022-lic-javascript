function exibirDados(){
    ps = document.getElementsByTagName("p");
    var i;

    for(i=0; i<ps.length; i++){
        alert(ps[i].innerHTML)
    }

}

function mudarCor(){
    ps = document.getElementsByTagName("p");
    var i;
    var cores = ['pink', 'black', 'purple', 'yellow'];

    for(i=0; i<ps.length; i++){
        ps[i].style.backgroundColor = cores[i%4];
        ps[i].style.color = "white";
    }
}

function mostrarObjetos(){
   ps = document.getElementsByClassName("oculto");
   var i;
   for (i=0; i<ps.length; i++){
        ps[i].style.display = "block";
    }
}

function ocultarObjetos(){
    ps = document.getElementsByClassName("oculto");
    var i;
    for (i=0; i<ps.length; i++){
         ps[i].style.display = "none";
     }
 }

 function listaOrdenada(){
     //lis = document.getElementsByTagName("li");
     lis = document.querySelectorAll("ul li");
     var i;
     for (i=0; i<lis.length; i++){
         lis[i].style.textDecoration = "line-through";
     }
 }


 function listaNaoOrdenada(){
     //it = document.querySelector("ol li");
     //it.style.fontSize = "x-large";
     it = document.querySelector("#primeiro");
     it.style.fontSize = "x-large";
     it.style.color = "green";
 }

 function adicionar(){
    it = document.createElement("li");
    valor = document.querySelector("#itemLista");
    it.innerHTML = valor.value;
    
    lista = document.querySelector("ul");
    lista.appendChild(it);

    }
