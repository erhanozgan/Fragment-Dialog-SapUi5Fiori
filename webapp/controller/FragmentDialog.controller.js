sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("fragmentDialog.fragmentdialog.controller.FragmentDialog", {
            onInit: function () {
                    var data = {
                            student : []
                        }
                        var student = {
                            firstname : "Erhan",
                            gender : "Erkek",
                            dateofbirth : "15-Sep-1986",
                            fathername : "Ekrem"
                        };

                        var student2 = {
                            firstname : "Derya",
                            gender : "Bayan",
                            dateofbirth : "15-Sep-1987",
                            fathername : "Ekrem"
                        };

                        data.student.push(student);
                        data.student.push(student2);
                        var oModel = new sap.ui.model.json.JSONModel(data)
                        this.getView().setModel(oModel);
                    },

                    handleItemPress : function(oEvent){
                        var oCurrentStudent = oEvent.oSource.getSelectedItem().getBindingContext().getObject();
                        
                        if(!this.showstudentdialog){
                            this.showstudentdialog = sap.ui.xmlfragment("open",this);
                            var oModel = new sap.ui.model.json.JSONModel(oCurrentStudent);
                            this.showstudentdialog.setModel(oModel);
                        }
                        this.showstudentdialog.open();
                    }
            });
        }
    );
