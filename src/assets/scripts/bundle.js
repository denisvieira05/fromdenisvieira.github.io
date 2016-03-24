(function(){
 "use strict";

//=================================modal load==========================================
 var wrapp = $('#myModal2 .modal-dialog .modal-body');
    $('a.load-contact').on('click', function(e){

        var href = $(this).attr('rel');
        wrapp.load(href + ' .contactForm');

		e.preventDefault();

    });

 var wrappAbout = $('#myModal3 .modal-dialog .modal-body');
    $('a.load-about').on('click', function(e){

        var href = $(this).attr('rel');
        wrappAbout.load(href + ' .aboutForm');

		e.preventDefault();
    });


 $("[data-gal='tooltip']").tooltip();

//===================== validation =========================================

boxHeight();
})();


$(window).resize(function() {
    boxHeight();
});

$(window).load(function() {
var wrappF = $('#myModal .modal-dialog .modal-body');
	$('a.load-folio').on('click', function(e){

		var hrefF = $(this).attr('rel');
		wrappF.load(hrefF + ' .portfolio');

		e.preventDefault();
	});
//=================================flex gallery==========================================
initFlexSliders();
valid();
$('#myModal2').on('shown.bs.modal', function (e) {
valid();

});



$('#myModal').on('shown.bs.modal', function (e) {

	initFlexSliders();

});

});
//=================================tooltip==========================================

//============================ flexslider fucntion ===========================
function initFlexSliders() {
    //The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 120,
    itemMargin: 10,
    minItems: 2,
    maxItems: 8,
    asNavFor: '#slider'
  });

  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
	useCSS:false,
    sync: "#carousel",
	start: function(slider){
	slider.show(100);
	},
	before: function(slider){
	slider.show(100);
	$('#myModal').show();
	}
  });


}
function valid(){
 $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
}
function boxHeight(){
 //==================================== height header============================

var wHeight = $(window).height();
$('#boxWrapp').css('min-height', wHeight);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe1xyXG4gXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PW1vZGFsIGxvYWQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuIHZhciB3cmFwcCA9ICQoJyNteU1vZGFsMiAubW9kYWwtZGlhbG9nIC5tb2RhbC1ib2R5Jyk7XHJcbiAgICAkKCdhLmxvYWQtY29udGFjdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cigncmVsJyk7XHJcbiAgICAgICAgd3JhcHAubG9hZChocmVmICsgJyAuY29udGFjdEZvcm0nKTtcclxuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gdmFyIHdyYXBwQWJvdXQgPSAkKCcjbXlNb2RhbDMgLm1vZGFsLWRpYWxvZyAubW9kYWwtYm9keScpO1xyXG4gICAgJCgnYS5sb2FkLWFib3V0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKCdyZWwnKTtcclxuICAgICAgICB3cmFwcEFib3V0LmxvYWQoaHJlZiArICcgLmFib3V0Rm9ybScpO1xyXG5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAkKFwiW2RhdGEtZ2FsPSd0b29sdGlwJ11cIikudG9vbHRpcCgpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT0gdmFsaWRhdGlvbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuYm94SGVpZ2h0KCk7XHJcbn0pKCk7XHJcblxyXG5cclxuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgIGJveEhlaWdodCgpO1xyXG59KTtcclxuXHJcbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG52YXIgd3JhcHBGID0gJCgnI215TW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtYm9keScpO1xyXG5cdCQoJ2EubG9hZC1mb2xpbycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuXHRcdHZhciBocmVmRiA9ICQodGhpcykuYXR0cigncmVsJyk7XHJcblx0XHR3cmFwcEYubG9hZChocmVmRiArICcgLnBvcnRmb2xpbycpO1xyXG5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR9KTtcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1mbGV4IGdhbGxlcnk9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW5pdEZsZXhTbGlkZXJzKCk7XHJcbnZhbGlkKCk7XHJcbiQoJyNteU1vZGFsMicpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XHJcbnZhbGlkKCk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuJCgnI215TW9kYWwnKS5vbignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuXHRpbml0RmxleFNsaWRlcnMoKTtcclxuXHJcbn0pO1xyXG5cclxufSk7XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09dG9vbHRpcD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09IGZsZXhzbGlkZXIgZnVjbnRpb24gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGluaXRGbGV4U2xpZGVycygpIHtcclxuICAgIC8vVGhlIHNsaWRlciBiZWluZyBzeW5jZWQgbXVzdCBiZSBpbml0aWFsaXplZCBmaXJzdFxyXG4gICQoJyNjYXJvdXNlbCcpLmZsZXhzbGlkZXIoe1xyXG4gICAgYW5pbWF0aW9uOiBcInNsaWRlXCIsXHJcbiAgICBjb250cm9sTmF2OiBmYWxzZSxcclxuICAgIGFuaW1hdGlvbkxvb3A6IGZhbHNlLFxyXG4gICAgc2xpZGVzaG93OiBmYWxzZSxcclxuICAgIGl0ZW1XaWR0aDogMTIwLFxyXG4gICAgaXRlbU1hcmdpbjogMTAsXHJcbiAgICBtaW5JdGVtczogMixcclxuICAgIG1heEl0ZW1zOiA4LFxyXG4gICAgYXNOYXZGb3I6ICcjc2xpZGVyJ1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc2xpZGVyJykuZmxleHNsaWRlcih7XHJcbiAgICBhbmltYXRpb246IFwic2xpZGVcIixcclxuICAgIGNvbnRyb2xOYXY6IGZhbHNlLFxyXG4gICAgYW5pbWF0aW9uTG9vcDogZmFsc2UsXHJcbiAgICBzbGlkZXNob3c6IGZhbHNlLFxyXG5cdHVzZUNTUzpmYWxzZSxcclxuICAgIHN5bmM6IFwiI2Nhcm91c2VsXCIsXHJcblx0c3RhcnQ6IGZ1bmN0aW9uKHNsaWRlcil7XHJcblx0c2xpZGVyLnNob3coMTAwKTtcclxuXHR9LFxyXG5cdGJlZm9yZTogZnVuY3Rpb24oc2xpZGVyKXtcclxuXHRzbGlkZXIuc2hvdygxMDApO1xyXG5cdCQoJyNteU1vZGFsJykuc2hvdygpO1xyXG5cdH1cclxuICB9KTtcclxuXHJcblxyXG59XHJcbmZ1bmN0aW9uIHZhbGlkKCl7XHJcbiAkKFwiaW5wdXQsc2VsZWN0LHRleHRhcmVhXCIpLm5vdChcIlt0eXBlPXN1Ym1pdF1cIikuanFCb290c3RyYXBWYWxpZGF0aW9uKCk7XHJcbn1cclxuZnVuY3Rpb24gYm94SGVpZ2h0KCl7XHJcbiAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBoZWlnaHQgaGVhZGVyPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxudmFyIHdIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiQoJyNib3hXcmFwcCcpLmNzcygnbWluLWhlaWdodCcsIHdIZWlnaHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
