import { Request, Response } from "express";

class HelloWorldController {

    public async get(request: Request, response: Response): Promise<Response> {
        return response.json('Hello world!')
    }
}

export default new HelloWorldController();