/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "authz";

export interface Attribute {
  key: string;
  value: string;
}

export interface AuthenticateRequest {
  clientId: string;
  clientSecret: string;
}

export interface AuthenticateResponse {
  token: string;
  type: string;
  expiresIn: number;
}

export interface Check {
  principal: string;
  resourceKind: string;
  resourceValue: string;
  action: string;
}

export interface CheckAnswer {
  principal: string;
  resourceKind: string;
  resourceValue: string;
  action: string;
  isAllowed: boolean;
}

export interface CheckRequest {
  checks: Check[];
}

export interface CheckResponse {
  checks: CheckAnswer[];
}

export interface Policy {
  id: string;
  actions: string[];
  resources: string[];
  attributeRules: string[];
}

export interface PolicyCreateRequest {
  id: string;
  actions: string[];
  resources: string[];
  attributeRules: string[];
}

export interface PolicyCreateResponse {
  policy: Policy | undefined;
}

export interface PolicyGetRequest {
  id: string;
}

export interface PolicyGetResponse {
  policy: Policy | undefined;
}

export interface PolicyDeleteRequest {
  id: string;
}

export interface PolicyDeleteResponse {
  success: boolean;
}

export interface PolicyUpdateRequest {
  id: string;
  actions: string[];
  resources: string[];
  attributeRules: string[];
}

export interface PolicyUpdateResponse {
  policy: Policy | undefined;
}

export interface Principal {
  id: string;
  roles: string[];
  attributes: Attribute[];
}

export interface PrincipalCreateRequest {
  id: string;
  roles: string[];
  attributes: Attribute[];
}

export interface PrincipalCreateResponse {
  principal: Principal | undefined;
}

export interface PrincipalGetRequest {
  id: string;
}

export interface PrincipalGetResponse {
  principal: Principal | undefined;
}

export interface PrincipalDeleteRequest {
  id: string;
}

export interface PrincipalDeleteResponse {
  success: boolean;
}

export interface PrincipalUpdateRequest {
  id: string;
  roles: string[];
  attributes: Attribute[];
}

export interface PrincipalUpdateResponse {
  principal: Principal | undefined;
}

export interface Resource {
  id: string;
  kind: string;
  value: string;
  attributes: Attribute[];
}

export interface ResourceCreateRequest {
  id: string;
  kind: string;
  value: string;
  attributes: Attribute[];
}

export interface ResourceCreateResponse {
  resource: Resource | undefined;
}

export interface ResourceGetRequest {
  id: string;
}

export interface ResourceGetResponse {
  resource: Resource | undefined;
}

export interface ResourceDeleteRequest {
  id: string;
}

export interface ResourceDeleteResponse {
  success: boolean;
}

export interface ResourceUpdateRequest {
  id: string;
  kind: string;
  value: string;
  attributes: Attribute[];
}

export interface ResourceUpdateResponse {
  resource: Resource | undefined;
}

export interface Role {
  id: string;
  policies: string[];
}

export interface RoleCreateRequest {
  id: string;
  policies: string[];
}

export interface RoleCreateResponse {
  role: Role | undefined;
}

export interface RoleGetRequest {
  id: string;
}

export interface RoleGetResponse {
  role: Role | undefined;
}

export interface RoleDeleteRequest {
  id: string;
}

export interface RoleDeleteResponse {
  success: boolean;
}

export interface RoleUpdateRequest {
  id: string;
  policies: string[];
}

export interface RoleUpdateResponse {
  role: Role | undefined;
}

function createBaseAttribute(): Attribute {
  return { key: "", value: "" };
}

