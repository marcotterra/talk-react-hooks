import React from "react";

import { SessionStorageClient } from "./session-storage";
import { STORAGE_KEYS } from "./constants";

function useSessionStorage() {
  const [data, _setData] = React.useState(null);

  function setData({ key, value }) {
    SessionStorageClient.set({ key, value });

    _setData((oldValue) => ({
      ...oldValue,
      [key]: value,
    }));
  }

  function handleStorageEvent() {
    Object.keys(STORAGE_KEYS) //
      .forEach((key) => {
        const sessionData = SessionStorageClient.get({ key });

        _setData((oldValue) => ({
          ...oldValue,
          [key]: sessionData,
        }));
      });
  }

  React.useEffect(() => {
    window.addEventListener("load", handleStorageEvent);

    return () => {
      window.removeEventListener("load", handleStorageEvent);
    };
  }, []);

  return { data, setData };
}

export { useSessionStorage };
