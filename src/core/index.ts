/** Import Country Core */
import CountryPresenter from '../core/infrastructure/Presenters/CountryPresenter';
import CountryActions from '../core/infrastructure/StateManagers/Redux/CountryActions';
import CountryService from '../core/application/CountryService';
import CountryRepositoryLocalStorage from '../core/infrastructure/Repositories/CountryRepositoryLocalStorage';
import CountryRepositoryGraphQL from '../core/infrastructure/Repositories/CountryRepositoryGraphQL';
import CountryMapper from '../core/infrastructure/Repositories/CountryMapper';

/** Import libs */
import apolloClient from '../libs/ApolloClient';

/** Instantiate Country Core */
const countryMapper = new CountryMapper();
const localStorageRepository = new CountryRepositoryLocalStorage(
  countryMapper,
  localStorage
);
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

export default countryPresenter;
