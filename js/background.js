

  $('p.seven').hide();
$('p.six').hide();
$('p.five').hide();
$('p.four').hide();
$('p.three').hide();
$('p.two').hide();
$('p.one').hide();

$('#ba').on('click',function () {
  $('p.seven').show();
})

$('#vi').on('click',function () {
  $('p.three').show();
})

$('#sn').on('click',function () {
  $('p.six').show();
})

$('#ci').on('click',function () {
  $('p.one').show();
})

$('#ch').on('click',function () {
  $('p.four').show();
})

$('#su').on('click',function () {
  $('p.five').show();
})

$('#wa').on('click',function () {
  $('p.two').show();
})

$('#print').on('click',function () {
  window.print();
})
