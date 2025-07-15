export const required = val => val && val.length;
export const requiredNum = val => !!val;
export const maxLength = len => val => !val || val.length <= len;
export const minLength = len => val => val && val.length >= len;
export const maxVal = len => val => !val || val <= len;
export const minVal = len => val => val && val >= len;
export const isNumber = val => !isNaN(Number(val));
export const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(val);
