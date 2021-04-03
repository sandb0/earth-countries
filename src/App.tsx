import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyles from './Assets/StyleSheets/GlobalStyles';

import { HomePage, SingleCountryPage } from './Pages';

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
