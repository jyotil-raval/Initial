angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("app/hello.html","<h1>{{ $ctrl.hello }}</h1>\n");}]);