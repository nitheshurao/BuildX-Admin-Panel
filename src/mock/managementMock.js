import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/management/customers').reply(200, {
  customers: [
    {
      id: '5e887a62195cc5aef7e8ca5d',
      name: 'Arjun ',
      email: 'arjun@buildX.in',
      avatar: '',
      spent: '500.00',
      currency: '₹',
      orders: 1,
      isProspect: false,
      isReturning: false,
      acceptsMarketing: false,
      updatedAt: moment()
        .subtract(1, 'days')
        .toDate()
        .getTime(),
      location: 'Bangalore, India'
    },
    {
      id: '5e887ac47eed253091be10cb',
      name: 'Darshan',
      email: 'darshan@buildX.in',
      avatar: '',
      spent: '500.00',
      currency: '₹',
      orders: 1,
      isProspect: false,
      isReturning: false,
      acceptsMarketing: false,
      updatedAt: moment()
        .subtract(1, 'days')
        .toDate()
        .getTime(),
      location: 'Bangalore, India'
    },
    {
      id: '5e887b209c28ac3dd97f6db5',
      name: 'Alex ',
      email: 'alex@buildX.in',
      avatar: '',
      spent: '500.00',
      currency: '₹',
      orders: 1,
      isProspect: false,
      isReturning: false,
      acceptsMarketing: false,
      updatedAt: moment()
        .subtract(1, 'days')
        .toDate()
        .getTime(),
      location: 'Bangalore, India'
    },
    {
      id: '5e887b7602bdbc4dbb234b27',
      name: 'Anj',
      email: 'anj@buildX.in',
      avatar: '',
      spent: '500.00',
      currency: '₹',
      orders: 1,
      isProspect: false,
      isReturning: false,
      acceptsMarketing: false,
      updatedAt: moment()
        .subtract(1, 'days')
        .toDate()
        .getTime(),
      location: 'Bangalore, India'
    },
    {
      id: '5e86809283e28b96d2d38537',
      name: 'Amar',
      email: 'amar@buildX.in',
      avatar: '',
      spent: '500.00',
      currency: '₹',
      orders: 1,
      isProspect: false,
      isReturning: false,
      acceptsMarketing: false,
      updatedAt: moment()
        .subtract(1, 'days')
        .toDate()
        .getTime(),
      location: 'Bangalore, India'
    },
    {
      id: '5e86805e2bafd54f66cc95c3',
      name: 'Akshay',
      email: 'akshh@buildX.in',
      avatar: '',
      spent: '500.00',
      currency: '₹',
      orders: 1,
      isProspect: false,
      isReturning: false,
      acceptsMarketing: false,
      updatedAt: moment()
        .subtract(1, 'days')
        .toDate()
        .getTime(),
      location: 'Bangalore, India'
    },
    {
      id: '5e887a1fbefd7938eea9c981',
      name: 'Arjun',
      email: 'arjun@buildX.in',
      avatar: '',
      spent: '500.00',
      currency: '₹',
      orders: 1,
      isProspect: false,
      isReturning: false,
      acceptsMarketing: false,
      updatedAt: moment()
        .subtract(1, 'days')
        .toDate()
        .getTime(),
      location: 'Bangalore, India'
    },
    {
      id: '5e887d0b3d090c1b8f162003',
      name: 'Rithesh',
      email: 'Rithesh@buildX.in',
      avatar: '',
      spent: '500.00',
      currency: '₹',
      orders: 1,
      isProspect: false,
      isReturning: false,
      acceptsMarketing: false,
      updatedAt: moment()
        .subtract(1, 'days')
        .toDate()
        .getTime(),
      location: 'Bangalore, India'
    },
    {
      id: '5e88792be2d4cfb4bf0971d9',
      name: 'Redhan',
      email: 'Redhan@buildX.in',
      avatar: '',
      spent: '500.00',
      currency: '₹',
      orders: 1,
      isProspect: false,
      isReturning: false,
      acceptsMarketing: false,
      updatedAt: moment()
        .subtract(1, 'days')
        .toDate()
        .getTime(),
      location: 'Bangalore, India'
    },
    {
      id: '5e8877da9a65442b11551975',
      name: 'Abhi',
      email: 'abhi@buildX.in',
      avatar: '',
      spent: '500.00',
      currency: '₹',
      orders: 1,
      isProspect: false,
      isReturning: false,
      acceptsMarketing: false,
      updatedAt: moment()
        .subtract(1, 'days')
        .toDate()
        .getTime(),
      location: 'Bangalore, India'
    },
    {
      id: '5e8680e60cba5019c5ca6fda',
      name: 'Prajwal',
      email: 'pshhety@buildX.in',
      avatar: '',
      spent: '500.00',
      currency: '₹',
      orders: 1,
      isProspect: false,
      isReturning: false,
      acceptsMarketing: false,
      updatedAt: moment()
        .subtract(1, 'days')
        .toDate()
        .getTime(),
      location: 'Bangalore, India'
    }
  ]
});

