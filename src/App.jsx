import { useRef } from "react";

import { useSessionStorage } from "./use-session-storage";
import { STORAGE_KEYS } from "./constants";

import "./App.css";

function App() {
  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);

  const { data, setData } = useSessionStorage();

  const handleSave = (inputKey, ref) => {
    setData({
      key: inputKey,
      value: ref?.current?.value ?? null,
    });
  };

  return (
    <div className="App">
      <h1>React hooks talk</h1>

      <h2>useSessionStorage</h2>

      <div className="card">
        <input
          name="name" //
          ref={nameInputRef}
          placeholder="Name"
          defaultValue={data?.[STORAGE_KEYS.NAME]}
        />

        <br />
        <br />

        <button onClick={() => handleSave(STORAGE_KEYS.NAME, nameInputRef)}>
          Save
        </button>
      </div>

      <div className="card">
        <input
          name="age" //
          ref={ageInputRef}
          placeholder="Age"
          defaultValue={data?.[STORAGE_KEYS.AGE]}
        />

        <br />
        <br />

        <button onClick={() => handleSave(STORAGE_KEYS.AGE, ageInputRef)}>
          Save
        </button>
      </div>

      <h3>Session Storage data</h3>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
