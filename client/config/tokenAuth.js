import clienteAxios from './clienteAxios';

const tokenAuth = (token) => {
    if(token) {
        // obtiene token con axios del Auth
        clienteAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete clienteAxios.defaults.headers.common['Authorization'];
    }
}

export default tokenAuth;