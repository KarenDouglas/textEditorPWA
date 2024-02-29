import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => {
  console.log('PUT to the database');
 // Retrieve all keys of previous entries

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

   // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');

    // Open up the desired object store
  const store = tx.objectStore('jate');
// gets all keys from store
  const keysRequest = store.getAllKeys();
  const keys = await keysRequest;
// gets new id from the length of the keys array
 const id = keys.length

  // use put method 
  const request = store.put({id, content });

  // Get confirmation of the request.
  const result = await request;

  console.log('Data saved to the database', result);
};
// export const putDb = async (content) => console.error('putDb not implemented');


// export const getDb = async () => console.error('getDb not implemented');
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();
  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  const localData = localStorage.getItems('content');
  console.log(typeof arr)
  console.log('data',localData)
  return result;
};

initdb();
