import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Switch,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import wait from 'src/utils/wait';
import { registerUser } from 'src/actions/userActions';
// <<<<<<< HEAD
//import axiosDev from 'src/utils/dist/axios.dev';
// =======
//const dispatch = useDispatch();
// >>>>>>> 36b9f4862fa64f7833f1ae5c03f93e6265ffce38

const UserOptions = [
  {
    id: 'Application',
    name: 'Application User'
  },
  {
    id: 'Portal',
    name: 'Portal User'
  }
];
const useStyles = makeStyles(() => ({
  root: {}
}));

function CustomerCreateForm({
  className,
  customer,
  onSubmitSuccess,
  ...rest
}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  //delete 
 
  return (
    <Formik
      initialValues={{
        
      }}
      validationSchema={Yup.object().shape({
        address1: Yup.string().max(255),
        address2: Yup.string().max(255),
        country: Yup.string().max(255),
        discountedPrices: Yup.bool(),
        email: Yup.string().email('Must be a valid email').max(255),
        fullName: Yup.string().max(255).required('Name is required'),
        phone: Yup.string().max(15).required('Email is required'),
        state: Yup.string().max(255),
        verified: Yup.bool()
      })}
      onSubmit={async (values, {
        resetForm,
        setErrors,
        setStatus,
        setSubmitting,
        
      }) => {
        try {
          console.log("inside createUser ")

          axios.post('http://15.207.7.54:8080/users/initiate-registration ', {
            data: {
                  name: values.fullName,
                  mobile_number:values.phone,
                  is_admin: true,
                  is_portal_user: true,
                  primary_address: {
                    address: values.address1,
                    pincode: values.pincode,
                    state: values.state,
    
                  },
                  email: values.email,
                 
                },
          })
          .then(function (response) {
            console.log(response);
          })

          // Make API request
          // var config = {
          //   method: 'post',
          //   url: 'http://15.207.7.54:8080/users/initiate-registration',
          //   data: {
          //     name: values.fullName,
          //     mobile_number:values.phone,
          //     is_admin: true,
          //     is_portal_user: true,
          //     primary_address: {
          //       address: values.address1,
          //       pincode: values.pincode,
          //       state: values.state,

          //     },
          //     email: values.email,
             
          //   },
          //   headers: {
          //     'Content-Type': 'application/json',

          //   },

          // };
          // console.log('------------------------config--------------------')
          // console.log(config)
          // const resp = await axios(config);
          // console.log('-----------------resp------------------')
          // console.log(resp)
          // setStatus({ success: true });
          // setSubmitting(false);
          // enqueueSnackbar('User Created', {
          //   variant: 'success'
          // });
          
        } catch (error) {
          console.log('----------------------resp==error---------------------')
          console.log(error)
          return error
        }
// <<<<<<< HEAD
       //     await dispatch(registerUser(values.fullName, values.phone,false,false,values.address1,values.address2,values.state,values.email));
      //      onSubmitSuccess();
// =======
// console.log('....try...')
//             await dispatch(registerUser(values.fullName, values.phone,false,false,values.address1,values.address2,values.state,values.email));
//            onSubmitSuccess();
//            axios.push( 'http://15.207.7.54:8080/users/create-user').then(res => {
//              console.log
//              ('...res');
//              console.log(res.data);
//            });
// // >>>>>>> 36b9f4862fa64f7833f1ae5c03f93e6265ffce38
//           } catch (error) {
//             const message = (error.response && error.response.data.message) || 'Something went wrong';
  
//             setStatus({ success: false });
//             setErrors({ submit: message });
//             setSubmitting(false);
//           }

//           await wait(500);
//           resetForm();
//           setStatus({ success: true });
//           setSubmitting(false);
//           enqueueSnackbar('User Added', {
//             variant: 'success',
//             action: <Button>See all</Button>
//           });
//         } catch (error) {
//           setStatus({ success: false });
//           setErrors({ submit: error.message });
//           setSubmitting(false);
//         }
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
        >

          <Card>
            <CardContent>
            

              <Grid
                container
                spacing={3}
                
              >    <Grid
              item
              xs={12}
              lg={8}
            >  <TextField
              className={classes.categoryField}
              label="User Type:"
              name="UserOptions"
            //  onChange={handleCategoryChange}
              select
              SelectProps={{ native: true }}
           //   value={filters.category || 'all'}
              variant="outlined"
            >
              {UserOptions.map((UserOptions) => (
                <option
                  key={UserOptions.id}
                  value={UserOptions.id}
                  onChange={handleChange}
                  value={values.name}
                >
              
                  {UserOptions.name}
                 
                </option>
              ))}
            </TextField></Grid> 
                <Grid
                  item
                  md={6}
                  xs={12}
                >
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
                </Grid>
               
                <Grid
                  item
                  md={6}
                  xs={12}
                >   
                  <TextField
                    error={Boolean(touched.fullName && errors.fullName)}
                    fullWidth
                    helperText={touched.fullName && errors.fullName}
                    label="Fullname"
                    name="fullName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.fullName}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
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
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
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
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
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
              /></Grid>
               
                 <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.address && errors.address)}
                    fullWidth
                    helperText={touched.address && errors.address}
                    label="Address"
                    name="address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                    variant="outlined"
                  />
                </Grid>
              
            
                <Grid item />
             
              </Grid>
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Add User
                </Button>
              </Box>
            </CardContent>
</Card>
        </form>
      )}
    </Formik>
  );
}

CustomerCreateForm.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired
};

export default CustomerCreateForm;
