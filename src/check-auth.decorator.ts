import { SetMetadata } from '@nestjs/common';

//export const CheckAuth = (...args: string[]) => ReflectMetadata('authorize', args);
export const CheckAuth = (...args: string[]) => {
    return SetMetadata('authorize', args);
};
