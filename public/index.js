/**
 * @module DOM-Calculator
 */

/**
 * It is a NodeList of the child elements, wich are all the spans elements.
 * It selects all the buttons of the calculator.
 * Each button represents a value or an arithmetic operation.
 * @type {NodeList}
 */
const btn = document.querySelectorAll('span');
/**
 * This represents the display of the calculator.
 * It shows the buttons the user presses or the result of an operation.
 * @type {HTMLElement | null}
 */
let value = document.getElementById('value');
/**
 * This button changes the color mode of the website to dark-mode and restores to the origonal color mode.
 * @type {HTMLElement | null}
 */
let  toggleBtn = document.getElementById('toggleBtn');
/**
 * It is the body element.
 * @type {HTMLElement | null}
 */
let body = document.querySelector('body');

for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        if(this.innerHTML == "=") {
            if(value != null) value.innerHTML = eval(value.innerHTML);
        } else {
            if(this.innerHTML == "Clear") {
                if(value != null) value.innerHTML = "";
            } else {
                if(value != null) value.innerHTML += this.innerHTML;
            }
        }
    });
}

if(toggleBtn != null){
    toggleBtn.onclick = function(){
        body?.classList.toggle('dark');
    }
}