# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshots/Main%20Box.png)
![](./screenshots/Thanks%20Box.png)
![](./screenshots/Main%20box%20Mobile.png)
![](./screenshots/Thanks%20Box%20Mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Well, to develop this app discover other sterilization methods using (focus and active) HTML buttons to style various stages of it and to be able to work with the mobile version.

```html
<div class="rating-buttons">
  <input type="button" value="1" id="button" name="button" />
  <input type="button" value="2" id="button" name="button" />
  <input type="button" value="3" id="button" name="button" />
  <input type="button" value="4" id="button" name="button" />
  <input type="button" value="5" id="button" name="button" />
</div>

<div class="submit-button">
  <input type="button" value="SUBMIT" id="submit" onclick="changeBox()" />
</div>
```

```css
#button:hover {
  background-color: hsl(217, 12%, 63%);
  color: hsl(0, 0%, 100%);
}

#button:focus {
  background: hsl(25, 97%, 53%);
  color: hsl(0, 0%, 100%);
}

#submit:active {
  background: hsl(0, 0%, 100%);
  color: hsl(25, 97%, 53%);
}
```

and to check if the user selected an option, I stored the value of the input that is set by a property of the function and serving as a condition for another function to show or not the 'thanks-box'.

```js
let result

function getVote(number) {
  result = number
  document.querySelector("span[name='result']").innerHTML = result
  return result
}

function changeBox() {
  if (result == undefined) {
    alert('Choose a review')
  } else {
    let mainBox = document.getElementById('main-box')
    let thanksBox = document.getElementById('thanks-box')

    mainBox.style.display = 'none'
    thanksBox.style.display = 'flex'
  }
  console.log(result)
}
```

```css
#thanks-box {
  display: none;
}
```

### Continued development

store the function parameter so that it can be accessed on another page to be used in more complex projects

### Useful resources

- (https://stackoverflow.com/questions/22559756/changing-hover-to-touch-click-for-mobile-devices) - This showed me the CSS active animations. I really liked this model and will use it from now on.
- (https://stackoverflow.com/questions/38377062/how-to-make-html-button-look-pressed-in-using-css) - This showed me the CSS focus animations. I really liked this model and will use it from now on.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
