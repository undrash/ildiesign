
window.onload = () => {


    /** Email/Contact  */

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
        copyToClipboard( "ildiko!ildiesign".replace( '!', '@' ) + "moc.".split('').reverse().join('') );
    });


    /** Mobile Menu */


    const menuBtn       = document.getElementById( "mobile-menu-btn" );
    const menuDropdown  = document.getElementById( "mobile-menu-dropdown" );
    const closeMenuBtn  = document.getElementById( "mobile-menu-close-btn" );



    menuBtn.addEventListener( "click", () => {
        menuDropdown.style.display = "block";
        closeMenuBtn.style.display = "block";
    });

    closeMenuBtn.addEventListener( "click", () => {
        closeMenuBtn.style.display = "none";
        menuDropdown.style.display = "none";
    });




    /** Utils */
    
    function copyToClipboard(str) {
        let el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);

        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            // save current contentEditable/readOnly status
            let editable = el.contentEditable;
            let readOnly = el.readOnly;

            // convert to editable with readonly to stop iOS keyboard opening
            el.contentEditable = true;
            el.readOnly = true;

            // create a selectable range
            let range = document.createRange();
            range.selectNodeContents(el);

            // select the range
            let selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            el.setSelectionRange(0, 999999);

            // restore contentEditable/readOnly to original state
            el.contentEditable = editable;
            el.readOnly = readOnly;
        } else {
            el.select();
        }

        document.execCommand('copy');
        document.body.removeChild(el);
    }
};