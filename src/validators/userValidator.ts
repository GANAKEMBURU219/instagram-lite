import * as v from 'valibot';

const FirstnameSchema = v.pipe(
    v.string('firstname is string and it is required'),
    v.trim(),v.nonEmpty('Please enter your firstname.'),
    v.minLength(3,'Your firstname must be atleast 3 letters'),
    v.maxLength(20, 'Your firstname must be less than 20 letters.')
);
const LastnameSchema = v.pipe(
    v.string('lastname is string and it is required'),
    v.trim(),v.nonEmpty('Please enter your lastname.'),
    v.minLength(3,'Your lastname must be atleast 3 letters'),
    v.maxLength(20, 'Your lastname must be less than 20 letters.')
);
const PhonenumberSchema = v.pipe(
    v.string('phonenumber is string and it is required'),
    v.trim(),v.nonEmpty('Please enter your phonenumber.'),
    v.regex(/^(\+91[\s-]?)?[6-9]\d{9}$/, 'Invalid Indian phone number'),
);
const EmailSchema = v.pipe(
    v.string('email is string and it is required'),
    v.trim(),v.nonEmpty('Please enter your email.'),
    v.email('Invalid email.'),
    v.maxLength(30, 'Your email is too long.')
);
const PasswordSchema = v.pipe(
    v.string('password is string and it is required'),
    v.trim(),v.nonEmpty('Please enter your password.'),
    v.minLength(8, 'Your password must contain minimum 8 characters.'),
    v.maxLength(30, 'Your password must contain maximum 30 characters.'),
    v.regex(/[a-z]/, 'Your password must contain a lowercase letter.'),
    v.regex(/[A-Z]/, 'Your password must contain a uppercase letter.'),
    v.regex(/[\W_]/, 'Password must contain at least one special character'),
    v.regex(/[0-9]/, 'Your password must contain a number.')
);

const gender = ['male', 'female','other'] as const;
const GenderSchema = v.picklist(gender,'Gender should be like male or female or other');



export const signupSchema = v.object({
    firstname:FirstnameSchema,
    lastname:LastnameSchema,
    phoneNumber:PhonenumberSchema,
    email:EmailSchema,
    password:PasswordSchema,
    gender:GenderSchema
})

export const signinSchema = v.object({
    email : EmailSchema,
    password : PasswordSchema
})              
     