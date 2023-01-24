import { ChannelCredentials, createChannel, createClientFactory } from 'nice-grpc';
import { AuthenticationInterceptor, AuthenticationManager } from './interceptor/Authentication';
import {
  ApiClient,
  ApiDefinition,
} from './lib/api';

export type IsAllowedRequest = {
  principal: string
  resourceKind: string
  resourceValue: string
  action: string
}

export class Client {
  public stub: ApiClient;

  constructor(address: string, clientId: string, clientSecret: string) {
    const channel = createChannel(address, ChannelCredentials.createInsecure());
    const authenticationManager = new AuthenticationManager(clientId, clientSecret, channel);

    this.stub = createClientFactory()
      .use(AuthenticationInterceptor(authenticationManager))
      .create(ApiDefinition, channel);
  }

  public async isAllowed({
    principal,
    resourceKind,
    resourceValue,
    action,
  }: IsAllowedRequest): Promise<boolean> {
    try {
      const response = await this.stub.check({
        checks: [
          {
            principal,
            resourceKind,
            resourceValue,
            action,
          },
        ],
      });

      return response.checks[0].isAllowed;
    } catch (error) {
      return false;
    }
  }
}
