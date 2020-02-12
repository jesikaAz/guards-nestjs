import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class GuardGuard implements CanActivate {
  constructor (private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //console.log('inside guard');
     //return true;
    const authorize = this.reflector.get<string[]>(
      'authorize',
      context.getHandler(),
      );
    console.log('guard / authorize' , authorize);

    const req = context.switchToHttp().getRequest();
    console.log('inside guard / body' , req.body);

    // verify authorisation
    const isAuth = authorize.includes(req.body.status);
    if (!isAuth) {
      return false;
    }
    else {
      return true;
    }
  }
}
