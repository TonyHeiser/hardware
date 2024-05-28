async function fetchData(url) {
  const response = await fetch(url);
  return await response.json();
}

export default fetchData("https://jsonplaceholder.typicode.com/users/1");