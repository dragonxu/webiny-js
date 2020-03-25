import textFieldPlugin from "./../text";
import { FbBuilderFieldPlugin } from "@webiny/app-headless-cms/types";

const plugin: FbBuilderFieldPlugin = {
    type: "content-model-editor-field-type",
    name: "content-model-editor-field-type-state-region",
    field: {
        ...textFieldPlugin.field,
        unique: true,
        group: "content-model-editor-field-group-contact",
        name: "stateRegion",
        label: "State/Region",
        createField(props) {
            const { i18n } = props;
            return {
                ...textFieldPlugin.field.createField(props),
                name: this.name,
                fieldId: "stateRegion",
                label: {
                    values: [
                        {
                            locale: i18n.getDefaultLocale().id,
                            value: "State/Region"
                        }
                    ]
                }
            };
        }
    }
};

export default plugin;