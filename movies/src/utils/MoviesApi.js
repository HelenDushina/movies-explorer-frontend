class Api {

  constructor (options) {
    this._url = options.baseUrl
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse);
  }

}

const api = new Api({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
});

export default api;