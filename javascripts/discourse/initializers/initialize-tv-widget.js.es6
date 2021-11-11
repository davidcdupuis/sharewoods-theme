import { withPluginApi } from "discourse/lib/plugin-api";
import { on } from "discourse-common/utils/decorators";
import { createWidget } from 'discourse/widgets/widget';

export default {
  name: "tradingview-banner-widget",
  initialize() {
    withPluginApi("0.8", api => {
			createWidget('tradingview-banner-widget', {
			  tagName: 'div.hello',

			  html() {
			    return 'Hello World!';
			  }
			});
    });
  }
};
