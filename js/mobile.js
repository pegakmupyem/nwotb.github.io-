<script>
var isMobile = {
    Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

window.onload = checkMobile;
function checkMobile (){
	var browserType = isMobile.any()?"mobile":"not mobile";
	document.getElementById("output").innerHTML = browserType;	
}
  checkMobile()
  
  function done() {
  if (browsesType='mobile'){ alert('да');
} else { alert('неtт');
}}
  done()
</script>
