import * as React from "react";
import {
    Datagrid,
    List,
    Show,
    Create,
    Edit,
    Filter,
    SimpleShowLayout,
    SimpleForm,
    TextField,
    TextInput,
    ShowButton,
    EditButton,
    DeleteButton,
    BooleanField,
    BooleanInput,
} from "react-admin";


const TagFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Поиск" source="name" alwaysOn />
    </Filter>
);

export const TagList = props => (
    <List {...props} filters={<TagFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="name" label="Название" />
            <BooleanField source="as_category" label="Показывать как категорию" />
            <ShowButton label="" />
            <EditButton label="" />
            <DeleteButton label="" redirect={false} />
        </Datagrid>
    </List>
);

export const TagShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" label="Название" />
            <BooleanField source="as_category" label="Показывать как категорию" />
        </SimpleShowLayout>
    </Show>
);

export const TagCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <TextInput source="name" label="Название" />
            <BooleanInput source="as_category" label="Показывать как категорию" />
        </SimpleForm>
    </Create>
);

export const TagEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" label="Название" />
            <BooleanInput source="as_category" label="Показывать как категорию" />
        </SimpleForm>
    </Edit>
);
