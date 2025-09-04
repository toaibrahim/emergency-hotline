1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
solution:getElementById: Finds one element by its unique ID.
getElementsByClassName : Finds elements with the given class.
querySelector : Finds the first element that matches a CSS selector.
querySelectorAll : Finds all matching elements for the CSS selector.


2. How to create and insert a new element into the DOM

solution :1. Create element with document.createElement().

        2. Set content/attributes with textContent, innerHTML, or setAttribute.

        3. Insert into DOM with appendChild, prepend, insertBefore, or append.


3. What is Event Bubbling and how does it work?

solution : When an event (like click) occurs on an element, it first runs the handler on the target element, then bubbles up the DOM tree to its parent, grandparent, and so on, until it reaches the root (document).

4. What is Event Delegation in JavaScript? Why is it useful?

solution : Instead of attaching event listeners to many child elements, you attach a single listener to their parent and use event bubbling to detect which child triggered the event.

5. Difference between preventDefault() and stopPropagation():

solution : preventDefault() : Stops the default browser behavior for an event.
            stopPropagation() : Stops the event bubbling (or capturing) from continuing up (or down) the DOM tree.


