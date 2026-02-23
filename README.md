1. Answer :
getElementById :
getElementById() selects an element based on its unique id. If no element with that ID exists, it returns null. 

getElementsByClassName :
getElementsByClassName() selects all elements that have the given class name.
Can contain multiple elements. 

querySelector :
querySelector() selects the first elements that matches a givenCSS selector.

querySelectorAll :
querySelectorAll() selects all elements that match a given CSS selector. 


 2. Answer :
At first create element → document.createElement()
After that add content → innerText / innerHTML
At last Insert into DOM → appendChild() / append()


3. Answer :
Event Bubbling means When an event happens on a child element, it first runs on that element then moves up to its parent, then grandparent 

4. Answer :
Event Delegation means Instead of adding event listener to many child elements,
we add one listener to the parent and handle events using event.target. 

5. Answer :
preventDefault() :
preventDefault() is used to stop the browser's defult action that normally happens when an event occurs. 

stopPropagation() :Answer
stopPropagation() is used to stop the event from bubbling up (or capturing down) through parent elements.
