$(document).ready(function(){ 
      
  $('#search').click(function(){
  
  let query = $('#textBox').val();
    
    
 $.ajax({
   type: 'GET',
   url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&maxlag=40&search=' + query,
   dataType: 'jsonp',
   success: function (data) {
    /* console.log('success', data); */
     
      for (let i=0; i < data[1].length; i++) {
       let titles = $('<p></p>').text(data[1][i]);
        let firstSent = $('<p></p>').text(data[2][i]);
             let link = data[3][i];
        $('body').append(titles);
        $(titles).append(firstSent);
        $(titles).wrap('<div></div>');
        $('div').wrap('<a></a>');
        $("a").attr("href", link);
      }
     
   }
     
 });
   
});
  
  $('#randomSearch').click(function(){
    
    window.location.href='https://en.wikipedia.org/wiki/Special:Random';
    
  });

});