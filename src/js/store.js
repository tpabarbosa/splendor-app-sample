
import { createStore } from 'framework7';

const store = createStore({
  state: {
    user: null,
    isLoading: false,
    error: null,
    error_code: null,
    doctors: {
      count: 30,
    }
  },
  getters: {
    doctors({ state }) {
      return state.doctors;
    },
    errorCode({ state }) {
      return state.error_code;
    },
    error({ state }) {
      return state.error;
    },
    isLoading({ state }) {
      return state.isLoading;
    },
    user({ state }) {
      return state.user || null;
    }
  },
  actions: {
    setUser({ state }, user) {
      state.user = user;
    },
    async login({ state }, { username, password }) {
      state.error_code = null;
      state.error = null;
      state.isLoading = true;

      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': 'Basic ' + btoa(username + ':' + password),
        },
      }

      try {
        const res = await fetch(`https://splendor.dev/wp-json/wp/v2/dev/user/auth`, options)
        console.log(res)
        if (res.status === 200 || res.status === 500) {
          const data = await res.json()
          if (res.status === 200) {
            state.user = data.user_data
          } else {
            state.error = data.message
            state.error_code = data.code
            if (data.code === 'incorrect_password') {
              state.error = '<strong>Erro</strong>: A senha informada para o usuário <strong>' + username + '</strong> está incorreta. <a class="link external" href="https://splendor.dev/wp-login.php?action=lostpassword">Perdeu a senha</a>?'
            }
          }
        } else {
          throw new Error(`Fetch Error: ${res.status} - ${res.statusText}`)
        }
      } catch (err) {
        state.error = err.message
      } finally {
        state.isLoading = false
      }

      return !state.error
    }
  },
})
export default store;
