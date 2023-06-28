var welcomeMessage = new Array(
  '<span class="text-tags"> &lt; p &gt; </span> Software Engineer; <span class="text-tags"> &lt; /p &gt; </span>',
  '<span class="text-tags"> &lt; p &gt; </span> Web Developement certificated;<span class="text-tags"> &lt; /p &gt; </span>');
  
  var iSpeed = 50; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = welcomeMessage[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter() {
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("hero-typewrited-msg");
    
    while ( iRow < iIndex ) {
      sContents += welcomeMessage[iRow++] + '<br/><br/>';
    }

    if (iRow == iIndex) {
      destination.innerHTML = sContents + welcomeMessage[iIndex].substring(0, iTextPos) + '<span class="blinking-char">|</span>';
    } else {
      destination.innerHTML = sContents + welcomeMessage[iIndex].substring(0, iTextPos) + "_";
    }
    
    if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != welcomeMessage.length ) {
        iArrLength = welcomeMessage[iIndex].length;
        setTimeout("typewriter()", 500);
      }
    } else {
      setTimeout("typewriter()", iSpeed);
    }
  }
  
  typewriter();
  