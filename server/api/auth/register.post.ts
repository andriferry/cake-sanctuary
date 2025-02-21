import { eq } from 'drizzle-orm'
import { users } from '~/server/database/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = await readValidatedBody(event, body =>
    userSchema.safeParse(body))

  if (!result.success) {
    throw createError({
      statusCode: 400,
      message: JSON.stringify(result.error),
    })
  }
  else {
    const hashedPassword = await hashPassword(body.password)

    // Check Existing User
    const getUser = await dbConnect
      .select()
      .from(users)
      .where(eq(users.email, body.email))
      .get()

    if (getUser) {
      throw createError({
        statusCode: 404,
        message: 'User is existing !',
      })
    }
    else {
      await dbConnect
        .insert(users)
        .values({
          name: body.name,
          email: body.email,
          password: hashedPassword,
        })
        .returning({ insertedId: users.id })
    }
  }

  return setResponseStatus(event, 200)
})
