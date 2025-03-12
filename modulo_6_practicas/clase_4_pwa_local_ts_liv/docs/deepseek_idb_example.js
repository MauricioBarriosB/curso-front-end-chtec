// db.js
import { openDB } from 'idb';

const dbPromise = openDB('my-database', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('my-store')) {
      db.createObjectStore('my-store');
    }
  },
});

export const saveData = async (key, data) => {
  const db = await dbPromise;
  const tx = db.transaction('my-store', 'readwrite');
  tx.store.put(data, key);
  await tx.done;
};

export const getData = async (key) => {
  const db = await dbPromise;
  return db.transaction('my-store').store.get(key);
};

// api.js
import { saveData, getData } from './db';

export const fetchData = async () => {
  if (navigator.onLine) {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    await saveData('my-data', data);
    return data;
  } else {
    return getData('my-data');
  }
};

// MyComponent.js
import React, { useEffect, useState } from 'react';
import { fetchData } from './api';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render your data here */}
    </div>
  );
};

export default MyComponent;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////