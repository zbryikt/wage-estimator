 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (Array, JSON, blockLoader, cssLoader, decache, escape, prefix, scriptLoader, version) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fldui.pug";
if(!ctrl) var ctrl = {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Fchevron-down.pug";





;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Fspinner.pug";





;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";









;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
cssLoader.url[url] = true;
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";










;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var b64img = {};
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAQAICRAEAOw=="
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";







;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";













;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";















































;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_mixins["ldPaletteEditor"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldp\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"colors\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"edit\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-6\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldColorPicker no-border no-palette\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-6\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row mb-2\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cselect class=\"form-control form-control-local-sm\" value=\"rgb\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"rgb\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "RGB\u003C\u002Foption\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"hsl\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "HSL\u003C\u002Foption\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"hcl\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "HCL\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4 pl-0\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control form-control-local-sm value\" placeholder=\"Hex Value\" data-tag=\"hex\" style=\"margin:0\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
var configs = [["Red", "Green", "Blue", "rgb", "active"], ["Hue", "Saturation", "Luminance", "hsl",""], ["Hue", "Chroma", "Luminance", "hcl",""]];
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
// iterate configs
;(function(){
  var $$obj = configs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var config = $$obj[pug_index2];
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["row","config",config[4]], [false,false,true]), false, true)+pug_attr("data-tag", config[3], true, true)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[1]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[2]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var config = $$obj[pug_index2];
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["row","config",config[4]], [false,false,true]), false, true)+pug_attr("data-tag", config[3], true, true)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[1]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[2]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";





























































































































;pug_debug_line = 93;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";












