var FigureTagDialog = {
	preInit : function() {
		var url;

		tinyMCEPopup.requireLangPack();

	},

	init : function(ed) {
		var f = document.forms[0], nl = f.elements, ed = tinyMCEPopup.editor, dom = ed.dom, n = ed.selection.getNode();
		var loid = tinyMCEPopup.getWindowArg("id");
		var lotype = tinyMCEPopup.getWindowArg("type");
		tinyMCEPopup.resizeToInnerSize();
		//this.fillClassList('class_list');
		//this.fillFileList('src_list', fl);
		//this.fillFileList('over_list', fl);
		//this.fillFileList('out_list', fl);
		TinyMCE_EditableSelects.init();
		f.loid.value = loid;
		f.lotype.value = lotype;
	},

	insert : function(file, title) {
		var ed = tinyMCEPopup.editor, t = this, f = document.forms[0];

		if (f.citekey.value === '') {
			tinyMCEPopup.close();
			return;
		}

		t.insertAndClose();
	},

	insertAndClose : function() {
		var ed = tinyMCEPopup.editor, f = document.forms[0], nl = f.elements, v, args = {}, el, tagname;

		tinyMCEPopup.restoreSelection();

		// Fixes crash in Safari
		if (tinymce.isWebKit)
			ed.getWin().focus();

		el = ed.selection.getNode();

		tagname = "figure";

		ed.execCommand('mceInsertContent', false, "["+tagname+"]"+f.citekey.value+"[/"+tagname+"]", {skip_undo : 1});
		ed.undoManager.add();
	

		tinyMCEPopup.editor.execCommand('mceRepaint');
		tinyMCEPopup.editor.focus();
		tinyMCEPopup.close();
	},

	/*
	changeHeight : function() {
		var f = document.forms[0], tp, t = this;

		if (!f.constrain.checked || !t.preloadImg) {
			return;
		}

		if (f.width.value == "" || f.height.value == "")
			return;

		tp = (parseInt(f.width.value) / parseInt(t.preloadImg.width)) * t.preloadImg.height;
		f.height.value = tp.toFixed(0);
	},

	changeWidth : function() {
		var f = document.forms[0], tp, t = this;

		if (!f.constrain.checked || !t.preloadImg) {
			return;
		}

		if (f.width.value == "" || f.height.value == "")
			return;

		tp = (parseInt(f.height.value) / parseInt(t.preloadImg.height)) * t.preloadImg.width;
		f.width.value = tp.toFixed(0);
	},
	*/

};

FigureTagDialog.preInit();
tinyMCEPopup.onInit.add(FigureTagDialog.init, FigureTagDialog);
