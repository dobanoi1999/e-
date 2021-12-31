interface IStore {
  type: string;
  keys?: string;
  value?: any;
}
export const Storage = ({ type, keys, value }: IStore) => {
  switch (type) {
    case "set":
      return keys !== undefined && window.localStorage.setItem(keys, value);
    case "get":
      if (keys !== undefined && typeof window !== "undefined") {
        return window.localStorage.getItem(keys);
      }
      return null;
    case "remove":
      return keys !== undefined && window.localStorage.removeItem(keys);

    case "clear":
      return keys !== undefined && window.localStorage.clear();
    default:
      alert("localStorage type undefined");
      break;
  }
};
