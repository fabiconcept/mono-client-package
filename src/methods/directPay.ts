export class DirectPayMethods {
    constructor(private request: (endpoint: string, method?: string, body?: any) => Promise<any>) { }

}