mock.onGet('/api/management/customers/1').reply(200, {
  customer: {
    fullName: 'Arjun',
    email: 'arjun@buildX.in',
    phone: '+91997283838',
    state: 'Karnataka',
    country: 'India',
    zipCode: '560038',
    address1: 'Indira Nagar',
    address2: 'House #25',
    creditCard: '4142 **** **** **** ****',
    autoCC: false,
    verified: true,
    currency: '₹',
    vat: 19,
    balance: 0
  }
});

mock.onGet('/api/management/customers/1/emails').reply(200, {
  emails: [
    {
      id: uuidv4(),
      description: 'Order confirmation',
      createdAt: moment()
        .subtract(3, 'days')
        .subtract(5, 'hours')
        .subtract(34, 'minutes')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      description: 'Order confirmation',
      createdAt: moment()
        .subtract(4, 'days')
        .subtract(11, 'hours')
        .subtract(49, 'minutes')
        .toDate()
        .getTime()
    }
  ]
});

mock.onGet('/api/management/customers/1/invoices').reply(200, {
  invoices: [
    {
      id: uuidv4(),
      date: moment()
        .toDate()
        .getTime(),
      description: 'Freelancer Subscription (12/9/2019 - 11/010/2019)',
      paymentMethod: 'Credit Card',
      value: '5.25',
      currency: '₹',
      status: 'paid'
    },
    {
      id: uuidv4(),
      date: moment()
        .toDate()
        .getTime(),
      description: 'Freelancer Subscription (12/09/2019 - 11/10/2019)',
      paymentMethod: 'Credit Card',
      value: '5.25',
      currency: '₹',
      status: 'paid'
    }
  ]
});

