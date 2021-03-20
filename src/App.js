import * as React from "react";
import { Admin, Resource } from "react-admin";
import { firebaseDataProvider, firebaseAuthProvider } from "./config";
import { ModelList, ModelCreate, ModelShow, ModelEdit } from "./models/model";


const App = () => (
  <Admin dataProvider={firebaseDataProvider} authProvider={firebaseAuthProvider}>
    <Resource name="storage/model-library/public" list={ModelList} show={ModelShow} create={ModelCreate} edit={ModelEdit}/>
  </Admin>
);

export default App;