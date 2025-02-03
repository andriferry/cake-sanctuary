import type { PrivateFormContext } from 'vee-validate';
import type { HTMLAttributes } from 'vue';

declare global {
    type UserValidation = PrivateFormContext;

    type htmlAttributes = HTMLAttributes;

    interface ErrorMessage {
        statusCode: number;
        message: string;
    }

    interface DBUser {
        id: number;
        email: string;
        password: string;
        picture: string;
    }
}
