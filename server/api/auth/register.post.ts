import { users } from '@/database/schema';

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
        const hashedPassword = await hashPassword(body.password);

        const user = await dbConnect
            .insert(users)
            .values({
                name: body.name,
                email: body.email,
                password: hashedPassword,
            })
            .returning();

        console.log(user);
    }
});
