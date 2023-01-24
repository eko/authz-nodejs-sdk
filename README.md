# Authz NodeJS SDK

This is the Authz development kit for NodeJS.

## Installation

You can install the SDK in your project by adding the following dependency:

```bash
$ npm install @eko/authz-sdk
```

## Usage

You have to instanciate a new Authz Client in your code by doing:

```js
import { Client } from '@eko/authz-sdk';

const client = new Client('localhost:8081', '<client_id>', '<client_secret>');
```

Once the client is instanciate, you have access to all the gRPC methods.

In order to create a new Principal, you can use

```js
const response = await client.stub.principalCreate({
    id: 'user-123',
    attributes: [
        {key: 'email', value: 'johndoe@acme.tld'},
    ],
});

console.log('Principal created', response.principal?.id);
```

To declare a new resource:

```js
const response = await client.stub.resourceCreate({
    id: 'post.123',
    kind: 'post',
    value: '123',
    attributes: [
        {key: 'owner_email', value: 'johndoe@acme.tld'},
    ],
});

console.log('Resource created', response.resource?.id);
```

You can also declare a new policy this way:

```js
const response = client.stub.policyCreate({
    id: 'post-owners',
    resources: ['post.*'],
    actions: ['edit', 'delete'],
    attributeRules: [
        'principal.email == resource.owner_email',
    ],
});

console.log('Policy created', response.policy?.id);
```

Then, you can perform a check with:

```js
const isAllowed = await client.isAllowed({
    principal: 'user-123',
    resourceKind: 'post',
    resourceValue: '123',
    action: 'edit',
});
```

Please note that you have access to all the gRPC methods [declared here](https://github.com/eko/authz/blob/master/backend/api/proto/api.proto) in the proto file.

## Configuration

This SDK connects over gRPC to the backend service. Here are the available configuration options:

| Property | Description |
| -------- | ----------- |
| Address | Authz backend to connect to |
| ClientID | Your service account client id used to authenticate |
| ClientSecret | Your service account client secret key used to authenticate |
