import React from 'react';
  
import axios from 'src/utils/axios';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import mock from 'src/utils/mock';

import m
  
mock.onGet('app/management/CategoriesListView').reply(200, {
    category: [
      {
        id: uuidv4(),
        name: 'Charlie Tulip Dress',
        image: '',
        isAvailable: true,
        isShippable: false,
        inventoryType: 'in_stock',
        quantity: 85,
        variants: 2,
        product: 'dress',
        attributes: ['Cotton'],
        price: 23.99,
        currency: '$',
        createdAt: moment()
          .subtract(1, 'days')
          .toDate()
          .getTime(),
        updatedAt: moment()
          .subtract(6, 'hours')
          .toDate()
          .getTime()
      },
      {
        id: uuidv4(),
        name: 'Kate Leopard Dress',
        image: '',
        isAvailable: false,
        isShippable: true,
        inventoryType: 'out_of_stock',
        quantity: 0,
        variants: 1,
        product: 'dress',
        attributes: ['Cotton'],
        price: 95.00,
        currency: '$',
        createdAt: moment()
          .subtract(3, 'days')
          .toDate()
          .getTime(),
        updatedAt: moment()
          .subtract(2, 'days')
          .subtract(8, 'hours')
          .toDate()
          .getTime()
      },
      {
        id: uuidv4(),
        name: 'Kate Leopard Dress',
        image: '',
        isAvailable: false,
        isShippable: true,
        inventoryType: 'out_of_stock',
        quantity: 0,
        variants: 1,
        product: 'dress',
        attributes: ['Cotton'],
        price: 95.00,
        currency: '$',
        createdAt: moment()
          .subtract(3, 'days')
          .toDate()
          .getTime(),
        updatedAt: moment()
          .subtract(2, 'days')
          .subtract(8, 'hours')
          .toDate()
          .getTime()
      },
      {
        id: uuidv4(),
        name: 'Layering Bracelets Collection',
        image: '',
        isAvailable: true,
        isShippable: false,
        inventoryType: 'in_stock',
        quantity: 48,
        variants: 5,
        product: 'jewelry',
        attributes: ['Variety of styles'],
        price: 155.00,
        currency: '$',
        createdAt: moment()
          .subtract(6, 'days')
          .toDate()
          .getTime(),
        updatedAt: moment()
          .subtract(1, 'days')
          .subtract(2, 'hours')
          .toDate()
          .getTime()
      },
      {
        id: uuidv4(),
        name: 'Flared Sleeve Floral Blouse',
        image: '',
        isAvailable: false,
        isShippable: true,
        inventoryType: 'limited',
        quantity: 5,
        variants: 1,
        product: 'blouse',
        attributes: ['Polyester and Spandex'],
        price: 17.99,
        currency: '$',
        createdAt: moment()
          .subtract(12, 'days')
          .toDate()
          .getTime(),
        updatedAt: moment()
          .subtract(1, 'days')
          .subtract(7, 'hours')
          .toDate()
          .getTime()
      }
    ]
  });
function applyCategory(category) {
    return ((category) => {
    
    )};
