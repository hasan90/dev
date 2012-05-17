$ ( function ()
{
$ ('#tabContainer ul li:first').addClass("activelink")
$('#tabContainer div:first'). show()
$('#tabContainer ul li a').click ( function ()
{
$('#tabContainer ul li').removeClass("activelink");
$(this).parent().addClass("activelink");
var currentTab = $(this).attr('href');
$('#tabContainer div').hide();
$(currentTab).show();
  return false;
})
})

$(document).ready( function()
{
$('.reportSection li:odd').addClass('odd');
$('.reportSection li:even').addClass('even');
})

$( function ()
{
$('.fileNameContainer img').click ( function ()
{
$(this).parent("div").hide()
})
})

$(function () {
    var tabContainers = $('.profileContainerRight > div');
	$('.profileContainerRight > div').hide()
	$('.profileContainerRight div:first').show()
    $('.profileContainerLeft li a').click(function () {
	var currentTab = $(this).attr('href');
      tabContainers.hide().filter(this.hash).show();
	
        
        $('.profileContainerLeft li').removeClass('selected');
       $(this).parent("li").addClass('selected');
          return false;
    })
});


$(function () {
    var tabContainers2 = $('#SchedulingContainer > div');
	$('#SchedulingContainer  > div').hide()
	$('#SchedulingContainer  div#week').show()
    $('.tabCal li a').click(function () {
	var currentTab = $(this).attr('href');
      tabContainers2.hide().filter(this.hash).show();
		
        
        $('.tabCal li').removeClass('current');
       $(this).parent().addClass('current');
          return false;
    })
});

$(function () {
    var tabContainers3 = $('#medicalContainer > div');
	$('#medicalContainer  > div').hide()
	$('#medicalContainer  div#presentation').show()
	$('.subTab li:first').addClass('current');
    $('.subTab li a').click(function () {
	var currentTab = $(this).attr('href');
      tabContainers3.hide().filter(this.hash).show();
		
        
        $('.subTab li').removeClass('current');
       $(this).parent().addClass('current');
          return false;
    })
});


$( function ()
{



$('.saveBtn').click (function ()
{

$('.profileContainerRight > div').hide()
$(this).parents("div").next("div").show()

var activeList	= $(".profileContainerLeft li.selected");
var nextList = activeList.next();
var next = (nextList.length>0) ? nextList: $(".profileContainerLeft li:first");

next.addClass("selected")
activeList.removeClass("selected")

})
})



