
window.onload = () => {

    const emailBtn        = document.getElementById( "contact-email-btn" );
    const copyEmailBtn    = document.getElementById( "copy-email-btn" );
    const emailAddress    = document.getElementById( "contact-email-address" );

    emailBtn.addEventListener( "mouseover", function () {
        copyEmailBtn.classList.add( "visible" );
        emailAddress.classList.add( "visible" );
    });


    emailBtn.addEventListener( "mouseout", function () {
        copyEmailBtn.classList.remove( "visible" );
        emailAddress.classList.remove( "visible" );
        copyEmailBtn.innerText = "Copy";
        copyEmailBtn.classList.remove( "copied" );
    });


    copyEmailBtn.addEventListener( "click", function () {
        copyEmailBtn.innerText = "Copied";
        copyEmailBtn.classList.add( "copied" );
        navigator.clipboard.writeText( "ildiko!ildiesign".replace( '!', '@' ) + "moc.".split('').reverse().join('') );
    });

};