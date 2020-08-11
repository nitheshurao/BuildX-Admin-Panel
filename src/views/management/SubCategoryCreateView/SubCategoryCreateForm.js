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

const categoryOptions = [
  {
    id: 'all',
    name: 'All'
  },
  {
    id: 'dress',
    name: 'Dress'
  },
  {
    id: 'jewelry',
    name: 'Jewelry'
  },
  {
    id: 'blouse',
    name: 'Blouse'
  },
  {
    id: 'beauty',
    name: 'Beauty'
  }
];

const useStyles = makeStyles(() => ({
  root: {}
}));

function SubCategoryCreateForm({
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
        subcategoryName: Yup.string().max(255),
     
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
           <Box p={2}>
      
      <Box
        mt={3}
        display="flex"
        alignItems="center"
      >
        <TextField
          className={classes.categoryField}
          label="Category"
          name="category"
          onChange={  (event) => {
            event.persist();
        
            let value = null;
        
            if (event.target.value !== 'all') {
              value = event.target.value;
            }
        
          
          }
        }
          select
          SelectProps={{ native: true }}
          value={'a','asa','asas'}
          variant="outlined"
        >
          {categoryOptions.map((categoryOption) => (
            <option
              key={categoryOption.id}
              value={categoryOption.id}
            >
              {categoryOption.name}
            </option>
          ))}
        </TextField>
      
      
      </Box>
    </Box>
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
              name="subcategoryName"
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

SubCategoryCreateForm.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired
};

export default SubCategoryCreateForm;
