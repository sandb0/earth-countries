import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage, SingleCountryPage } from './pages';

import reduxStore from './libs/ReduxStore';

import countryPresenter from './core';

import GlobalStyles from './assets/styleSheets/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <Provider store={reduxStore}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <HomePage presenter={countryPresenter} />
            </Route>
            <Route path="/country/:countryId">
              <SingleCountryPage presenter={countryPresenter} />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>

      <GlobalStyles />
    </>
  );
};

export default App;
