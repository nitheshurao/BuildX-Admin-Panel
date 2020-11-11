

// 
import React, {
    useState,
    useEffect,
    useCallback
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
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
// const handleClick =()=>{
//     // component={RouterLink}
//     // to="/register"
//     ("/register");
// }
function Registerotp({ className, onSubmitSuccess, ...rest }) {
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
                    //   /*var category = {
                    //     name: values.name,
                    //     description: values.description

                    //   }
                    //   var category_items = [category]
                    //   console.log("category_item", category_items)
                    //   var category_items_data = category_items*/
                    //  //// confi



                    var config = {
                        method: 'post',
                        url: 'http://15.207.7.54:8080/users/validate-otp',
                        data: {
                            mobile_number: values.phone,
                            otp: values.otp,
                            is_portal_user: false

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
                    console.log(resp.data.data.isMatch)
                    if (resp.data.data.isMatch == true) {
                        history.push('/register');
                        setStatus({ success: true });
                        setSubmitting(false);
                        

                        enqueueSnackbar('otp validation', {
                            variant: 'success'


                        });


                    } else {
                        setStatus({ success: false });
                        setSubmitting(true);
                        enqueueSnackbar('otp not validation', {
                            variant: ' '
                        });
                        // history.push('/registerotp');
                        window.location.reload(false);
                    }
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
                        <Box mt={2}>
                            <TextField
                                error={Boolean(touched.otp && errors.otp)}
                                fullWidth
                                helperText={touched.otp && errors.otp}
                                label="Enter OPT"
                                name="otp"
                                required
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.otp}
                                variant="outlined"
                            />
                        </Box>



                        {/*  */}

                        <Box
                            alignItems="center"
                            display="flex"
                            mt={2}
                            ml={-1}
                        >
                            <Button
                                color="secondary"
                                fullWidt
                               
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

Registerotp.default = {
    onSubmitSuccess: () => { }
};

export default Registerotp;
