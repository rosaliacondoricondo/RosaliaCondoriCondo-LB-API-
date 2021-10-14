import { Request, Response } from "express"; 
import { Model, Mongoose } from "mongoose";
import { createModel, User } from "../model/UserModel";
import { UserRepository } from "../repositorios/interfaces/UserRepository";

class UserController { 
    private userRepository: UserRepository;
constructor(mongoose: Mongoose) {
    this.userRepository = new UserRepository(createModel(mongoose));
}
//nethod POST
public create(request: Request, response: Response) {
   //body
   let {name, email, password} = request.body;
   this.userRepository.create({name, email, password});
}
public update(request: Request, response: Response) {}
public get(request: Request, response: Response) {}
public delete(request: Request, response: Response) {}
public login(request: Request, response: Response) {}
public singOut(request: Request, response: Response) {}
}

export default UserController;