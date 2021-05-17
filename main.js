window.onscroll = function() { scrollIndicator() } ;
function scrollIndicator() {
// Votre code ici
      // nbr de pixel au dessus de la zone visible
      let intElemScrollTop = document.documentElement.scrollTop;
      // hauteur du viewport
      let h = document.documentElement.clientHeight;
      // hauteur du document
      let heightDoc = document.documentElement.scrollHeight;
      //height scroll possible (valeur fix si pas resize)
      let maths = heightDoc-h;
      // changer les 2 chiffres en %
      // pixel au dessus de la zone visible / height scroll possible
      let mathsPourCent = (intElemScrollTop/maths)*100;
      document.getElementById("bar").style.width = mathsPourCent+"%";
}