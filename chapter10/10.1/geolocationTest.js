/**
 * 使用Modernizr来检查是否支持地理位置
 */

function determineLocation(){
	if(Modernizr.geolocation){
		navigator.geolocation.getCurrentPosition()
	}
}
