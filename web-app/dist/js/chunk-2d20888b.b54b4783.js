(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20888b"],{a4ce:function(t,s,n){"use strict";n.r(s);var e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"page-node-show"},[n("div",{staticClass:"row mt-3"},[n("div",{staticClass:"col-md-12"},t._l(t.nodes,function(s){return n("div",{key:s.id,staticClass:"box mb-3"},[n("div",{staticClass:"box-heading"},[t._v("\n          "+t._s(s.title)+"\n        ")]),n("div",{staticClass:"box-body"},[n("ul",{staticClass:"nav nav-pills"},t._l(s.children,function(s){return n("li",{key:s.id,staticClass:"nav-item mr-2 mb-1"},[n("router-link",{staticClass:"btn text-gray-40 btn-outline-light",attrs:{to:{name:"nodes.node",params:{id:s.id}}}},[t._v("\n                "+t._s(s.title)+"\n              ")])],1)}),0)])])}),0)])])},a=[],i={data:function(){return{nodes:[]}},created:function(){this.getNodes()},methods:{getNodes:function(){var t=this;this.$http.get("nodes?all=yes").then(function(s){var n=s.data;t.nodes=n})}}},l=i,o=n("17cc"),d=Object(o["a"])(l,e,a,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d20888b.b54b4783.js.map