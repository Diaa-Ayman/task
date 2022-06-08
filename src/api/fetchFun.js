import client from './gql-client';

const fetchData = async (query) => {
  const res = await client.query({ query: query });
  return res;
};

export default fetchData;
