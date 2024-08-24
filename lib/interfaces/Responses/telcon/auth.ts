interface ResponseData {
    session_id: string;
    result: Result;
}

interface Result {
    title: string;
    form: FormElement[];
}

interface FormElement {
    type: 'elements.input';
    name: string;
    hint: string;
    contentType: 'password';
    minLength: number;
    maxLength: number;
}

export interface LoginResponse {
    status: 'successful';
    data: ResponseData;
}

export interface OTPResponse {
    status: 'successful';
    data: {
        code: string;
    };
}

export interface TokenExchangeResponse {
    id: string;
}