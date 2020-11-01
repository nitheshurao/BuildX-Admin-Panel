import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import axios from 'axios';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import useIsMountedRef from 'src/hooks/useIsMountedRef'
import { useSnackbar } from 'notistack';
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

// const categories = [
//   {
//     id: 'shirts',
//     name: 'Shirts'
//   },
//   {
//     id: 'phones',
//     name: 'Phones'
//   },
//   {
//     id: 'cars',
//     name: 'Cars'
//   }
// ];

const useStyles = makeStyles(() => ({
  root: {},
  editor: {
    '& .ql-editor': {
      height: 400
    }
  }
}));

function ProductCreateForm({ className, ...rest }) {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  ////
  const handleCategoryChange = (event) => {
    event.persist();
    console.log('------event.target--------')
    console.dir(event.target)
    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value;
    }
    return event.target.value;
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   category: value
    // }));
  };
  ////brand
  const handleBrandChange = (event) => {
    console.log('---------event------------')
    console.log(event)
    event.persist();

    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value;
    }
    return event.target.value;
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   category: value
    // }));
  };

  ///
  const isMountedRef = useIsMountedRef();


  const [categories, setcategories] = useState([]);
  const getcategories = useCallback(() => {
    axios
      .get(' https://15.207.7.54:8081/category/fetch-by-filter')
      .then(response => {
        console.log('----------response---------- crty-');
        // console.log(response.data.categories)
        console.log(response.data.data.categories);
        if (isMountedRef.current) {
          let frmtedctgory = response.data.data.categories.map(item => {
            return ({
              category_id: item.id,
              label: item.name
            })
          })
          console.log(frmtedctgory);
          setcategories([...frmtedctgory]);
        }
      })

      .catch(err => {
        console.log('----------err-------cry----');
        console.log(err);
      });
  }, [isMountedRef]);


  useEffect(() => {
    getcategories();
  }, [getcategories]);
  //// brand Api callint
  const [Brand, setBrand] = useState([]);

  const getBrand = useCallback(() => {
    axios
      .get('https://15.207.7.54:8081/brands/fetch-by-filter')
      .then(response => {
        console.log('----------response---------- crty-');
        // console.log(response.data.categories)
        console.log(response.data.data.brands);
        if (isMountedRef.current) {
          let frmtedctgory = response.data.data.brands.map(item => {
            return ({
              value: item.id,
              label: item.name
            })
          })
          console.log(frmtedctgory);
          setBrand([...frmtedctgory]);
        }
      })

      .catch(err => {
        console.log('----------err-------cry----');
        console.log(err);
      });
  }, [isMountedRef]);


  useEffect(() => {
    getBrand();
  }, [getBrand]);



  ///

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
        name: Yup.string().max(255).required(),
        price: Yup.number().min(0).required(),
        productCode: Yup.string().max(255),
        productSku: Yup.string().max(255),
        salePrice: Yup.number().min(0)
      })}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {

          console.log("inside createBrand ")
          /*var category = {
            name: values.name,
            description: values.description

          }
          var category_items = [category]
          console.log("category_item", category_items)
          var category_items_data = category_items*/
          // const categoryOption = useState()
          console.log('---categoryOption----')
          console.dir(values)
          var config = {
            method: 'post',
            url: 'https://15.207.7.54:8081/products/register',
            data: {
              name: values.name,
              description: values.description.replace(/<[^>]+>/g, ''),
              code: values.productCode,
              group: values.group,
              base_price: values.price,
              category_id: values.category,
              brand_id: values.brand_id,
              tax_type: "tax_percentage",
              tax_value: values.tax_value,
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
          enqueueSnackbar('Brand Created', {
            variant: 'success'
          });

        } catch (error) {
          console.log('----------------------resp==error---------------------')
          console.log(error)
          return error
        }
        // Do api call
        //       console.log('------try-------------')
        //       axios.post('http://15.207.7.54:8080/products/register',values.name,values.description,values.images,values.price,values.salePrice)

        // .then((response) => {
        //   console.log('...response')

        // })
        //       setStatus({ success: true });
        //       setSubmitting(false);
        //       enqueueSnackbar('Product Created', {
        //         variant: 'success'
        //       });
        //       //  history.push('  ');
        //     } catch (err) {
        //       setErrors({ submit: err.message });
        //       setStatus({ success: false });
        //       setSubmitting(false);
        //     }
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
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
                lg={8}
              >
                <Card>
                  <CardContent>
                    <TextField
                      error={Boolean(touched.name && errors.name)}
                      fullWidth
                      helperText={touched.name && errors.name}
                      label="Product Name"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      variant="outlined"
                    />
                    <Box
                      mt={3}
                      mb={1}
                    >
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                      >
                        Description
                    </Typography>
                    </Box>
                    <Paper variant="outlined">
                      <QuillEditor
                        className={classes.editor}
                        value={values.description}
                        onChange={(value) => setFieldValue('description', value)}
                      />
                    </Paper>
                    {(touched.description && errors.description) && (
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
                <Box mt={3}>
                  <Card>
                    <CardHeader title="Prices" />
                    <Divider />
                    <CardContent>
                      <Grid
                        container
                        spacing={3}
                      >
                        <Grid item xs={12} md={6}>
                          <TextField
                            error={Boolean(touched.price && errors.price)}
                            fullWidth
                            helperText={touched.price && errors.price
                              ? errors.price
                              : 'If you have a sale price this will be shown as old price'}
                            label="Price"
                            name="price"
                            type="number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.price}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          {/* <TextField
                            error={Boolean(touched.salePrice && errors.salePrice)}
                            fullWidth
                            helperText={touched.salePrice && errors.salePrice}
                            label="Sale price"
                            name="salePrice"
                            type="number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.salePrice}
                            variant="outlined"
                          /> */}
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            error={Boolean(touched.salePrice && errors.salePrice)}
                            fullWidth
                            helperText={touched.salePrice && errors.salePrice}
                            label=" Available Quantity"
                            name="Available_quantity"
                            type="number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.Stock}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                      <Box mt={2}>
                        {/* <FormControlLabel
                        control={(
                          <Checkbox
                            checked={values.isTaxable}
                            onChange={handleChange}
                            value={values.isTaxable}
                            name="isTaxable"
                          />
                        )}
                        label="Product is taxable"
                      /> */}
                      </Box>
                      <Grid item xs={12} md={6}>
                        <TextField
                          error={Boolean(touched.salePrice && errors.salePrice)}
                          fullWidth
                          helperText={touched.salePrice && errors.salePrice}
                          label="Tax "
                          name="Tax"
                          type="number"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.tax_value}
                          variant="outlined"
                        />
                      </Grid>
                      {/* <Box mt={2}>
                      <FormControlLabel
                        control={(
                          <Checkbox
                            checked={values.includesTaxes}
                            onChange={handleChange}
                            value={values.includesTaxes}
                            name="includesTaxes"
                          />
                        )}
                        label="Price includes taxes"
                      />
                    </Box> */}
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                lg={4}
              >
                <Card>
                  <CardHeader />
                  <Divider />
                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                    >
                      Category
                    </Typography>
                    <TextField
                      fullWidth
                      // label="Category"
                      name="category"
                      onChange={(e) => (values.category = handleCategoryChange(e).split('|')[1])}
                      select
                      SelectProps={{ native: true }}
                      value={values.category}
                      variant="outlined"
                    >
                      {categories.map((categoryOption) => (
                        <option
                        // setState()
                        // set={categoryOption.category_id}
                        >
                          {`${categoryOption.label}|${categoryOption.category_id}`}
                        </option>
                      ))}
                    </TextField>
                    <Box mt={2}>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                      >
                        Brands
                    </Typography>
                      <TextField
                        fullWidth

                        name="Brands"
                        onChange={(e) => values.brand_id = handleBrandChange(e).split('|')[1]}
                        select
                        SelectProps={{ native: true }}
                        value={values.Brand}
                        variant="outlined"
                      >
                        {Brand.map((BrandOption) => (
                          <option
                            key={BrandOption.value}
                            value={BrandOption.value}
                          >
                            {`${BrandOption.label}|${BrandOption.value}`}
                          </option>
                        ))}
                      </TextField>
                    </Box>
                    <Box mt={2}>
                      <TextField
                        error={Boolean(touched.productCode && errors.productCode)}
                        fullWidth
                        helperText={touched.productCode && errors.productCode}
                        label="Product Code"
                        name="productCode"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.productCode}
                        variant="outlined"
                      />
                    </Box>
                    <Box mt={2}>
                      <TextField
                        error={Boolean(touched.productSku && errors.productSku)}
                        fullWidth
                        helperText={touched.productSku && errors.productSku}
                        label="Group"
                        name="Group"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.group}
                        variant="outlined"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>
                  {errors.submit}
                </FormHelperText>
              </Box>
            )}
            <Box mt={2}>
              <Button
                color="secondary"
                variant="contained"
                type="submit"
                disabled={isSubmitting}
              >
                Create product
            </Button>
            </Box>
          </form>
        )}
    </Formik>
  );
}

ProductCreateForm.propTypes = {
  className: PropTypes.string
};

export default ProductCreateForm;