;pug_debug_line = 97;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
var anikit = {"groupName":["No Animation","Popular Animation","Repeat Animation","Transition"],"members":[[["static","static"]],[["blink","blink"],["bounce","bounce"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["breath","breath"],["fade","fade"],["flip-h","flip (horizontally)"],["float-btt-in","float-in (bottom to top)"],["slide-ltr","slide (left to right)"],["spin","spin"],["tremble","tremble"]],[["beat","beat"],["blink","blink"],["blur","blur"],["bounce","bounce"],["bounceAlt","bounceAlt"],["breath","breath"],["clock","clock"],["coin-h","coin (horizontally)"],["coin-v","coin (vertically)"],["cycle","cycle"],["cycle-alt","cycle-alt"],["damage","damage"],["dim","dim"],["fade","fade"],["flip","flip"],["flip-h","flip (horizontally)"],["flip-v","flip (vertically)"],["float","float"],["heartbeat","heartbeat"],["hit","hit"],["jelly","jelly"],["jelly-alt","jelly-alt"],["jingle","jingle"],["jump","jump"],["measure","measure"],["metronome","metronome"],["move-btt","move (bottom to top)"],["move-fade-btt","move faded (bottom to top)"],["move-fade-ltr","move faded (left to right)"],["move-fade-rtl","move faded (right to left)"],["move-fade-ttb","move faded (top to bottom)"],["move-ltr","move (left to right)"],["move-rtl","move (right to left)"],["move-ttb","move (top to bottom)"],["orbit","orbit"],["pulse","pulse"],["rubber-h","rubber (horizontally)"],["rubber-v","rubber (vertically)"],["rush-btt","rush (bottom to top)"],["rush-ltr","rush (left to right)"],["rush-rtl","rush (right to left)"],["rush-ttb","rush (top to bottom)"],["shake-h","shake (horizontally)"],["shake-v","shake (vertically)"],["shiver","shiver"],["skew","skew"],["skew-alt","skew-alt"],["slide-btt","slide (bottom to top)"],["slide-ltr","slide (left to right)"],["slide-rtl","slide (right to left)"],["slide-ttb","slide (top to bottom)"],["smash","smash"],["spin","spin"],["spin-fast","spin-fast"],["squeeze","squeeze"],["surprise","surprise"],["swim","swim"],["swing","swing"],["tick","tick"],["tick-alt","tick-alt"],["tremble","tremble"],["vortex","vortex"],["vortex-alt","vortex-alt"],["wander-h","wander (horizontally)"],["wander-v","wander (vertically)"],["wrench","wrench"]],[["blur-in","blur-in"],["blur-out","blur-out"],["bounce-alt-in","bounce-alt-in"],["bounce-alt-out","bounce-alt-out"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["fade-in","fade-in"],["fade-out","fade-out"],["fall-btt-in","fall-in (bottom to top)"],["fall-ltr-in","fall-in (left to right)"],["fall-rtl-in","fall-in (right to left)"],["fall-ttb-in","fall-in (top to bottom)"],["flip-h-in","flip-in (horizontally)"],["flip-h-out","flip-out (horizontally)"],["flip-v-in","flip-in (vertically)"],["flip-v-out","flip-out (vertically)"],["float-btt-in","float-in (bottom to top)"],["float-btt-out","float-out (bottom to top)"],["float-ltr-in","float-in (left to right)"],["float-ltr-out","float-out (left to right)"],["float-rtl-in","float-in (right to left)"],["float-rtl-out","float-out (right to left)"],["float-ttb-in","float-in (top to bottom)"],["float-ttb-out","float-out (top to bottom)"],["grow-btt-in","grow-in (bottom to top)"],["grow-btt-out","grow-out (bottom to top)"],["grow-ltr-in","grow-in (left to right)"],["grow-ltr-out","grow-out (left to right)"],["grow-rtl-in","grow-in (right to left)"],["grow-rtl-out","grow-out (right to left)"],["grow-ttb-in","grow-in (top to bottom)"],["grow-ttb-out","grow-out (top to bottom)"],["jump-alt-in","jump-alt-in"],["jump-alt-out","jump-alt-out"],["jump-in","jump-in"],["jump-out","jump-out"],["power-off","power-off"],["power-on","power-on"],["rush-btt-in","rush-in (bottom to top)"],["rush-ltr-in","rush-in (left to right)"],["rush-rtl-in","rush-in (right to left)"],["rush-ttb-in","rush-in (top to bottom)"],["slide-btt-in","slide-in (bottom to top)"],["slide-btt-out","slide-out (bottom to top)"],["slide-ltr-in","slide-in (left to right)"],["slide-ltr-out","slide-out (left to right)"],["slide-rtl-in","slide-in (right to left)"],["slide-rtl-out","slide-out (right to left)"],["slide-ttb-in","slide-in (top to bottom)"],["slide-ttb-out","slide-out (top to bottom)"],["spring-btt-in","spring-in (bottom to top)"],["spring-ltr-in","spring-in (left to right)"],["spring-rtl-in","spring-in (right to left)"],["spring-ttb-in","spring-in (top to bottom)"],["throw-btt-in","throw-in (bottom to top)"],["throw-ltr-in","throw-in (left to right)"],["throw-rtl-in","throw-in (right to left)"],["throw-ttb-in","throw-in (top to bottom)"],["vortex-alt-in","vortex-alt-in"],["vortex-alt-out","vortex-alt-out"],["vortex-in","vortex-in"],["vortex-out","vortex-out"],["zoom-in","zoom-in"],["zoom-out","zoom-out"]]],"group":{"static":[["static","static"]],"popular":[["blink","blink"],["bounce","bounce"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["breath","breath"],["fade","fade"],["flip-h","flip (horizontally)"],["float-btt-in","float-in (bottom to top)"],["slide-ltr","slide (left to right)"],["spin","spin"],["tremble","tremble"]],"repeat":[["beat","beat"],["blink","blink"],["blur","blur"],["bounce","bounce"],["bounceAlt","bounceAlt"],["breath","breath"],["clock","clock"],["coin-h","coin (horizontally)"],["coin-v","coin (vertically)"],["cycle","cycle"],["cycle-alt","cycle-alt"],["damage","damage"],["dim","dim"],["fade","fade"],["flip","flip"],["flip-h","flip (horizontally)"],["flip-v","flip (vertically)"],["float","float"],["heartbeat","heartbeat"],["hit","hit"],["jelly","jelly"],["jelly-alt","jelly-alt"],["jingle","jingle"],["jump","jump"],["measure","measure"],["metronome","metronome"],["move-btt","move (bottom to top)"],["move-fade-btt","move faded (bottom to top)"],["move-fade-ltr","move faded (left to right)"],["move-fade-rtl","move faded (right to left)"],["move-fade-ttb","move faded (top to bottom)"],["move-ltr","move (left to right)"],["move-rtl","move (right to left)"],["move-ttb","move (top to bottom)"],["orbit","orbit"],["pulse","pulse"],["rubber-h","rubber (horizontally)"],["rubber-v","rubber (vertically)"],["rush-btt","rush (bottom to top)"],["rush-ltr","rush (left to right)"],["rush-rtl","rush (right to left)"],["rush-ttb","rush (top to bottom)"],["shake-h","shake (horizontally)"],["shake-v","shake (vertically)"],["shiver","shiver"],["skew","skew"],["skew-alt","skew-alt"],["slide-btt","slide (bottom to top)"],["slide-ltr","slide (left to right)"],["slide-rtl","slide (right to left)"],["slide-ttb","slide (top to bottom)"],["smash","smash"],["spin","spin"],["spin-fast","spin-fast"],["squeeze","squeeze"],["surprise","surprise"],["swim","swim"],["swing","swing"],["tick","tick"],["tick-alt","tick-alt"],["tremble","tremble"],["vortex","vortex"],["vortex-alt","vortex-alt"],["wander-h","wander (horizontally)"],["wander-v","wander (vertically)"],["wrench","wrench"]],"transition":[["blur-in","blur-in"],["blur-out","blur-out"],["bounce-alt-in","bounce-alt-in"],["bounce-alt-out","bounce-alt-out"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["fade-in","fade-in"],["fade-out","fade-out"],["fall-btt-in","fall-in (bottom to top)"],["fall-ltr-in","fall-in (left to right)"],["fall-rtl-in","fall-in (right to left)"],["fall-ttb-in","fall-in (top to bottom)"],["flip-h-in","flip-in (horizontally)"],["flip-h-out","flip-out (horizontally)"],["flip-v-in","flip-in (vertically)"],["flip-v-out","flip-out (vertically)"],["float-btt-in","float-in (bottom to top)"],["float-btt-out","float-out (bottom to top)"],["float-ltr-in","float-in (left to right)"],["float-ltr-out","float-out (left to right)"],["float-rtl-in","float-in (right to left)"],["float-rtl-out","float-out (right to left)"],["float-ttb-in","float-in (top to bottom)"],["float-ttb-out","float-out (top to bottom)"],["grow-btt-in","grow-in (bottom to top)"],["grow-btt-out","grow-out (bottom to top)"],["grow-ltr-in","grow-in (left to right)"],["grow-ltr-out","grow-out (left to right)"],["grow-rtl-in","grow-in (right to left)"],["grow-rtl-out","grow-out (right to left)"],["grow-ttb-in","grow-in (top to bottom)"],["grow-ttb-out","grow-out (top to bottom)"],["jump-alt-in","jump-alt-in"],["jump-alt-out","jump-alt-out"],["jump-in","jump-in"],["jump-out","jump-out"],["power-off","power-off"],["power-on","power-on"],["rush-btt-in","rush-in (bottom to top)"],["rush-ltr-in","rush-in (left to right)"],["rush-rtl-in","rush-in (right to left)"],["rush-ttb-in","rush-in (top to bottom)"],["slide-btt-in","slide-in (bottom to top)"],["slide-btt-out","slide-out (bottom to top)"],["slide-ltr-in","slide-in (left to right)"],["slide-ltr-out","slide-out (left to right)"],["slide-rtl-in","slide-in (right to left)"],["slide-rtl-out","slide-out (right to left)"],["slide-ttb-in","slide-in (top to bottom)"],["slide-ttb-out","slide-out (top to bottom)"],["spring-btt-in","spring-in (bottom to top)"],["spring-ltr-in","spring-in (left to right)"],["spring-rtl-in","spring-in (right to left)"],["spring-ttb-in","spring-in (top to bottom)"],["throw-btt-in","throw-in (bottom to top)"],["throw-ltr-in","throw-in (left to right)"],["throw-rtl-in","throw-in (right to left)"],["throw-ttb-in","throw-in (top to bottom)"],["vortex-alt-in","vortex-alt-in"],["vortex-alt-out","vortex-alt-out"],["vortex-in","vortex-in"],["vortex-out","vortex-out"],["zoom-in","zoom-in"],["zoom-out","zoom-out"]]}};
;pug_debug_line = 98;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";























































































;pug_debug_line = 111;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";














































;pug_debug_line = 117;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
prefix = function(n) { return (!n?[]:(Array.isArray(n)?n:[n])).map(function(it){ return `${prefix.currentName}$${it}`; }).join(' ');}
;pug_debug_line = 118;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";





















;pug_debug_line = 127;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";





;pug_debug_line = 131;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fwage-estimator\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";












;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["css"]("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["css"]("/assets/lib/ldui/ldui.min.css");
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["css"]("/css/index.css");
pug_html = pug_html + "\u003C\u002Fhead\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-768 mx-auto rwd typeset heading-contrast\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "軟體外包工程款估算機\u003C\u002Fh2\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "發包方考量\u003C\u002Fh3\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "依 ";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fwww.104.com.tw\u002Fjb\u002Fwage\u002Flist?type=1&amp;jobcat=2007001000&amp;cat=jobmake\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "2020 年 3 月 1 日 104 人力銀行之數據\u003C\u002Fa\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "，軟體設計工程師之平均月薪資約為 ";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cb ld=\"monthly-salary\"\u003E\u003C\u002Fb\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 元。以時薪來算，約為 ";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cb ld=\"hourly-salary-20\"\u003E\u003C\u002Fb\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 元 ( 一個月算 22 天 ) \u002F ";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cb ld=\"hourly-salary-30\"\u003E\u003C\u002Fb\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 元 ( 一個月算 30 天 )。若以一個 ";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cb ld=\"minimal-work\"\u003E\u003C\u002Fb\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 天工作量的專案來說，最低成本約為 ";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cb ld=\"minimal-cost\"\u003E\u003C\u002Fb\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 元。\u003C\u002Fp\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "考慮到對發案公司 ( 甲方 ) 而言，正職員工實質上不光只有薪水需要負擔，同時聘僱合約代表了一個長期的承諾，也有潛在的資遣費。比方說，以下成本都是薪資以外 甲方 需要負擔的：\u003C\u002Fp\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "勞保\u003C\u002Fli\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "勞退\u003C\u002Fli\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "健保\u003C\u002Fli\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "健保補充保費\u003C\u002Fli\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "空間成本\u003C\u002Fli\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "特休、病假\u003C\u002Fli\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "獎金 ( 三節、年終 )\u003C\u002Fli\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "行政支出 ( 文具、茶水或資訊系統如 email, slack 等負擔 )\u003C\u002Fli\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "設備折舊 ( 電腦、辦公設備等其折舊 ) \u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "若只抓個大概，光從帳面支出來看，甲方 一般得多負擔 ";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cb ld=\"expense-rate\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "25\u003C\u002Fb\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 倍 的薪資；也就是說，聘雇一位月薪資 ";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cb ld=\"monthly-salary\"\u003E\u003C\u002Fb\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 元的工程師，甲方 實際的月支出為 ";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cb ld=\"monthly-expense\"\u003E\u003C\u002Fb\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 元。\u003C\u002Fp\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "因此，有時候 ( 尤期是短期、一次性的需求 ) 不如發包給接案公司 ( 乙方 ) 來做比較划算。\u003C\u002Fp\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "接案方考量\u003C\u002Fh3\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "但這不能說我們發包一個月的專案給 乙方，平均只需要 ";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cb ld=\"monthly-expense\"\u003E\u003C\u002Fb\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 元，因為從接案公司的角度來看，還有以下這些因素：\u003C\u002Fp\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "接案成本 - 每接到一個案子，需要花多少時間跟人力？\u003C\u002Fli\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "時程與專業 - 接案公司往往已建立了套件與流程，比自聘省下不少時間。\u003C\u002Fli\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "合理利潤 - 若純以人力來估計預算，接案公司將無利潤空間。\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "各個因素有正有負，有些是成本，有些則是籌碼。\u003C\u002Fp\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "接案成本\u003C\u002Fh4\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "若正職員工上班打混摸魚，薪水還是照領，但 乙方 沒案子就是沒飯吃。而為了接到一個案子，乙方可能需要額外的人力提案、跑流程、而付出時間後仍不一定能夠包到工程。公司為了繼續生存，這些成本勢必得由其它案子的收入來補充。\u003C\u002Fp\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "時程與專業\u003C\u002Fh4\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "有時 甲方 會有許多異想天開的需求，比方說 「我只要一個簡單會轉的 3D 人頭就好 」「差不多像 LINE 一樣的功能」一般來說只要花時間，合格的軟體工程師最終都有機會產出一個可能符合需求的產品，但要花多少時間因人而異，也與員工的背景相關。但人聘了就是聘了，如果你找了一個後端工程師請他用 WebGL 做效果，他可能會一個頭兩個大，最後花了三個月做了一個鳥鳥的成果出來。\u003C\u002Fp\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "這時若直接開需求給符合條件的 乙方 ，由於 乙方 有經驗，或許能以更短的時程產出更好的結果，最後花了兩個禮拜做出一個穩定、跨平台、向下相容的成果。\u003C\u002Fp\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "那麼、你該以兩個禮拜還是三個月來算工錢呢？考慮到專業，顯然以兩周來考慮是很不合理的，而若 乙方 技能有一定的稀缺性，很可能預算最後更是要以倍數計。\u003C\u002Fp\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "此外，也有另一種相反的情況 - 因為模板與流程的建立使得成本大大的壓低，再加上有足夠的需求的情況下， 乙方 甚至可能用遠低於成本的價格以租用的形式提供服務給 甲方 。舉個例子來說，從頭打造一個 Slack 顯然需要龐大的預算，相較之下訂閱 Slack 的服務顯得划算多了。對 乙方 來說，這同時也消滅了不少潛在的競爭對手。\u003C\u002Fp\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "合理利潤\u003C\u002Fh4\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "考慮到營業的目的即為獲利，如果只是要拿個平均工資，還不如去就業找工作。同時間，甲方 發案的同時，也等於將原本應該負擔的成本轉嫁到了 乙方 身上 - 乙方必須負擔員工的勞健保、行政支出、設備等薪資以外的成本。此外，還有 甲乙雙方 額外的溝通成本。也因此，如果今天 乙方 是完全人工客製化 甲方 訂做的產品，最低限度的預算考量至少也要將這些成本考量進去。\u003C\u002Fp\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "除此之外，還有很多隱性成本是不容易被注意到的；比方說以下兩種情況：\u003C\u002Fp\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "情境 A : 一天的案子做 10 個 \u003C\u002Fli\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "情境 B : 十天的案子做 1 個 \u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "情境 A 顯然比起情境 B 要更勞心勞力，光是客戶關係維護與建檔就崩潰了，也更不容易找到這麼多案源。因此，越短期、越簡單的需求，往往越容易讓人覺得報價過高。\u003C\u002Fp\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "此外，拉高短期需求的估價更容易讓大單的訂價顯得划算，進而促使成交。長期的訂報、手機綁約、軟體服務的年費往往會比短期、一次性的看起來划算，這也為 乙方 提高了利潤空間。\u003C\u002Fp\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "利潤以外的考量\u003C\u002Fh4\u003E";
;pug_debug_line = 53;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 53;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "除了錢錢錢以外的因素，有時還要考慮個人接案者的理念、興趣，未來發展、合作的可能性等等，不過這些因素太難估算了，在此不談。\u003C\u002Fp\u003E";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "總結\u003C\u002Fh4\u003E";
;pug_debug_line = 56;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 56;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "跟發包方不同，接案方很多的因素都無法具體化，但總地來說，我們大約可以給出一個模糊的公式：\u003C\u002Fp\u003E";
;pug_debug_line = 57;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"code-block example\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "報價 = 工時 * 時薪 x (1 + 標案成本 * 1\u002F接單率) x 短期懲罰 x ( 1 + 營運成本 ) x 專業加成\u003C\u002Fdiv\u003E";
;pug_debug_line = 59;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 59;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "如果給定以下條件：\u003C\u002Fp\u003E";
;pug_debug_line = 60;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row text-center bg-light border shadow-sm no-gutters mb-4 p-4 rounded\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "工時\u003C\u002Flabel\u003E";
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-lg font-weight-bold\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "1\u003C\u002Fdiv\u003E";
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "個月\u003C\u002Fdiv\u003E";
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "時薪\u003C\u002Flabel\u003E";
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-lg font-weight-bold\" ld=\"monthly-salary\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "元\u003C\u002Fdiv\u003E";
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "標案成本\u003C\u002Flabel\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-lg font-weight-bold\"\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "1%\u003C\u002Fdiv\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "薪資\u003C\u002Fdiv\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "接單成功率\u003C\u002Flabel\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-lg font-weight-bold\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "50%\u003C\u002Fdiv\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "成功\u003C\u002Fdiv\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "短期懲罰\u003C\u002Flabel\u003E";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-lg font-weight-bold\"\u003E";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "1.25\u003C\u002Fdiv\u003E";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "倍\u003C\u002Fdiv\u003E";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "營運成本\u003C\u002Flabel\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-lg font-weight-bold\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "0.25\u003C\u002Fdiv\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "倍\u003C\u002Fdiv\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "專業加成\u003C\u002Flabel\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-lg font-weight-bold\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "1.1\u003C\u002Fdiv\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "倍\u003C\u002Fdiv\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 68;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 68;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 68;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 68;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "利潤\u003C\u002Flabel\u003E";
;pug_debug_line = 68;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 68;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-lg font-weight-bold\"\u003E";
;pug_debug_line = 68;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "1.15\u003C\u002Fdiv\u003E";
;pug_debug_line = 68;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 68;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 68;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "倍\u003C\u002Fdiv\u003E";
;pug_debug_line = 68;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 70;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 70;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "大約需要 ";
;pug_debug_line = 70;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan ld=\"one-month-fee\"\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 70;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 元。這沒有考慮到模板化的狀況，就先假設 甲方 的需求相當的客製化因此 乙方 必須重頭許多元件吧。\u003C\u002Fp\u003E";
;pug_debug_line = 71;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 71;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "考量到這個數字相當模糊，我們亦可以從另一個角度思考；直接給定一個人力預期帶來的月收益，再去評估長期成本與專案估價。比方說，若我們期望一個人力可以帶來 15 萬的月收入，年營收 180 萬，依經驗扣掉成本開支 150 萬，則公司還有 30 的緩衝與獲利空間，可以接受，那便可以街著以這個金額為主，來與 甲方 談判。\u003C\u002Fp\u003E";
;pug_debug_line = 74;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 74;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "回歸實際需求\u003C\u002Fh2\u003E";
;pug_debug_line = 75;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 75;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "雖然算了 甲、乙雙方的數據，但合理的開價不代表成交，實際上甲方對這個專案的需求有多強，可能決定了一切。如果一個專案可以幫 甲方 多賺一千萬，就算只是寫一行字，掏個一百萬出來寫也合理；但如果只是個 Nice To Have，幫人家跑斷腿說不定一千元都要再考慮。\u003C\u002Fp\u003E";
;pug_debug_line = 76;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 76;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "也就是說，\u003C\u002Fp\u003E";
;pug_debug_line = 77;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 78;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 78;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "對 甲方 來說，如果東西不是這麼重要，那是不是發包前還是多考慮一下，不要出來害人了；\u003C\u002Fli\u003E";
;pug_debug_line = 79;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 79;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "對 乙方 來說，還是多花點時間找找影響力大又沒有競爭的領域吧。\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("/assets/lib/ldui/ldui.min.js");
;pug_debug_line = 86;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 86;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u002F\u002F Generated by LiveScript 1.3.1\nvar handler, cfg, k, v, _, view;\nhandler = {};\ncfg = {\n  \"monthly-salary\": 51695,\n  \"minimal-work\": 2,\n  \"expense-rate\": 0.25\n};\ncfg[\"hourly-salary-20\"] = Math.round(cfg[\"monthly-salary\"] \u002F 20 \u002F 8);\ncfg[\"hourly-salary-30\"] = Math.round(cfg[\"monthly-salary\"] \u002F 30 \u002F 8);\ncfg[\"monthly-expense\"] = Math.round(cfg[\"monthly-salary\"] * (1 + cfg[\"expense-rate\"]));\ncfg[\"minimal-cost\"] = cfg[\"minimal-work\"] * 8 * cfg[\"hourly-salary-30\"];\ncfg[\"one-month-fee\"] = Math.round(cfg[\"monthly-salary\"] * (1 + 0.01 \u002F 0.5) * 1.25 * 1.25 * 1.1 * 1.15);\nfor (k in cfg) {\n  v = cfg[k];\n  _ = fn$;\n  _(k, v);\n}\nview = new ldView({\n  root: document.body,\n  handler: handler\n});\nfunction fn$(k, v){\n  return handler[k] = function(arg$){\n    var node;\n    node = arg$.node;\n    return node.innerText = cfg[k];\n  };\n}\u003C\u002Fscript\u003E";
;pug_debug_line = 104;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\"\u003E";
;pug_debug_line = 104;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "var _jf = _jf || [];_jf.push(['p','59542']);_jf.push(['initAction',true]);_jf.push(['_setFont','xingothic-tc-w3','css','.xingothic-tc-w3']);_jf.push(['_setFont','xingothic-tc-w3','alias','xingothic-tc']);_jf.push(['_setFont','xingothic-tc-w3','weight',300]);_jf.push(['_setFont','jf-jinxuan-bold','css','.jf-jinxuan-bold']);_jf.push(['_setFont','jf-jinxuan-bold','alias','jf-jinxuan']);_jf.push(['_setFont','jf-jinxuan-bold','weight',700]);(function(A,p,c,m,l,q,r,h,B,D){var b=A._jf;if(b.constructor!==Object){var t=!0,u=function(a){var f=!0,e;for(e in b)b[e][0]==a&&(f&&(f=f&&!1!==b[e][1].call(b)),b[e]=null,delete b[e])},v=\u002F\\S+\u002Fg,w=\u002F[\\t\\r\\n\\f]\u002Fg,C=\u002F^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$\u002Fg,n=\"\".trim,x=n&&!n.call(\"\\ufeff\\u00a0\")?function(a){return null==a?\"\":n.call(a)}:function(a){return null==a?\"\":(a+\"\").replace(C,\"\")},k=function(a){var f,b,g;if(\"string\"===typeof a&&a&&(a=(a||\"\").match(v)||[],f=h[c]?(\" \"+h[c]+\" \").replace(w,\" \"):\" \")){for(g=0;b=a[g++];)0\u003Ef.indexOf(\" \"+b+\" \")&&(f+=b+\" \");h[c]=x(f)}},d=function(a){var b,e,g;if(0===arguments.length||\"string\"===typeof a&&a){var d=(a||\"\").match(v)||[];if(b=h[c]?(\" \"+h[c]+\" \").replace(w,\" \"):\"\"){for(g=0;e=d[g++];)for(;0\u003C=b.indexOf(\" \"+e+\" \");)b=b.replace(\" \"+e+\" \",\" \");h[c]=a?x(b):\"\"}}},y;b.addScript=y=function(b,f,e,g,d,c){d=d||function(){};c=c||function(){};var a=p.createElement(\"script\"),h=p.getElementsByTagName(\"script\")[0],k,m=!1,l=function(){a.src=\"\";a.parentNode.removeChild(a);a=a.onerror=a.onload=a.onreadystatechange=null};g&&(k=setTimeout(function(){l();c()},g));a.type=f||\"text\u002Fjavascript\";a.async=e;a.onload=a.onreadystatechange=function(b,c){m||a.readyState&&!\u002Floaded|complete\u002F.test(a.readyState)||(m=!0,g&&clearTimeout(k),l(),c||d())};a.onerror=function(a,b,d){g&&clearTimeout(k);l();c();return!0};a.src=b;h.parentNode.insertBefore(a,h)};for(var z in b)\"initAction\"==b[z][0]&&(t=b[z][1]);b.push([\"_eventPreload\",function(){1==t&&k(m);y(B,null,!1,3E3,null,function(){u(\"_eventInactived\")})}]);b.push([\"_eventReload\",function(){d(r);d(q);k(l)}]);b.push([\"_eventActived\",function(){d(m);d(l);k(q)}]);b.push([\"_eventInactived\",function(){d(m);d(l);k(r)}]);u(\"_eventPreload\")}})(this,this.document,\"className\",\"jf-loading\",\"jf-reloading\",\"jf-active\",\"jf-inactive\",this.document.getElementsByTagName(\"html\")[0],\"\u002F\u002Fd3gc6cgx8oosp4.cloudfront.net\u002Fjs\u002Fstable\u002Fv\u002F5.0.6\u002Fid\u002F232745737846\");\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"blockLoader" in locals_for_with?locals_for_with.blockLoader:typeof blockLoader!=="undefined"?blockLoader:undefined,"cssLoader" in locals_for_with?locals_for_with.cssLoader:typeof cssLoader!=="undefined"?cssLoader:undefined,"decache" in locals_for_with?locals_for_with.decache:typeof decache!=="undefined"?decache:undefined,"escape" in locals_for_with?locals_for_with.escape:typeof escape!=="undefined"?escape:undefined,"prefix" in locals_for_with?locals_for_with.prefix:typeof prefix!=="undefined"?prefix:undefined,"scriptLoader" in locals_for_with?locals_for_with.scriptLoader:typeof scriptLoader!=="undefined"?scriptLoader:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 