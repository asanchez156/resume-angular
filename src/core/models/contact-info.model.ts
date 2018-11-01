import { SocialNetworkModel } from './social-network.model';
import { EmailModel } from "./email.model";
import { WebsiteModel } from './website.model';

export class ContactInfoModel {
  private _contactInfo: number;
  private _email: EmailModel;
  private _socialNetworks: SocialNetworkModel[];
  private _website: WebsiteModel;

	constructor(contactInfo: number, email: EmailModel, socialNetworks: SocialNetworkModel[], website: WebsiteModel) {
		this._contactInfo = contactInfo;
		this._email = email;
		this._socialNetworks = socialNetworks;
		this._website = website;
  }

    /**
     * Getter contactInfo
     * @return {number}
     */
	public get contactInfo(): number {
		return this._contactInfo;
	}

    /**
     * Getter email
     * @return {EmailModel}
     */
	public get email(): EmailModel {
		return this._email;
	}

    /**
     * Getter socialNetworks
     * @return {SocialNetworkModel[]}
     */
	public get socialNetworks(): SocialNetworkModel[] {
		return this._socialNetworks;
	}

    /**
     * Getter website
     * @return {WebsiteModel}
     */
	public get website(): WebsiteModel {
		return this._website;
	}

    /**
     * Setter contactInfo
     * @param {number} value
     */
	public set contactInfo(value: number) {
		this._contactInfo = value;
	}

    /**
     * Setter email
     * @param {EmailModel} value
     */
	public set email(value: EmailModel) {
		this._email = value;
	}

    /**
     * Setter socialNetworks
     * @param {SocialNetworkModel[]} value
     */
	public set socialNetworks(value: SocialNetworkModel[]) {
		this._socialNetworks = value;
	}

    /**
     * Setter website
     * @param {WebsiteModel} value
     */
	public set website(value: WebsiteModel) {
		this._website = value;
	}
  
}