import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { CountryDTO } from './CountryDTO';
import CountryMapper from './CountryMapper';

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
            id: numericCode
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
