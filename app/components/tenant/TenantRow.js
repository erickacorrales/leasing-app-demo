/**
 * Created by erickacorrales on 10/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';


const TenantRow = ({tenant}) => {
  return (
    <tr>
      <td>{tenant.name}</td>
      <td>{tenant.lastName}</td>
    </tr>
  );
};

TenantRow.propTypes = {
  tenant: PropTypes.object.isRequired
};

export default TenantRow;
