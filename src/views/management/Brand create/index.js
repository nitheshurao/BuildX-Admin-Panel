import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import CreateBrands from './CreateBrands';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function Brand_Create() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Create Brand"
    >
      <Container maxWidth={false}>
        <Header />
        <CreateBrands />
      </Container>
    </Page>
  );
}

export default Brand_Create;
