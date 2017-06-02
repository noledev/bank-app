import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class AccountApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     *
     * @param model
     */
    accountAddExternalLogin(model: models.AddExternalLoginBindingModel, extraHttpRequestParams?: any): Observable<any>;
    /**
     *
     *
     * @param model
     */
    accountChangePassword(model: models.ChangePasswordBindingModel, extraHttpRequestParams?: any): Observable<any>;
    /**
     *
     *
     * @param provider
     * @param error
     */
    accountGetExternalLogin(provider: string, error?: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     *
     *
     * @param returnUrl
     * @param generateState
     */
    accountGetExternalLogins(returnUrl: string, generateState?: boolean, extraHttpRequestParams?: any): Observable<Array<models.ExternalLoginViewModel>>;
    /**
     *
     *
     * @param returnUrl
     * @param generateState
     */
    accountGetManageInfo(returnUrl: string, generateState?: boolean, extraHttpRequestParams?: any): Observable<models.ManageInfoViewModel>;
    /**
     *
     *
     */
    accountGetUserInfo(extraHttpRequestParams?: any): Observable<models.UserInfoViewModel>;
    /**
     *
     *
     */
    accountLogout(extraHttpRequestParams?: any): Observable<any>;
    /**
     *
     *
     * @param model
     */
    accountRegister(model: models.RegisterBindingModel, extraHttpRequestParams?: any): Observable<any>;
    /**
     *
     *
     * @param model
     */
    accountRegisterExternal(model: models.RegisterExternalBindingModel, extraHttpRequestParams?: any): Observable<any>;
    /**
     *
     *
     * @param model
     */
    accountRemoveLogin(model: models.RemoveLoginBindingModel, extraHttpRequestParams?: any): Observable<any>;
    /**
     *
     *
     * @param model
     */
    accountSetPassword(model: models.SetPasswordBindingModel, extraHttpRequestParams?: any): Observable<any>;
    /**
     *
     *
     * @param model
     */
    accountAddExternalLoginWithHttpInfo(model: models.AddExternalLoginBindingModel, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param model
     */
    accountChangePasswordWithHttpInfo(model: models.ChangePasswordBindingModel, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param provider
     * @param error
     */
    accountGetExternalLoginWithHttpInfo(provider: string, error?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param returnUrl
     * @param generateState
     */
    accountGetExternalLoginsWithHttpInfo(returnUrl: string, generateState?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param returnUrl
     * @param generateState
     */
    accountGetManageInfoWithHttpInfo(returnUrl: string, generateState?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     */
    accountGetUserInfoWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     */
    accountLogoutWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param model
     */
    accountRegisterWithHttpInfo(model: models.RegisterBindingModel, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param model
     */
    accountRegisterExternalWithHttpInfo(model: models.RegisterExternalBindingModel, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param model
     */
    accountRemoveLoginWithHttpInfo(model: models.RemoveLoginBindingModel, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param model
     */
    accountSetPasswordWithHttpInfo(model: models.SetPasswordBindingModel, extraHttpRequestParams?: any): Observable<Response>;
}
