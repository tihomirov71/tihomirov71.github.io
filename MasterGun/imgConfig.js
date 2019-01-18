var dinamicUrl = function(photoName){
	
	var baseUrl='';
	
	if(location.href.indexOf('https')==0)
	{
		baseUrl='https';
	}
	else
	{
		baseUrl='http';
	}
	
	baseUrl += '://i96200l7.beget.tech/modelPhotos/';
	
	return url = baseUrl + photoName + '.png';
}