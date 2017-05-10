/**
 * Created by erickacorrales on 2/5/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as tenantActions from '../../actions/tenantActions';
import {bindActionCreators} from 'redux';

class TenantsPage extends React.Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      tenant: { name: "" }
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(event) {
    const tenant = this.state.tenant;
    tenant.name = event.target.value;
    this.setState({tenant:tenant});
  }

  onClickSave(){
    this.props.actions.createTenant(this.state.tenant);
  }

  tenantRow(tenant, index ){
    return <div key={index}>{tenant.name}</div>;
  }

  render() {
    return (
      <div>
        <h1>Tenants</h1>
          {this.props.tenants.map(this.tenantRow)}
        <h2>Add Tenant</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.tenant.name} />

        <input
          type="submit"
          value="save"
          onClick={this.onClickSave}/>
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
