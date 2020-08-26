import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import axios from 'axios';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Header from './Header';
import Results from './Results';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

function ProductListView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [products, setProducts] = useState(null);

  const getProducts = useCallback(() => {
    axios
      .get(' http://15.207.7.54:8080/category/fetch-by-filter')
    .then((response) => {
      // console.log(response.data.category_items)
      console.log('----------response-----------')
     // console.log(response.data.categories)
        console.log(response)
      if (isMountedRef.current) {
          setProducts(response.data.data.category_items);
        }
      }).catch(err => {
        console.log('----------err-----------')
        console.log(err)
    })
}, [isMountedRef]);


  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (!products) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Product List"
    >
      <Container maxWidth={false}>
        <Header />
        {products && (
          <Box mt={3}>
            <Results category_items={products} />
          </Box>
        )}
      </Container>
    </Page>
  );
}

export default ProductListView;
