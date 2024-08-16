import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseWsExceptionFilter, WsException } from '@nestjs/websockets';

@Catch()
export class AllWsExceptionFilter extends BaseWsExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const client = host.switchToWs().getClient();
    const error =
      exception instanceof WsException ? exception.getError() : 'An unexpected error occurred';
    const errorMessage = typeof error === 'string' ? error : JSON.stringify(error);
    client.emit('exception', { message: errorMessage });
  }
}
