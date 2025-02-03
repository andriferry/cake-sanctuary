import { z } from 'zod';
import { users } from '@/database/schema';
import { drizzle } from 'drizzle-orm/better-sqlite3';

interface DBUser {
    id: number;
    email: string;
    password: string;
}

const invalidCredentialsError = createError({
    statusCode: 401,
    // This message is intentionally vague to prevent user enumeration attacks.
    message: 'Invalid credentials',
});

const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password Must be a 8 or more' }),
});

export default defineEventHandler(async (event) => {
    const result = await readValidatedBody(event, (body) =>
        userSchema.safeParse(body)
    );

    if (!result.success)
        throw createError({
            statusCode: 400,
            message: JSON.stringify(result.error),
        });

    return result.data;
});

// export default defineEventHandler( async ( event ) => {
//   // const db = drizzleConnection( users )

//     console.log(drizzleConnection)
//   console.log(process.env.NUXT_DB_FILE_NAME)

//   // const db = drizzle( process.env.DATABASE_URL );

//   // console.log(db.$count(users))
//     // const result = await drizzleConnection(users)

//     // console.log(result);
// });
