import client from './gql-client';

// This function for fetching Data from a server...

const fetchData = async (query) => {
  const res = await client.query({ query: query });
  return res;
};

export default fetchData;
