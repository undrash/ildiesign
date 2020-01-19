

import { Router, Request, Response, NextFunction } from "express";






class PageController {

    router: Router;





    constructor() {
        this.router = Router();
        this.routes();
    }



    public routes() {
        this.router.get( "/", this.index );
        this.router.get( "/daily-ui", this.dailyUI );
        this.router.get( "/about-me", this.aboutMe );
        this.router.get( "/cookies", this.cookies );
        this.router.get( "/themes", this.themes );
    }



    public index(req: Request, res: Response, next: NextFunction) {

        res.render( "index", { title: "ildiesign | Home", projects: true } );

    }



    public dailyUI(req: Request, res: Response, next: NextFunction) {

        const day = PageController.calculateUIDay();

        res.render( "daily-ui", { title: "ildiesign | Daily UI", day, dailyUI: true } );

    }



    public aboutMe(req: Request, res: Response, next: NextFunction) {
        res.render( "about-me", { title: "ildiesign | About Me", aboutMe: true } );
    }



    public cookies(req: Request, res: Response, next: NextFunction) {
        res.render( "cookies", { title: "ildiesign | Cookies" } );
    }



    public themes(req: Request, res: Response, next: NextFunction) {
        res.render( "themes", { title: "ildiesign | Themes", themes: true } );
    }



    private static calculateUIDay(): number {
        let day         = 750;
        const date      = new Date( 2019, 0, 22 );
        const today     = new Date();

        day += PageController.workingDaysBetweenDates( date, today );

        return day;
    }



    private static workingDaysBetweenDates(startDate, endDate) {

        // Validate input
        if ( endDate < startDate ) return 0;

        // Calculate days between dates
        let millisecondsPerDay = 86400 * 1000; // Day in milliseconds

        startDate.setHours( 0,0,0,1 );  // Start just after midnight
        endDate.setHours( 23,59,59,999 );  // End just before midnight

        let diff = endDate - startDate;  // Milliseconds between datetime objects    
        let days = Math.ceil( diff / millisecondsPerDay );

        // Subtract two weekend days for every week in between
        let weeks = Math.floor( days / 7 );
        days = days - ( weeks * 2 );

        // Handle special cases
        let startDay = startDate.getDay();
        let endDay = endDate.getDay();

        // Remove weekend not previously removed.   
        if ( startDay - endDay > 1 ) days -= 2;


        // Remove start day if span starts on Sunday but ends before Saturday
        if ( startDay == 0 && endDay != 6 ) days -= 1;

        // Remove end day if span ends on Saturday but starts after Sunday
        if ( endDay == 6 && startDay != 0 ) days -= 1;

        return days;
    }

}


export default new PageController().router;