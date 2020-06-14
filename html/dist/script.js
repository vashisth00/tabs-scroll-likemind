$(function() {
  setBindings();
  
  $('.tab-container .tab-strip .add-tab-button').click(function() {
    createTab($(this).parent(), 'Tab');
  });
  
  $('.tab-container .tab-strip').mouseleave(function() {
    rearrangeTabs($(this));
  });
  
  rearrangeTabs($('.tab-container .tab-strip'));
});

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

function setBindings() {
  $('.tab-container .tab-strip .tab .tab-button').click(function() {
    $(this)
    .parent().parent()
    .children('.tab')
    .removeClass('active');
    $(this).parent().addClass('active');
  });
  
  $('.tab-container .tab-strip .tab .tab-close').click(function() {
    //$(this).parent().css('z-index', '-1');
    $(this).parent().animate({
      opacity: 'hide'
    }, { duration: 200, queue: false });
    $(this).parent().animate(
      { 
        width: 'hide',
        marginLeft: 'hide',
        marginRight: 'hide',
        paddingLeft: 'hide',
        paddingRight: 'hide',
        borderLeft: 'hide',
        borderRigh: 'hide'
      }, 300, function() {
        var tabStrip = $(this).parent();
        $(this).remove();
        rearrangeTabs(tabStrip, true);
      });
  });
}

function rearrangeTabs(tabStrip, keepWidth){
  if(tabStrip.children('.tab').length < 2){
    tabStrip.children('.tab').addClass('no-close');
  }
  if(tabStrip.children('.tab.active').length == 0) {
    $(tabStrip.children('.tab')[0]).addClass('active');
  }
  if(!keepWidth) {
  tabStrip.children('.tab').css('max-width', (100 / (tabStrip.children().length - 1)) + '%');
  }
}

function createTab(tabStrip, text) {
  var newTab = $(
    '<span class="tab" style="display: none;">' + 
    '<button class="tab-button"><span>' + text + '</span></button>' +
    '<button class="tab-close"></button>' +
    '</span>');
  
  newTab.insertBefore(tabStrip.children('.add-tab-button'));
  setBindings();
  rearrangeTabs(tabStrip);
  newTab.animate({
    opacity: 'show',
    width: 'show',
    marginLeft: 'show',
    marginRight: 'show',
    paddingLeft: 'show',
    paddingRight: 'show',
    borderLeft: 'show',
    borderRigh: 'show'
  });
  
  $('.tab-container .tab-strip .tab').removeClass('no-close');
}