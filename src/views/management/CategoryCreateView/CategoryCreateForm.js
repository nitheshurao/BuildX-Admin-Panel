import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';


import { createCategory } from 'src/actions/categoryActions';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import QuillEditor from 'src/components/QuillEditor';
import FilesDropzone from 'src/components/FilesDropzone';

const useStyles = makeStyles(() => ({
  root: {},
  editor: {
    '& .ql-editor': {
      height: 400
    }
  }
}));

function ProductCreateForm({ className, onSubmitSuccess, ...rest }) {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        category: '',
        subcategory: '',
        description: '',
        images: [],
        includesTaxes: false,
        isTaxable: false,
        name: '',
        price: '',
        productCode: '',
        productSku: '',
        salePrice: ''
      }}
      validationSchema={Yup.object().shape({
        category: Yup.string().max(255),
        subcategory: Yup.string().max(255),
        description: Yup.string().max(5000),
        images: Yup.array(),
        includesTaxes: Yup.bool().required(),
        isTaxable: Yup.bool().required(),
        name: Yup.string()
          .max(255)
          .required()
      })}



      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {


          console.log('...try...');
          axios.post('http://15.207.7.54:8080/category/register', values.name, values.description).then((response) => {
            console.log('.....response ....')
          })


          /////setStatus({ success: true });
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('Product Created', {
            variant: 'success'
          });

          // history.push('http://15.207.7.54:8080/category/register').then(res => {

          //   console.log(' ...res');
          //   console.log(res.data);
          // });


        } catch (err) {
          setErrors({ submit: err.message });
          setStatus({ success: false });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        touched,
        values
      }) => (
          <form
            onSubmit={handleSubmit}
            className={clsx(classes.root, className)}
            {...rest}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} lg={8}>
                <Card>
                  <CardContent>
                    <TextField
                      error={Boolean(touched.name && errors.name)}
                      fullWidth
                      helperText={touched.name && errors.name}
                      label="category Name"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      variant="outlined"
                    />

                    <Box mt={3} mb={1}>
                      <Typography variant="subtitle2" color="textSecondary">
                        Description
                    </Typography>
                    </Box>
                    <Paper variant="outlined">
                      <QuillEditor
                        className={classes.editor}
                        value={values.description}
                        onChange={value => setFieldValue('description', value)}
                      />
                    </Paper>
                    {touched.description && errors.description && (
                      <Box mt={2}>
                        <FormHelperText error>
                          {errors.description}
                        </FormHelperText>
                      </Box>
                    )}
                  </CardContent>
                </Card>
                <Box mt={3}>
                  <Card>
                    <CardHeader title="Upload Images" />
                    <Divider />
                    <CardContent>
                      <FilesDropzone />
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Box mt={2}>
              <Button
                color="secondary"
                variant="contained"
                type="submit"
                disabled={isSubmitting}
              >
                Create Category
            </Button>
            </Box>
          </form>
        )}
    </Formik>
  );
}

ProductCreateForm.propTypes = {
  className: PropTypes.string,
  onSubmitSuccess: PropTypes.func
};

ProductCreateForm.defaultProps = {
  onSubmitSuccess: () => { }
};

export default ProductCreateForm;
