Ext.setup({
	onReady: function() {
		var panel = new Ext.Panel({
			fullscreen : true,
			layout : {
				type  : "obox",
				align : "stretch"
			},
			dockedItems : {
				xtype : "toolbar",
				dock  : "top",
				title : "Ext.layout.OBoxLayout by Mitchell Simoens"
			},
			defaults : {
				monitorOrientation : true,
				flex               : 1
			},
			items : [
				{
					xtype    : "container",
					layout   : {
						type        : "obox",
						align       : "stretch",
						orientation : "vertical"
					},
					defaults : { flex : 1 },
					items    : [
						{
							xtype : "container",
							html  : "Item One",
							cls   : "card1"
						},
						{
							xtype : "container",
							html  : "Item Two",
							cls   : "card2"
						}
					]
				},
				{
					xtype  : "container",
					layout : {
						type       : "obox",
						align      : "stretch",
						lockChange : true
					},
					defaults : { flex : 1 },
					items  : [
						{
							xtype : "container",
							html  : "Item Three<br><br>We are locked",
							cls   : "card3"
						},
						{
							xtype : "container",
							html  : "Item Four<br><br>We are locked",
							cls   : "card4"
						}
					]
				}
			]
		});
	}
});