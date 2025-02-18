import Heading from "../ui/Heading";
import Row from "../ui/Row.jsx";

import UpdateSettingsForm from "../features/settings/UpdateSettingsForm.jsx";

function Settings() {
  return (<Row>
    <Row>
      <Heading as="h1">Settings</Heading>
      <UpdateSettingsForm/>
    </Row>
  </Row>)
}

export default Settings;
