export class ViewConfig {
    public static get DEFAULT_LANG(): string { return 'en'; }
    public static get SUPPORTED_LANGUAGES(): any {
        return {
            'en': true,
            'es': true,
        };
    }
}
