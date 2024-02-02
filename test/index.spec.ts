import { defaultOptions, check } from '../src';

describe('defaultOptions', () => {
    it('should match the default options', () => {
        expect(defaultOptions).toEqual({
            checkDefaultDiscordDomains: true,
            checkOtherDiscordDomains: true,
            checkOtherDomains: false
        });
    });
});

describe('check', () => {
    it('should return false for a non-discord link', () => {
        const result = check('https://discordia.com');

        expect(result).toBe(false);
    });

    it('should return true for a discord link invite with a code', () => {
        const result = check('https://discord.com/invite/dae');

        expect(result).toBe(true);
    });

    it('should return false for a discord link invite without a code', () => {
        const result = check('https://discord.com/invite');

        expect(result).toBe(false);
    });

    it('should return true for a discord link with a other discord domain', () => {
        const result = check('https://watchanimeattheoffice.com/invite/dae');

        expect(result).toBe(true);
    });

    it('should return false for a non-discord link with default options', () => {
        const result = check('https://disboard.org/en/server/join/dae');

        expect(result).toBe(false);
    });

    it('should return true for a non-discord link with CheckOtherDomains option', () => {
        const result = check('https://disboard.org/en/server/join/dae', { checkOtherDomains: true });

        expect(result).toBe(true);
    });
});