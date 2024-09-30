// @ts-check

import { VscodeDemo } from "./demo.js";
import { DEMO_TAG_NAME, TOOLBAR_TAG_NAME } from "./shared.js";
import { VscodeDevToolbar } from "./toolbar.js";
import { VscodeThemeSelector } from "./theme-selector.js";
import { VscodeViewContainerSelector } from "./view-container-selector.js";

customElements.define(TOOLBAR_TAG_NAME, VscodeDevToolbar);
customElements.define(DEMO_TAG_NAME, VscodeDemo);
customElements.define("vscode-theme-selector", VscodeThemeSelector);
customElements.define(
  "vscode-view-container-selector",
  VscodeViewContainerSelector
);
