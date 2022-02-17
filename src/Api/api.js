export default class apiClient {
  urlBase = 'https://rickandmortyapi.com/api/character';

  apiRequest = async (url) => {
    const res = await fetch(`${url}`);
    if (!res.ok) {
      return new Error('Error ' + res.status);
    }
    return res;
  };

  getPage = async (page = 1) => {
    return await this.apiRequest(`${this.urlBase}/?page=${page}`);
  };

  getDetails = async (id) => {
    return await this.apiRequest(`${this.urlBase}/${id}`);
  };

  searchByName = async (name) => {
    return await this.apiRequest(`${this.urlBase}/?name=${name}`);
  };
}
