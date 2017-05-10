/**
 * Created by erickacorrales on 2/5/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as tenantActions from '../../actions/tenantActions';
import {bindActionCreators} from 'redux';
import TenantList from './TenantList';

class TenantsPage extends React.Component {

  constructor(props, context){
    super(props, context);
  }

  render() {
    const {tenants} = this.props;
    return (
      <div>
        <h1>Tenants</h1>
        <TenantList tenants={tenants} />
      </div>
    );
  }
}

TenantsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  tenants: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return{
    tenants: state.tenants
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tenantActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantsPage);
