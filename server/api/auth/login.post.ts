import { users } from '@/database/schema';
import { eq, and } from 'drizzle-orm';

const invalidCredentialsError = createError({
    statusCode: 401,
    // This message is intentionally vague to prevent user enumeration attacks.
    message: 'Invalid credentials',
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const result = await readValidatedBody(event, (body) =>
        userSchema.safeParse(body)
    );

    if (!result.success) {
        throw createError({
            statusCode: 400,
            message: JSON.stringify(result.error),
        });
    } else {
        const user = await dbConnect
            .select()
            .from(users)
            .where(
                and(
                    eq(users.email, body.email),
                    eq(users.password, body.password)
                )
            )
            .get();

        if (user) {
            await setUserSession(event, {
                user: {
                    ...user,
                },
                loggedInAt: Date.now(),
            });
        } else {
            throw invalidCredentialsError;
        }
    }

    return setResponseStatus(event, 200);
});
