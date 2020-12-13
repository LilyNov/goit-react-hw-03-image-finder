function fetchImages(name, page) {
  const KEY = '19029120-3d5d472043b9b4c189da88885';

  return fetch(
    `https://pixabay.com/api/?q=${name}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${
      page * 12
    }`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('No response from server'));
  });
}

const api = { fetchImages };

export default api;
