import Joi from 'joi';

const signUpSchema = Joi.object({

    name: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().required(),

});

const signInSchema = Joi.object({

    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().required(),

});


export { signUpSchema, signInSchema }