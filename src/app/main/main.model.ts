export class Avatar {
    public authorName: string;
    public authorId: string;
    public folderName: string;
    public shortDescription: string;
    public publishDate: Date;
    public imagesUrl: string[];
    public tags: string[];
    public sharePoint: number;

    constructor() {

    }
}

export class WindowOption {
    public name : string;
    public value : boolean;
}