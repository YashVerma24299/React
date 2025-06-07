import './App.css'
import Form from './Form'
import CommentForm from './CommentForm';
import CommentForm2 from './CommentForm2';

//  For validation in form we prefer -> formik
// https://formik.org/docs/tutorial#validation

function App() {
  return (
    <>
      <div className="App">
        <CommentForm2/>
      </div>
    </>
  )
}

export default App
