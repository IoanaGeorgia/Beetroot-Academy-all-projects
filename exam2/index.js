
$('.container--landing__slider').slick(
    {
    slidesToShow: 1,
    slidesToScroll: 1,
    //arrows: true,
    //fade: true,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    infinite:true,
    autoplay:true,
    autoplaySpeed:600,
    dotsClass: "slick-dots"
  }
  );
  $('.container--news__slider').slick(
    {
    slidesToShow: 3,
    slidesToScroll: 1,
    //arrows: true,
    //fade: true,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    infinite:true,
    autoplay:true,
    autoplaySpeed:400,
    dotsClass: "slick-dots-news"
  }
  );
function contactMap() {
    let mapFeatures= {
      center:new google.maps.LatLng(57.431285281804556, 24.769260091156706),
      zoom:5,
    };
    let map = new google.maps.Map(document.querySelector(".container-map"),mapFeatures);
    const markerCont ={
        url:"mark.webp",
        scaledSize: new google.maps.Size(50,50)
};
    const ConstMarker = new google.maps.Marker({
    position: {lat:59.431285281804556, lng:24.769260091156706},
    map,
    icon: markerCont,
  });
    
}