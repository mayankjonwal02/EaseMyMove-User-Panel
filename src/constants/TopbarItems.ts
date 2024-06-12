import { icons } from 'lucide-react'
import {faBox,faUserTie,faUser,faHeadphones,faMoneyBill} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export const TopbarItems = [

  {
    label: 'Orders',
    path: '/orders',
    icons: faBox,
  },
  // {
  //   label: 'Vendors',
  //   path: '/vendors',
  //   icons: faUserTie,
  // },
  // {
  //   label: 'Users',
  //   path: '/users',
  //   icons: faUser,
  // },
 
  {
    label: 'Helpdesk',
    path: '/helpdesk',
    icons: faHeadphones,
  },
  {
    label: 'Transactions',
    path: '/transactions',
    icons: faMoneyBill,
  },

]