import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import SubCategoryCreateForm from './SubCategoryCreateForm';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function SubCategoryCreateView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Create SubCategory"
    >
      <Container maxWidth={false}>
        <Header />
        <SubCategoryCreateForm />
      </Container>
    </Page>
  );
}

export default SubCategoryCreateView;
