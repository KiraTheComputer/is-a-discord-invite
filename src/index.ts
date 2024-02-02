import { checkerOptions } from "./lib/types";
import { RegexCheck } from "./lib/regex";

export { checkerOptions };
export const defaultOptions: checkerOptions = {
    checkDefaultDiscordDomains: true,
    checkOtherDiscordDomains: true,
    checkOtherDomains: false,
};

// Check if a string or URL contains a Discord invite link
export const check = (value: string | URL, options: checkerOptions = defaultOptions): boolean => {
    const formattedOptions = { ...defaultOptions, ...options };

    // Check if the value is a URL Object and convert it to a String
    const formatedValue = value instanceof URL ? value.toString() : value;

    return RegexCheck(formatedValue, formattedOptions);
};