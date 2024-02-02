import { checkerOptions } from "./types";

const defaultOptions: checkerOptions = {
    checkDefaultDiscordDomains: true,
    checkOtherDiscordDomains: true,
    checkOtherDomains: false
};

export const DefaultDiscordDomainsRegex = /discord(?:app\.com\/invite|\.(?:(?:com|co)\/invite|gg))\/[a-zA-Z0-9]{2,100}/gi;
export const OtherDiscordDomainsRegex = /(?:watchanimeattheoffice|discordsays)\.com\/invite\/[a-zA-Z0-9]{2,100}/gi;
export const OtherDomainsRegex = /(?:disboard\.org\/(?:(?:en\/)?|pl\/)server\/join|discordhome\.com\/join\/|discord\.me\/server\/join\/)\/[a-zA-Z0-9]{2,100}/gi
export const CombinedRegex = new RegExp(`(${DefaultDiscordDomainsRegex.source})|(${OtherDiscordDomainsRegex.source})|(${OtherDomainsRegex.source})`, "gi");

// Check if a string contains a Discord invite link
export const RegexCheck = (value: string, options: checkerOptions = defaultOptions): boolean => {
    const formattedOptions = { ...defaultOptions, ...options };

    const urls = value.match(CombinedRegex);
    let parsedURLs: string[] = [];

    if (urls) {
        for (const url of urls) {
            const code = url.split("/").pop();
            if (code) {
                if (!formattedOptions.ignoreCodes?.includes(code)) {
                    if (formattedOptions.checkDefaultDiscordDomains) {
                        if (url.match(DefaultDiscordDomainsRegex)) {
                            parsedURLs.push(url);
                        }
                    }

                    if (formattedOptions.checkOtherDiscordDomains) {
                        if (url.match(OtherDiscordDomainsRegex)) {
                            parsedURLs.push(url);
                        }
                    }

                    if (formattedOptions.checkOtherDomains) {
                        if (url.match(OtherDomainsRegex)) {
                            parsedURLs.push(url);
                        }
                    }
                }
            }
        }
    }

    return parsedURLs.length > 0 ? true : false;
};