//  Ye sbb website se liyy hai logic smjoo iskaaaaa
//  https://formik.org/docs/tutorial#validation
import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    }
 
    if (!values.remarks) {
        errors.remarks = 'Required';
    } 
    return errors;
 };

export default function CommentForm(){
    const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: ''
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    return(
        <>
            <div className="CommentForm">
                <h2>Give a Comment!</h2>
                <form onSubmit={formik.handleSubmit}>
                    <input type="text" name="username" placeholder="username" onChange={formik.handleChange} value={formik.values.username}/>
                    {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                    <br /><br />

                    <textarea name="remarks" placeholder="add few remarks" onChange={formik.handleChange} value={formik.values.remarks}></textarea>
                    {formik.errors.remarks ? <div>{formik.errors.remarks}</div> : null}
                    <br /><br />

                    <input name="rating" type="number" min="1" max="5" placeholder="rating" onChange={formik.handleChange} value={formik.values.rating}/>

                    <br /><br />

                    <button type="submit">Add coment</button>
                </form>
            </div>
        </>
    )
}