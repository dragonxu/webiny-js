// @flow
import * as React from "react";
import { Grid, Cell } from "webiny-ui/Grid";
import { I18NInput } from "webiny-app-i18n/admin/components";
import { Switch } from "webiny-ui/Switch";
import { get } from "lodash";

const TermsOfServiceSettings = ({ Bind, data }: Object) => {
    const enabled = get(data, "termsOfServiceMessage.enabled");

    return (
        <>
            <Grid>
                <Cell span={12}>
                    <Bind name={"termsOfServiceMessage.enabled"}>
                        <Switch label={"Enabled"} />
                    </Bind>
                </Cell>
                <Cell span={12}>
                    <Bind name={"termsOfServiceMessage.message"}>
                        <I18NInput
                            disabled={!enabled}
                            richText
                            label={"Terms of service message"}
                            description={
                                "Show this message near the submit button or event ask users to accept before submitting."
                            }
                        />
                    </Bind>
                </Cell>
            </Grid>
        </>
    );
};

export default TermsOfServiceSettings;