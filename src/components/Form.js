import { Formik, useFormik } from 'formik';
import Validations from './Validations';

function Form() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: "",
            passwordConfirm: "",
        },
        onSubmit: values => {
            console.log(values);
        },

        validationSchema: Validations,
    });

    return (
        <div className="App">

            <h1>Sign Up (YUPJS)</h1>


            <form onSubmit={handleSubmit}>
                {/* id ler silinse sorun olmaz*/}

                <label className="block">Email</label>&nbsp;
                <input
                    onChange={handleChange}
                    id="email"
                    name="email"
                    value={values.email}
                    type="email"
                    onBlur={handleBlur}
                />
                {errors.email && touched.email && (<div style={{ color: "red" }}>{errors.email}</div>)}

                <br /><br />

                <label className="block">Password</label>&nbsp;
                <input
                    onChange={handleChange}
                    name="password"
                    value={values.password}
                    type="password"
                    onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                    <div style={{ color: "red" }}>{errors.password}</div>
                )}

                <br /><br />

                <label className="block">Password Confirm</label>&nbsp;
                <input
                    onChange={handleChange}
                    name="passwordConfirm"
                    value={values.passwordConfirm}
                    type="password"
                    onBlur={handleBlur}
                />

                {errors.passwordConfirm && touched.passwordConfirm && (
                    <div style={{ color: "red" }}>{errors.passwordConfirm}</div>
                )}


                <br /><br />
                <button type="submit">Submit</button>

                <br /><br />

                {JSON.stringify(values)}

            </form>



        </div>
        /* E??ER ??NPUT KULLANMAK ??STERSEK F??ELDLARI KALDIRIP ??NPUT 
        YERLE??T??R??P ????LER??NE ONCHANGE METODU VE HANDLECHANGE EKLEY??P 
      F??ELD G??B?? KULLANAB??L??RZ*/



        /* YUPJS KULLANILDI */


    );
}

export default Form;
