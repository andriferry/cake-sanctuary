import type { PrivateFormContext } from 'vee-validate';
import type { HTMLAttributes } from 'vue';

declare global {
    type UserValidation = PrivateFormContext;

    type htmlAttributes = HTMLAttributes;

    interface ErrorMessage {
        statusCode: number;
        message: string;
    }
}

declare module '#auth-utils' {
    interface User {
        name: string;
        email: string;
        picture: string;
    }

    interface UserSession {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        extended?: any;
        jtw?: {
            accessToken: string;
            refreshToken: string;
        };
        loggedInAt: number;
    }

    interface SecureSessionData {}
}