export const Attribute = {
  encode(message: Attribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Attribute {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<Attribute>): Attribute {
    return Attribute.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Attribute>): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseAuthenticateRequest(): AuthenticateRequest {
  return { clientId: "", clientSecret: "" };
}

export const AuthenticateRequest = {
  encode(message: AuthenticateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientSecret !== "") {
      writer.uint32(18).string(message.clientSecret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientSecret = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthenticateRequest {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      clientSecret: isSet(object.clientSecret) ? String(object.clientSecret) : "",
    };
  },

  toJSON(message: AuthenticateRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.clientSecret !== undefined && (obj.clientSecret = message.clientSecret);
    return obj;
  },

  create(base?: DeepPartial<AuthenticateRequest>): AuthenticateRequest {
    return AuthenticateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AuthenticateRequest>): AuthenticateRequest {
    const message = createBaseAuthenticateRequest();
    message.clientId = object.clientId ?? "";
    message.clientSecret = object.clientSecret ?? "";
    return message;
  },
};

function createBaseAuthenticateResponse(): AuthenticateResponse {
  return { token: "", type: "", expiresIn: 0 };
}

export const AuthenticateResponse = {
  encode(message: AuthenticateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.expiresIn !== 0) {
      writer.uint32(24).int64(message.expiresIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.expiresIn = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthenticateResponse {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      type: isSet(object.type) ? String(object.type) : "",
      expiresIn: isSet(object.expiresIn) ? Number(object.expiresIn) : 0,
    };
  },

  toJSON(message: AuthenticateResponse): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.type !== undefined && (obj.type = message.type);
    message.expiresIn !== undefined && (obj.expiresIn = Math.round(message.expiresIn));
    return obj;
  },

  create(base?: DeepPartial<AuthenticateResponse>): AuthenticateResponse {
    return AuthenticateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AuthenticateResponse>): AuthenticateResponse {
    const message = createBaseAuthenticateResponse();
    message.token = object.token ?? "";
    message.type = object.type ?? "";
    message.expiresIn = object.expiresIn ?? 0;
    return message;
  },
};

function createBaseCheck(): Check {
  return { principal: "", resourceKind: "", resourceValue: "", action: "" };
}

export const Check = {
  encode(message: Check, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.principal !== "") {
      writer.uint32(10).string(message.principal);
    }
    if (message.resourceKind !== "") {
      writer.uint32(18).string(message.resourceKind);
    }
    if (message.resourceValue !== "") {
      writer.uint32(26).string(message.resourceValue);
    }
    if (message.action !== "") {
      writer.uint32(34).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Check {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.principal = reader.string();
          break;
        case 2:
          message.resourceKind = reader.string();
          break;
        case 3:
          message.resourceValue = reader.string();
          break;
        case 4:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Check {
    return {
      principal: isSet(object.principal) ? String(object.principal) : "",
      resourceKind: isSet(object.resourceKind) ? String(object.resourceKind) : "",
      resourceValue: isSet(object.resourceValue) ? String(object.resourceValue) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: Check): unknown {
    const obj: any = {};
    message.principal !== undefined && (obj.principal = message.principal);
    message.resourceKind !== undefined && (obj.resourceKind = message.resourceKind);
    message.resourceValue !== undefined && (obj.resourceValue = message.resourceValue);
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  create(base?: DeepPartial<Check>): Check {
    return Check.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Check>): Check {
    const message = createBaseCheck();
    message.principal = object.principal ?? "";
    message.resourceKind = object.resourceKind ?? "";
    message.resourceValue = object.resourceValue ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBaseCheckAnswer(): CheckAnswer {
  return { principal: "", resourceKind: "", resourceValue: "", action: "", isAllowed: false };
}

export const CheckAnswer = {
  encode(message: CheckAnswer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.principal !== "") {
      writer.uint32(10).string(message.principal);
    }
    if (message.resourceKind !== "") {
      writer.uint32(18).string(message.resourceKind);
    }
    if (message.resourceValue !== "") {
      writer.uint32(26).string(message.resourceValue);
    }
    if (message.action !== "") {
      writer.uint32(34).string(message.action);
    }
    if (message.isAllowed === true) {
      writer.uint32(40).bool(message.isAllowed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckAnswer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckAnswer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.principal = reader.string();
          break;
        case 2:
          message.resourceKind = reader.string();
          break;
        case 3:
          message.resourceValue = reader.string();
          break;
        case 4:
          message.action = reader.string();
          break;
        case 5:
          message.isAllowed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckAnswer {
    return {
      principal: isSet(object.principal) ? String(object.principal) : "",
      resourceKind: isSet(object.resourceKind) ? String(object.resourceKind) : "",
      resourceValue: isSet(object.resourceValue) ? String(object.resourceValue) : "",
      action: isSet(object.action) ? String(object.action) : "",
      isAllowed: isSet(object.isAllowed) ? Boolean(object.isAllowed) : false,
    };
  },

  toJSON(message: CheckAnswer): unknown {
    const obj: any = {};
    message.principal !== undefined && (obj.principal = message.principal);
    message.resourceKind !== undefined && (obj.resourceKind = message.resourceKind);
    message.resourceValue !== undefined && (obj.resourceValue = message.resourceValue);
    message.action !== undefined && (obj.action = message.action);
    message.isAllowed !== undefined && (obj.isAllowed = message.isAllowed);
    return obj;
  },

  create(base?: DeepPartial<CheckAnswer>): CheckAnswer {
    return CheckAnswer.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CheckAnswer>): CheckAnswer {
    const message = createBaseCheckAnswer();
    message.principal = object.principal ?? "";
    message.resourceKind = object.resourceKind ?? "";
    message.resourceValue = object.resourceValue ?? "";
    message.action = object.action ?? "";
    message.isAllowed = object.isAllowed ?? false;
    return message;
  },
};

function createBaseCheckRequest(): CheckRequest {
  return { checks: [] };
}

export const CheckRequest = {
  encode(message: CheckRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.checks) {
      Check.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checks.push(Check.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckRequest {
    return { checks: Array.isArray(object?.checks) ? object.checks.map((e: any) => Check.fromJSON(e)) : [] };
  },

  toJSON(message: CheckRequest): unknown {
    const obj: any = {};
    if (message.checks) {
      obj.checks = message.checks.map((e) => e ? Check.toJSON(e) : undefined);
    } else {
      obj.checks = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CheckRequest>): CheckRequest {
    return CheckRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CheckRequest>): CheckRequest {
    const message = createBaseCheckRequest();
    message.checks = object.checks?.map((e) => Check.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCheckResponse(): CheckResponse {
  return { checks: [] };
}

export const CheckResponse = {
  encode(message: CheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.checks) {
      CheckAnswer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checks.push(CheckAnswer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckResponse {
    return { checks: Array.isArray(object?.checks) ? object.checks.map((e: any) => CheckAnswer.fromJSON(e)) : [] };
  },

  toJSON(message: CheckResponse): unknown {
    const obj: any = {};
    if (message.checks) {
      obj.checks = message.checks.map((e) => e ? CheckAnswer.toJSON(e) : undefined);
    } else {
      obj.checks = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CheckResponse>): CheckResponse {
    return CheckResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CheckResponse>): CheckResponse {
    const message = createBaseCheckResponse();
    message.checks = object.checks?.map((e) => CheckAnswer.fromPartial(e)) || [];
    return message;
  },
};

function createBasePolicy(): Policy {
  return { id: "", actions: [], resources: [], attributeRules: [] };
}

export const Policy = {
  encode(message: Policy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.actions) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.resources) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.attributeRules) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Policy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.actions.push(reader.string());
          break;
        case 3:
          message.resources.push(reader.string());
          break;
        case 4:
          message.attributeRules.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Policy {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => String(e)) : [],
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => String(e)) : [],
      attributeRules: Array.isArray(object?.attributeRules) ? object.attributeRules.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Policy): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e);
    } else {
      obj.actions = [];
    }
    if (message.resources) {
      obj.resources = message.resources.map((e) => e);
    } else {
      obj.resources = [];
    }
    if (message.attributeRules) {
      obj.attributeRules = message.attributeRules.map((e) => e);
    } else {
      obj.attributeRules = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Policy>): Policy {
    return Policy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Policy>): Policy {
    const message = createBasePolicy();
    message.id = object.id ?? "";
    message.actions = object.actions?.map((e) => e) || [];
    message.resources = object.resources?.map((e) => e) || [];
    message.attributeRules = object.attributeRules?.map((e) => e) || [];
    return message;
  },
};

function createBasePolicyCreateRequest(): PolicyCreateRequest {
  return { id: "", actions: [], resources: [], attributeRules: [] };
}

export const PolicyCreateRequest = {
  encode(message: PolicyCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.actions) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.resources) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.attributeRules) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyCreateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.actions.push(reader.string());
          break;
        case 3:
          message.resources.push(reader.string());
          break;
        case 4:
          message.attributeRules.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PolicyCreateRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => String(e)) : [],
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => String(e)) : [],
      attributeRules: Array.isArray(object?.attributeRules) ? object.attributeRules.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: PolicyCreateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e);
    } else {
      obj.actions = [];
    }
    if (message.resources) {
      obj.resources = message.resources.map((e) => e);
    } else {
      obj.resources = [];
    }
    if (message.attributeRules) {
      obj.attributeRules = message.attributeRules.map((e) => e);
    } else {
      obj.attributeRules = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PolicyCreateRequest>): PolicyCreateRequest {
    return PolicyCreateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicyCreateRequest>): PolicyCreateRequest {
    const message = createBasePolicyCreateRequest();
    message.id = object.id ?? "";
    message.actions = object.actions?.map((e) => e) || [];
    message.resources = object.resources?.map((e) => e) || [];
    message.attributeRules = object.attributeRules?.map((e) => e) || [];
    return message;
  },
};

function createBasePolicyCreateResponse(): PolicyCreateResponse {
  return { policy: undefined };
}

export const PolicyCreateResponse = {
  encode(message: PolicyCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PolicyCreateResponse {
    return { policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined };
  },

  toJSON(message: PolicyCreateResponse): unknown {
    const obj: any = {};
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PolicyCreateResponse>): PolicyCreateResponse {
    return PolicyCreateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicyCreateResponse>): PolicyCreateResponse {
    const message = createBasePolicyCreateResponse();
    message.policy = (object.policy !== undefined && object.policy !== null)
      ? Policy.fromPartial(object.policy)
      : undefined;
    return message;
  },
};

function createBasePolicyGetRequest(): PolicyGetRequest {
  return { id: "" };
}

export const PolicyGetRequest = {
  encode(message: PolicyGetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PolicyGetRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PolicyGetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<PolicyGetRequest>): PolicyGetRequest {
    return PolicyGetRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicyGetRequest>): PolicyGetRequest {
    const message = createBasePolicyGetRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePolicyGetResponse(): PolicyGetResponse {
  return { policy: undefined };
}

export const PolicyGetResponse = {
  encode(message: PolicyGetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PolicyGetResponse {
    return { policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined };
  },

  toJSON(message: PolicyGetResponse): unknown {
    const obj: any = {};
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PolicyGetResponse>): PolicyGetResponse {
    return PolicyGetResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicyGetResponse>): PolicyGetResponse {
    const message = createBasePolicyGetResponse();
    message.policy = (object.policy !== undefined && object.policy !== null)
      ? Policy.fromPartial(object.policy)
      : undefined;
    return message;
  },
};

function createBasePolicyDeleteRequest(): PolicyDeleteRequest {
  return { id: "" };
}

export const PolicyDeleteRequest = {
  encode(message: PolicyDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PolicyDeleteRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PolicyDeleteRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<PolicyDeleteRequest>): PolicyDeleteRequest {
    return PolicyDeleteRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicyDeleteRequest>): PolicyDeleteRequest {
    const message = createBasePolicyDeleteRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePolicyDeleteResponse(): PolicyDeleteResponse {
  return { success: false };
}

export const PolicyDeleteResponse = {
  encode(message: PolicyDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyDeleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PolicyDeleteResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: PolicyDeleteResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create(base?: DeepPartial<PolicyDeleteResponse>): PolicyDeleteResponse {
    return PolicyDeleteResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicyDeleteResponse>): PolicyDeleteResponse {
    const message = createBasePolicyDeleteResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBasePolicyUpdateRequest(): PolicyUpdateRequest {
  return { id: "", actions: [], resources: [], attributeRules: [] };
}

export const PolicyUpdateRequest = {
  encode(message: PolicyUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.actions) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.resources) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.attributeRules) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.actions.push(reader.string());
          break;
        case 3:
          message.resources.push(reader.string());
          break;
        case 4:
          message.attributeRules.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PolicyUpdateRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => String(e)) : [],
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => String(e)) : [],
      attributeRules: Array.isArray(object?.attributeRules) ? object.attributeRules.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: PolicyUpdateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e);
    } else {
      obj.actions = [];
    }
    if (message.resources) {
      obj.resources = message.resources.map((e) => e);
    } else {
      obj.resources = [];
    }
    if (message.attributeRules) {
      obj.attributeRules = message.attributeRules.map((e) => e);
    } else {
      obj.attributeRules = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PolicyUpdateRequest>): PolicyUpdateRequest {
    return PolicyUpdateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicyUpdateRequest>): PolicyUpdateRequest {
    const message = createBasePolicyUpdateRequest();
    message.id = object.id ?? "";
    message.actions = object.actions?.map((e) => e) || [];
    message.resources = object.resources?.map((e) => e) || [];
    message.attributeRules = object.attributeRules?.map((e) => e) || [];
    return message;
  },
};

function createBasePolicyUpdateResponse(): PolicyUpdateResponse {
  return { policy: undefined };
}

export const PolicyUpdateResponse = {
  encode(message: PolicyUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PolicyUpdateResponse {
    return { policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined };
  },

  toJSON(message: PolicyUpdateResponse): unknown {
    const obj: any = {};
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PolicyUpdateResponse>): PolicyUpdateResponse {
    return PolicyUpdateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicyUpdateResponse>): PolicyUpdateResponse {
    const message = createBasePolicyUpdateResponse();
    message.policy = (object.policy !== undefined && object.policy !== null)
      ? Policy.fromPartial(object.policy)
      : undefined;
    return message;
  },
};

function createBasePrincipal(): Principal {
  return { id: "", roles: [], attributes: [] };
}

export const Principal = {
  encode(message: Principal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.roles) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Principal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.roles.push(reader.string());
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Principal {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => String(e)) : [],
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: Principal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.roles) {
      obj.roles = message.roles.map((e) => e);
    } else {
      obj.roles = [];
    }
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Principal>): Principal {
    return Principal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Principal>): Principal {
    const message = createBasePrincipal();
    message.id = object.id ?? "";
    message.roles = object.roles?.map((e) => e) || [];
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBasePrincipalCreateRequest(): PrincipalCreateRequest {
  return { id: "", roles: [], attributes: [] };
}

export const PrincipalCreateRequest = {
  encode(message: PrincipalCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.roles) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrincipalCreateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipalCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.roles.push(reader.string());
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrincipalCreateRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => String(e)) : [],
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: PrincipalCreateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.roles) {
      obj.roles = message.roles.map((e) => e);
    } else {
      obj.roles = [];
    }
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PrincipalCreateRequest>): PrincipalCreateRequest {
    return PrincipalCreateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PrincipalCreateRequest>): PrincipalCreateRequest {
    const message = createBasePrincipalCreateRequest();
    message.id = object.id ?? "";
    message.roles = object.roles?.map((e) => e) || [];
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBasePrincipalCreateResponse(): PrincipalCreateResponse {
  return { principal: undefined };
}

export const PrincipalCreateResponse = {
  encode(message: PrincipalCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrincipalCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipalCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.principal = Principal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrincipalCreateResponse {
    return { principal: isSet(object.principal) ? Principal.fromJSON(object.principal) : undefined };
  },

  toJSON(message: PrincipalCreateResponse): unknown {
    const obj: any = {};
    message.principal !== undefined &&
      (obj.principal = message.principal ? Principal.toJSON(message.principal) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PrincipalCreateResponse>): PrincipalCreateResponse {
    return PrincipalCreateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PrincipalCreateResponse>): PrincipalCreateResponse {
    const message = createBasePrincipalCreateResponse();
    message.principal = (object.principal !== undefined && object.principal !== null)
      ? Principal.fromPartial(object.principal)
      : undefined;
    return message;
  },
};

function createBasePrincipalGetRequest(): PrincipalGetRequest {
  return { id: "" };
}

export const PrincipalGetRequest = {
  encode(message: PrincipalGetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrincipalGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipalGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrincipalGetRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PrincipalGetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<PrincipalGetRequest>): PrincipalGetRequest {
    return PrincipalGetRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PrincipalGetRequest>): PrincipalGetRequest {
    const message = createBasePrincipalGetRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePrincipalGetResponse(): PrincipalGetResponse {
  return { principal: undefined };
}

export const PrincipalGetResponse = {
  encode(message: PrincipalGetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrincipalGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipalGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.principal = Principal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrincipalGetResponse {
    return { principal: isSet(object.principal) ? Principal.fromJSON(object.principal) : undefined };
  },

  toJSON(message: PrincipalGetResponse): unknown {
    const obj: any = {};
    message.principal !== undefined &&
      (obj.principal = message.principal ? Principal.toJSON(message.principal) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PrincipalGetResponse>): PrincipalGetResponse {
    return PrincipalGetResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PrincipalGetResponse>): PrincipalGetResponse {
    const message = createBasePrincipalGetResponse();
    message.principal = (object.principal !== undefined && object.principal !== null)
      ? Principal.fromPartial(object.principal)
      : undefined;
    return message;
  },
};

function createBasePrincipalDeleteRequest(): PrincipalDeleteRequest {
  return { id: "" };
}

export const PrincipalDeleteRequest = {
  encode(message: PrincipalDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrincipalDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipalDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrincipalDeleteRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PrincipalDeleteRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<PrincipalDeleteRequest>): PrincipalDeleteRequest {
    return PrincipalDeleteRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PrincipalDeleteRequest>): PrincipalDeleteRequest {
    const message = createBasePrincipalDeleteRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePrincipalDeleteResponse(): PrincipalDeleteResponse {
  return { success: false };
}

export const PrincipalDeleteResponse = {
  encode(message: PrincipalDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrincipalDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipalDeleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrincipalDeleteResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: PrincipalDeleteResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create(base?: DeepPartial<PrincipalDeleteResponse>): PrincipalDeleteResponse {
    return PrincipalDeleteResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PrincipalDeleteResponse>): PrincipalDeleteResponse {
    const message = createBasePrincipalDeleteResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBasePrincipalUpdateRequest(): PrincipalUpdateRequest {
  return { id: "", roles: [], attributes: [] };
}

export const PrincipalUpdateRequest = {
  encode(message: PrincipalUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.roles) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrincipalUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipalUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.roles.push(reader.string());
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrincipalUpdateRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => String(e)) : [],
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: PrincipalUpdateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.roles) {
      obj.roles = message.roles.map((e) => e);
    } else {
      obj.roles = [];
    }
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PrincipalUpdateRequest>): PrincipalUpdateRequest {
    return PrincipalUpdateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PrincipalUpdateRequest>): PrincipalUpdateRequest {
    const message = createBasePrincipalUpdateRequest();
    message.id = object.id ?? "";
    message.roles = object.roles?.map((e) => e) || [];
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBasePrincipalUpdateResponse(): PrincipalUpdateResponse {
  return { principal: undefined };
}

export const PrincipalUpdateResponse = {
  encode(message: PrincipalUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrincipalUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipalUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.principal = Principal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrincipalUpdateResponse {
    return { principal: isSet(object.principal) ? Principal.fromJSON(object.principal) : undefined };
  },

  toJSON(message: PrincipalUpdateResponse): unknown {
    const obj: any = {};
    message.principal !== undefined &&
      (obj.principal = message.principal ? Principal.toJSON(message.principal) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PrincipalUpdateResponse>): PrincipalUpdateResponse {
    return PrincipalUpdateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PrincipalUpdateResponse>): PrincipalUpdateResponse {
    const message = createBasePrincipalUpdateResponse();
    message.principal = (object.principal !== undefined && object.principal !== null)
      ? Principal.fromPartial(object.principal)
      : undefined;
    return message;
  },
};

function createBaseResource(): Resource {
  return { id: "", kind: "", value: "", attributes: [] };
}

export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.kind !== "") {
      writer.uint32(18).string(message.kind);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.kind = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resource {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      kind: isSet(object.kind) ? String(object.kind) : "",
      value: isSet(object.value) ? String(object.value) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.kind !== undefined && (obj.kind = message.kind);
    message.value !== undefined && (obj.value = message.value);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Resource>): Resource {
    return Resource.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = createBaseResource();
    message.id = object.id ?? "";
    message.kind = object.kind ?? "";
    message.value = object.value ?? "";
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResourceCreateRequest(): ResourceCreateRequest {
  return { id: "", kind: "", value: "", attributes: [] };
}

export const ResourceCreateRequest = {
  encode(message: ResourceCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.kind !== "") {
      writer.uint32(18).string(message.kind);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceCreateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.kind = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceCreateRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      kind: isSet(object.kind) ? String(object.kind) : "",
      value: isSet(object.value) ? String(object.value) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: ResourceCreateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.kind !== undefined && (obj.kind = message.kind);
    message.value !== undefined && (obj.value = message.value);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ResourceCreateRequest>): ResourceCreateRequest {
    return ResourceCreateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResourceCreateRequest>): ResourceCreateRequest {
    const message = createBaseResourceCreateRequest();
    message.id = object.id ?? "";
    message.kind = object.kind ?? "";
    message.value = object.value ?? "";
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResourceCreateResponse(): ResourceCreateResponse {
  return { resource: undefined };
}

export const ResourceCreateResponse = {
  encode(message: ResourceCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceCreateResponse {
    return { resource: isSet(object.resource) ? Resource.fromJSON(object.resource) : undefined };
  },

  toJSON(message: ResourceCreateResponse): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ResourceCreateResponse>): ResourceCreateResponse {
    return ResourceCreateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResourceCreateResponse>): ResourceCreateResponse {
    const message = createBaseResourceCreateResponse();
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? Resource.fromPartial(object.resource)
      : undefined;
    return message;
  },
};

function createBaseResourceGetRequest(): ResourceGetRequest {
  return { id: "" };
}

export const ResourceGetRequest = {
  encode(message: ResourceGetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceGetRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ResourceGetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<ResourceGetRequest>): ResourceGetRequest {
    return ResourceGetRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResourceGetRequest>): ResourceGetRequest {
    const message = createBaseResourceGetRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseResourceGetResponse(): ResourceGetResponse {
  return { resource: undefined };
}

export const ResourceGetResponse = {
  encode(message: ResourceGetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceGetResponse {
    return { resource: isSet(object.resource) ? Resource.fromJSON(object.resource) : undefined };
  },

  toJSON(message: ResourceGetResponse): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ResourceGetResponse>): ResourceGetResponse {
    return ResourceGetResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResourceGetResponse>): ResourceGetResponse {
    const message = createBaseResourceGetResponse();
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? Resource.fromPartial(object.resource)
      : undefined;
    return message;
  },
};

function createBaseResourceDeleteRequest(): ResourceDeleteRequest {
  return { id: "" };
}

export const ResourceDeleteRequest = {
  encode(message: ResourceDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceDeleteRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ResourceDeleteRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<ResourceDeleteRequest>): ResourceDeleteRequest {
    return ResourceDeleteRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResourceDeleteRequest>): ResourceDeleteRequest {
    const message = createBaseResourceDeleteRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseResourceDeleteResponse(): ResourceDeleteResponse {
  return { success: false };
}

export const ResourceDeleteResponse = {
  encode(message: ResourceDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceDeleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceDeleteResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: ResourceDeleteResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create(base?: DeepPartial<ResourceDeleteResponse>): ResourceDeleteResponse {
    return ResourceDeleteResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResourceDeleteResponse>): ResourceDeleteResponse {
    const message = createBaseResourceDeleteResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseResourceUpdateRequest(): ResourceUpdateRequest {
  return { id: "", kind: "", value: "", attributes: [] };
}

export const ResourceUpdateRequest = {
  encode(message: ResourceUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.kind !== "") {
      writer.uint32(18).string(message.kind);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.kind = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceUpdateRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      kind: isSet(object.kind) ? String(object.kind) : "",
      value: isSet(object.value) ? String(object.value) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: ResourceUpdateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.kind !== undefined && (obj.kind = message.kind);
    message.value !== undefined && (obj.value = message.value);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ResourceUpdateRequest>): ResourceUpdateRequest {
    return ResourceUpdateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResourceUpdateRequest>): ResourceUpdateRequest {
    const message = createBaseResourceUpdateRequest();
    message.id = object.id ?? "";
    message.kind = object.kind ?? "";
    message.value = object.value ?? "";
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResourceUpdateResponse(): ResourceUpdateResponse {
  return { resource: undefined };
}

export const ResourceUpdateResponse = {
  encode(message: ResourceUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceUpdateResponse {
    return { resource: isSet(object.resource) ? Resource.fromJSON(object.resource) : undefined };
  },

  toJSON(message: ResourceUpdateResponse): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ResourceUpdateResponse>): ResourceUpdateResponse {
    return ResourceUpdateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResourceUpdateResponse>): ResourceUpdateResponse {
    const message = createBaseResourceUpdateResponse();
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? Resource.fromPartial(object.resource)
      : undefined;
    return message;
  },
};

function createBaseRole(): Role {
  return { id: "", policies: [] };
}

export const Role = {
  encode(message: Role, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.policies) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Role {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.policies.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Role {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      policies: Array.isArray(object?.policies) ? object.policies.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Role): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.policies) {
      obj.policies = message.policies.map((e) => e);
    } else {
      obj.policies = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Role>): Role {
    return Role.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Role>): Role {
    const message = createBaseRole();
    message.id = object.id ?? "";
    message.policies = object.policies?.map((e) => e) || [];
    return message;
  },
};

function createBaseRoleCreateRequest(): RoleCreateRequest {
  return { id: "", policies: [] };
}

export const RoleCreateRequest = {
  encode(message: RoleCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.policies) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleCreateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.policies.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoleCreateRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      policies: Array.isArray(object?.policies) ? object.policies.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: RoleCreateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.policies) {
      obj.policies = message.policies.map((e) => e);
    } else {
      obj.policies = [];
    }
    return obj;
  },

  create(base?: DeepPartial<RoleCreateRequest>): RoleCreateRequest {
    return RoleCreateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RoleCreateRequest>): RoleCreateRequest {
    const message = createBaseRoleCreateRequest();
    message.id = object.id ?? "";
    message.policies = object.policies?.map((e) => e) || [];
    return message;
  },
};

function createBaseRoleCreateResponse(): RoleCreateResponse {
  return { role: undefined };
}

export const RoleCreateResponse = {
  encode(message: RoleCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== undefined) {
      Role.encode(message.role, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = Role.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoleCreateResponse {
    return { role: isSet(object.role) ? Role.fromJSON(object.role) : undefined };
  },

  toJSON(message: RoleCreateResponse): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role ? Role.toJSON(message.role) : undefined);
    return obj;
  },

  create(base?: DeepPartial<RoleCreateResponse>): RoleCreateResponse {
    return RoleCreateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RoleCreateResponse>): RoleCreateResponse {
    const message = createBaseRoleCreateResponse();
    message.role = (object.role !== undefined && object.role !== null) ? Role.fromPartial(object.role) : undefined;
    return message;
  },
};

function createBaseRoleGetRequest(): RoleGetRequest {
  return { id: "" };
}

export const RoleGetRequest = {
  encode(message: RoleGetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoleGetRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: RoleGetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<RoleGetRequest>): RoleGetRequest {
    return RoleGetRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RoleGetRequest>): RoleGetRequest {
    const message = createBaseRoleGetRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseRoleGetResponse(): RoleGetResponse {
  return { role: undefined };
}

export const RoleGetResponse = {
  encode(message: RoleGetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== undefined) {
      Role.encode(message.role, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = Role.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoleGetResponse {
    return { role: isSet(object.role) ? Role.fromJSON(object.role) : undefined };
  },

  toJSON(message: RoleGetResponse): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role ? Role.toJSON(message.role) : undefined);
    return obj;
  },

  create(base?: DeepPartial<RoleGetResponse>): RoleGetResponse {
    return RoleGetResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RoleGetResponse>): RoleGetResponse {
    const message = createBaseRoleGetResponse();
    message.role = (object.role !== undefined && object.role !== null) ? Role.fromPartial(object.role) : undefined;
    return message;
  },
};

function createBaseRoleDeleteRequest(): RoleDeleteRequest {
  return { id: "" };
}

export const RoleDeleteRequest = {
  encode(message: RoleDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoleDeleteRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: RoleDeleteRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<RoleDeleteRequest>): RoleDeleteRequest {
    return RoleDeleteRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RoleDeleteRequest>): RoleDeleteRequest {
    const message = createBaseRoleDeleteRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseRoleDeleteResponse(): RoleDeleteResponse {
  return { success: false };
}

export const RoleDeleteResponse = {
  encode(message: RoleDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleDeleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoleDeleteResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: RoleDeleteResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create(base?: DeepPartial<RoleDeleteResponse>): RoleDeleteResponse {
    return RoleDeleteResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RoleDeleteResponse>): RoleDeleteResponse {
    const message = createBaseRoleDeleteResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseRoleUpdateRequest(): RoleUpdateRequest {
  return { id: "", policies: [] };
}

export const RoleUpdateRequest = {
  encode(message: RoleUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.policies) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.policies.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoleUpdateRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      policies: Array.isArray(object?.policies) ? object.policies.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: RoleUpdateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.policies) {
      obj.policies = message.policies.map((e) => e);
    } else {
      obj.policies = [];
    }
    return obj;
  },

  create(base?: DeepPartial<RoleUpdateRequest>): RoleUpdateRequest {
    return RoleUpdateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RoleUpdateRequest>): RoleUpdateRequest {
    const message = createBaseRoleUpdateRequest();
    message.id = object.id ?? "";
    message.policies = object.policies?.map((e) => e) || [];
    return message;
  },
};

function createBaseRoleUpdateResponse(): RoleUpdateResponse {
  return { role: undefined };
}

export const RoleUpdateResponse = {
  encode(message: RoleUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== undefined) {
      Role.encode(message.role, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = Role.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoleUpdateResponse {
    return { role: isSet(object.role) ? Role.fromJSON(object.role) : undefined };
  },

  toJSON(message: RoleUpdateResponse): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role ? Role.toJSON(message.role) : undefined);
    return obj;
  },

  create(base?: DeepPartial<RoleUpdateResponse>): RoleUpdateResponse {
    return RoleUpdateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RoleUpdateResponse>): RoleUpdateResponse {
    const message = createBaseRoleUpdateResponse();
    message.role = (object.role !== undefined && object.role !== null) ? Role.fromPartial(object.role) : undefined;
    return message;
  },
};

export type ApiDefinition = typeof ApiDefinition;
export const ApiDefinition = {
  name: "Api",
  fullName: "authz.Api",
  methods: {
    authenticate: {
      name: "Authenticate",
      requestType: AuthenticateRequest,
      requestStream: false,
      responseType: AuthenticateResponse,
      responseStream: false,
      options: {},
    },
    check: {
      name: "Check",
      requestType: CheckRequest,
      requestStream: false,
      responseType: CheckResponse,
      responseStream: false,
      options: {},
    },
    policyCreate: {
      name: "PolicyCreate",
      requestType: PolicyCreateRequest,
      requestStream: false,
      responseType: PolicyCreateResponse,
      responseStream: false,
      options: {},
    },
    policyGet: {
      name: "PolicyGet",
      requestType: PolicyGetRequest,
      requestStream: false,
      responseType: PolicyGetResponse,
      responseStream: false,
      options: {},
    },
    policyDelete: {
      name: "PolicyDelete",
      requestType: PolicyDeleteRequest,
      requestStream: false,
      responseType: PolicyDeleteResponse,
      responseStream: false,
      options: {},
    },
    policyUpdate: {
      name: "PolicyUpdate",
      requestType: PolicyUpdateRequest,
      requestStream: false,
      responseType: PolicyUpdateResponse,
      responseStream: false,
      options: {},
    },
    principalCreate: {
      name: "PrincipalCreate",
      requestType: PrincipalCreateRequest,
      requestStream: false,
      responseType: PrincipalCreateResponse,
      responseStream: false,
      options: {},
    },
    principalGet: {
      name: "PrincipalGet",
      requestType: PrincipalGetRequest,
      requestStream: false,
      responseType: PrincipalGetResponse,
      responseStream: false,
      options: {},
    },
    principalDelete: {
      name: "PrincipalDelete",
      requestType: PrincipalDeleteRequest,
      requestStream: false,
      responseType: PrincipalDeleteResponse,
      responseStream: false,
      options: {},
    },
    principalUpdate: {
      name: "PrincipalUpdate",
      requestType: PrincipalUpdateRequest,
      requestStream: false,
      responseType: PrincipalUpdateResponse,
      responseStream: false,
      options: {},
    },
    resourceCreate: {
      name: "ResourceCreate",
      requestType: ResourceCreateRequest,
      requestStream: false,
      responseType: ResourceCreateResponse,
      responseStream: false,
      options: {},
    },
    resourceGet: {
      name: "ResourceGet",
      requestType: ResourceGetRequest,
      requestStream: false,
      responseType: ResourceGetResponse,
      responseStream: false,
      options: {},
    },
    resourceDelete: {
      name: "ResourceDelete",
      requestType: ResourceDeleteRequest,
      requestStream: false,
      responseType: ResourceDeleteResponse,
      responseStream: false,
      options: {},
    },
    resourceUpdate: {
      name: "ResourceUpdate",
      requestType: ResourceUpdateRequest,
      requestStream: false,
      responseType: ResourceUpdateResponse,
      responseStream: false,
      options: {},
    },
    roleCreate: {
      name: "RoleCreate",
      requestType: RoleCreateRequest,
      requestStream: false,
      responseType: RoleCreateResponse,
      responseStream: false,
      options: {},
    },
    roleGet: {
      name: "RoleGet",
      requestType: RoleGetRequest,
      requestStream: false,
      responseType: RoleGetResponse,
      responseStream: false,
      options: {},
    },
    roleDelete: {
      name: "RoleDelete",
      requestType: RoleDeleteRequest,
      requestStream: false,
      responseType: RoleDeleteResponse,
      responseStream: false,
      options: {},
    },
    roleUpdate: {
      name: "RoleUpdate",
      requestType: RoleUpdateRequest,
      requestStream: false,
      responseType: RoleUpdateResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ApiServiceImplementation<CallContextExt = {}> {
  authenticate(
    request: AuthenticateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AuthenticateResponse>>;
  check(request: CheckRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CheckResponse>>;
  policyCreate(
    request: PolicyCreateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PolicyCreateResponse>>;
  policyGet(request: PolicyGetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PolicyGetResponse>>;
  policyDelete(
    request: PolicyDeleteRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PolicyDeleteResponse>>;
  policyUpdate(
    request: PolicyUpdateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PolicyUpdateResponse>>;
  principalCreate(
    request: PrincipalCreateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PrincipalCreateResponse>>;
  principalGet(
    request: PrincipalGetRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PrincipalGetResponse>>;
  principalDelete(
    request: PrincipalDeleteRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PrincipalDeleteResponse>>;
  principalUpdate(
    request: PrincipalUpdateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PrincipalUpdateResponse>>;
  resourceCreate(
    request: ResourceCreateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ResourceCreateResponse>>;
  resourceGet(
    request: ResourceGetRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ResourceGetResponse>>;
  resourceDelete(
    request: ResourceDeleteRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ResourceDeleteResponse>>;
  resourceUpdate(
    request: ResourceUpdateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ResourceUpdateResponse>>;
  roleCreate(
    request: RoleCreateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RoleCreateResponse>>;
  roleGet(request: RoleGetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RoleGetResponse>>;
  roleDelete(
    request: RoleDeleteRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RoleDeleteResponse>>;
  roleUpdate(
    request: RoleUpdateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RoleUpdateResponse>>;
}

export interface ApiClient<CallOptionsExt = {}> {
  authenticate(
    request: DeepPartial<AuthenticateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AuthenticateResponse>;
  check(request: DeepPartial<CheckRequest>, options?: CallOptions & CallOptionsExt): Promise<CheckResponse>;
  policyCreate(
    request: DeepPartial<PolicyCreateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PolicyCreateResponse>;
  policyGet(request: DeepPartial<PolicyGetRequest>, options?: CallOptions & CallOptionsExt): Promise<PolicyGetResponse>;
  policyDelete(
    request: DeepPartial<PolicyDeleteRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PolicyDeleteResponse>;
  policyUpdate(
    request: DeepPartial<PolicyUpdateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PolicyUpdateResponse>;
  principalCreate(
    request: DeepPartial<PrincipalCreateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PrincipalCreateResponse>;
  principalGet(
    request: DeepPartial<PrincipalGetRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PrincipalGetResponse>;
  principalDelete(
    request: DeepPartial<PrincipalDeleteRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PrincipalDeleteResponse>;
  principalUpdate(
    request: DeepPartial<PrincipalUpdateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PrincipalUpdateResponse>;
  resourceCreate(
    request: DeepPartial<ResourceCreateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ResourceCreateResponse>;
  resourceGet(
    request: DeepPartial<ResourceGetRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ResourceGetResponse>;
  resourceDelete(
    request: DeepPartial<ResourceDeleteRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ResourceDeleteResponse>;
  resourceUpdate(
    request: DeepPartial<ResourceUpdateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ResourceUpdateResponse>;
  roleCreate(
    request: DeepPartial<RoleCreateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RoleCreateResponse>;
  roleGet(request: DeepPartial<RoleGetRequest>, options?: CallOptions & CallOptionsExt): Promise<RoleGetResponse>;
  roleDelete(
    request: DeepPartial<RoleDeleteRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RoleDeleteResponse>;
  roleUpdate(
    request: DeepPartial<RoleUpdateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RoleUpdateResponse>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
