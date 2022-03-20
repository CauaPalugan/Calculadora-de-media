function Resultado() {
  var notaDoPrimeiroBimestre = document.getElementById("nota1")
  var nota1 = notaDoPrimeiroBimestre.value
  var notaNumerica1 = parseFloat(nota1)
  
  var notaDoSegundoBimestre = document.getElementById("nota2")
  var nota2 = notaDoSegundoBimestre.value
  var notaNumerica2 = parseFloat(nota2)
  
  var notaDoTerceiroBimestre = document.getElementById("nota3")
  var nota3 = notaDoTerceiroBimestre.value
  var notaNumerica3 = parseFloat(nota3)
  
  var notaDoQuartoBimestre = document.getElementById("nota4")
  var nota4 = notaDoQuartoBimestre.value
  var notaNumerica4 = parseFloat(nota4)
  
  var mediaFinal = (notaNumerica1 + notaNumerica2 + notaNumerica3 + notaNumerica4) / 4
  
  var elementoResultadoMedia = document.getElementById("resultadoMedia")
  
  if (mediaFinal > 5) {
    elementoResultadoMedia.innerHTML = "Sua média final foi " + mediaFinal + ", Você passou de ano!"
  } else {
    elementoResultadoMedia.innerHTML = "Sua média final foi " + mediaFinal + ", Você está de recuperação!"
  }
  
  
 // var resultadoMedia = "Sua média final foi de " + mediaFinal
 // elementoResultadoMedia.innerHTML = resultadoMedia
}