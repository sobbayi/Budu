
//Fix for older browsers that have no concept of what console.log() means
//Add it at the top of your Javascript script file or start of you app

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };