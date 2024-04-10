export interface IApiResponse {
    ok: boolean;
    text: () => Promise<string>;
}