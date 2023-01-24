import { ClientError, Status } from 'nice-grpc';
import { Client } from '../src';
import { PolicyCreateResponse, PolicyGetResponse, PrincipalCreateResponse, PrincipalGetResponse, ResourceCreateResponse, ResourceGetResponse } from '../src/lib/api';

const client = new Client('localhost:8081', 'fc326f4c-9c2f-11ed-984a-faffc22d4a73', 'qTONIGUCa5jRbza-MyLTVXQP51Sr8-_zVqbg0EoPpSw4DWrX');

// Retrieve or create principal
client.stub.principalGet({
    id: 'user-123',
}).then((response: PrincipalGetResponse) => {
    console.log('Principal retrieved', response.principal?.id);
}).catch((error: ClientError) => {
    if (error.code == Status.NOT_FOUND) {
        client.stub.principalCreate({
            id: 'user-123',
            attributes: [
                {key: 'email', value: 'johndoe@acme.tld'},
            ],
        }).then((response: PrincipalCreateResponse) => {
            console.log('Principal created', response.principal?.id);
        });
    }
});

// Retrieve or create resource
client.stub.resourceGet({
    id: 'post.123',
}).then((response: ResourceGetResponse) => {
    console.log('Resource retrieved', response.resource?.id);
}).catch((error: ClientError) => {
    if (error.code == Status.NOT_FOUND) {
        client.stub.resourceCreate({
            id: 'post.123',
            kind: 'post',
            value: '123',
            attributes: [
                {key: 'owner_email', value: 'johndoe@acme.tld'},
            ],
        }).then((response: ResourceCreateResponse) => {
            console.log('Resource created', response.resource?.id);
        });
    }
});

// Retrieve or create policy
client.stub.policyGet({
    id: 'post-owners',
}).then((response: PolicyGetResponse) => {
    console.log('Policy retrieved', response.policy?.id);
}).catch((error: ClientError) => {
    if (error.code == Status.NOT_FOUND) {
        client.stub.policyCreate({
            id: 'post-owners',
            resources: ['post.*'],
            actions: ['edit', 'delete'],
            attributeRules: [
                'principal.email == resource.owner_email',
            ],
        }).then((response: PolicyCreateResponse) => {
            console.log('Policy created', response.policy?.id);
        });
    }
});

// Check if principal is allowed
client.isAllowed({
    principal: 'user-123',
    resourceKind: 'post',
    resourceValue: '123',
    action: 'edit',
}).then((isAllowed: boolean) => {
    console.log('Is allowed?', isAllowed);
});