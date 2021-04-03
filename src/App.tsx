import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyles from './assets/styleSheets/GlobalStyles';

import { HomePage, SingleCountryPage } from './pages';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route
            path="/country/:countryId"
            component={SingleCountryPage}
          ></Route>
        </Switch>
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
};

export default App;
