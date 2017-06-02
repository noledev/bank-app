import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class DepositApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     *
     */
    depositGet(extraHttpRequestParams?: any): Observable<models.ApiResponseIEnumerableIDeposit>;
    /**
     *
     *
     * @param id
     */
    depositGet_1(id: string, extraHttpRequestParams?: any): Observable<models.ApiResponseIDeposit>;
    /**
     *
     *
     * @param value
     */
    depositPost(value: models.ApiRequestIDeposit, extraHttpRequestParams?: any): Observable<models.ApiResponseIDeposit>;
    /**
     *
     *
     */
    depositGetWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param id
     */
    depositGet_1WithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param value
     */
    depositPostWithHttpInfo(value: models.ApiRequestIDeposit, extraHttpRequestParams?: any): Observable<Response>;
}
