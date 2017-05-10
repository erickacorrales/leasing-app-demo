/**
 * Created by erickacorrales on 10/5/17.
 */
import delay from './delay';
const tenants = [
  {
    id: "1",
    name: "Luke",
    lastName:"Skywalker"
  },
  {
    id: "2",
    name: "Hand",
    lastName:"Solo"
  }

];

class TenantApi {
  static getAllTenants() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tenants));
      }, delay);
    });
  }
}
export default TenantApi;
