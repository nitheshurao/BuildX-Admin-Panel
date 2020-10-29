import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import CategoryCreateForm from './CategoryCreateForm';
import PersonList from './prt'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function CategoryCreateView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Create Category"
    >
      <Container maxWidth={false}>
        <Header />
        <CategoryCreateForm />
        {/* <PersonList/> */}
      </Container>
    </Page>
  );
}

export default CategoryCreateView;
