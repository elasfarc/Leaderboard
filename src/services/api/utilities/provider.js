const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const postOptions = (data) => ({
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(data),
});

export const post = async ({ entryPoint, data }) => {
  const options = postOptions(data);
  const url = `${BASE_URL}${entryPoint}`;

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
