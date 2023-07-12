import React, { useState } from 'react';
import './EnterpriseForm.scss';
import { CircularProgress, TextField } from '@mui/material';
import StepButtons from '../global/StepButtons';
import { EnterpriseInfoType } from '../../utils/Types';
import { useGlobalState } from '../../utils/GlobalContext';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { createEnterprise } from '../../api/Enterprise/EnterpriseApi';
import { useParams } from 'react-router-dom';

const validationSchema = Yup.object({
  id: Yup
  .number()
  .required('El campo Nit es requerido')
  .typeError('Solo puedes ingresar números')
  .integer('Solo puedes ingresar números positivos'),
  name: Yup.string().required('El campo Nombre es requerido'),
  email: Yup.string().email('Ingresa un email válido').required('El campo Email es requerido')
});

function EnterpriseForm() {
  let { clientId } = useParams();
  const { dispatch } = useGlobalState();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues: EnterpriseInfoType = {
    id: '',
    name: '',
    email: ''
  };

  const handleSubmit = async (values: EnterpriseInfoType) => {
    setIsLoading(true);
    try {
      const enterprise = await createEnterprise({
        id: values.id,
        email: values.email,
        enterpriseName: values.name,
        client: clientId || ''
      })
      dispatch({type: 'SET_ENTERPRISE', payload: enterprise});
      dispatch({type: 'INCREMENT_STEP_ID'});
    } catch (error) {
      dispatch({type: 'SET_GLOBAL_ALERT', payload: {
        isOpen: true,
        message: 'Error en la carga, vuelve a intentarlo'
      }})
    }
    setIsLoading(false);
  };

  if(isLoading) {
    return (
      <div className="loader-container">
        <CircularProgress />
      </div>
    )
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({errors, touched}) => (
        <Form className='enterprise-form'>
          <section className="enterprise-form-inputs">
            <Field
              as={TextField}
              id="outlined-basic"
              name="id"
              label="Nit"
              variant="outlined"
              type="number"
              className='text-field'
              error={touched.id && Boolean(errors.id?.length)}
              helperText={touched.id && errors.id}
            />
            <Field
              as={TextField}
              id="outlined-basic"
              name="name"
              label="Nombre"
              variant="outlined"
              type="text"
              className='text-field'
              error={touched.name && Boolean(errors.name?.length)}
              helperText={touched.name && errors.name}
            />
            <Field
              as={TextField}
              id="outlined-basic"
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              className='text-field'
              error={touched.email && Boolean(errors.email?.length)}
              helperText={touched.email && errors.email}
            />
          </section>
          <StepButtons />
        </Form>
      )}
    </Formik>
  );
}

export default EnterpriseForm;
