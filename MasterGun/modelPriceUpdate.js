var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var unmask_abc = function(arg){
	var rez = '';
	
	for(i=0; i<arg.length; i++){
        rez+= String.fromCharCode(arg.charCodeAt(i) - 23);
	}
	return rez;

};

$(document).ready(
    function() {
		executeIfHas(['getUrlParameter'], function(){
			var f = getUrlParameter('f');
			
			if(f == undefined){
				return;
			}
			
			$('.t744__price-value').html(unmask_abc(f));  
		});
    }
);