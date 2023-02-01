
$(document).ready(function() {
    $('#icon').click(function() {
        $('ul').toggleClass('show');
    });
    $('nav ul li').click(function() {
      $('nav ul').removeClass('show');
  });
   
  });


  $(document).ready(function(){
    $("#showButton").click(function(){
        $("#showDiv").toggle();
    });
});

//   const showDiv = document.getElementById('showDiv');
//   const showButton = document.getElementById('showButton');

//   showButton.addEventListener('click', () => {
//       showDiv.style.display = 'flex';
//       showButton.textContent = "Hide"
//   });

 

