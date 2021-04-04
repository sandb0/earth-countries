import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage, SingleCountryPage, EditCountryPage } from './pages';

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

            <Route path="/country/:countryId" exact>
              <SingleCountryPage presenter={countryPresenter} />
            </Route>

            <Route path="/country/:countryId/edit" exact>
              <EditCountryPage presenter={countryPresenter} />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>

      <GlobalStyles />
    </>
  );
};

export default App;
