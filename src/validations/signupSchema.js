import { object, string, ref } from "yup";

export const signupSchema = object().shape({
    email: string()
        .required('El email es necesario')
        .email('Email no válido'),
    password: string()
        .required('Inserte contraseña')
        .min(6, 'la contraseña debe contener al menos 6 caracteres'),
    checkPassword: string()
        .oneOf([ref('password'), null], 'Las contraseñas no coinciden')
        .required(),
})