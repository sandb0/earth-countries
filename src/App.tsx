import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage, SingleCountryPage } from './pages';

import GlobalStyles from './assets/styleSheets/GlobalStyles';

import CountryPresenter from './core/infrastructure/Presenters/CountryPresenter';
import CountryActions from './core/infrastructure/StateManagers/Redux/CountryActions';
import reduxStore from './ReduxStore';

const countryActions = new CountryActions();
const countryPresenter = new CountryPresenter(countryActions);

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
