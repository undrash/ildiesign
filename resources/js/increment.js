




const counter = document.getElementById( "count-number" );

const limit = parseInt( counter.innerHTML );

let day = 727;

counter.innerHTML = "0";

const pause = 50;

const interval = setInterval( function () {

    if ( day < limit ) {

        increment();


    } else {
        clearInterval( interval );
    }

}, pause );






function increment() {
    day++;

    counter.innerHTML = day.toString();
}


