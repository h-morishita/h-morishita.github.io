
(function(){
  for(var key in $.cookie()){
    $("#cookies").append("<dt>"+ key + "</dt><dd>"+ $.cookie(key)+"</dd>")
  }
})()
