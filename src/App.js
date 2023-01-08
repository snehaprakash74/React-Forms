
import './App.css';
import StandardForm from './Standard-Form/StandardForm';
import FormikForm from './Formik-Form/FormikForm';


function App() {
  return (
    <div className="App">
      <div className='container'>
         <div className='row mt-5'>
           <div className='col-md-6 border py-3'>
             <StandardForm />
            </div>
            <div className='col-md-6 border py-3'>
             <FormikForm />
             
            </div>
          </div>
      </div>
      
    </div>
  );
}

export default App;
