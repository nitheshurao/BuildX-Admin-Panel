/* eslint-disable max-len */
import React, { useState, useEffect, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import axios from 'axios';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  Checkbox,
  InputAdornment,
  FormControlLabel,
  IconButton,
  Link,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  makeStyles
} from '@material-ui/core';
import {
  Image as ImageIcon,
  Edit as EditIcon,
  ArrowRight as ArrowRightIcon,
  Search as SearchIcon
} from 'react-feather';
import Label from 'src/components/Label';
import { createStore } from 'redux';
import { reducer } from 'redux-form';
import useIsMountedRef from 'src/hooks/useIsMountedRef'
import { DELETE_CARD } from 'src/actions/kanbanActions';



// function categoryOptions(categories) {
//   return [{
//     id: categories.id,
//     name: categories.name
//   }]
// }
 
// const categoryOptions = 
//   [
//     {
//       id: 'all',
//       name: 'All'
//     },
//     {
//       id: '40fd0bb1-1625-4620-af04-c493d22868af',
//       name: '40fd0bb1-1625-4620-af04-c493d22868af'
//     },
//     {
//       id: 'jewelry',
//       name: 'Jewelry'
//     },
//     {
//       id: 'blouse',
//       name: 'Blouse'
//     },
//     {
//       id: 'beauty',
//       name: 'Beauty'
//     }
//   ];

const avalabilityOptions = [
  {
    id: 'all',
    name: 'All'
  },
  {
    id: 'available',
    name: 'Available'
  },
  {
    id: 'unavailable',
    name: 'Unavailable'
  }
];

const sortOptions = [
  {
    value: 'updatedAt|desc',
    label: 'Last update (newest first)'
  },
  {
    value: 'updatedAt|asc',
    label: 'Last update (oldest first)'
  },
  {
    value: 'createdAt|desc',
    label: 'Creation date (newest first)'
  },
  {
    value: 'createdAt|asc',
    label: 'Creation date (oldest first)'
  }
];

function getInventoryLabel(inventoryType) {
  const map = {
    in_stock: {
      text: 'In Stock',
      color: 'success'
    },
    out_of_stock: {
      text: 'Out of Stock',
      color: 'error'
    },
    limited: {
      text: 'Limited',
      color: 'warning'
    }
  };

  const { text, color } = map[inventoryType];

  return (
    <Label color={color}>
      {text}
    </Label>
  );
}

function applyFilters(products, query, filters) {
  return products.filter((product) => {
    let matches = true;

    if (query && !product.name.toLowerCase().includes(query.toLowerCase())) {
      matches = false;
    }

    if (filters.category && product.category !== filters.category) {
      matches = false;
    }

    if (filters.availability) {
      if (filters.availability === 'available' && !product.isAvailable) {
        matches = false;
      }

      if (filters.availability === 'unavailable' && product.isAvailable) {
        matches = false;
      }
    }

    if (filters.inStock && !['in_stock', 'limited'].includes(product.inventoryType)) {
      matches = false;
    }

    if (filters.isShippable && !product.isShippable) {
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
  availabilityField: {
    marginLeft: theme.spacing(2),
    flexBasis: 200
  },
  stockField: {
    marginLeft: theme.spacing(2)
  },
  shippableField: {
    marginLeft: theme.spacing(2)
  },
  imageCell: {
    fontSize: 0,
    width: 68,
    flexBasis: 68,
    flexGrow: 0,
    flexShrink: 0
  },
  image: {
    height: 68,
    width: 68
  }
}));

function Results({ className, products, ...rest }) {
  const classes = useStyles();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState(sortOptions[0].value);
  const [filters, setFilters] = useState({
    category: null,
    availability: null,
    inStock: null,
    isShippable: null
  });
  //

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
        let frmtedctgory = response.data.data.categories.map(item => {return ({
          value:item.id,
          label: item.name
        })})
        console.log(frmtedctgory);
        setcategories([...frmtedctgory]) ;
      }
    })

    .catch(err => {
      console.log('----------err-------cry----');
      console.log(err );
    });
}, [isMountedRef]);


useEffect(() => {
  getcategories();
}, [getcategories]);

  //



