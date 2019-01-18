var nextStepUrl = 'http://mastergun.pro/accessory/';
var buttUrl = 'http://mastergun.pro/butts/';

$(document).ready(
    function () {
		executeIfHas(['getProductBySkuPrefix', 'getRifleName', 'dinamicUrl', 'setTcart__addProductProduct'], function(){
			var rifle = getProductBySkuPrefix('R');
			
			if(rifle.length > 0){	 
				$('a:contains("Ложе")').attr('href', buttUrl+rifle[0].sku);
			}
			else{
					$('.t758__wrapper').hide();
				}
			
			var batt=getProductBySkuPrefix('MG');
				
				var headerspan=$('div#rec80918514').find('span');
				if(!rifle || rifle.length <=0)
				{
					headerspan.text('Выберите оружие на предыдущем шаге!');
				}
				else
				{
					if(!batt || batt.length<=0)
					{
						headerspan.text('Выберите ложе на предыдущем шаге!');
					}
					else
					{
						var rifleName = getRifleName(rifle);

						headerspan.text('Шаг 3. Выберите цвет к '+rifleName+' ' + batt[0].sku);
						
						var defaultUrl='NoPhoto.png';
						
						var fotoDiv=$('#rec81459814').find('.t-img');
						
						//TODO: избавиться от!!!
						var baseUrl='http://support.nitrix-it.ru/download/MasterGun/modelPhoto/';
						
						var setImage=function()
						{
							fotoDiv.attr('src',url);
							fotoDiv.attr('data-original',url);
							fotoDiv.attr('data-img-zoom-url',url);
						//	fotoDiv.css('background-image', 'url("'+ url + '")');
						//	fotoDiv.attr('data-original',url);
						};
						
						//var url = dinamicUrl(rifle[0].sku+'_' + batt[0].sku);
						var url = dinamicUrl(batt[0].sku+'_' +rifle[0].sku);
						
						var loadImage=function(url, success, error)
						{
								var img = document.createElement('img');
								img.onload = success;
								img.onerror = error;
								img.src = url;
						};
						
						loadImage(url, setImage,
							function()
							{
					
								url = dinamicUrl(batt[0].sku);
								
								loadImage(url, setImage,
									function()
									{
										url=baseUrl+defaultUrl;
										setImage();
									});
							});	
					}
				}
						 
						
			var afterAddProductFunc=function(product){
				var batt=getProductBySkuPrefix('MG');
				
				location.href = nextStepUrl+batt[0].sku;
			};
			
			setTcart__addProductProduct(afterAddProductFunc);
		});

    });