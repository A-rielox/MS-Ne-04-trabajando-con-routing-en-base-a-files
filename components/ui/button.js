import Link from 'next/link';
import classes from './button.module.css';

import React from 'react';

const button = props => {
   return (
      <Link href={props.link}>
         <a className={classes.btn}>{props.children}</a>
      </Link>
   );
};

export default button;
