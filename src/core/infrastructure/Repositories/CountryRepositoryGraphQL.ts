import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import CountryMapper from './CountryMapper';

export type FlagProps = {
  svgFile: string;
};

export type CountryDTO = {
  name: string;
  area: number;
  population: number;
  capital: string;
  flag: FlagProps;
};

export default class CountryRepositoryGraphQL {
  private apolloClient: ApolloClient<NormalizedCacheObject>;
  private repositoryMapper: CountryMapper;

  public constructor(
    apolloClient: ApolloClient<NormalizedCacheObject>,
    repositoryMapper: CountryMapper
  ) {
    this.apolloClient = apolloClient;
    this.repositoryMapper = repositoryMapper;
  }

  public async findAll() {
    const response = await this.apolloClient.query({
      query: gql`
        {
          Country {
            name
            area
            population
            capital
            flag {
              svgFile
            }
            location {
              latitude
              longitude
            }
            topLevelDomains {
              name
            }
          }
        }
      `,
    });

    const countriesResponse = response.data.Country as CountryDTO[];
    return this.repositoryMapper.toDomain(countriesResponse);
  }
}
