# Project Explanation

## HTML Code

```html
<!DOCTYPE html>
<html>
<head>
    <title>Calculator | Javascript Mini Project</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div id="toggleBtn"></div>
    <div class="calculator">
        <div class="buttons">
            <h2 id="value"></h2>
            <span id="clear">Clear</span>
            <span>/</span>
            <span>*</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>-</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span id="plus">+</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>0</span>
            <span>00</span>
            <span>.</span>
            <span id="equal">=</span>
        </div>
    </div>
    <script src="index.js"></script>
</body>
</html>
```

## CSS Code

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: consolas;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #edf1f4;
}

.dark {
    background: #282c2f;
}

.calculator {
    position: relative;
    width: 340px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1), 
    -15px -15px 20px #fffb;
}

.dark > .calculator {
    background: #33393e;
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.25),
    -15px -15px 20px rgba(255, 255, 255, 0.1);
}

.calculator > .buttons {
    position: relative;
    display: grid;
}

.calculator > .buttons > #value {
    position: relative;
    grid-column: span 4;
    user-select: none;
    overflow: none;
    width: 100%;
    text-align: end;
    color: #5166d6;
    height: 100px;
    line-height: 100px;
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1), 
    inset -5px -5px 20px #fff;
    border-radius: 10px;
    margin-bottom: 12px;
    padding: 0 20px;
    font-size: 2em;
    font-weight: 500;
}

.dark > .calculator > .buttons > #value {
    color: #eee;
    box-shadow: inset 15px 15px 20px rgba(0, 0, 0, 0.5),
    inset -15px -15px 20px rgba(255, 255, 255, 0.1);
}

.calculator > .buttons > span {
    position: relative;
    padding: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1), 
    -5px -5px 20px #fff;
    margin: 10px;
    cursor: pointer;
    user-select: none;
    min-width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    color: #666;
    border: 2px solid #edf1f4;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1), 
    -5px -5px 10px #fff;
    border-radius: 10px;
}

.dark > .calculator > .buttons > span {
    color: #eee;
    border: 2px solid #333;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25),
    -5px -5px 10px rgba(255, 255, 255, 0.1);
}

.calculator > .buttons > span:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1),
    inset -5px -5px 10px #fff;
    color: #f44336;
}

.dark > .calculator > .buttons > span:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1),
    inset -5px -5px 10px #fff;
}

.calculator > .buttons > span#clear {
    grid-column: span 2;
    background: #f44336;
    color: #fff;
    border: 2px solid #edf1f4;
}

.calculator > .buttons > span#plus {
    grid-row: span 2;
    background: #31a935;
    color: #fff;
    border: 2px solid #edf1f4;
}

.calculator > .buttons > span#equal {
    background: #2196f3;
    color: #fff;
    border: 2px solid #edf1f4;
}

.dark > .calculator > .buttons > span#clear,
.dark > .calculator > .buttons > span#plus,
.dark > .calculator > .buttons > span#equal {
    border: 2px solid #eee;
}

.calculator > .buttons > span#equal:active,
.calculator > .buttons > span#plus:active,
.calculator > .buttons > span#clear:active {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1),
    -5px -5px 10px #fff,
    inset 5px 5px 10px rgba(0, 0, 0, 0.1);
}

.dark > .calculator > .buttons > span#clear:active,
.dark > .calculator > .buttons > span#plus:active,
.dark > .calculator > .buttons > span#equal:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1);
}

#toggleBtn {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #555;
    cursor: pointer;
    border: 2px solid #edf1f4;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1),
    -5px -5px 10px #fff;
}

.dark > #toggleBtn {
    background: #edf1f4;
    border: 2px solid #333;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25),
    -5px -5px 10px rgba(255, 255, 255, 0.25);
}
```

When you copy this html and css code, you will have the design of the calcutator in your browser. It will look something like this:

![Calculator-original-mode](/img/Calculator-img.png)

This is with the dark-mode:

![Calculator-dark-mode](/img/Calculator-dark-mode.png)

## JAVASCRIPT Tutorial

The first thing you must do is select the importan elemnts of that calculator, like the buttons, the display (it is where the result will show), the button that changes the color mode and the body element as we want to change all the application to a dark-mode we have to get that body element.

We can select a html element by different ways.
If we want to select it from its classname, we have to this:

```js
const firstOption = document.getElementsByClassName('NameClassElement');
const secondOption = document.querySelector('.NameClassElement');
```

Then if it's from its id, we do this:

```js
const firstOption = document.getElementById('NameClassElement');
const secondOption = document.querySelector('#NameClassElement');
```

And if it's a html element, we do this:

```js
const body = document.querySelector('body');
```

But if we want to select several elements, so do this:

```js
// html element
const btn = document.querySelectorAll('span');
// className html element
const btn = document.querySelectorAll('.span');
// id html element
const btn = document.querySelectorAll('#span');
```

Aplyiing that in this project, we got to select thsi elements of the html code:

```js
const btn = document.querySelectorAll('span');
const value = document.getElementById('value');
const toggleBtn = document.getElementById('toggleBtn');
const body = document.querySelector('body');
```

In this case, if we want to use several elements we must go through one by one, we could do this with a for(), imagine that this is an array of elements and we select the value of that button.

Then depending the value of the button we can concatenate each value, but if is pressed the button "=" we could evaluate that string of values an show that result or if we want to clear we delete the string of the display.

So we could do domething like this:

```js
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
```

Finally we got to change the color mode, so we indicate that we press the toggleBtn we change to dark-mode and when it is pressed again in returns to the original mode, so we have to add a new clas called "dark", for the css file detects that and changes the background and the calculator color.

So do this:

```js
if(toggleBtn != null){
    toggleBtn.onclick = function(){
        body?.classList.toggle('dark');
    }
}
```

And that's how you do a calculator in javascript.