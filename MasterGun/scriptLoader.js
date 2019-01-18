var loadScriptsDict = {
		"/configurator" : [['cartConfig.js', 'urlConfig.js', 'weapon.js'], ['configurator.css']],
		"/butts" : [['cartConfig.js', 'validation.js', 'grip.js'], []],
		"/model_" : [['cartConfig.js', 'modelPriceUpdate.js', 'modelSelect.js'], []],
		"/selectcolor" : [['cartConfig.js', 'imgConfig.js', 'urlConfig.js', 'color.js'], []],
		"/accessory" : [['cartConfig.js', 'imgConfig.js', 'validation.js', 'urlConfig.js', 'additionals.js'], []]
	};

var loadAll = function(loadingAll){
	var loadingScripts = loadingAll[0];
	
	var loadingStyles = loadingAll[1];
	
	loadScripts(loadingScripts);
	
	loadStyles(loadingStyles);
	
}	
	
var loadScripts = function(loadingScripts){
	
	for(var i in loadingScripts){
		next_script = loadingScripts[i];
		
		var scriptAddr = btrScriptsBaseUrl + next_script;
		
		//$("head").append("<script type='text/javascript' src='" + scriptAddr +"'></script>");
		$.ajax({
			async: false,
			url: scriptAddr,
			dataType: "script",
			cache: true
		});
	}
};

var loadStyles = function(loadingStyles){
	for(var i in loadingStyles){
		var styleUrl = btrScriptsBaseUrl + 'Styles/' + loadingStyles[i];
		
		$("head").append("<link rel='stylesheet' type='text/css' href='" + styleUrl + "' />");
	}
}

var getLoadingScripts = function(){
	
	var currentUrl = $(location).attr('href');

	currentUrl = currentUrl.toLowerCase();

	var loading_scripts = [];
	
	for(var key in loadScriptsDict){
		if(currentUrl.includes(key)){
			loading_scripts = loadScriptsDict[key];
			
			break;
		}
	}
	
	return loading_scripts;
};

var executeIfHas = function(funcNames, callback){
	function setTcartWithTest(){
		
		for(var i in funcNames){
			if(!window[funcNames[i]]){
				
				setTimeout(setTcartWithTest, 2);
				
				return;
			}
		}
		
		callback();
	}
		
	setTcartWithTest();
}	

$(document).ready(function(){

	var loadingScripts = getLoadingScripts();
	
	loadAll(loadingScripts);
});