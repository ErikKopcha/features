// class Slider {
//   constructor(sliderWrapperId) {
//     this.sliderContainer = document.getElementById(sliderWrapperId);
//     this.slideCount = document.querySelectorAll('.slide').length;
//     this.slideWidth = document.querySelector('.slide').offsetWidth;
//     this.sliderContainerWidth = this.slideCount * this.slideWidth;
//     this.lastSlide = document.querySelectorAll('.slide')[document.querySelectorAll('.slide').length - 1];
//     this.sliderContainer.style.marginLeft = `-${this.slideWidth}`;
//     this.sliderContainer.prepend(this.lastSlide);

//     this.prev = document.querySelector('.control_prev');
//     this.next = document.querySelector('.control_next');

//     this.init();
//   }

//   init() {
//     this.prev.addEventListener('click', () => {
//       this.sliderContainer.style.marginLeft = `-${this.slideWidth}`;
//       this.sliderContainer.prepend(this.lastSlide);
//     });
    
//     this.next.addEventListener('click', () => {
//       this.sliderContainer.style.marginRight = `-${this.slideWidth}`;
//       this.sliderContainer.appendChild(this.lastSlide);
//     });
//   }
// }

jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    
