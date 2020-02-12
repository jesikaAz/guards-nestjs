import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class GuardGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //console.log('inside guard');
     //return true;
    const req = context.switchToHttp().getRequest();
    console.log('inside guard / body' , req.body);
    if (req.body.status !== 'admin') {
      return false;
    }
    else {
      return true;
    }
  }
}
