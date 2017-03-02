
(function(){
  for(var key in $.cookie()){
    var val = $.cookie(key)
    console.log(typeof val)
    if ((typeof val) == "object") { val = val[key] }
    $("#cookies").append("<dt>"+ key + "</dt><dd>"+ val +"</dd>")
  }
})()
