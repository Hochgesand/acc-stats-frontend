(this["webpackJsonpacc-frontend"]=this["webpackJsonpacc-frontend"]||[]).push([[0],{17:function(e,t,s){},30:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s.n(a),n=s(20),c=s.n(n),i=(s(17),s(30),s(0));function d(){return Object(i.jsx)("button",{className:"btn btn-lg loading",children:"loading"})}function l(e){return Object(i.jsx)("div",{className:"alert alert-error m-4",children:Object(i.jsxs)("div",{className:"flex-1",children:[Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-6 h-6 mx-2 stroke-current",children:Object(i.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})}),Object(i.jsx)("label",{children:e.msg})]})})}var o=s(25),b=s(2),j=s.n(b),u=s(4),h=s(3),m="https://acc-api.aptinstall.de",p="".concat(m,"/sessions"),x="".concat(m,"/session");function O(e){return f.apply(this,arguments)}function f(){return f=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t,{method:"get",headers:void 0}).then(function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=2;break}throw Error("Could not fetch data");case 2:return e.abrupt("return",t.json());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}var v={getSessions:function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("".concat(p));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getSession:function(){var e=Object(u.a)(j.a.mark((function e(t){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=[],e.t0=s,e.next=4,O("".concat(x,"/").concat(t));case 4:return e.t1=e.sent,e.t0.push.call(e.t0,e.t1),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getTimesOfDriverById:function(){var e=Object(u.a)(j.a.mark((function e(t){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("".concat(m,"/driver/").concat(t,"/times"));case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCarModels:function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.t0=Object,e.next=4,O("".concat(m,"/car/models"));case 4:return e.t1=e.sent,e.t0.entries.call(e.t0,e.t1).map((function(e){var s=Object(h.a)(e,2),a=s[0],r=s[1];t.push({id:a,name:r})})),e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getSpecificCarByCarId:function(){var e=Object(u.a)(j.a.mark((function e(t){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=[],e.t0=s,e.next=4,O("".concat(m,"/car/").concat(t));case 4:return e.t1=e.sent,e.t0.push.call(e.t0,e.t1),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getSpecificCarModelByCarId:function(){var e=Object(u.a)(j.a.mark((function e(t){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=[],e.t0=s,e.next=4,O("".concat(m,"/car/model/").concat(t));case 4:return e.t1=e.sent,e.t0.push.call(e.t0,e.t1),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getPlayerById:function(){var e=Object(u.a)(j.a.mark((function e(t){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=[],e.t0=s,e.next=4,O("".concat(m,"/driver/").concat(t));case 4:return e.t1=e.sent,e.t0.push.call(e.t0,e.t1),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getGenericServerStats:function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.t0=t,e.next=4,O("".concat(m,"/stats"));case 4:return e.t1=e.sent,e.t0.push.call(e.t0,e.t1),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAllDrivers:function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("".concat(m,"/drivers"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},N=v;function g(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),r=1;r<t;r++)s[r-1]=arguments[r];var n=Object(a.useState)([]),c=Object(h.a)(n,2),i=c[0],d=c[1],l=Object(a.useState)(!0),o=Object(h.a)(l,2),b=o[0],m=o[1],p=Object(a.useState)(""),x=Object(h.a)(p,2),O=x[0],f=x[1],v=function(){var t=Object(u.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(""),t.prev=1,m(!0),t.next=5,N[e].apply(N,s);case 5:a=t.sent,d(a),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),f(t.t0.message);case 12:return t.prev=12,m(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){v()}),[]),{data:i,isLoading:b,error:O,fetchData:v}}function w(e){var t=g("getSpecificCarModelByCarId",e.id);return t.isLoading?Object(i.jsx)(d,{}):Object(i.jsx)(i.Fragment,{children:void 0===t.data[0]?"error":t.data[0].name})}function T(){var e=g("getGenericServerStats"),t={labels:["invalid laps","valid laps"],datasets:[{label:"LapsData",data:[0,0],backgroundColor:["rgb(255,0,0)","rgb(48,255,0)"],hoverOffset:0}]};return e.isLoading||(t={labels:["invalid laps","valid laps"],datasets:[{label:"LapsData",data:[e.data[0].totalInvalidLaps,e.data[0].totalValidLaps],backgroundColor:["rgb(255,0,0)","rgb(48,255,0)"],hoverOffset:0}]}),e.isLoading?Object(i.jsx)(d,{}):e.error.length>0?Object(i.jsx)(l,{msg:e.error}):Object(i.jsx)("div",{className:"max-w-5xl grid grid-rows-1 gap-4 ",children:Object(i.jsxs)("div",{className:"h-auto text-white mb-3 bg-base-300 p-4 rounded-box w-full",children:[Object(i.jsx)("p",{className:"text-2xl",children:"Some general useless information about our servers:"}),Object(i.jsx)("div",{className:"divider"}),Object(i.jsx)(o.a,{data:t,options:{responsive:!0,color:"red"}}),Object(i.jsxs)("p",{className:"text-2xl mt-2",children:["Which accumulate to ",e.data[0].totalLapCount," total laps"]}),Object(i.jsx)("div",{className:"divider"}),Object(i.jsx)("p",{className:"text-2xl",children:"Accumulated wasted time on all servers:"}),Object(i.jsx)("p",{className:"text-2xl",children:e.data[0].totalTimeWastedFormatted}),Object(i.jsx)("div",{className:"divider"}),Object(i.jsx)("p",{className:"text-2xl",children:"Most laps driven in one session:"}),Object(i.jsxs)("p",{className:"text-2xl",children:[e.data[0].mostLapsDrivenInASession," Laps",Object(i.jsx)("a",{href:"/session/"+e.data[0].mostLapsDriveInASessionId,children:Object(i.jsx)("button",{className:"ml-2 btn btn-sm",children:"Go To Session"})})]}),Object(i.jsx)("div",{className:"divider"}),Object(i.jsxs)("p",{className:"text-2xl",children:[e.data[0].totalUniquePlayerCount," unique players have used our servers!"]}),Object(i.jsx)("div",{className:"divider"}),Object(i.jsx)("p",{className:"text-2xl",children:"Most popular car and driven laps"}),Object(i.jsxs)("p",{children:["Car: ",Object(i.jsx)(w,{id:e.data[0].carModelIdWithMostLaps})]}),Object(i.jsxs)("p",{children:["Total laps: ",e.data[0].carModelWithMostLapsLapCount]})]})})}function L(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"flex flex-col md:flex-row",children:[Object(i.jsx)(T,{}),Object(i.jsxs)("div",{className:"flex flex-col ml-4",children:[Object(i.jsx)("a",{href:"/sessions",children:Object(i.jsx)("button",{className:"btn h-auto",children:"Show all sessions and top players per track"})}),Object(i.jsx)("a",{href:"/drivers",className:"mt-4",children:Object(i.jsx)("button",{className:"btn h-auto",children:"Show all Drivers"})})]})]})})}var S=s(22),y=s(5);function k(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"h-10 w-11/12 card bg-base-200 rounded-box place-items-center w-auto m-2 p-2",children:Object(i.jsx)("h2",{children:"Sessioninformation"})}),Object(i.jsx)("div",{className:"h-10 w-11/12 card bg-base-200 rounded-box place-items-center m-2 p-2",children:e.created_at}),Object(i.jsx)("div",{className:"h-10 card w-11/12 bg-base-200 rounded-box place-items-center m-2 p-2",children:e.trackName}),Object(i.jsx)("div",{className:"h-auto card w-11/12 bg-base-200 rounded-box place-items-center m-2 p-2",children:e.serverName}),Object(i.jsxs)("div",{className:"h-auto card w-11/12 bg-base-200 rounded-box place-items-center m-2 p-2",children:["Best Laptime overall: ",e.bestLapTimeFormatted," | ",e.bestDriver]})]})}function F(e){var t=g("getSpecificCarByCarId",e.id);return t.isLoading?Object(i.jsx)(d,{}):Object(i.jsx)(i.Fragment,{children:void 0===t.data[0]?"error":t.data[0].carName})}function I(e){var t,s=e.driver,a=e.bestLapTime,r=null===(t=e.sessionBigData.laps.find((function(e){return e.driverId===s.id})))||void 0===t?void 0:t.carId;return void 0===r&&(r=0),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:s.firstName}),Object(i.jsx)("td",{className:"content-end",children:s.lastName}),Object(i.jsx)("td",{children:s.shortName}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{className:"".concat(a===s.bestLapTime?"btn bg-green-500":""),children:s.bestLapTime})}),Object(i.jsx)("td",{children:Object(i.jsx)(F,{id:r})}),Object(i.jsx)("td",{children:Object(i.jsx)("a",{href:"/driver/"+s.id,children:Object(i.jsx)("button",{className:"btn",children:"Go To Driver"})})})]})}function D(e){var t=e.path;return{getData:function(){return fetch(t,{method:"get",headers:void 0}).then(function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=2;break}throw Error("Could not fetch data");case 2:return e.abrupt("return",t.json());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}function C(e){var t=e.lap,s=e.bestLapTime,a=e.bestSplit2,r=e.bestSplit3,n=e.bestSplit1;return Object(i.jsxs)("tr",{className:"".concat(s===t.lapTimeFormatted?"bg-blue-800":""),children:[Object(i.jsx)("td",{children:t.driverName}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{className:"".concat(s===t.lapTimeFormatted?"bg-green-600 btn":""),children:t.lapTimeFormatted})}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{className:"".concat(n===t.split1Formatted?"bg-purple-600 btn":""),children:t.split1Formatted})}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{className:"".concat(a===t.split2Formatted?"bg-purple-600 btn":""),children:t.split2Formatted})}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{className:"".concat(r===t.split3Formatted?"bg-purple-600 btn":""),children:t.split3Formatted})}),Object(i.jsx)("td",{children:Object(i.jsx)(F,{id:t.carId})}),Object(i.jsx)(A,{num:t.isValidForBest})]})}function A(e){return 1===e.num?Object(i.jsx)("td",{children:"Yes"}):Object(i.jsx)("td",{children:"No"})}function B(e){var t,s=e.sessionBigData,r=e.bestLapTime,n=Object(a.useState)([]),c=Object(h.a)(n,2),o=c[0],b=c[1],m=Object(a.useState)(!0),p=Object(h.a)(m,2),O=p[0],f=p[1],v=Object(a.useState)(""),N=Object(h.a)(v,2),g=N[0],w=N[1],T=Object(a.useState)(""),L=Object(h.a)(T,2),S=L[0],y=L[1],k=Object(a.useState)(""),F=Object(h.a)(k,2),I=F[0],A=F[1],B=Object(a.useState)(""),E=Object(h.a)(B,2),M=E[0],_=E[1],G=D({path:"".concat(x,"/").concat(null===(t=s.session)||void 0===t?void 0:t.id,"/laps")}).getData;return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G().then((function(e){var t="",a=Number.MAX_VALUE,r="",n=Number.MAX_VALUE,c="",i=Number.MAX_VALUE;e.forEach((function(e){var d;null===(d=s.drivers)||void 0===d||d.forEach((function(s){s.id===e.driverId&&(e.driverName=s.shortName+" "+s.firstName+" "+s.lastName,a>e.split1&&(a=e.split1,t=e.split1Formatted),n>e.split2&&(n=e.split2,r=e.split2Formatted),i>e.split3&&(i=e.split3,c=e.split3Formatted))}))})),b(e),y(t),A(r),_(c),f(!1)})).catch((function(e){w(e.message),f(!1)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),O?Object(i.jsx)(d,{}):g.length>0?Object(i.jsx)(l,{msg:g}):Object(i.jsx)("div",{className:"mt-5 col-span-4 bg-base-300 p-4 rounded-box w-full",children:Object(i.jsxs)("table",{className:"table w-full table-auto",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Laptime"}),Object(i.jsx)("th",{children:"Split 1"}),Object(i.jsx)("th",{children:"Split 2"}),Object(i.jsx)("th",{children:"Split 3"}),Object(i.jsx)("th",{children:"Car"}),Object(i.jsx)("th",{children:"Valid"})]})}),Object(i.jsx)("tbody",{children:o.map((function(e){return Object(i.jsx)(C,{lap:e,bestLapTime:r,bestSplit1:S,bestSplit2:I,bestSplit3:M})}))})]})})}function E(e){var t=e.id,s=Object(a.useState)({session:{},cars:[],laps:[],drivers:[]}),r=Object(h.a)(s,2),n=r[0],c=r[1],o=g("getSession",t);return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,s,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.data[0],o.isLoading||(t.session.bestLapTime=Number.MAX_VALUE,null===(s=t.drivers)||void 0===s||s.forEach((function(e){var s;e.bestLapTimeNum=Number.MAX_VALUE,null===(s=t.laps)||void 0===s||s.forEach((function(s){e.id===s.driverId&&s.lapTime<e.bestLapTimeNum&&(e.bestLapTimeNum=s.lapTime,e.bestLapTime=s.lapTimeFormatted,s.lapTime<t.session.bestLapTime&&(t.session.bestLapTimeFormatted=s.lapTimeFormatted,t.session.bestLapTime=s.lapTime,t.session.bestDriver=e.shortName+" "+e.firstName+" "+e.lastName))}))})),null===(a=t.laps)||void 0===a||a.forEach((function(e){e.lapTime===t.session.bestLapTime&&(e.fastestLap=!0)})),c(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o.isLoading]),o.isLoading?Object(i.jsx)(d,{}):o.error.length>0?Object(i.jsx)(l,{msg:o.error}):null!=n.session&&null!=n.drivers&&n.drivers.length>0?Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"flex flex-row w-full",children:[Object(i.jsx)("div",{className:"grid h-auto card bg-base-300 rounded-box place-items-center mb-3",children:Object(i.jsx)(k,{created_at:n.session.created_at,id:n.session.id,metaData:n.session.metaData,raceWeekendIndex:n.session.raceWeekendIndex,serverName:n.session.serverName,sessionIndex:n.session.sessionIndex,sessionType:n.session.sessionType,trackName:n.session.trackName,updated_at:n.session.updated_at,bestLapTime:n.session.bestLapTime,bestLapTimeFormatted:n.session.bestLapTimeFormatted,bestDriver:n.session.bestDriver})}),Object(i.jsx)("div",{className:"overflow-x-auto mb-3 ml-5 col-span-4 bg-base-300 p-4 rounded-box w-full",children:Object(i.jsxs)("table",{className:"table-zebra table w-full",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Driver"}),Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Shortname"}),Object(i.jsx)("th",{children:"Best lap time"}),Object(i.jsx)("th",{children:"Car"}),Object(i.jsx)("th",{})]})}),Object(i.jsx)("tbody",{children:n.drivers.map((function(e){return Object(i.jsx)(I,{driver:e,bestLapTime:n.session.bestLapTimeFormatted,sessionBigData:n})}))})]})})]}),Object(i.jsx)(B,{bestLapTime:n.session.bestLapTimeFormatted,sessionBigData:n})]}):Object(i.jsx)("div",{})}function M(e){var t=e.id,s=g("getTimesOfDriverById",t),a=g("getPlayerById",t);return s.isLoading||a.isLoading?Object(i.jsx)(d,{}):s.error.length>0?Object(i.jsx)(l,{msg:s.error}):Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"relative h-auto text-white mb-3 col-span-4 bg-base-300 p-4 rounded-box w-full",children:Object(i.jsxs)("p",{className:"text-2xl",children:["Some maybe useful information about ",a.data[0].firstName+' "'+a.data[0].shortName+'" '+a.data[0].lastName,":"]})}),Object(i.jsx)("div",{className:"divider"}),Object(i.jsxs)("div",{className:"relative h-auto text-white mb-3 bg-base-300 p-4 rounded-box w-full",children:[Object(i.jsx)("p",{className:"text-xl",children:"Besttimes per Track"}),Object(i.jsx)("div",{className:"divider"}),Object(i.jsx)("div",{className:"grid grid-cols-3 gap-4 xl:grid-cols-5 2xl:grid-cols-8",children:s.data.map((function(e){return Object(i.jsxs)("div",{className:"h-auto text-white bg-base-100 p-4 rounded-box w-full",children:[Object(i.jsxs)("p",{children:["Track: ",e.trackName]}),Object(i.jsxs)("p",{children:["Time: ",e.bestLapTimeFormatted]}),Object(i.jsx)(F,{id:e.bestTimeCarId}),Object(i.jsx)("a",{href:"/session/"+e.bestTimeSessionId,children:Object(i.jsx)("button",{className:"btn btn-sm w-full mt-1",children:"Go To Session"})})]})}))})]})]})}function _(){var e=g("getSessions");return e.isLoading?Object(i.jsx)(d,{}):Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"col-span-1 h-10 card bg-base-300 rounded-box place-items-center mr-2",children:Object(i.jsx)("h1",{className:"align-middle m-auto",children:"All sessions"})}),Object(i.jsx)("div",{className:"overflow-x-auto mt-2 mr-2",children:Object(i.jsxs)("table",{className:"table w-full",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{}),Object(i.jsx)("th",{children:"Session"}),Object(i.jsx)("th",{children:"Session type"}),Object(i.jsx)("th",{children:"Date"})]})}),Object(i.jsx)("tbody",{children:e.data.map((function(e){return Object(i.jsx)(G,{created_at:e.created_at,id:e.id,metaData:e.metaData,raceWeekendIndex:e.raceWeekendIndex,serverName:e.serverName,sessionIndex:e.sessionIndex,sessionType:e.sessionType,trackName:e.trackName,updated_at:e.updated_at,bestLapTimeFormatted:e.bestLapTimeFormatted,bestLapTime:e.bestLapTime,bestDriver:e.bestDriver})}))})]})})]})}function G(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("a",{href:"/session/"+e.id,children:Object(i.jsx)("button",{className:"btn",children:"Go To Session"})})}),Object(i.jsx)("td",{children:e.trackName}),Object(i.jsx)("td",{children:e.sessionType}),Object(i.jsx)("td",{children:e.created_at.substr(0,e.created_at.length-7)})]})}function V(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),s=t[0],r=t[1],n=Object(a.useState)(!0),c=Object(h.a)(n,2),l=c[0],o=c[1],b=D({path:"https://acc-api.aptinstall.de/tracks/times"}).getData;return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b().then((function(e){r(e),o(!1)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),l?Object(i.jsx)(d,{}):Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"col-span-1 h-10 card bg-base-300 rounded-box place-items-center",children:Object(i.jsx)("h1",{className:"align-middle m-auto",children:"Track scoreboard"})}),Object(i.jsx)("div",{className:"overflow-x-auto mt-2",children:Object(i.jsxs)("table",{className:"table w-full",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{}),Object(i.jsx)("th",{children:"Track"}),Object(i.jsx)("th",{children:"Best laptime"}),Object(i.jsx)("th",{children:"player"})]})}),Object(i.jsx)("tbody",{children:s.map((function(e){return Object(i.jsx)(W,{avgLapTime:e.avgLapTime,avgLapTimeFormatted:e.avgLapTimeFormatted,bestLapTime:e.bestLapTime,bestLapTimeFormatted:e.bestLapTimeFormatted,bestTimedriverId:e.bestTimedriverId,trackName:e.trackName,bestTimeSessionId:e.bestTimeSessionId})}))})]})})]})}function W(e){var t=Object(a.useState)({}),s=Object(h.a)(t,2),r=s[0],n=s[1],c=Object(a.useState)(!0),l=Object(h.a)(c,2),o=l[0],b=l[1],m=D({path:"https://acc-api.aptinstall.de/driver/".concat(e.bestTimedriverId)}).getData;return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m().then((function(e){n(e),b(!1)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),o?Object(i.jsx)("td",{children:Object(i.jsx)(d,{})}):Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("a",{href:"/session/"+e.bestTimeSessionId,children:Object(i.jsx)("button",{className:"btn",children:"Go To Session"})})}),Object(i.jsx)("td",{children:e.trackName}),Object(i.jsx)("td",{children:e.bestLapTimeFormatted}),Object(i.jsx)("td",{children:r.shortName+" - "+r.firstName+" "+r.lastName})]})}function U(){return Object(i.jsxs)("div",{className:"grid grid-cols-2",children:[Object(i.jsx)(_,{}),Object(i.jsx)(V,{})]})}var P=s(21),X=s.n(P);function q(){var e=g("getAllDrivers"),t=Object(a.useState)([]),s=Object(h.a)(t,2),r=s[0],n=s[1],c=Object(a.useRef)(null);return Object(a.useEffect)((function(){n(e.data)}),[e.isLoading]),e.isLoading?Object(i.jsx)(d,{}):Object(i.jsxs)("div",{className:"h-1/12 text-white mb-3 bg-base-300 p-4 rounded-box w-full",children:[Object(i.jsx)("p",{className:"text-3xl",children:"All driver search"}),Object(i.jsx)("input",{disabled:!1,ref:c,onChange:function(t){return function(t){X()((function(){if(0!==t.length){var s=[];e.data.find((function(e){(e.firstName+" "+e.lastName+" "+e.shortName).toLowerCase().includes(t.toLowerCase())&&s.push(e)})),n(s)}else n(e.data)}),1e3)()}(t.target.value)},className:"appearance-none w-full bg-base-200 border border-white rounded py-4 px-4 leading-tight focus:outline-none focus:bg-base-400"}),Object(i.jsx)("div",{className:"divider"}),r.map((function(e){return Object(i.jsxs)("div",{className:"flex flex-row h-8 pl-4 pr-4 text-white bg-base-100 rounded-box w-full mb-1",children:[Object(i.jsxs)("p",{className:"p-1",children:[e.shortName," ",e.firstName," ",e.lastName]}),Object(i.jsx)("a",{href:"/driver/"+e.id,children:Object(i.jsx)("button",{className:"btn btn-sm ml-3 right-14 absolute",children:"Go To Driver"})})]})}))]})}var J=function(){return Object(i.jsxs)("div",{className:"h-full rounded-md m-4",children:[Object(i.jsxs)("div",{className:"flex flex-row",children:[Object(i.jsx)("div",{className:"h-16 text-white mb-3 bg-base-300 rounded-box w-1/3 mr-4",children:Object(i.jsx)("a",{href:"/",children:Object(i.jsx)("div",{className:"h-full w-full hover:bg-base-200 rounded-box flex items-center justify-center",children:Object(i.jsx)("span",{className:"text-2xl",children:"Home"})})})}),Object(i.jsx)("div",{className:"h-16 text-white mb-3 bg-base-300 rounded-box w-1/3 mr-4",children:Object(i.jsx)("a",{href:"/sessions",children:Object(i.jsx)("div",{className:"h-full w-full hover:bg-base-200 rounded-box flex items-center justify-center",children:Object(i.jsx)("span",{className:"text-2xl",children:"Sessions"})})})}),Object(i.jsx)("div",{className:"h-16 text-white mb-3 bg-base-300 rounded-box w-1/3 mr-4",children:Object(i.jsx)("a",{href:"/drivers",children:Object(i.jsx)("div",{className:"h-full w-full hover:bg-base-200 rounded-box flex items-center justify-center",children:Object(i.jsx)("span",{className:"text-2xl",children:"Driver"})})})})]}),Object(i.jsx)(S.a,{children:Object(i.jsxs)(y.c,{children:[Object(i.jsx)(y.a,{exact:!0,path:"/session/:id",render:function(e){return Object(i.jsx)(E,{id:e.match.params.id})}}),Object(i.jsx)(y.a,{exact:!0,path:"/driver/:id",render:function(e){return Object(i.jsx)(M,{id:e.match.params.id})}}),Object(i.jsx)(y.a,{path:"/sessions",children:Object(i.jsx)(U,{})}),Object(i.jsx)(y.a,{path:"/drivers",children:Object(i.jsx)(q,{})}),Object(i.jsx)(y.a,{path:"/",children:Object(i.jsx)(L,{})})]})})]})},z=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),a(e),r(e),n(e),c(e)}))};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(J,{})}),document.getElementById("root")),z()}},[[37,1,2]]]);
//# sourceMappingURL=main.1b5bbb43.chunk.js.map