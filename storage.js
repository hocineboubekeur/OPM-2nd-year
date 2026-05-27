// modules/storage.js

const Storage = {
    save(key, data) {
        localStorage.setItem(`opm_${key}`, JSON.stringify(data));
    },
    get(key) {
        const data = localStorage.getItem(`opm_${key}`);
        return data ? JSON.parse(data) : null;
    },
    clear(key) {
        localStorage.removeItem(`opm_${key}`);
    }
};