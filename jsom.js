//Getting Workflow Manager - Start Up Scripts Example
ExecuteOrDelayUntilScriptLoaded(function () {
    ExecuteOrDelayUntilScriptLoaded(function () {
        SP.SOD.registerSod('SP.ClientContext', SP.Utilities.Utility.getLayoutsPageUrl('sp.js'));
        SP.SOD.registerSod('SP.WorkflowServices.WorkflowServicesManager', SP.Utilities.Utility.getLayoutsPageUrl('SP.WorkflowServices.js'));
        SP.SOD.loadMultiple(['SP.ClientContext', 'SP.WorkflowServices.WorkflowServicesManager'], function () {
            var context = SP.ClientContext.get_current();
            var web = context.get_web();
            var servicesManager = SP.WorkflowServices.WorkflowServicesManager.newObject(context, web);
            var instanceService = servicesManager.getWorkflowInstanceService();
        });
    }, "sp.js");
}, "sp.runtime.js");
