export const isEmail = (value) => /.+@.+\..+/.test(value);
export const isStrongPassword = (value) => (value ?? '').length >= 8;
