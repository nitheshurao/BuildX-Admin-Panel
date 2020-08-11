import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
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

const useStyles = makeStyles(() => ({
  root: {}
}));

function CategoryCreateForm({
  className,
  customer,
  ...rest
}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Formik
      initialValues={{
        
      }}
      validationSchema={Yup.object().shape({
        categoryName: Yup.string().max(255),
     
      })}
      onSubmit={async (values, {
        resetForm,
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          // Make API request
          await wait(500);
          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('User Added', {
            variant: 'success',
            action: <Button>See all</Button>
          });
        } catch (error) {
          setStatus({ success: false });
          setErrors({ submit: error.message });
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
                spacing={1}
              >
            <Grid
                  item
                  md={6}
                  xs={12}
                > 
              <TextField
              label =" New Category"
              name="categoryName"
              required
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.categoryName}
              variant="outlined"
              />
              </Grid>
              <Box mt={2}
                item
                md={6}
                xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Add User
                </Button>
              </Box>
              </Grid>
            </CardContent>
          </Card>
        </form>
      )}
    </Formik>
  );
}

CategoryCreateForm.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired
};

export default CategoryCreateForm;
