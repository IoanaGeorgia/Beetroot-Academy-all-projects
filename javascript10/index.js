function thisMap(){
    let images =["javascript10\anne.png","javascript10\green.webp", "red.webp", "yellow.webp"]
    const info =[
        ["Jeanne",44.423334155322735, 26.012878918115014, images[0]],
        ["Jonathan", 59.236069446273255, 17.839677400309043, images[1]],
        ["Anne", 59.431285281804556, 24.769260091156706, images[2]],
        ["Leo", 59.22079022762899, 17.937983317114234, images[3]]

    ]
    let preapreMap =  {center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:4,
    mapTypeId: 'satellite',
};
    let bigMap =new google.maps.Map(document.getElementById("bigMap"), preapreMap);
    for (i =0; i<info.length; i++){
        marker =new google.maps.Marker({
            position: new google.maps.LatLng(info[i][1], info[i][2]),
            map:bigMap,
            title: info[i][0],
            icon: images[i]
        })
    }

}
