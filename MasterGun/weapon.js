var nextStepUrl = 'http://mastergun.pro/butts/';

$(document).ready(
    function() {
		var afterAddProductFunc=function(product){
			location.href = nextStepUrl+product.sku;
		};
        
		$('.t142__submit').click(
			function()
			{
				 tcart__addProduct({
						sku: 'R_0',
						name: 'Другая марка оружия',
						price:0,
						amount:1
						
					});
					
				return false;
		});	
		
		executeIfHas(['setTcart__addProductProduct'],
		function(){
			setTcart__addProductProduct(afterAddProductFunc);
		});
});