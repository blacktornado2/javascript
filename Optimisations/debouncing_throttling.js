/*

   Performance Optimisation Patterns
 - Used for Limiting the execution of functions, especially for events that fire rapidly(searching, resizing, scrolling)
 - Ex: search bar in an e-commerce website/app, gun firing in a game, resizing of window

*/

const searchBar = document.querySelector('#searchBar');

// searchBar.addEventListener('keyup', (e) => getSearchResults(e.target.value)); // Not optimised
searchBar.addEventListener('keyup', (e) => betterFunction(e.target.value));

function getSearchResults(searchKey) {
    // call API and get data
    console.log('Searching....', searchKey);
    console.log('Here is your data');
}

/*

1. Debouncing:
 - groups a burst of sequential calls to a function into a single one
 - The function is only called after a specified period of inactivity

Core Idea: 
 - Wait for a pause in the event stream before executing the latest function call
 - Every time the event fires, the waiting timer is reset.

Analogy: 
 - Think of an elevator door. If people keep walking through, the door stays open and the "close door" timer keeps resetting. 
 - The door only closes after everyone has passed and there's a pause.

Use Cases:
 - Search Bar Autocomplete: You don't want to send an API request for every single letter a user types. Instead, you wait until the user stops typing for a moment (e.g., 300ms) and then send the request with their complete query.
 - Window Resizing: Don't re-calculate a complex layout on every single pixel change as the user drags the window border. Wait until they are done resizing, then perform the re-layout.
 - Input Field Validation: Don't show a validation error (e.g., "Password is too short") on every keystroke. Wait for a pause in typing to check the validity.

*/

// Implementation

const betterFunction = debounce(getSearchResults, 500);

function debounce(callback, delay) {
    let timerId;
    return function () {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback.apply(this, arguments);
        }, delay);
    }
}


/* 

2. Throttling 
 - a function is executed at most once every specified interval, regardless of how many times the event is fired

Core Idea: 
 - Execute the function at a regular, controlled interval. It ignores additional calls that happen within the specified time window

Analogy: 
 - Firing a machine gun on semi-automatic. No matter how fast you pull the trigger, it only fires at a fixed rate

Use Cases:
 - Scroll Event Handlers: When tracking scroll position to trigger animations or load more content (infinite scroll). You don't need to react to every single scroll event; checking every 150ms is usually sufficient and much more performant
 - Mouse Move Tracking: When implementing something like a drawing canvas or tracking the cursor position, you can throttle the event handler to capture the position at a regular interval instead of on every tiny movement
 - API Call Limits: Preventing a user from spamming a button that sends an API request. The request will only be sent once per interval (e.g., once every 2 seconds)

*/

// Implementation
const throttle = (callback, delay) => {
    let flag = true;
    return function () {
        if (flag) {
            flag = false;
            callback.apply(this, arguments);
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}

const throttledFunction = throttle(getSearchResults, 500);


// debouncing is preferred for events where the final state matters(eg. use input)
// throttling is preferred for events that fire continuously and we need progress updates