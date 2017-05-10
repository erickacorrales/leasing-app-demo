import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
  return(
    <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
        {" | "}
        <Link to="/tenants" activeClassNAme="active">Tenants</Link>
      <hr/>
    </nav>
  );
};

export default Header;
