export enum statusCodes {
    Success = 200,
    NoContent = 204,
    BadRequest = 400,
    UnAuthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    RequestTimeout = 408,
    InternalServerError = 500
}

export interface ResponseData {
    data: any,
    statusCode: number,
    message: string
}