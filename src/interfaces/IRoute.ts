import { Request, Response } from "express";

export enum RouteMethod {
    POST = 'post',
    GET = 'get',
    PUT = 'put',
    PATCH = 'patch',
    DELETE = 'delete'
}

export interface IRoute {
    path: string;
    method: RouteMethod;
    controller: (request: Request, response: Response) => Promise<Response>
}