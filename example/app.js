// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor : 'white',
	layout : 'vertical'
});
var label = Ti.UI.createLabel();
win.add(label);

// TODO: write your module tests here
var actionbarsearch = require('com.evarino.actionbarsearch');
Ti.API.info("module is => " + actionbarsearch);

if (Ti.Platform.name == "android") {
	var view = actionbarsearch.createABSearchView({
		hintText : "Testing..."
	});
	win.activity.onCreateOptionsMenu = function(menu) {
		var item = menu.add({
			title : 'Search',
			icon : (Ti.Android.R.drawable.ic_menu_search ? Ti.Android.R.drawable.ic_menu_search : Ti.App.Android.R.drawable.appicon),
			actionView : searchWidget,
			showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
		});
	}
}

win.open();
