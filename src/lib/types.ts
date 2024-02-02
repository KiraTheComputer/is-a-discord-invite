export interface onlineCheckerOptions {
    timeout?: number;
    token?: string;
    customUserAgent?: string;
    ignoreGuildsIDs?: string[];
}

export interface checkerOptions {
    checkDefaultDiscordDomains?: boolean;
    checkOtherDiscordDomains?: boolean;
    checkOtherDomains?: boolean;
    onlineOptions?: onlineCheckerOptions;
    ignoreCodes?: string[];
}