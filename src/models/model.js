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
    SelectInput,
    FileField,
    FileInput,
    NumberField,
    NumberInput,
    ArrayField,
    ArrayInput,
    SimpleFormIterator,
    ImageField,
    ImageInput,
    BooleanField,
    BooleanInput,
    DateField,
    RichTextField,
    ReferenceArrayField,
    SingleFieldList,
    ChipField,
    ReferenceArrayInput,
    SelectArrayInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";


const ModelFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Поиск" source="name" alwaysOn />
        <NumberInput label="Количество цветов" source="colors_num" alwaysOn />
    </Filter>
);

export const ModelList = props => (
    <List {...props} filters={<ModelFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="name" label="Название" />
            <RichTextField source="description" label="Описание" />
            <NumberField source="colors_num" label="Количество цветов" />
            <TextField source="print_time" label="Время печати, минут" />
            <ReferenceArrayField label="Тэги" reference="storage/model-library/tags" source="tag_ids">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ShowButton label="" />
            <EditButton label="" />
            <DeleteButton label="" redirect={false} />
        </Datagrid>
    </List>
);

export const ModelShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" label="Название" />
            <NumberField source="colors_num" label="Количество цветов" />
            <RichTextField source="description" label="Описание" />
            <TextField source="print_time" label="Время печати, минут" />
            <TextField source="pieces_num" label="Количество изделий, шт." />
            <TextField source="piece_size" label="Габариты" />
            <TextField source="createdby" label="Кем добавлено" />
            <DateField source="createdate" label="Дата создания" showTime={true} />
            <DateField source="lastupdate" label="Дата изменения" showTime={true} />
            <ReferenceArrayField label="Тэги" reference="storage/model-library/tags" source="tag_ids">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ArrayField source="files" label="Файлы">
                <Datagrid>
                    <FileField source="file.src" title="file.title" label="Файл" />
                    <TextField source="name" label="Название" />
                </Datagrid>
            </ArrayField>
            <ArrayField source="images" label="Изображения">
                <Datagrid>
                    <ImageField source="image.src" title="image.title" label="Изображение" />
                    <BooleanField source="is_thumbnail" label="Главное изображение" />
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);

export const ModelCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <TextInput source="name" label="Название" />
            <RichTextInput source="description" label="Описание" />
            <TextInput source="print_time" label="Время печати, минут" />
            <TextInput source="pieces_num" label="Количество изделий, шт." />
            <TextInput source="piece_size" label="Габариты" />

            <SelectInput source="colors_num" label="Количество цветов" choices={[
                { id: "Одноцветная", name: "Одноцветная" },
                { id: "Двухцветная", name: "Двухцветная" },
            ]} />

            <ReferenceArrayInput source="tag_ids" reference="storage/model-library/tags">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>

            <ArrayInput source="files">
                <SimpleFormIterator>
                    <FileInput source="file" label="Файл">
                        <FileField source="src" title="title" />
                    </FileInput>
                    <TextInput source="name" label="Название файла" />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="images">
                <SimpleFormIterator>
                    <ImageInput source="image" label="Файл">
                        <ImageField source="src" title="title" />
                    </ImageInput>
                    <BooleanInput source="is_thumbnail" label="Главное изображение" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

export const ModelEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" label="Название" />
            <RichTextInput source="description" label="Описание" />
            <TextInput source="print_time" label="Время печати, минут" />
            <TextInput source="pieces_num" label="Количество изделий, шт." />
            <TextInput source="piece_size" label="Габариты" />
            <SelectInput source="colors_num" label="Количество цветов" choices={[
                { id: "Одноцветная", name: "Одноцветная" },
                { id: "Двухцветная", name: "Двухцветная" },
            ]} />

            <ReferenceArrayInput source="tag_ids" reference="storage/model-library/tags">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>

            <ArrayInput source="files">
                <SimpleFormIterator>
                    <FileInput source="file" label="Файл">
                        <FileField source="src" title="title" />
                    </FileInput>
                    <TextInput source="name" label="Название файла" />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="images">
                <SimpleFormIterator>
                    <ImageInput source="image" label="Изображение">
                        <ImageField source="src" title="title" />
                    </ImageInput>
                    <BooleanInput source="is_thumbnail" label="Главное изображение" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);