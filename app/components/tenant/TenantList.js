/**
 * Created by erickacorrales on 10/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import TenantRow from './TenantRow';

const TenantList = ({tenants}) => {

  return (

    <table className="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Last Name</th>
      </tr>
      </thead>
      <tbody>
      {tenants.map(tenant =>
        <TenantRow key={tenant.id} tenant={tenant}/>
      )}
      </tbody>
    </table>
  );
};

TenantList.propTypes = {
  tenants: PropTypes.array.isRequired
};

export default TenantList;
