	function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 10,
          center: {lat: 59.151945, lng: 11.698781},
          mapTypeId: 'terrain'
        });
		var imageicon = "http://www.vianett.com/files/vianett/global/images/no.png"
        marker = new google.maps.Marker({
		  icon: imageicon,
		  title:"Tistedal, Halden",
          position: {lat: 59.125610, lng: 11.448799},
		  map: map,
		  draggable: true,
		  animation: google.maps.Animation.DROP,
        });
		var imageicon = "http://www.vianett.com/files/vianett/global/images/no.png"
        marker = new google.maps.Marker({
		  icon: imageicon,
		  title:"Str𭳦oss, Aremark",
          position: {lat: 59.298833, lng: 11.658935},
		  map: map,
		  draggable: true,
		  animation: google.maps.Animation.DROP,
        });

        var boatRideCoordinates = [
		{lat: 59.125610, lng: 11.448799},
		{lat: 59.126015, lng: 11.449130},
		{lat: 59.125416, lng: 11.451201},
		{lat: 59.126096, lng: 11.454467},
		{lat: 59.127323, lng: 11.455378},
		{lat: 59.129374, lng: 11.459835},
		
		{lat: 59.143906, lng: 11.506639},
		{lat: 59.145407, lng: 11.537278},
		{lat: 59.147461, lng: 11.545531},
		{lat: 59.148098, lng: 11.552007},
		{lat: 59.147809, lng: 11.555406},
		{lat: 59.147816, lng: 11.555725},
		{lat: 59.147842, lng: 11.556322},
		{lat: 59.147891, lng: 11.556945},
		{lat: 59.147988, lng: 11.557780},
		{lat: 59.148014, lng: 11.557886},
		{lat: 59.148903, lng: 11.564481},
		{lat: 59.148826, lng: 11.579198},
		{lat: 59.147204, lng: 11.605136},
		{lat: 59.146092, lng: 11.615062},
		{lat: 59.146655, lng: 11.629658},
		// AsprekFjorden er neste
		{lat: 59.144417, lng: 11.651731},
		{lat: 59.145556, lng: 11.663622},
		{lat: 59.147610, lng: 11.668624},
		{lat: 59.146196, lng: 11.684873},
		// Aspern er neste
		{lat: 59.151945, lng: 11.698781},
		{lat: 59.167728, lng: 11.701773},
		{lat: 59.179230, lng: 11.705670},
		{lat: 59.186019, lng: 11.709464},
		{lat: 59.192624, lng: 11.706945},
		{lat: 59.193759, lng: 11.706106},
		{lat: 59.194396, lng: 11.706185},
		{lat: 59.196595, lng: 11.704344},
		{lat: 59.201418, lng: 11.699328},
		{lat: 59.207903, lng: 11.692796},
		{lat: 59.211986, lng: 11.691822},
		{lat: 59.214978, lng: 11.687997},
		{lat: 59.221221, lng: 11.685976},
		// Ara er neste
		{lat: 59.230970, lng: 11.685471},
		{lat: 59.237892, lng: 11.679913},
		{lat: 59.250367, lng: 11.677820},
		{lat: 59.257747, lng: 11.675153},
		{lat: 59.269119, lng: 11.676939},
		
		{lat: 59.298833, lng: 11.658935}
        ];
        var boatPath = new google.maps.Polyline({
          path: boatRideCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        boatPath.setMap(map);
      }