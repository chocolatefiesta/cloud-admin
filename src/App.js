import * as React from "react";
import { Admin, Resource } from "react-admin";
import { firebaseDataProvider, firebaseAuthProvider } from "./config";
import { ModelList, ModelCreate, ModelShow, ModelEdit } from "./models/model";
import { TagList, TagCreate, TagShow, TagEdit } from "./models/tag";



const App = () => (
  <Admin dataProvider={firebaseDataProvider} authProvider={firebaseAuthProvider}>
    <Resource options={{ label: 'Модели' }} name="storage/model-library/public" list={ModelList} show={ModelShow} create={ModelCreate} edit={ModelEdit} />
    <Resource options={{ label: 'Теги' }} name="storage/model-library/tags" list={TagList} show={TagShow} create={TagCreate} edit={TagEdit} />
  </Admin>
);

export default App;