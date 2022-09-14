import HelloWorldController from '../controllers/HelloWorldController';
import { IRoute, RouteMethod } from '../interfaces/IRoute';

const routes: IRoute[] = [
    {
        path: '/',
        method: RouteMethod.GET,
        controller: HelloWorldController.get
    }
]

export default routes;