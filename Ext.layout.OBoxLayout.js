Ext.ns("Ext.layout");

Ext.layout.OBoxLayout = Ext.extend(Ext.layout.BoxLayout, {
	constructor: function(config) {
		var me = this;

		//set a default orientation
		Ext.applyIf(config, {
			orientation : (Ext.getOrientation() === "landscape") ? "horizontal" : "vertical"
		});

		Ext.layout.OBoxLayout.superclass.constructor.call(me, config);
	},

	onOrientationChange: function(owner, orientation, width, height) {
		var me = this;

		if (me.lockChange) { return null; }

		me.orientation = (me.orientation === "horizontal") ? "vertical" : "horizontal";

		me.cleanStyles(me);
	},

	layout: function() {
		var me    = this,
		    owner = me.owner;

		if (!owner.hasListener("beforeorientationchange")) {
			owner.on("beforeorientationchange", me.onOrientationChange, me);
		}

		Ext.layout.OBoxLayout.superclass.layout.call(me);
	},

	cleanStyles: function(me) {
		me.getTarget().setStyle({
			"min-width"  : null,
			"height"     : null,
			"min-height" : null,
			"width"      : null
		});
	}
});

Ext.regLayout("obox", Ext.layout.OBoxLayout);