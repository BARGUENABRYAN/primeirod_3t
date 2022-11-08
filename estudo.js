function moeda(atual) {
  return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

}

function total(){
 let c = document.getElementById("valor").value;
 let j = document.getElementById("juros").value;
 let t = document.getElementById("meses").value;
 if (!Number(c)) {
    alert("O Capital deve ser números.");
    document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
    return 
 }
 if (!Number(j)) {
   alert("O Juros deve ser números.");
   document.getElementById("juros").value = "";
   document.getElementById("juros").focus();
   return 
}
if (!Number(t)) {
 alert("O Meses deve ser números.");
 document.getElementById("meses").value = "";
 document.getElementById("meses").focus();
 return 
}
document.getElementById("meses").focus();
    return 
  }
 let mes = "";
 for(let i = 1; i <= t; i++){
     r = c * (1 + (j/100));
     document.write("Mês " + i + " valor: " + moeda(r) +"<br>");
     mes += "Mês "+ i + " valor: " + moeda(r) +"<br>";
        //document.write("Mês " + i + " valor: " + moeda(r) +"<br>");
     c = r;
 }
 document.getElementById("mes").innerHTML=mes;

document.write("Resultado: " + moeda(r));
document.getElementById("total").innerHTML="Total: "+moeda(r);
//document.write("Resultado: " + moeda(r));

function adicao(){
    let val1 = document.getElementById("v1").value;
}
