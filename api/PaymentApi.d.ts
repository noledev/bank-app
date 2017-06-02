import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class PaymentApi {
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
    paymentDelete(id: number, extraHttpRequestParams?: any): Observable<any>;
    /**
     *
     *
     */
    paymentGet(extraHttpRequestParams?: any): Observable<models.ApiResponseIEnumerableIPayment>;
    /**
     *
     *
     * @param id
     */
    paymentGet_1(id: string, extraHttpRequestParams?: any): Observable<models.ApiResponseIPayment>;
    /**
     *
     *
     * @param value
     */
    paymentPost(value: models.ApiRequestIPayment, extraHttpRequestParams?: any): Observable<models.ApiResponseIPayment>;
    /**
     *
     *
     * @param id
     * @param value
     */
    paymentPut(id: number, value: models.ApiRequestIPayment, extraHttpRequestParams?: any): Observable<models.ApiResponseIPayment>;
    /**
     *
     *
     * @param id
     */
    paymentDeleteWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     */
    paymentGetWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param id
     */
    paymentGet_1WithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param value
     */
    paymentPostWithHttpInfo(value: models.ApiRequestIPayment, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param id
     * @param value
     */
    paymentPutWithHttpInfo(id: number, value: models.ApiRequestIPayment, extraHttpRequestParams?: any): Observable<Response>;
}
