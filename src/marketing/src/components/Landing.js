import React from 'react';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Landing() {

  return (
    <React.Fragment>
      <div>Hello Micro-Frontends</div>
      <div>
        <Link to="/pricing">
          <Button variant="contained" color="primary">
            Pricing Component
          </Button>
        </Link>
      </div>
    </React.Fragment>
  );
}