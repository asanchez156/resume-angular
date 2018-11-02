import { ContactInfoModel } from './contact-info.model';

export class PersonalInfoModel {
    private _personalInfo: number;
    private _name: string;
    private _surname: string;
    private _image: string; // path to image
    private _contactInfo: ContactInfoModel;


    constructor(personalInfo: number, name: string, surname: string, image: string, contactInfo: ContactInfoModel) {
        this._personalInfo = personalInfo;
        this._name = name;
        this._surname = surname;
        this._image = image;
        this._contactInfo = contactInfo;
    }

    /**
     * Getter personalInfo
     * @return {number}
     */
    public get personalInfo(): number {
        return this._personalInfo;
    }

    /**
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Getter surname
     * @return {string}
     */
    public get surname(): string {
        return this._surname;
    }

    /**
     * Getter image
     * @return {string}
     */
    public get image(): string {
        return this._image;
    }

    /**
     * Getter contactInfo
     * @return {ContactInfoModel}
     */
    public get contactInfo(): ContactInfoModel {
        return this._contactInfo;
    }

    /**
     * Setter personalInfo
     * @param {number} value
     */
    public set personalInfo(value: number) {
        this._personalInfo = value;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value;
    }

    /**
     * Setter surname
     * @param {string} value
     */
    public set surname(value: string) {
        this._surname = value;
    }

    /**
     * Setter image
     * @param {string} value
     */
    public set image(value: string) {
        this._image = value;
    }

    /**
     * Setter contactInfo
     * @param {ContactInfoModel} value
     */
    public set contactInfo(value: ContactInfoModel) {
        this._contactInfo = value;
    }


    get fullName(): string {
        return this._name + ' ' + this._surname;
    }
}
