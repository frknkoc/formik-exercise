import { Formik, useFormik } from 'formik';

function Useformik() {
    const { handleSubmit, handleChange, values} = useFormik({
        initialValues: {
            firstName: 'Furkan',
            lastName: 'Koç',
            email: 'furkan.koc.488@gmail.com',
            gender: "male",
            hobies: [],
            country: "Türkiye"
        },
        onSubmit: values => {
            console.log(values);
        },
      });

  return (
    <div className="App">

      <h1>Sign Up (Useformik)</h1>
      

<form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" onChange={handleChange} value={values.firstName} />
          <br /><br />
{/* id ler silinse sorun olmaz*/}
          <label htmlFor="lastName">Last Name</label>&nbsp;
          <input id="lastName" name="lastName" onChange={handleChange} value={values.lastName} />
          <br /><br />

          <label htmlFor="email">Email</label>&nbsp;
          <input
            onChange={handleChange}
            id="email"
            name="email"
            value={values.email}
            type="email"
          />
          <br /><br />

          <span>Male</span>&nbsp;
          <input
            onChange={handleChange}
            name="gender"
            value="male"
            type="radio"
            checked={values.gender === "male"}
          />&nbsp;&nbsp;&nbsp;

          <span>Female</span>&nbsp;
          <input
            onChange={handleChange}
            name="gender"
            value="female"
            type="radio"
            checked={values.gender === "female"}

          />

          <br /><br />
<div>Footbal : &nbsp;
          <input type="checkbox" 
          name="hobies" 
          onChange={handleChange} 
          value="Football" />
</div>

<div>Basketbal : &nbsp;
          <input type="checkbox" 
          name="hobies" 
          onChange={handleChange} 
          value="Basketbal" />
</div>

<div>Volleybal : &nbsp;
          <input type="checkbox" 
          name="hobies" 
          onChange={handleChange} 
          value="Volleybal" />
</div>
          <br /><br />

<select 
name="country"
value={values.country}
onChange={handleChange} 
>
<option value="Türkiye">Türkiye</option>
<option value="İngiltere">İngiltere</option>
<option value="Arabistan">Arabistan</option>
<option value="Abd">Abd</option>
</select>


          <br /><br />
          <button type="submit">Submit</button>

          <br /><br />

          {JSON.stringify(values)}

        </form>

        

    </div>
    /* EĞER İNPUT KULLANMAK İSTERSEK FİELDLARI KALDIRIP İNPUT 
    YERLEŞTİRİP İÇLERİNE ONCHANGE METODU VE HANDLECHANGE EKLEYİP 
  FİELD GİBİ KULLANABİLİRZ*/
  );
}

export default Useformik;
