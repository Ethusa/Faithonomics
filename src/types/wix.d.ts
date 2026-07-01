declare module "astro" {
  export interface APIContext {
    request: Request;
    params: Record<string, string | undefined>;
  }

  export type APIRoute = (context: APIContext) => Response | Promise<Response>;
}

declare module "@wix/data" {
  export interface WixDataItem {
    _id?: string;
    _owner?: string;
    _createdDate?: Date;
    _updatedDate?: Date;
    [key: string]: unknown;
  }

  export interface WixDataResult<T extends WixDataItem = WixDataItem> {
    items: T[];
    totalCount?: number;
    length: number;
  }

  export interface WixDataQuery<T extends WixDataItem = WixDataItem> {
    eq(field: string, value: unknown): WixDataQuery<T>;
    ne(field: string, value: unknown): WixDataQuery<T>;
    hasSome(field: string, values: readonly unknown[]): WixDataQuery<T>;
    ascending(...fields: string[]): WixDataQuery<T>;
    descending(...fields: string[]): WixDataQuery<T>;
    limit(value: number): WixDataQuery<T>;
    skip(value: number): WixDataQuery<T>;
    include(...fields: string[]): WixDataQuery<T>;
    find(options?: Record<string, unknown>): Promise<WixDataResult<T>>;
  }

  export const items: {
    get<T extends WixDataItem = WixDataItem>(collectionId: string, itemId: string): Promise<T | null>;
    query<T extends WixDataItem = WixDataItem>(collectionId: string): WixDataQuery<T>;
    insert<T extends WixDataItem = WixDataItem>(collectionId: string, item: Partial<T>): Promise<T>;
    update<T extends WixDataItem = WixDataItem>(collectionId: string, item: T): Promise<T>;
    save<T extends WixDataItem = WixDataItem>(collectionId: string, item: Partial<T>): Promise<T>;
    remove<T extends WixDataItem = WixDataItem>(collectionId: string, itemId: string): Promise<T | null>;
  };
}

declare module "@wix/essentials" {
  export const auth: {
    elevate<T extends (...args: never[]) => unknown>(fn: T): T;
  };

  export const httpClient: {
    fetchWithAuth(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
  };
}

declare module "@wix/ecom" {
  export const orders: {
    onOrderApproved(handler: (event: unknown) => Promise<void> | void): unknown;
  };
}

declare module "@wix/secrets" {
  export const secrets: {
    getSecretValue(name: string): Promise<{ value?: string }>;
  };
}
