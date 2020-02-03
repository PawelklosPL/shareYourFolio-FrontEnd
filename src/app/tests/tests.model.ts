export class Tests {
    tests: Test[];
}
export class Test {
    constructor(name: string, url: string)
    {
        this.name = name;
        this.url = url;
    }
    name: string;
    url: string;
    status: boolean;
    type: string;
    postBody?: any;

}