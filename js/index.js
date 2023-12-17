// Logic for website's 6th Section

function toggleVisibility(clickedElement) {  

  // Get the parent div of the clicked child
  let parentDiv = clickedElement.parentElement;

  // Find the second child div within the parent div
  let childTwo = parentDiv.querySelector(".secondchild");

  // Toggle the visibility of the clicked "secondchild" div
  childTwo.classList.toggle("hidden");

  // Toggle the symbol from + to multiply and vice versa
  let symbol_element = clickedElement.querySelector(".symbol_element");
  symbol_element.textContent = symbol_element.textContent === "+" ? "×" : "+";


    // Iterate over all FAQ items to close other "secondchild" divs
    let allParents = document.querySelectorAll(".parent");

    allParents.forEach((parent) => {

    let otherChild = parent.querySelector(".secondchild");
    
    //Only left one opened in which user clicked and else close all other child divs
    if (otherChild !== childTwo) {
      otherChild.classList.add("hidden");
      // Reset symbol to "+"
      let otherSymbol = parent.querySelector(".symbol_element");
      if (otherSymbol.textContent !== "+") {
        otherSymbol.textContent = "+";
      }
    }

  });
}


/* For understanding above code: 
    
    <div class="parent">
      <div class="child" onclick="toggleVisibility(this)">  Heading  </div>
      <div class="secondchild hidden"> Content </div>
    </div>
       

  */
