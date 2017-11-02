# AnimScroll
Change class on scroll

Super simple vanilla script to change class of an element when it's in screen

### How?
Load the js file at the end of your page

Then create a new instance of AnimScroll for each div you want to reaveal.

Parameters:
- the html element
- Percent of the page where the class change is done (0 = top of the element at the top of the screen, 100= top of the element at the bottom of the screen (default 100)
- Class when the element is in the user screen (default as-Inside)
- Class when the element is outside (default as-Outside)

```javascript
var scene = new AnimScroll(document.getElementById('aimdiv'), 80, 'inside', 'outside');
```

Then just init Scroll listeners
```javascript
asBuilder();
```

### Use your own CSS transition
example:
```css
.as-isOutside{
    opacity: 0;
    transform: translateY(20px);
}
.as-isInside{
    opacity: 1;
    transform: translateY(0);
    transition-property: opacity, transform;
    transition-timing-function: ease-out;
    transition-duration: 300ms;
}
```

### WIP
