/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {
	tinymce.create('tinymce.plugins.FigureTagPlugin', {
		init : function(ed, url) {
			// Register commands
			var pathArray = window.location.pathname.split( '/' );
			ed.addCommand('mceFigureTag', function() {
				// Internal image object like a flash placeholder
				if (ed.dom.getAttrib(ed.selection.getNode(), 'class', '').indexOf('mceItem') != -1)
					return;

				ed.windowManager.open({
					file : url + '/figuretag.htm',
					width : 480 + parseInt(ed.getLang('figuretag.delta_width', 0)),
					height : 385 + parseInt(ed.getLang('figuretag.delta_height', 0)),
					inline : 1,					
				}, {
					plugin_url : url,
					type: pathArray[pathArray.length - 3],
					id: pathArray[pathArray.length - 2]
				});
			});

			// Register buttons
			ed.addButton('figuretag', {
				title : 'figuretag.desc',
				cmd : 'mceFigureTag',
				image: url + '/img/sample.gif'
			});
		},

		getInfo : function() {
			return {
				longname : 'Figure Tags for Drupal',
				author : 'Rick Taylor',
				authorurl : 'http://ricktaylordesign.co.uk',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('figuretag', tinymce.plugins.FigureTagPlugin);
})();