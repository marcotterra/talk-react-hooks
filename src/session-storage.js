function sessionStorageClient() {
  const get = ({ key = "" }) => {
    const value = window.sessionStorage.getItem(key);
    return JSON.parse(value) ?? null;
  };

  const set = ({ key = "", value = "" }) => {
    window.sessionStorage.setItem(key, JSON.stringify(value) ?? null);
  };

  return { get, set };
}

const client = sessionStorageClient();
Object.freeze(client);

export { client as SessionStorageClient };
