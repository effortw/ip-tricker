function go(){
  var site = document.getElementById("site").value;
  var sites = site.replace(/\./g, "-");
  var hosts = window.location.hostname;
  
  var fsite = "/p/ip.html?"+(sites);
  
  
  
  
  window.location.href= (fsite);
  }