//  const deletecategory =(e)=>  {
// 	e.preventDefault();
// 	axios.delete('http://dummy.restapiexample.com/api/v1/delete/{this.state.id}')
// 	.then(res => console.log(res.data));
// }

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };
const deletecategory= (event) => {
  console.log( event.target.value)

}
  const handleCategoryChange = (event) => { 
    ///
    console.log(event.target.value)
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

  const handleAvailabilityChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      availability: value
    }));
  };

  const handleStockChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.checked) {
      value = true;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      inStock: value
    }));
  };

  const handleShippableChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.checked) {
      value = true;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      isShippable: value
    }));
  };

  const handleSortChange = (event) => {
    event.persist();
    setSort(event.target.value);
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
  // const deletecategory =(event, categories)=> {
  //   this.setState(
  //   {categories: this.filter(categories =>categories.id !== id)});

  // }

  //   function deletecategory(categories){
  //     return{
  //       type :DELETE_C ,
  //     }
  //   }
  //   const deletecategor =( state=categories,action) => {
  //     switch(action.type){
  //       case DELETE_C:
  //       return{
  // ...state,


  //       }
  //       default: return state
  //     }
  //   }


  const store = createStore(reducer);
  //}
  // Usually query is done on backend with indexing solutions
  const filteredProducts = applyFilters(products, query, filters);
  const paginatedProducts = applyPagination(filteredProducts, page, limit);
  const enableBulkOperations = selectedProducts.length > 0;
  const selectedSomeProducts = selectedProducts.length > 0 && selectedProducts.length < products.length;
  const selectedAllProducts = selectedProducts.length === products.length;

  return (
    <Card
      className={clsx(classes.root, className)}
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
          </TextField>
        </Box>
      </Box>
      <Card>
        {enableBulkOperations && (
          <div className={classes.bulkOperations}>
            <div className={classes.bulkActions}>
              <Checkbox
                checked={selectedAllProducts}
                indeterminate={selectedSomeProducts}
                onChange={handleSelectAllProducts}
              />
              <Button
                variant="outlined"
                className={classes.bulkAction}
              onClick={(e) => deletecategory(e)}

              >categories.map((selectedSomeProducts) => (
                
              ))
                Delete
            </Button>

            </div>
          </div>
        )}
        <PerfectScrollbar>
          <Box minWidth={1200}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedAllProducts}
                      indeterminate={selectedSomeProducts}
                      onChange={handleSelectAllProducts}
                    />
                  </TableCell>

                  <TableCell />
                  <TableCell>
                    Subategory
                </TableCell>

                  <TableCell>
                    Details
                </TableCell>

                  <TableCell align="right">
                    Actions
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedProducts.map((category) => {
                  const isProductSelected = selectedProducts.includes


                    (category.id);

                  return (
                    <TableRow
                      hover
                      key={category.id}
                      selected={isProductSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isProductSelected}
                          onChange={(event) => handleSelectOneProduct(event, category.id)}
                          value={isProductSelected}
                        />
                      </TableCell>

                      <TableCell className={classes.imageCell}>
                        {category.image ? (
                          <img
                            alt="Product"
                            src={category.image}
                            className={classes.image}
                          />
                        ) : (
                            <Box
                              p={2}
                              bgcolor="background.dark"
                            >
                              <SvgIcon>
                                <ImageIcon />
                              </SvgIcon>
                            </Box>
                          )}
                      </TableCell>
                      <TableCell>
                        <Link
                          variant="subtitle2"
                          color="textPrimary"
                          component={RouterLink}
                          underline="none"
                          to="#"
                        >
                          {category.name}
                        </Link>
                      </TableCell>



                      <TableCell align="right">
                        <IconButton>
                          <SvgIcon fontSize="small">
                            <EditIcon />
                          </SvgIcon>
                        </IconButton>
                        <IconButton>
                          <SvgIcon fontSize="small">
                            <ArrowRightIcon />
                          </SvgIcon>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <TablePagination
              component="div"
              count={filteredProducts.length}
              onChangePage={handlePageChange}
              onChangeRowsPerPage={handleLimitChange}
              page={page}
              rowsPerPage={limit}
              rowsPerPageOptions={[5, 10, 25]}
            />
          </Box>
        </PerfectScrollbar>
      </Card>
      {enableBulkOperations && (
        <div className={classes.bulkOperations}>
          <div className={classes.bulkActions}>
            <Checkbox
              checked={selectedAllProducts}
              indeterminate={selectedSomeProducts}
              onChange={handleSelectAllProducts}
            />
            <Button
              variant="outlined"
              className={classes.bulkAction}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              className={classes.bulkAction}
            >
              Edit
            </Button>
          </div>
        </div>
      )}
    </Card>
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
