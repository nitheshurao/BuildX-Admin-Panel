import React, { useState, useEffect, useCallback } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import axios from 'axios';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Header from './Header';
import Results from './Results';

const useStyles = makeStyles(theme => ({
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
  const [categories, setcategories] = useState(null);

  const getcategories = useCallback(() => {
    axios
      .get(' http://15.207.7.54:8080/category/fetch-by-filter')
      .then(response => {
        console.log('----------response-----------');
        // console.log(response.data.categories)
        console.log(response.data.data.categories);
        if (isMountedRef.current) {
          setcategories(response.data.data.categories);
        }
      })
      .catch(err => {
        console.log('----------err-----------');
        console.log(err);
      });
  }, [isMountedRef]);

  useEffect(() => {
    getcategories();
  }, [getcategories]);

  if (!categories) {
    return null;
  }

  return (
    <Page className={classes.root} title="category List">
      <Container maxWidth={false}>
        <Header />
        {categories && (
          <Box mt={3}>
            <Results categories={categories} />
          </Box>
        )}
      </Container>
    </Page>
  );
}

export default ProductListView;
