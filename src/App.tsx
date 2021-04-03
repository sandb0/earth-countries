import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage, SingleCountryPage } from './pages';

import GlobalStyles from './assets/styleSheets/GlobalStyles';

import CountryPresenter from './core/infrastructure/Presenters/CountryPresenter';
import CountryActions from './core/infrastructure/StateManagers/Redux/CountryActions';
import reduxStore from './ReduxStore';
import CountryService from './core/application/CountryService';
import CountryRepositoryLocalStorage from './core/infrastructure/Repositories/CountryRepositoryLocalStorage';
import CountryRepositoryGraphQL from './core/infrastructure/Repositories/CountryRepositoryGraphQL';

import apolloClient from './ApolloClient';
import CountryMapper from './core/infrastructure/Repositories/CountryMapper';

const countryMapper = new CountryMapper();
const localStorageRepository = new CountryRepositoryLocalStorage(countryMapper);
const countryRepositoryGraphQL = new CountryRepositoryGraphQL(
  apolloClient,
  countryMapper
);
const countryService = new CountryService(
  localStorageRepository,
  countryRepositoryGraphQL
);
const countryActions = new CountryActions();
const countryPresenter = new CountryPresenter(countryService, countryActions);

const App: React.FC = () => {
  return (
    <>
      <Provider store={reduxStore}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <HomePage presenter={countryPresenter} />
            </Route>
            <Route
              path="/country/:countryId"
              component={SingleCountryPage}
            ></Route>
          </Switch>
        </BrowserRouter>
      </Provider>

      <GlobalStyles />
    </>
  );
};

export default App;
