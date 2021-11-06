import * as yup from 'yup';

const Validations = yup.object().shape({
  email: yup.string().email("Şunu Düzgün Gir Lan!!").required("Bu Alan Doldurulmak Zorundadır!!!"),
  password: yup.string().min(5, "Parolanız en az 5 karakterden oluşmalıdır").required("Şifre oluşturmak zorundasınız"),
  passwordConfirm: yup.string().oneOf([yup.ref("password")], "Parolalar uyuşmuyor").required("Zorunlu alan")

  });

export default Validations;