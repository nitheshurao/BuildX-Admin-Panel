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

function SubCategories() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [subCategory, setsubCategory] = useState(null);

  const getsubCategory = useCallback(() => {
    axios
      .get('http://15.207.7.54:8080/sub-category/fetch-by-filter')
      .then((response) => {
        console.log('----------response-----------')
        console.log(response)
        console.log(response.data.data.subCategory)
        if (isMountedRef.current) {
          setsubCategory(response.data.data.subCategory);
        }
      })
      .catch(err => {
        console.log('----------err-----------')
        console.log(err);
      })
  }, [isMountedRef]);
  useEffect(() => {
    getsubCategory();
  }, [getsubCategory]);

  if (!subCategory) {
    return null;
  }

  //


  return (
    <Page
      className={classes.root}
      title="Product List"
    >
      <Container maxWidth={false}>
        <Header />
        {subCategory && (
          <Box mt={3}>
            <Results products={subCategory} />


          </Box>
        )}
      </Container>
    </Page>
  );
}

export default SubCategories;
