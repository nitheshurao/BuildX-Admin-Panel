/* eslint-disable max-len */
import React, { useState, useEffect, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import axios from 'axios';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import useIsMountedRef from 'src/hooks/useIsMountedRef'
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
  TextField, Typography,
  makeStyles
} from '@material-ui/core';
import {
  Image as ImageIcon,
  Edit as EditIcon,
  ArrowRight as ArrowRightIcon,
  Search as SearchIcon
} from 'react-feather';
import Label from 'src/components/Label';
import { isDeleteExpression } from 'typescript';
import { Category } from '@material-ui/icons';

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

// function getInventoryLabel(inventoryType) {
//   const map = {
//     in_stock: {
//       text: 'In Stock',
//       color: 'success'
//     },
//     out_of_stock: {
//       text: 'Out of Stock',
//       color: 'error'
//     },
//     limited: {
//       text: 'Limited',
//       color: 'warning'
//     }
//   };

//   const { text, color } = map[inventoryType];

//   return (
//     <Label color={color}>
//       {text}
//     </Label>
//   );
// }

function applyFilters(products, query, filters) {
  return products.filter((products) => {
    let matches = true;

    if (query && !products.name.toLowerCase().includes(query.toLowerCase())) {
      matches = false;
    }

    // if (filters.category && products.category !== filters.category) {
    //   matches = false;
    // }

    if (filters.availability) {
      if (filters.availability === 'available' && !products.isAvailable) {
        matches = false;
      }

      if (filters.availability === 'unavailable' && products.isAvailable) {
        matches = false;
      }
    }

    if (filters.inStock && !['in_stock', 'limited'].includes(products.inventoryType)) {
      matches = false;
    }

    if (filters.isShippable && !products.isShippable) {
      matches = false;
    }

    return matches;
  });
}

function applyPagination(products, page, limit) {
  return products.slice(page * limit, page * limit + limit);
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

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

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
  ///

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
          display="flex"
          alignItems="center"
        >
          <TextField
            className={classes.queryField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon
                    fontSize="small"
                    color="action"
                  >
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            onChange={handleQueryChange}
            placeholder="Search products"
            value={query}
            variant="outlined"
          />
          <Box flexGrow={1} />

          <TextField
            label="Sort By"
            name="sort"
            onChange={handleSortChange}
            select
            SelectProps={{ native: true }}
            value={sort}
            variant="outlined"
          >
            {sortOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>

        <Box
          mt={3}
          mb={1}
        />

        <Box
          mt={4}
          mb={1}
       
          alignItems="center"


        >

          <Typography
            variant="subtitle2"
            color="textSecondary"
          >
            Category
                    </Typography>

          <TextField

            // className={classes.categoryField}
            // label="Category"
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
          {/* <TextField
            className={classes.availabilityField}
            label="Availability"
            name="availability"
            onChange={handleAvailabilityChange}
            select
            SelectProps={{ native: true }}
            value={filters.availability || 'all'}
            variant="outlined"
          >
            {avalabilityOptions.map((avalabilityOption) => (
              <option
                key={avalabilityOption.id}
                value={avalabilityOption.id}
              >
                {avalabilityOption.name}
              </option>
            ))}
          </TextField> */}
          {/* <FormControlLabel
            className={classes.stockField}
            control={(
              <Checkbox
                checked={!!filters.inStock}
                onChange={handleStockChange}
                name="inStock"
              />
            )}
            label="In Stock"
          />
          <FormControlLabel
            className={classes.shippableField}
            control={(
              <Checkbox
                checked={!!filters.isShippable}
                onChange={handleShippableChange}
                name="Shippable"
              />
            )}
            label="Shippable"
          /> */}
        </Box>
      </Box>
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
              type="delete"

            >
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
                  Name
                </TableCell>

                <TableCell>
                  Details
                </TableCell>
                {/* <TableCell>
                  Invetory
                </TableCell> */}
                {/* <TableCell>
                  Attributes
                </TableCell> */}
                <TableCell>
                  Price
                </TableCell>
                <TableCell align="right">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedProducts.map((products) => {
                const isProductSelected = selectedProducts.includes(products.id);

                return (
                  <TableRow
                    hover
                    key={products.id}
                    selected={isProductSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isProductSelected}
                        onChange={(event) => handleSelectOneProduct(event, products.id)}
                        value={isProductSelected}
                      />
                    </TableCell>
                    <TableCell className={classes.imageCell}>
                      {products.image ? (
                        <img
                          alt="Product"
                          src={products.image}
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
                        {products.name}
                      </Link>
                    </TableCell>
                    {/* <TableCell>
                      {getInventoryLabel(products.inventoryType)}
                    </TableCell> */}
                    {/* <TableCell>
                      {products.available_quantity}
                      {' '}
                      in stock
                      {products.available_quantity > 1 && ` in ${products.available_quantity} variants`}
                    </TableCell> */}
                    {/* <TableCell>
                      {products.attributes.map((attr) => attr)}
                    </TableCell> */}
                    <TableCell>
                      {products.description}

                     
                    </TableCell>
                    <TableCell>
                    {products.total_amount}

                    
                    </TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <SvgIcon fontSize="small">
                          <EditIcon />
                        </SvgIcon>
                      </IconButton>
                      <IconButton 
                      >
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
            // count={filteredProducts.length}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array
};

Results.defaultProps = {
  category_items: []
};

export default Results;
