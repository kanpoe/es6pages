var lib='../../lib/';//引用库目录
requirejs.config({
    baseUrl: '../dist/js/',//页面逻辑js目录
    paths: {
        "jquery":lib+"jquery-3.1.1.min"
        //template: lib+  './template/3.0.0/template'
    }
});