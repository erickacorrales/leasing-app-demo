import React  from 'react';
import Header from './commons/Header';
import AppRouter from './AppRouter';

class App extends React.Component {
  render() {
    return (
        <div className="container-fluid">
          <Header/>
          <AppRouter/>
        </div>
    );
  }
}
export default App;
