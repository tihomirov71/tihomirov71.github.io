var nextStepUrl = 'http://mastergun.pro/selectcolor';
var buttUrl = 'http://mastergun.pro/butts/';

$(document).ready(
    function() {
		
		executeIfHas(['getProductBySkuPrefix', 'setTcart__addProductProduct'],
		function(){
		
			var rifle = getProductBySkuPrefix('R');
			
			if(rifle.length > 0){		
				$('a:contains("Ложе")').attr('href', buttUrl+rifle[0].sku);
			}
			else{
				$('.t758__wrapper').hide();
			}
			
			setTcart__addProductProduct();    
		});
    });