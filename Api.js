import { apiKey } from  './digitransitConfig.js';

async function fetchGraphQLData(query, variables = {}) {
  const url = 'https://api.digitransit.fi/routing/v1/routers/waltti/index/graphql';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'digitransit-subscription-key': apiKey,
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function fetchStopIdByNameOrNumber(nameOrNumber) {
    const query = `
      {
        stops(name: "${nameOrNumber}") {
          gtfsId
          name
          code
          lat
          lon
        }
      }
    `;
  
    const data = await fetchGraphQLData(query);
    return data.data.stops;
}

export async function fetchStopsByRadius(lat, lon, radius) {
  const query = `
    {
      stopsByRadius(lat:${lat}, lon:${lon}, radius:${radius}) {
        edges {
          node {
            stop {
              gtfsId
              name
            }
          }
        }
      }
    }
  `;

  const data = await fetchGraphQLData(query);
  return data.data.stopsByRadius.edges.map(edge => edge.node.stop);
}

export default fetchGraphQLData;