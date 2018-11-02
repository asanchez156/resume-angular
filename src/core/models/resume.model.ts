import { PersonalInfoModel } from './personal-info.model';
import { ResumeLangModel } from './resume-lang.model';

export class ResumeModel {
    private _resume: number;
    private _personalInfo: PersonalInfoModel;
    private _es: ResumeLangModel;
    private _en: ResumeLangModel;

    constructor(resume: number, personalInfo: PersonalInfoModel, es: ResumeLangModel, en: ResumeLangModel) {
        this._resume = resume;
        this._personalInfo = personalInfo;
        this._es = es;
        this._en = en;
    }

    /**
     * Getter resume
     * @return {number}
     */
    public get resume(): number {
        return this._resume;
    }

    /**
     * Getter personalInfo
     * @return {PersonalInfoModel}
     */
    public get personalInfo(): PersonalInfoModel {
        return this._personalInfo;
    }

    /**
     * Getter es
     * @return {ResumeLangModel}
     */
    public get es(): ResumeLangModel {
        return this._es;
    }

    /**
     * Getter en
     * @return {ResumeLangModel}
     */
    public get en(): ResumeLangModel {
        return this._en;
    }

    /**
     * Setter resume
     * @param {number} value
     */
    public set resume(value: number) {
        this._resume = value;
    }

    /**
     * Setter personalInfo
     * @param {PersonalInfoModel} value
     */
    public set personalInfo(value: PersonalInfoModel) {
        this._personalInfo = value;
    }

    /**
     * Setter es
     * @param {ResumeLangModel} value
     */
    public set es(value: ResumeLangModel) {
        this._es = value;
    }

    /**
     * Setter en
     * @param {ResumeLangModel} value
     */
    public set en(value: ResumeLangModel) {
        this._en = value;
    }

}
