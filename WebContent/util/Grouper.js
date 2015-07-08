jQuery.sap.declare("sap.ui.demo.myFiori.util.Grouper");

sap.ui.demo.myFiori.util.Grouper = {
	LifecycleStatus : function(oContext) {
		var status = oContext.getProperty("LifecycleStatus");
		var text;
		if (status = "N") {
			text = "New";
		} else if (status = "P") {
			text = "In Process";
		}
		return {
			key : status,
			text : text
		};
	},
	GrossAmount : function(oContext) {
		var price = oContext.getProperty("GrossAmount");
		var currency = oContext.getProperty("CurrencyCode");
		var key, text;
		if (price <= 5000) {
			key = "LE10";
			text = "< 5000 " + currency;
		} else if (price <= 10000) {
			key = "LE100";
			text = "< 10.000 " + currency;
		} else {
			key = "GT100";
			text = "> 10.000 " + currency;
		}
		return {
			key : key,
			text : text
		};
	}
};
