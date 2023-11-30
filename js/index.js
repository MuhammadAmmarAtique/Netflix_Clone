// Logic for website's 6th Section 


    function toggleVisibility(clickedElement) {

        console.log(clickedElement);
      // Get the parent div of the clicked child
      var parentDiv = clickedElement.parentElement;

      // Find the second child div within the parent div
      var childTwo = parentDiv.querySelector('.secondchild');

      // Toggle its visibility
      childTwo.classList.toggle('hidden');

    //   Also changing symbol from + to multiply 
    var symbol_element = clickedElement.querySelector('.symbol_element');

    console.log(symbol_element);

    if (symbol_element.textContent === '+') {
        symbol_element.textContent = '× ';
    } 
    else
     {
        symbol_element.textContent = '+'
    }
    
    }


 /* Whats happening in above code: 
    
    <div class="parent">
      <div class="child" onclick="toggleVisibility(this)">  Heading  </div>
      <div class="secondchild hidden"> Content </div>
    </div>
       

  */
