 function pagination(elementCount){
  var pag = document.getElementById('paginacion');
  var paginas = elementCount/3;
  var contadorAnterior=1;
  if(getParameterByName("search")==""){
    for (var i = 0 ; i <= paginas-1; i++) {
      pag.innerHTML = pag.innerHTML + `<a class="center-p" href="index.html?searchInitial=${contadorAnterior}">${i}</a>`
      contadorAnterior=contadorAnterior+3;
    }
  }
 }
 function count(){
  var count = 0;
  var database = firebase.database();
  museumListRef = database.ref("museum");
  museumListRef.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var data = childSnapshot.val();
        count++;
      });
    return count})
 }
 
function countPagination(){
  var count = 0;
  var database = firebase.database();
  museumListRef = database.ref("museum");
  museumListRef.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var data = childSnapshot.val();
        count++;
      });
    pagination(count)})
 }
 countPagination();      