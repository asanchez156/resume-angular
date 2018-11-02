
export class WebsiteModel {
    private _website: number;
    private _img: string;
    private _url: string;

    constructor(website: number, img: string, url: string) {
        this._website = website;
        this._img = img;
        this._url = url;
    }

    /**
     * Getter website
     * @return {number}
     */
    public get website(): number {
        return this._website;
    }

    /**
     * Getter img
     * @return {string}
     */
    public get img(): string {
        return this._img;
    }

    /**
     * Getter url
     * @return {string}
     */
    public get url(): string {
        return this._url;
    }

    /**
     * Setter website
     * @param {number} value
     */
    public set website(value: number) {
        this._website = value;
    }

    /**
     * Setter img
     * @param {string} value
     */
    public set img(value: string) {
        this._img = value;
    }

    /**
     * Setter url
     * @param {string} value
     */
    public set url(value: string) {
        this._url = value;
    }

}
