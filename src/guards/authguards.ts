import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";



export class Jwtguard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Observable<boolean> | Promise<boolean> {
       let data = context.switchToHttp().getRequest()
       console.log('Authguard....',data)
       return data
    }
   

}