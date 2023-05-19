import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
  confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match')
});