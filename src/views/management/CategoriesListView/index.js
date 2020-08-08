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
import axios from 'src/utils/axios';
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
  const [category, setCategory] = useState(null);

  const getCategory = useCallback(() => {
    axios
      .get('/api/management/CategoryList')
      .then((response) => {
        if (isMountedRef.current) {
          setCategory(response.data.category);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  if (!category) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Product List"
    >
      <Container maxWidth={false}>
        <Header />
        {category && (
          <Box mt={3}>
            <Results category={category} />
          </Box>
        )}
      </Container>
    </Page>
  );
}

export default ProductListView;
