

import { Router, Request, Response, NextFunction } from "express";






class ProjectsController {

    router: Router;





    constructor() {
        this.router = Router();
        this.routes();
    }



    public routes() {
        this.router.get( "/ahead", this.ahead );
        this.router.get( "/borneo", this.borneo );
        this.router.get( "/plant-care", this.plantCare );
        this.router.get( "/ventana", this.ventana );
    }



    public ahead(req: Request, res: Response, next: NextFunction) {

        res.render( "ahead", { title: "ildiesign | Ahead", isProject: true, project: "ahead" } );

    }



    public borneo(req: Request, res: Response, next: NextFunction) {

        res.render( "borneo", { title: "ildiesign | Borneo", isProject: true, project: "borneo" } );

    }



    public plantCare(req: Request, res: Response, next: NextFunction) {

        res.render( "plant-care", { title: "ildiesign | PlantCare", isProject: true, project: "plantcare" } );

    }



    public ventana(req: Request, res: Response, next: NextFunction) {

        res.render( "ventana", { title: "ildiesign | Ventana", isProject: true, project: "ventana" } );

    }

}


export default new ProjectsController().router;