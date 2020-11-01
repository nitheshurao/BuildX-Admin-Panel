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

function Brands() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [Brand, setBrand] = useState(null);

  const getBrand= useCallback(() => {
    axios
      .get('https://15.207.7.54:8081/brands/fetch-by-filter')
      .then((response) => {
        console.log('----------response-----------')
        console.log(response)
        console.log(response.data.data.brands)
        if (isMountedRef.current) {
          setBrand(response.data.data.brands);
        }
      })
      .catch(err => {
        console.log('----------err-----------')
        console.log(err);
      })
  }, [isMountedRef]);
  useEffect(() => {
    getBrand();
  }, [getBrand]);


  if (!Brand) {
    return null;
  }

  //


  return (
    <Page
      className={classes.root}
      title="Brand List"
    >
      <Container maxWidth={false}>
        <Header />
        {Brand && (
          <Box mt={3}>
            <Results Brand={Brand} />


          </Box>
        )}
      </Container>
    </Page>
  );
}

export default Brands;
