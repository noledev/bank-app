import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class AccountsApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     *
     */
    accountsGet(extraHttpRequestParams?: any): Observable<models.ApiResponseIEnumerableIAccount>;
    /**
     *
     *
     * @param id
     */
    accountsGet_1(id: string, extraHttpRequestParams?: any): Observable<models.ApiResponseIAccount>;
    /**
     *
     *
     */
    accountsGetWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param id
     */
    accountsGet_1WithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response>;
}
