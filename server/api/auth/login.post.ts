import { eq } from 'drizzle-orm'
import { users } from '~/server/database/pgSchema'

const invalidCredentialsError = createError({
  statusCode: 401,

  // This message is intentionally vague to prevent user enumeration attacks.
  message: 'Invalid credentials',
})

export default defineEventHandler(async (event) => {
  const bodyRequest = await readBody(event)

  const result = await readValidatedBody(event, body => userSchema.safeParse(body))

  if (!result.success) {
    throw createError({
      statusCode: 400,
      message: JSON.stringify(result.error),
    })
  }
  else {
    const user = await dbConnect.select().from(users).where(eq(users.email, bodyRequest.email))

    if (user.length === 0)
      throw invalidCredentialsError

    if (!(await verifyPassword(user[0].password, bodyRequest.password)))
      throw invalidCredentialsError

    await setUserSession(event, {
      user: {
        name: user[0].name,
        email: user[0].email,
        picture: user[0].picture || '',
      },
      loggedInAt: Date.now(),
    })
  }

  return setResponseStatus(event, 200)
})
