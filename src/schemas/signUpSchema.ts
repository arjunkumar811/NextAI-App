import { z} from "zod"

export const usernameValidation = z
  .string()
  .regex(
    /^[a-zA-Z0-9_]{3,16}$/,
    "Username must be 3-16 characters long and can only contain letters, numbers, and underscores."
  );



  export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email"}),
    password: z.string().regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character."
      ),
  })
