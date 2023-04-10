/*global QUnit*/

sap.ui.define([
	"fragmentDialog/fragment-dialog/controller/FragmentDialog.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FragmentDialog Controller");

	QUnit.test("I should test the FragmentDialog controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
