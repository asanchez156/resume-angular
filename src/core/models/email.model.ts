export class EmailModel {
    private _email: number;
    private _img: string;
    private _address: string;

    constructor(email: number, img: string, address: string) {
        this._email = email;
        this._img = img;
        this._address = address;
    }

    /**
     * Getter email
     * @return {number}
     */
    public get email(): number {
        return this._email;
    }

    /**
     * Getter img
     * @return {string}
     */
    public get img(): string {
        return this._img;
    }

    /**
     * Getter address
     * @return {string}
     */
    public get address(): string {
        return this._address;
    }

    /**
     * Setter email
     * @param {number} value
     */
    public set email(value: number) {
        this._email = value;
    }

    /**
     * Setter img
     * @param {string} value
     */
    public set img(value: string) {
        this._img = value;
    }

    /**
     * Setter address
     * @param {string} value
     */
    public set address(value: string) {
        this._address = value;
    }

}
