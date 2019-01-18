
var nextStepUrl = 'http://mastergun.pro/selectcolor';
var buttUrl = 'http://mastergun.pro/butts/';

$(document).ready(
    function () {
		executeIfHas(['getProductBySkuPrefix', 'setTcart__addProductProduct', 'getRifleName'],function(){
			var rifle = getProductBySkuPrefix('R');
			if(rifle && rifle.length){	 
				$('a:contains("Ложе")').attr('href', buttUrl+rifle[0].sku);
			}
			else{
				$('a:contains("Ложе")').attr('href', '#');
			}
				
			$('.t776 a[href!="#order"]').click(function(){
				var current = $(this);
				
				var parent_block = current.closest('.t776__col');
				
				var price = parent_block.find('.t776__price-value').html();
				
				current.attr('href', current.attr('href') + '?f=' + mask_abc(price));
			});

		   

			var headerSpan = 
			$('.t030')
			.find('span')
			.filter(function(){ 
				return $(this).text().indexOf('Шаг 2')!=-1;
			});

			if (rifle && rifle.length) {
				var rifleName = getRifleName(rifle)
				headerSpan.text('Шаг 2. Выберите ложе' +
					(rifleName === '' ? '' : ' к ')
					+ rifleName);
			}
			else {
				headerSpan.text('Выберите оружие на предыдущем шаге!');
			}

			setTcart__addProductProduct();
		});

    });
	
var mask_abc = function(arg){
			var rez = '';
			
			for(i=0; i<arg.length; i++){
				rez+=String.fromCharCode(23 + arg.charCodeAt(i));
			}
			
			return rez;

		};