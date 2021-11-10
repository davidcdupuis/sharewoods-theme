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
			    return '<div class="tradingview-widget-container"><div class="tradingview-widget-container__widget"></div><div class="tradingview-widget-copyright"><a href="https://fr.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span class="blue-text">AAPL Prix aujourd\'hui</span></a> par TradingView</div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js" async>{"symbol": "NASDAQ:AAPL","width": "100%","locale": "en","colorTheme": "light","isTransparent": false}</script></div>';
			  }
			});
    });
  }
};
