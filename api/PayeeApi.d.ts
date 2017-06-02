import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class PayeeApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     *
     * @param id
     */
    payeeDelete(id: number, extraHttpRequestParams?: any): Observable<any>;
    /**
     *
     *
     */
    payeeGet(extraHttpRequestParams?: any): Observable<models.ApiResponseIEnumerableIPayee>;
    /**
     *
     *
     * @param id
     */
    payeeGet_1(id: string, extraHttpRequestParams?: any): Observable<models.ApiResponseIPayee>;
    /**
     *
     *
     * @param value
     */
    payeePost(value: models.ApiRequestIPayee, extraHttpRequestParams?: any): Observable<models.ApiResponseIPayee>;
    /**
     *
     *
     * @param id
     * @param value
     */
    payeePut(id: number, value: models.ApiRequestIPayee, extraHttpRequestParams?: any): Observable<models.ApiResponseIPayee>;
    /**
     *
     *
     * @param id
     */
    payeeDeleteWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     */
    payeeGetWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param id
     */
    payeeGet_1WithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param value
     */
    payeePostWithHttpInfo(value: models.ApiRequestIPayee, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param id
     * @param value
     */
    payeePutWithHttpInfo(id: number, value: models.ApiRequestIPayee, extraHttpRequestParams?: any): Observable<Response>;
}
