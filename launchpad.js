$(function(){
  $('.nav-item').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected')
  })
})
