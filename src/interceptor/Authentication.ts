import { CallOptions, Channel, ClientMiddlewareCall, createClient, Metadata } from "nice-grpc";
import { ApiClient, ApiDefinition, AuthenticateResponse } from "../lib/api";

export class AuthenticationManager {
  private clientId: string;
  private clientSecret: string;

  private authClient: ApiClient;

  private authResponse?: AuthenticateResponse;

  constructor(clientId: string, clientSecret: string, channel: Channel) {
      this.clientId = clientId;
      this.clientSecret = clientSecret;

      this.authClient = createClient(ApiDefinition, channel);
  }

  async authenticate() {
      this.authResponse = await this.authClient.authenticate({
        clientId: this.clientId,
        clientSecret: this.clientSecret,
      });
  }

  async retrieveToken() {
    const currentTime = new Date().getTime();
    if (
      !this.authResponse?.token ||
      !this.authResponse?.expiresIn ||
      this.authResponse?.expiresIn * 1000 < currentTime
    ) {
      await this.authenticate();
    }

    return this.authResponse?.token;
  }
}

export const AuthenticationInterceptor = (manager: AuthenticationManager) => {
  return async function* <Request, Response>(
    call: ClientMiddlewareCall<Request, Response>,
    options: CallOptions,
  ) {
  
    const token = await manager.retrieveToken();

    if (!options.metadata) {
      options.metadata = Metadata();
    }

    options.metadata.set('authorization', `Bearer ${token}`);

    return yield* call.next(call.request, options);
  }  
};