mock.onGet('/api/management/customers/1/logs').reply(200, {
  logs: [
    {
      id: uuidv4(),
      status: 200,
      method: 'POST',
      route: '/api/purchase',
      desc: 'Purchase',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(2, 'minutes')
        .subtract(56, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      status: 522,
      error: 'Invalid credit card',
      method: 'POST',
      route: '/api/purchase',
      desc: 'Purchase',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(2, 'minutes')
        .subtract(56, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      status: 200,
      method: 'DELETE',
      route: '/api/products/d65654e/remove',
      desc: 'Cart remove',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(8, 'minutes')
        .subtract(23, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      status: 200,
      method: 'GET',
      route: '/api/products/d65654e/add',
      desc: 'Cart add',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(20, 'minutes')
        .subtract(54, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      status: 200,
      method: 'GET',
      route: '/api/products/c85727f/add',
      desc: 'Cart add',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(34, 'minutes')
        .subtract(16, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      status: 200,
      method: 'GET',
      route: '/api/products/c85727f',
      desc: 'View product',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(54, 'minutes')
        .subtract(30, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      status: 200,
      method: 'GET',
      route: '/api/products',
      desc: 'Get products',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(56, 'minutes')
        .subtract(40, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      status: 200,
      method: 'POST',
      route: '/api/login',
      desc: 'Login',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(57, 'minutes')
        .subtract(5, 'seconds')
        .toDate()
        .getTime()
    }
  ]
});


mock.onGet('/api/management/CategoryList').reply(200, {
  category: [
    {
      id: uuidv4(),
      name: 'A',
      attributes: ['CategoryA'],
    },
    {
      id: uuidv4(),
      name: 'B',
      attributes: ['CategoryB'],
    },
    {
      id: uuidv4(),
      name: 'C',
      attributes: ['CategoryC'],
    },
  ]
});


mock.onGet('/api/management/products').reply(200, {
  products: [
    {
      id: uuidv4(),
      name: 'Charlie Tulip Dress',
      image: '',
      isAvailable: true,
      isShippable: false,
      inventoryType: 'in_stock',
      quantity: 85,
      variants: 2,
      category: 'dress',
      attributes: ['Cotton'],
      price: 23.99,
      currency: '₹',
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
      category: 'dress',
      attributes: ['Cotton'],
      price: 95.00,
      currency: '₹',
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
      category: 'jewelry',
      attributes: ['Variety of styles'],
      price: 155.00,
      currency: '₹',
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
      category: 'blouse',
      attributes: ['Polyester and Spandex'],
      price: 17.99,
      currency: '₹',
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

mock.onGet('/api/management/orders').reply(200, {
  orders: [
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(10, 'minutes')
        .toDate()
        .getTime(),
      customer: {
        name: 'Rithesh'
      },
      payment: {
        ref: 'FAD103',
        method: 'CreditCard',
        total: '500.00',
        currency: '₹',
        status: 'pending'
      },
      status: 'inactive'
    },
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(32, 'minutes')
        .subtract(23, 'seconds').toDate()
        .getTime(),
      customer: {
        name: 'nithesh'
      },
      payment: {
        ref: 'FAD102',
        method: 'CreditCard',
        total: '500.00',
        currency: '₹',
        status: 'pending'
      },
      status: 'inactive'
    },
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(36, 'minutes')
        .subtract(51, 'seconds').toDate()
        .getTime(),
      customer: {
        name: 'redhan'
      },
      payment: {
        ref: 'FAD101',
        method: 'PayPal',
        total: '500.00',
        currency: '₹',
        status: 'completed'
      },
      status: 'active'
    },
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(38, 'minutes')
        .subtract(55, 'seconds').toDate()
        .getTime(),
      customer: {
        name: 'prajwal'
      },
      payment: {
        ref: 'FAD100',
        method: 'CreditCard',
        total: '500.00',
        currency: '₹',
        status: 'pending'
      },
      status: 'inactive'
    },
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(40, 'minutes')
        .subtract(3, 'seconds').toDate()
        .getTime(),
      customer: {
        name: 'rama'
      },
      payment: {
        ref: 'FAD99',
        method: 'PayPal',
        total: '500.00',
        currency: '₹',
        status: 'completed'
      },
      status: 'active'
    },
    {
      id: '5e86805e2bafd54f66cc95c3',
      createdAt: moment()
        .subtract(45, 'minutes')
        .subtract(32, 'seconds').toDate()
        .getTime(),
      customer: {
        name: 'prathi'
      },
      payment: {
        ref: 'FAD98',
        method: 'PayPal',
        total: '500.00',
        currency: '₹',
        status: 'completed'
      },
      status: 'active'
    },
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(48, 'minutes')
        .subtract(57, 'seconds').toDate()
        .getTime(),
      customer: {
        id: '5e887a1fbefd7938eea9c981',
        name: 'rithesh',
        avatar: '/static/images/avatars/avatar_8.png'
      },
      payment: {
        ref: 'FAD97',
        method: 'CreditCard',
        total: '500.00',
        currency: '₹',
        status: 'pending'
      },
      status: 'inactive'
    },
  
   
   
    
  ]
});

mock.onGet('/api/management/orders/1').reply(200, {
  order: {
    id: uuidv4(),
    ref: 'FAD107',
    promoCode: null,
    value: '55.25',
    currency: '₹',
    status: 'canceled',
    customer: {
      name: 'rithesh',
      address: 'bangalore , 42456',
      city: 'vijayanagr',
      country: 'India'
    },
    items: [
      {
        id: uuidv4(),
        name: 'Project Points',
        cuantity: 25,
        billing: 'monthly',
        status: 'completed',
        value: '50.25',
        currency: '₹'
      },
      {
        id: uuidv4(),
        name: 'Subscription',
        cuantity: 1,
        billing: 'monthly',
        status: 'completed',
        value: '5.00',
        currency: '₹'
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  }
});

mock.onGet('/api/management/invoices').reply(200, {
  invoices: [
    {
      id: '28382843',
      currency: '₹',
      amount: 65.28,
      status: 'paid',
      createdAt: moment()
        .subtract(1, 'hours')
        .toDate()
        .getTime(),
      customer: {
        name: 'akshay',
        email: 'akshay@gmail.com'
      }
    },
    {
      id: '28382845',
      currency: '₹',
      amount: 253.76,
      status: 'pending',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(5, 'hours')
        .toDate()
        .getTime(),
      customer: {
        name: 'rithu',
        email: 'rithu@gmail.com'
      }
    },
    {
      id: '28382345',
      currency: '₹',
      amount: 781.50,
      status: 'canceled',
      createdAt: moment()
        .subtract(6, 'days')
        .subtract(4, 'hours')
        .toDate()
        .getTime(),
      customer: {
        name: 'redhan',
        email: 'redhan@gmail.com'
      }
    },
 
    
  ]
});

mock.onGet('/api/management/invoices/1').reply(200, {
  invoice: {
    id: '765ed153',
    dueDate: moment()
      .toDate()
      .getTime(),
    issueDate: moment()
      .add(15, 'days')
      .toDate()
      .getTime(),
    ref: 'DEV-9483',
    customer: {
      name: 'rithesh',
      company: ' 12345',
      taxId: '6934656584231',
      address: 'vijayanagr, india'
    },
    products: [
      {
        id: uuidv4(),
        desc: 'Freelancer Subscription (12/05/2019 - 11/10/2019)',
        value: '55.50'
      }
    ],
    subtotal: '50.00',
    taxes: '5.50',
    total: '55.50',
    currency: '₹',
    createdAt: moment()
      .toDate()
      .getTime()
  }
});
