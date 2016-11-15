# Tic-Tac-Toe

[rhjones.github.io/tic-tac-toe/](https://rhjones.github.io/tic-tac-toe/)

Tic Tac Toe game created to [spec](https://github.com/ga-wdi-boston/game-project) as first project for General Assembly Boston's Web Development Immersive program. See [requirements](https://github.com/ga-wdi-boston/game-project/blob/master/requirements.md) for more details.

**Want to play without signing up? Log in using the email address `a@a.a` and the password `a`.**

Want to read about my development process? Check out my [blog post](http://rebekahheacock.org/2016/09/general-assembly-week-3-project-week/) about Week 3 of General Assembly.

## Basic features

- authentication (backed by a [Rails API](https://github.com/rhjones/tic-tac-toe-api)): register, log in, change password, log out
- a clickable game board
- a button to start a new game
- a stats tracker that displays user's total wins, losses, and tied games
- "win" display that indicates winner (x/o) or tie game
- turn tracker that indicates which player goes next

## Technologies used

- JavaScript
- jQuery
- AJAX
- Bootstrap
- SCSS/SASS
- GA WDI Boston [Browser Template](https://github.com/ga-wdi-boston/browser-template)

## [Planning and development process](http://rebekahheacock.org/2016/09/general-assembly-week-3-project-week/)

### Planning
I started by looking at mobile game apps for design inspiration (particularly those designed by [Dots.co](https://www.dots.co/)). Tic-Tac-Toe is a pretty simple game at its core, and I wanted to explore what other fairly streamlined or minimalist games had done to keep gameplay straightforward but also somewhat elegant. 

With respect to design, I made [mobile wireframes](https://github.com/rhjones/game-project-scope-study/blob/response/study.md#a-wireframe-of-what-your-game-project-will-look-like) first, and then expanded to larger screen wireframes. On the back end, I put together a [tentative data model](https://github.com/rhjones/game-project-scope-study/blob/response/study.md#the-data-structure-you-plan-to-use). I also developed a series of [user stories](https://github.com/rhjones/game-project-scope-study/blob/response/study.md#4-8-user-stories-for-your-game-project) to help guide feature development.

### Development 
I focused on functionality first. I began with authentication: sign up, log in, log out, and change password. Once that was working, I created a very basic game board in my index.html file and added a "new game" button that, when clicked, sends a POST request to the API to create a new game. Once I was able to create a new game, I began building the "click a cell to mark it with an x or an o in the DOM" functionality, then tied this to the PATCH requests I needed to send to the API to update the game on the server. After connecting the DOM interaction with calls to the API, I built a series of functions to check the necessary win conditions, identify the winner, and send a PATCH request to the server to end the game. 

After this basic functionality was in place, I spent some time on the UI, adjusting what's visible on the screen in different states (before/after logging in, during game play, etc.), moving success and error messages from `console.log()` statements to elements in the DOM, laying out the template, and choosing colors and fonts. 

I then briefly went back to functionality, adding the ability to get the authenticated user's total completed games and calculate their wins, losses, and tied games and a tracker that indicates whose turn it is. 

After this, most of the work was making tweaks to the UI, refactoring the code in an attempt to make it cleaner/more straightforward, and bug fixing.

## Cool things I learned along the way
- How to make a [sticky footer](http://stackoverflow.com/questions/15069983/how-to-fix-footer-on-bottom-of-screen-regardless-of-browser-or-device)
- How to [pass additional data](http://stackoverflow.com/questions/21985201/pass-extra-parameters-to-jquery-ajax-promise-callback) to AJAX callback functions 
- It's embarrassingly easy to keep reverting to "x and y" instead of "x and o." This will cause you at least an hour of distress when building a tic-tac-toe game.

## Next steps

- I'd like to rethink my overall approach to separating the JavaScript code into functions and files. It still feels a little scattered to me, and I hope that as my skills as a developer grow, I'll be able to shape it into something more clean and efficient.
- I'd particularly like to revisit my method for checking whether a game has been won. This currently takes up around 60 lines of code, and I think there are better ways to go about this.
- Make the game multiplayer, with the ability to connect two authenticated users as opponents.
- Let the user change the color scheme.
- Super cool would be to implement [this version](http://tabtimes.com/how-two-developers-turned-age-old-game-something-much-more-12963/) of the game, which uses nine game boards (one board in what is normally an empty square in a basic tic-tac-toe game) and has a [more complex set of rules](https://mathwithbaddrawings.com/2013/06/16/ultimate-tic-tac-toe/). The provided API isn't really set up for this, but I might be able to figure out a way to sort of hack this together using localStorage. This is currently set to "iff I somehow figure out how to do everything else on the bonus list before my time is up" goal status.
- Add chat functionality.


