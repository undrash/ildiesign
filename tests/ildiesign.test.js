const puppeteer = require( "puppeteer" );

let browser, page;



beforeEach( async () => {
    browser = await puppeteer.launch({
        headless: false
    });

    page = await browser.newPage();
    await page.goto( "localhost:3000" );
});

afterEach( async () => {
    await browser.close();
});



test( "Logo ALT Test", async () => {

    const text = await page.$eval( "#ildiesign-logo", el => el.alt );

    expect( text ).toEqual( "ildiesign home" );

});


test( "Daily UI Page | URL check", async () => {

    await page.click( "#menu-item-daily-ui" );

    const url = await page.url();

    expect( url ).toMatch( /daily-ui/ );

});


test( "About Me Page | URL check", async () => {

    await page.click( "#menu-item-about-me" );

    const url = await page.url();

    expect( url ).toMatch( /about-me/ );

});