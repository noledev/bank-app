import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Configuration } from '../configuration';
export declare class ValuesApi {
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
    valuesDelete(id: number, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     */
    valuesGet(extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     *
     *
     * @param id
     */
    valuesGet_1(id: number, extraHttpRequestParams?: any): Observable<string>;
    /**
     *
     *
     * @param value
     */
    valuesPost(value: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     * @param id
     * @param value
     */
    valuesPut(id: number, value: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     * @param id
     */
    valuesDeleteWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     */
    valuesGetWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param id
     */
    valuesGet_1WithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param value
     */
    valuesPostWithHttpInfo(value: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param id
     * @param value
     */
    valuesPutWithHttpInfo(id: number, value: string, extraHttpRequestParams?: any): Observable<Response>;
}
