
import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import clsx from 'clsx';
import * as Yup from 'yup';
import axios from 'axios'
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack'
import {
  Box,
  Grid,
  Button,
  Checkbox,
  FormHelperText,
  TextField,
  Typography,
  Link,
  makeStyles
} from '@material-ui/core';
import { register } from 'src/actions/accountActions';

const useStyles = makeStyles(() => ({
  root: {}
}));

function RegisterForm({ className, onSubmitSuccess, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef()
  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar()
  ///




  ///
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        // policy: false
      }}
      validationSchema={Yup.object().shape({

        // policy: Yup.boolean().oneOf([true], 'This field must be checked')
      })}
      //

      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {


          console.log("inside  otp validation ")
          /*var category = {
            name: values.name,
            description: values.description
  
          }
          var category_items = [category]
          console.log("category_item", category_items)
          var category_items_data = category_items*/
          var config = {
            method: 'post',
            url: 'http://15.207.7.54:8080/users/complete-registration',
            data: {
              name: values.name,
              mobile_number: values.phone,
              update_obj:{
                primary_address: {

                  address: values.address1,
                  pincode: values.pincode, state: values.state,
                },
              },
              
              email: values.email,
              password:values.password,



            },
            headers: {
              'Content-Type': 'application/json',

            },

          };
          console.log('------------------------config--------------------')
          console.log(config)
          const resp = await axios(config);
          console.log('-----------------resp------------------')
          console.log(resp)
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('Registration', {
            variant: 'success'
          });
          window.location.reload(false);

        } catch (error) {
          console.log('----------------------resp==error---------------------')
          console.log(error)
          return error
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
          <form
            className={clsx(classes.root, className)}
            onSubmit={handleSubmit}
            {...rest}
          ><Box mt={2}>
              <TextField
                error={Boolean(touched.name && errors.name)}
                fullWidth
                helperText={touched.name && errors.name}
                label="Name"
                name="name"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                variant="outlined"
              />
            </Box>
            <Box mt={2}> <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label="Email address"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              //required
              value={values.email}
              variant="outlined"
            /></Box>
            <Box mt={2}>
              <TextField
                error={Boolean(touched.phone && errors.phone)}
                fullWidth
                helperText={touched.phone && errors.phone}
                label="Phone number"
                name="phone"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                variant="outlined"
              />
            </Box>
            <Box

              mt={2}
            >
              <TextField
                error={Boolean(touched.state && errors.state)}
                fullWidth
                helperText={touched.state && errors.state}
                label="State/Region"
                name="state"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.state}
                variant="outlined"
              />
            </Box>
            <Box

              mt={2}
            >
              <TextField
                error={Boolean(touched.address1 && errors.address1)}
                fullWidth
                helperText={touched.address1 && errors.address1}
                label="Street Address"
                name="address1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                variant="outlined"
              />
            </Box>
            <Box mt={2}>
              <TextField
                error={Boolean(touched.pincode && errors.pincode)}
                fullWidth
                helperText={touched.pincode && errors.pincode}
                label="Pin code"
                name="pincode"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pincode}
                variant="outlined"
              /></Box>
     <Box mt={2}>
              <TextField
                error={Boolean(touched.password&& errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="password"
                name="password"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                variant="outlined"
              /></Box>




            {/*  */}
            <Box
              alignItems="center"
              display="flex"
              mt={2}
              ml={-1}
            >
              <Button
                color="secondary"
                fullWidth

                // component={RouterLink}
                // to="/register"
                size="large"
                disabled={isSubmitting}
                variant="contained"
                type="submit"
                disabled={isSubmitting}

              >
                Continue
        </Button>
            </Box>
            {/*  */}


          </form>
        )}
    </Formik>
  );
}

// RegisterForm.propTypes = {
//   className: PropTypes.string,
//   onSubmitSuccess: PropTypes.func
// };

RegisterForm.default = {
  onSubmitSuccess: () => { }
};

export default RegisterForm;
