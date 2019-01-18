var setTcart__addProductProduct = function(afterAddProductFunc) {

    if (!oldtcart__addProduct) {

        var oldtcart__addProduct = tcart__addProduct;

        tcart__addProduct = function (n) {

            var currentPrefix = getPrefix(n.sku);
            var removePredicate = function (a) {
                return currentPrefix == getPrefix(a.sku);
            };

            if (currentPrefix != null &&
                window.tcart.products.filter(removePredicate).length) {
                window.tcart.products =
                    window.tcart.products.filter(
                        function (el) {
                            return !removePredicate(el);
                        });
						
                tcart__saveLocalObj();
            }

            var result = oldtcart__addProduct(n);

			if(afterAddProductFunc)
			{
				afterAddProductFunc(n);
			}
			else
			{
				location.href = nextStepUrl;
			}
			
            return result;
        }

    }
}

var removePrefixes = ['R', 'C', 'MG','D'];

var getPrefix = function(sku) {
    if (!sku)
        return null;

    for (var i = 0; i < removePrefixes.length; i++) {
        if (sku.startsWith(removePrefixes[i]))
            return removePrefixes[i];
    }

    return null;
}

var getProductBySkuPrefix = function(prefix) {
    if (!prefix)
        return null;

    var findPredicate = function (a) {
        return prefix == getPrefix(a.sku);
    };

    return window.tcart.products.filter(findPredicate);
}

var getRifleName = function(rifle){

    if(rifle[0].sku === 'R_0'){
        return '';
    }
    return rifle[0].name;
}


