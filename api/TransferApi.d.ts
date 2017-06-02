import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class TransferApi {
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
    transferDelete(id: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     *
     *
     */
    transferGet(extraHttpRequestParams?: any): Observable<models.ApiResponseIEnumerableITransfer>;
    /**
     *
     *
     * @param id
     */
    transferGet_1(id: string, extraHttpRequestParams?: any): Observable<models.ApiResponseITransfer>;
    /**
     *
     *
     * @param value
     */
    transferPost(value: models.ApiRequestITransfer, extraHttpRequestParams?: any): Observable<models.ApiResponseITransfer>;
    /**
     *
     *
     * @param id
     * @param value
     */
    transferPut(id: string, value: models.ApiRequestITransfer, extraHttpRequestParams?: any): Observable<models.ApiResponseITransfer>;
    /**
     *
     *
     * @param id
     */
    transferDeleteWithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     */
    transferGetWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param id
     */
    transferGet_1WithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param value
     */
    transferPostWithHttpInfo(value: models.ApiRequestITransfer, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param id
     * @param value
     */
    transferPutWithHttpInfo(id: string, value: models.ApiRequestITransfer, extraHttpRequestParams?: any): Observable<Response>;
}
