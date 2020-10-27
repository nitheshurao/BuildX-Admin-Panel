/* eslint-disable max-len */
import React, { useState, useEffect, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useHistory } from 'react-router';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik } from 'formik';
import QuillEditor from 'src/components/QuillEditor';
import FilesDropzone from 'src/components/FilesDropzone';

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
import {
  Image as ImageIcon,
  Edit as EditIcon,
  ArrowRight as ArrowRightIcon,
  Search as SearchIcon
} from 'react-feather';
import Label from 'src/components/Label';
import useIsMountedRef from 'src/hooks/useIsMountedRef'
// const categoryOptions = [
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



function applyFilters(products, query) {
  return products.filter((product) => {
    let matches = true;

    if (query && !product.name.toLowerCase().includes(query.toLowerCase())) {
      matches = false;
    }



    return matches;
  });
}

function applyPagination(customers, page, limit) {
  return customers.slice(page * limit, page * limit + limit);
}

const useStyles = makeStyles((theme) => ({
  root: {},
  bulkOperations: {
    position: 'relative'
  },
  bulkActions: {
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: 6,
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    backgroundColor: theme.palette.background.default
  },
  bulkAction: {
    marginLeft: theme.spacing(2)
  },
  queryField: {
    width: 500
  },
  categoryField: {
    flexBasis: 200
  },
  root: {},
  editor: {
    '& .ql-editor': {
      height: 400
    }
  },


}));

function Results({ className, products, ...rest }) {
  const classes = useStyles();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');

  const [filters, setFilters] = useState({
    category: null,

  });

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };
 ////
 const isMountedRef = useIsMountedRef();


 const [categories, setcategories] = useState([]);
 const getcategories = useCallback(() => {
   axios
     .get(' http://15.207.7.54:8080/category/fetch-by-filter')
     .then(response => {
       console.log('----------response---------- crty-');
       // console.log(response.data.categories)
       console.log(response.data.data.categories);
       if (isMountedRef.current) {
         let frmtedctgory = response.data.data.categories.map(item => {
           return ({
             value: item.id,
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
 ////

  const handleCategoryChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      category: value
    }));
  };


 



  const handleSelectAllProducts = (event) => {
    setSelectedProducts(event.target.checked
      ? products.map((product) => product.id)
      : []);
  };

  const handleSelectOneProduct = (event, productId) => {
    if (!selectedProducts.includes(productId)) {
      setSelectedProducts((prevSelected) => [...prevSelected, productId]);
    } else {
      setSelectedProducts((prevSelected) => prevSelected.filter((id) => id !== productId));
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  // Usually query is done on backend with indexing solutions
  const filteredProducts = applyFilters(products, query, filters);
  const paginatedProducts = applyPagination(filteredProducts, page, limit);
  const enableBulkOperations = selectedProducts.length > 0;
  const selectedSomeProducts = selectedProducts.length > 0 && selectedProducts.length < products.length;
  const selectedAllProducts = selectedProducts.length === products.length;

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
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
          // Do api call
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('Product Created', {
            variant: 'success'
          });
          history.push('/app/products');
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
            <Card
              className={clsx(classes.root, className)}
              {...rest}
            >
              <Box p={2}>
                <Box
                  display="flex"
                  alignItems="center"
                >


                </Box>


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
                        {/* <TextField
                          className={classes.categoryField}
                          label="Category"
                          name="category"
                          onChange={(e) => handleCategoryChange(e)}
                          select
                          SelectProps={{ native: true }}
                          value={filters.category || 'all'}
                          variant="outlined"
                        >
                          {categories.map((categoryOption) => (
                            <option
                              key={categoryOption.value}
                              value={categoryOption.value}
                            >
                              {categoryOption.label}
                            </option>
                          ))}
                        </TextField> */}

                        <Box
                          mt={3}
                          mb={1}
                        >
                          <TextField
                            error={Boolean(touched.name && errors.name)}
                            fullWidth
                            helperText={touched.name && errors.name}
                            label="Brand name"
                            name="name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.name}
                            variant="outlined"
                          />
                        </Box>
                        {/* <Box
                          mt={3}
                          mb={1}
                        >


                          <Typography
                            variant="subtitle2"
                            color="textSecondary"
                          >
                            Description
                    </Typography>
                        </Box> */}
                        {/* <Paper variant="outlined">
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
                          </Box> */}
                        {/* )} */}
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
                    
                    Add Brand
            </Button>
                </Box>




              </Box>



            </Card>
          </form>)}
    </Formik>
  );
}


Results.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array
};

Results.defaultProps = {
  products: []
};

export default Results;
