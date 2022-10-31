import React, { Component } from 'react'

const ReactDOMServer = require('react-dom/server');
const HtmlToReactParser = require('html-to-react').Parser;


const rawHTML = `
<body>
<script>
if (!crossOriginIsolated) SharedArrayBuffer = ArrayBuffer;
</script>
<head>
    <title>Claude Monet Biography With All Details | claudemonetgallery.org</title><style type="text/css">html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:'Roboto',sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}input,button,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:hover,a:focus{color:#23527c;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role="button"]{cursor:pointer}.container{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}@media(min-width:768px){.container{width:750px}}@media(min-width:992px){.container{width:970px}}@media(min-width:1200px){.container{width:1170px}}.container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.row{margin-left:-15px;margin-right:-15px}.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{position:relative;min-height:1px;padding-left:15px;padding-right:15px}.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media(min-width:768px){.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media(min-width:992px){.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media(min-width:1200px){.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}.clearfix:before,.clearfix:after,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after{content:" ";display:table}.clearfix:after,.container:after,.container-fluid:after,.row:after{clear:both}.center-block{display:block;margin-left:auto;margin-right:auto}.pull-right{float:right !important}.pull-left{float:left !important}.hide{display:none !important}.show{display:block !important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none !important}.affix{position:fixed}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transition:-webkit-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out;-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);-o-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.in .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{filter:alpha(opacity=0);opacity:0}.modal-backdrop.in{filter:alpha(opacity=50);opacity:.5}.modal-header{min-height:16.42857143px;padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media(min-width:780px){.modal-dialog{width:600px;margin:30px auto}.modal.modal-lg .modal-dialog{width:auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}.modal-sm{width:300px}}@media(min-width:992px){.modal-lg{width:900px;margin:auto}}body{width:100%;padding-top:2px;background-color:#eee4db}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:local('Roboto'),local('Roboto-Regular'),url(//fonts.gstatic.com/s/roboto/v15/Ks_cVxiCiwUWVsFWFA3Bjn-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:local('Roboto'),local('Roboto-Regular'),url(//fonts.gstatic.com/s/roboto/v15/oMMgfZMQthOryQo9n22dcuvvDin1pK8aKteLpeZ5c0A.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215,U+E0FF,U+EFFD,U+F000}@font-face{font-family:'Kaushan Script';font-style:normal;font-weight:400;src:local('Kaushan Script'),local('KaushanScript-Regular'),url(//fonts.gstatic.com/s/kaushanscript/v5/qx1LSqts-NtiKcLw4N03IO87R-l0-Xx_7cYc0ZX1ifE.woff2) format('woff2');unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Kaushan Script';font-style:normal;font-weight:400;src:local('Kaushan Script'),local('KaushanScript-Regular'),url(//fonts.gstatic.com/s/kaushanscript/v5/qx1LSqts-NtiKcLw4N03IEd0sm1ffa_JvZxsF_BEwQk.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215}@font-face{font-family:'Pavanam';font-style:normal;font-weight:400;src:local('Pavanam'),local('Pavanam-Regular'),url(//fonts.gstatic.com/s/pavanam/v1/60yebTdOUVMplpalwYd3u_Y6323mHUZFJMgTvxaG2iE.woff2) format('woff2');unicode-range:U+0964-0965,U+0B82-0BFA,U+200B-200D,U+20B9,U+25CC}@font-face{font-family:'Pavanam';font-style:normal;font-weight:400;src:local('Pavanam'),local('Pavanam-Regular'),url(//fonts.gstatic.com/s/pavanam/v1/OCi4IFeTbGHFMCl-hqIeHvY6323mHUZFJMgTvxaG2iE.woff2) format('woff2');unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Pavanam';font-style:normal;font-weight:400;src:local('Pavanam'),local('Pavanam-Regular'),url(//fonts.gstatic.com/s/pavanam/v1/6r4mpSMUudqN238yU-v4jA.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215}h1,h2,h3,h4,h5,h6{color:#fff;font-family:'Pavanam',sans-serif;font-weight:normal;text-transform:uppercase}p{color:#a3958d}a{color:#cd5957}a:hover,a:active{color:#f96c69;text-decoration:none}img{max-width:100%;height:auto}.cls{clear:both}.divider{font-weight:bold;color:#ccab81 !important;font-size:20px}.button{font-family:'Pavanam',sans-serif;text-transform:uppercase;background-color:#cd5957;border:0;color:#fff;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer}.button:hover{color:#fff;background-color:#587058}.spacer{width:100%;height:50px}.topmobile{display:none}.ce{text-align:center}.pad10{padding-top:10px}.maintitles{position:absolute;left:60px;top:10px;z-index:10;line-height:32px}.primarytitle{font-family:'Kaushan Script',cursive;font-size:40px;color:#fff}.primarytitle span{font-family:'Roboto',sans-serif;font-size:14px;color:#cd5957;text-transform:uppercase}.primarytitle a,.primarytitle a:hover{color:#fff}.container{margin-right:auto;margin-left:auto;max-width:1600px;background-color:#eee4db}.navcontainer{position:relative;width:100%;background-color:none;line-height:32px}.navcontainer{background-color:rgba(0,0,0,0.3)}.paintingorderlink{width:100%;height:auto;display:inline}.paintingorderlink a{color:#fff;font-size:16px;padding-left:10px}.navspacer{width:100%;height:122px}.navpostspacer{width:100%;height:17px}.navcontainer a:hover{color:#f96c69}.paintingtitle{font-family:'Pavanam',sans-serif;font-size:40px;color:#fff;margin:0 0 0 55px;white-space:nowrap;line-height:2em}.paintingorder{line-height:22px;margin:0 0 20px 55px}.breadcrumbs p{color:#6c5e5b}.breadcrumbs span{color:#cd5957}.breadcrumbs a{color:#6c5e5b}.breadcrumbs a:hover{color:#cd5957}.padbgmain{height:200px;left:0;position:absolute;top:200px;width:100%}.body{height:840px}.home .padbgmain{height:400px}.darkbg{background-color:#292521}.circle{width:20px;height:20px;background:#cd5957;-moz-border-radius:50px;-webkit-border-radius:50px;border-radius:50px;display:inline-block}.chevron{position:absolute;color:#fff;border-style:solid;border-width:.25em .25em 0 0;content:'';display:inline-block;height:.55em;left:5px;position:relative;top:.45em;vertical-align:top;width:.55em;transform:rotate(45deg)}.hamburgercontainer{top:0;display:none;position:absolute;z-index:10;width:25px;text-align:left;font-size:24px;cursor:pointer}.hamburger{position:relative;display:inline-block;width:1.25em;height:.8em;margin-right:.3em;margin-bottom:5px;border-top:.2em solid #4e413e;border-bottom:.2em solid #4e413e}.hamburger:before{content:"";position:absolute;top:.1em;left:0;width:100%;border-top:.2em solid #4e413e}.hider{display:none !important}.mobileheader{display:none}@media(max-width:1201px){.paintingtitle{font-size:30px}.navspacer{height:149px}}@media(max-width:1080px){.navspacer{height:149px}}@media(max-width:991px){.paintingtitle{font-size:22px}.primarytitle{font-size:28px}.primarytitle span{font-size:12px}.paintingorderlink a{font-size:14px}.navspacer{height:112px}.navpostspacer{height:10px}}@media(max-width:780px){.topdesktop{display:none}.topmobile{display:inline;position:fixed;z-index:10;width:100%;height:40px;background-color:#eee4db;left:0;top:0}.topmobile .social-links{text-align:right;right:0;padding-top:12px;padding-right:20px}.hamburgercontainer{display:inline-block;top:10px;left:40px}.container{padding-top:0}.topmobile .social-links{margin-top:1px}.slider{display:none}.padbgmain{top:30px;height:1100px}.mobileheader{display:block}.mobileheader .primarytitle{font-size:30px;text-align:center;padding-top:30px;line-height:26px}.mobileheader .primarytitle span{padding-right:100px}.mobileheader .mobilemenu{background:#000;position:fixed;left:0;top:40px;width:100%;z-index:20}.mobileheader .mobilemenu ul{list-style-type:none;padding-left:0}.mobileheader .mobilemenu ul li{font-size:28px;text-align:center}.padbgmain{display:none}}.social-links{list-style-type:none;padding-left:0}.social-links li{display:inline;padding-left:10px}.social-links li:first-child{padding-left:0}.social-links div{display:inline-block}.social-facebook{width:21px;height:16px;background:url(/images/design01/social-icons/social_facebook.png)}.social-gplus{width:21px;height:16px;background:url(/images/design01/social-icons/social_gplus.png)}.social-pinterest{width:21px;height:16px;background:url(/images/design01/social-icons/social_pinterest.png)}.toplinks{text-align:right}.artistname{font-family:'Kaushan Script',cursive}.modal-dialog h4{color:#4e413e}.modal-dialog{background-color:#f2e8e0;border:1px solid #c4ad9c}.modal-header,.modal-body,.modal-footer{background-color:#f2e8e0}.modal-header .close{float:right}.modal-content input{display:block;background-color:#fff;width:100%;height:30px;border:0;padding:0 5px 0 5px;margin:15px auto 15px auto}.modal-content textarea{margin:0;border:0;padding:5px;width:100%;height:100px}.modal-dialog{padding:10px}.menudesktop{background-color:rgba(0,0,0,0.5);margin-top:10px;padding-bottom:2%;font-family:'Pavanam',sans-serif}.menudesktop ul{list-style:none;padding-top:25px}.menudesktop li{display:inline-block}.menudesktop .navbar a{font-size:16px;color:#fff;padding:6px 5px 7px 5px}.menudesktop .navbar a:hover,.menudesktop .navbar a:active,.menudesktop .navbar .active{color:#fff;background-color:#cd5957}.menudesktop a:active,.menudesktop .navbar .active{padding:2px 5px 2px 5px}.searchwrapper{width:100%;height:auto;padding-top:23px}.searchwrapper input{display:inline-block;background-color:#fff;width:280px;height:35px;border:0;padding:0 5px 0 5px;float:left}.searchiconwrapper{position:relative;width:35px;height:35px;margin:0 auto;background-color:#cd5957;margin:0 33px 0 0;float:right}.searchicon{position:relative;width:20px;margin:0 auto;padding:8px 1px;text-align:center}.searchcircle{width:13px;height:13px;border:2px solid #fff;border-radius:10px}.searchrectangle{position:absolute;right:2px;bottom:5px;width:8px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border:1.5px solid #fff;border-top-right-radius:2px;border-bottom-right-radius:2px}.searchiconwrapper:hover{cursor:pointer}@media screen and (max-width:1201px){.searchwrapper input{width:212px}}@media screen and (max-width:991px){.searchwrapper input{margin-left:230px}.searchiconwrapper{margin-right:230px}.menudesktop ul{margin-left:40px}.toplinks p{font-size:13px}}@media screen and (max-width:780px){.searchwrapper{display:block;margin:0 auto 20px auto;width:258px}.searchwrapper input{margin-left:0}.searchiconwrapper{margin-right:0}}.slides{padding:0;width:100%;height:auto;max-width:1140px;max-height:326px;display:block;margin:0 auto;position:relative}.slides *{user-select:none;-ms-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}.slides input[type=radio]{display:none}.slide-container{display:block}.slide{top:0;opacity:0;width:100%;height:auto;max-width:1140px;max-height:326px;display:block;position:absolute;transform:scale(0);transition:all .7s ease-in-out}.slide img{width:100%;height:100%;max-height:329px}.nav label{width:200px;height:100%;display:none;position:absolute;opacity:0;z-index:9;cursor:pointer;transition:opacity .2s;color:#FFF;font-size:156pt;text-align:center;line-height:380px;background-color:rgba(255,255,255,.3);text-shadow:0 0 15px #777}.bottom-background{background-color:rgba(0,0,0,0.3)}.slide:hover+.nav label{opacity:.5}.nav label:hover{opacity:1}.nav .next{right:0}.slide-container .slide.active{opacity:1;transform:scale(1);transition:opacity 1s ease-in-out}input:checked+.slide-container .nav label{display:block}.nav-dots{width:100%;top:70px;height:11px;display:block;position:absolute;text-align:right}.nav-dots .nav-dot{width:11px;height:11px;position:relative;border-radius:100%;display:inline-block;background-color:rgba(255,255,255,0.5);margin:0 10px 0 0}.nav-dots .nav-dot.active{background:rgba(205,89,87,0.8)}.slider-pause-prefix{margin-right:10px;color:rgba(255,255,255,0.5)}.slider-pause{margin-right:40px;color:rgba(255,255,255,0.5)}.slider-pause:hover{cursor:pointer;color:rgba(205,89,87,0.8)}.nav-dots .nav-dot:hover{cursor:pointer;background-color:rgba(205,89,87,0.8)}@media screen and (max-width:991px){.nav-dots{margin-top:-145px}}.biography .bio-block{display:block}.biography .bio-block:after{clear:both}.biography .bio-pic{position:relative;min-height:1px;padding-left:15px;padding-right:15px}.biography .bio-block h1{color:#e3e3e2}.biography .bio-block h2{color:#cd5957;border-bottom:1px solid #a3958d}.biography .bio-block p{color:#6b5e5b}.darkbg .biography .bio-block p{color:#a3958d}.biography .bio-pic .imagetitle{font-size:16px;color:#6b5e5b;text-align:left;padding:15px 0 15px 0}.biography .bio-block h2{padding-top:20px}.darkbg .biography .bio-block .imagetitle{color:#e3e3e2}.biography .bio-pic-left,.biography .bio-pic-right{text-align:center}.darkbg .biography .bio-block{padding-top:30px}@media screen and (min-width:992px){.biography .bio-block h2{padding-top:5px}.biography .bio-pic{padding-top:20px}.biography .bio-pic-left{float:left;width:41.66666667%;text-align:left}.biography .bio-block-text-pic-on-left{float:left;width:58.33333333%}.biography .bio-pic-right{float:right;width:41.66666667%;text-align:right}.biography .bio-block-text-pic-on-right{float:left;width:58.33333333%}.darkbg .biography .bio-block{padding-top:10px}}.prefooter{width:100%;height:12px;margin-left:auto;margin-right:auto;background-color:#cd5957;color:#cd5957;border:0 none;margin-top:5px;margin-bottom:0}.footer{width:100%;background:url('/images/design01/footerbg.jpg') no-repeat;background-size:112% auto;box-sizing:border-box}.footer .container{background:0}.footertitle{line-height:32px}.footertitle .primarytitle{font-size:34px;margin-top:65px;display:block;margin-left:30px}.footertitle ul{display:block;margin-left:auto;margin-right:auto}.footertitle li{display:inline;padding-left:3px;padding-right:3px}.footer hr{color:#85827e}.footer .container .newsletter{margin:25px 20px 10px 20px;padding:10px 20px 10px 20px;background-color:rgba(0,0,0,0.3)}.newsletter .title{font-family:'Pavanam',sans-serif;color:#e3e3e2;font-size:18px}.newsletter input{display:inline-block;background-color:#bbb6b0;width:100%;height:35px;border:0;padding:0 5px 0 5px;margin-left:1px}.newsletter .button{margin:15px 0 20px 0;padding:5px 15px 5px 15px}.bottominfo{max-width:98%}.bottominfo p{color:#a3958d;text-align:center;font-size:12px}.bottominfo a{color:#85827e}.bottominfo .errorreport a{color:#a3958d}.footer .bottominfomobile{display:none}@media screen and (max-width:1201px){.footertitle .primarytitle{font-size:28px}.footertitle .primarytitle span{font-size:13px}}@media screen and (max-width:991px){.footer{background-size:100% 100%}.footer .container .newsletter{max-width:300px;display:block;margin-left:auto;margin-right:auto}.footer .primarytitle{margin-top:10px;width:260px;margin-left:auto;margin-right:auto}.footer .socials{width:100%;display:table}.footer .socials ul{display:table-cell;text-align:center;vertical-align:middle;padding:0}.footer .bottominfo{display:none}.footer .bottominfomobile{display:inline-block;font-size:12px;text-align:center;width:100%}.footer .bottominfomobile p{margin-left:35px}.footer .bottominfomobile a{color:#85827e}.footer .separator{display:none}}@media screen and (max-width:750px){.socials ul{margin-left:auto;margin-right:auto;padding:0}}</style><link rel="SHORTCUT ICON" href="/favicon.ico"><script type="text/javascript" async="" src="https://cdn.jst.ai/mwgt_4.1.js?v=5.44"></script><script async="" src="//cdn.jst.ai/vck.js"></script><script async="" src="//www.google-analytics.com/analytics.js"></script><script type="text/javascript">"use strict";
function BBWFloadScripts( scripts , callback , scripts_to_run_before ) {
var s = [];
var numloaded = 0;

if (typeof scripts_to_run_before != 'undefined') {
    if (scripts_to_run_before.length > 0) {
        for (var is = 0; is < scripts_to_run_before.length; is++) {
            scripts_to_run_before[is].call( this );
        }
    }
}

if (scripts.length === 0) {
    if (typeof callback == 'function') callback();
    return;
}

function checkallloaded(scr) {
    numloaded++;
    if (numloaded === scripts.length && typeof callback == 'function') callback();
}

for (var i=0; i < scripts.length;i++) {
    s[i] = document.createElement('script');
    s[i].type = 'text/javascript';
    if (s[i].readyState) {
        s[i].onreadystatechange = function() { if (s[i].readyState == 'loaded' || s[i].readyState == 'complete') { checkallloaded(this); } };
    } else {
        s[i].onload = function() { checkallloaded(this); };
    }
}
var head = document.getElementsByTagName('head')[0];
for (i=0; i < scripts.length;i++) {
    s[i].async = false;s[i].defer = true;
    s[i].src = scripts[i];
    head.appendChild( s[i] );
}
}

function BBWFloadImages( images , callback ) {
var s = [];
var numloaded = 0;

if (images.length === 0) {
    if (typeof callback == 'function') callback();
    return;
}

function checkallloaded(img) {
    numloaded++;
    if (numloaded === images.length && typeof callback == 'function') callback();
}

function checkallloadederror(img) {
    numloaded++;
    console.log( 'not loaded: ' + img.src , numloaded );
    if (numloaded === images.length && typeof callback == 'function') callback();
}

for (var i=0; i < images.length;i++) {
    s[i] = new Image();
    if (s[i].readyState) {
        s[i].onreadystatechange = function() {
            if (s[i].readyState == 'loaded' || s[i].readyState == 'complete') {
                checkallloaded(this);
            }
        };
    } else {
        s[i].onload = function() {
            checkallloaded(this);
        };
        s[i].onerror = function() {
            checkallloadederror(this);
        };
    }
}
for (i=0; i < images.length;i++) {
    s[i].src = images[i];
}
}
</script><meta charset="utf-8"><meta name="robots" content="noodp,noydir"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><script async="" type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XxM6JW"></script><link rel="canonical" href="https://www.claudemonetgallery.org/biography.html"><meta name="description" content="Observing Claude Monet biography. From early years to education, personal life and style development. All about the superb artist | claudemonetgallery.org"><script type="text/javascript">function BBWFInitPage() { $('#page_frontend_header').MiniFrontendHeader({"id":"page_frontend_header","clsname":"MiniFrontendHeader","lw":false});$('#page_frontend_nav_slider').MiniFrontendSlider({"id":"page_frontend_nav_slider","clsname":"MiniFrontendSlider","lw":false,"sliders":[{"id":81119,"alt":"San Giorgio Maggiore At Dusk","title":"San Giorgio Maggiore At Dusk","localurl":"\/San-Giorgio-Maggiore-At-Dusk.html","imgurl":"\/thumbnail\/81000\/81119\/slider1140x520\/San-Giorgio-Maggiore-At-Dusk.jpg?ts=1459229076","orderurl":"https:\/\/www.1st-art-gallery.com\/Claude-Oscar-Monet\/San-Giorgio-Maggiore-At-Dusk.html"},{"id":81254,"alt":"The Garden At Argenteuil Aka The Dahlias","title":"The Garden At Argenteuil Aka The Dahlias","localurl":"\/The-Garden-At-Argenteuil-Aka-The-Dahlias.html","imgurl":"\/thumbnail\/81000\/81254\/slider1140x520\/The-Garden-At-Argenteuil-Aka-The-Dahlias.jpg?ts=1487705589","orderurl":"https:\/\/www.1st-art-gallery.com\/Claude-Oscar-Monet\/The-Garden-At-Argenteuil-Aka-The-Dahlias.html"},{"id":80717,"alt":"Boulevard Des Capucines","title":"Boulevard Des Capucines","localurl":"\/Boulevard-Des-Capucines.html","imgurl":"\/thumbnail\/80000\/80717\/slider1140x520\/Boulevard-Des-Capucines.jpg?ts=1476266302","orderurl":"https:\/\/www.1st-art-gallery.com\/Claude-Oscar-Monet\/Boulevard-Des-Capucines.html"},{"id":119357,"alt":"The Red Boats, Argenteuil","title":"The Red Boats, Argenteuil","localurl":"\/The-Red-Boats-Argenteuil.html","imgurl":"\/thumbnail\/119000\/119357\/slider1140x520\/The-Red-Boats,-Argenteuil.jpg?ts=1459229076","orderurl":"https:\/\/www.1st-art-gallery.com\/Claude-Oscar-Monet\/The-Red-Boats-Argenteuil.html"},{"id":119348,"alt":"The Luncheon (Monet's Garden At Argenteuil)","title":"The Luncheon (Monet's Garden At Argenteuil)","localurl":"\/The-Luncheon-Monets-Garden-At-Argenteuil.html","imgurl":"\/thumbnail\/119000\/119348\/slider1140x520\/The-Luncheon-Monets-Garden-At-Argenteuil.jpg?ts=1459229076","orderurl":"https:\/\/www.1st-art-gallery.com\/Claude-Oscar-Monet\/The-Luncheon-Monet-S-Garden-At-Argenteuil.html"}]});$('#page_frontend_footer_newsletter_form').MiniFrontendGeneralForm({"id":"page_frontend_footer_newsletter_form","clsname":"MiniFrontendGeneralForm","lw":false,"captcha":false,"onsubmit":false});$('#page_frontend_footer_error_form').MiniFrontendGeneralForm({"id":"page_frontend_footer_error_form","clsname":"MiniFrontendGeneralForm","lw":false,"captcha":false,"onsubmit":true});$('#page').MiniFrontendDefaultPage({"id":"page","clsname":"MiniFrontendDefaultPage","css_assets":["\/cdesign\/design01\/css\/frontend\/pages\/MiniFrontendDefaultPage.css","\/cdesign\/design01\/css\/frontend\/widgets\/MiniFrontendHeader.css","\/cdesign\/design01\/css\/frontend\/widgets\/MiniFrontendNav.css","\/cdesign\/design01\/css\/frontend\/widgets\/MiniFrontendSlider.css","\/cdesign\/design01\/css\/frontend\/widgets\/MiniFrontendLongBiography.css","\/cdesign\/design01\/css\/frontend\/widgets\/MiniFrontendFooter.css"],"js_assets":["\/cdesign\/common\/js\/frontend\/pages\/MiniFrontendDefaultPage.js","\/cdesign\/design01\/js\/frontend\/pages\/MiniFrontendDefaultPage.js","\/cdesign\/common\/js\/frontend\/widgets\/MiniCommonWidget.js","\/cdesign\/common\/js\/frontend\/widgets\/MiniFrontendWidget.js","\/cdesign\/design01\/js\/frontend\/widgets\/MiniFrontendWidget.js","\/cdesign\/design01\/js\/frontend\/widgets\/MiniFrontendHeader.js","\/cdesign\/design01\/js\/frontend\/widgets\/MiniFrontendSlider.js","\/cdesign\/design01\/js\/frontend\/forms\/MiniFrontendGeneralForm.js","\/cdesign\/design01\/js\/frontend\/forms\/MiniFrontendErrorReportForm.js"],"deferred_widgets":[],"debug_defer":false}); };</script>	<script type="text/javascript" async="" src=" https://static-tracking.klaviyo.com/onsite/js/fender_analytics.42a910303762129b987c.js?cb=1" crossorigin="anonymous"></script><script type="text/javascript" async="" src=" https://static-tracking.klaviyo.com/onsite/js/static.2a7d6da79b4746dd65dc.js?cb=1" crossorigin="anonymous"></script><script type="text/javascript" async="" src="https://static.klaviyo.com/onsite/js/runtime.b07ae9ca441c238382aa.js?cb=1" crossorigin="anonymous"></script><script type="text/javascript" async="" src="https://static.klaviyo.com/onsite/js/sharedUtils.a58c51541e94caa177fd.js?cb=1" crossorigin="anonymous"></script><script type="text/javascript" async="" src=" https://static.klaviyo.com/onsite/js/vendors~signup_forms.00b04f3c478766c4bc48.js?cb=1" crossorigin="anonymous"></script><script type="text/javascript" async="" src=" https://static.klaviyo.com/onsite/js/signup_forms.07fcb90e01059cd58a2b.js?cb=1" crossorigin="anonymous"></script><script type="text/javascript" defer="" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script><script type="text/javascript" defer="" src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script><script type="text/javascript" defer="" src="/temp/js_d23131c7f4884a9e3d53b4c43a1c056b.js"></script><script async="true" type="text/javascript" src="https://cdn.attn.tv/attn.js?v=4-latest_2c7b80f0fe"></script><script async="true" type="text/javascript" src="https://cdn.attn.tv/tag/4-latest/tag.js?v=4-latest_2c7b80f0fe"></script><script type="text/javascript" src="https://cdn.attn.tv/growth-tag-assets/client-configs/1st-art-gallery-gb.attn.tv.js" async="true"></script><style id="kl-custom-fonts">
@import 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400&family=DM+Serif+Display:ital,wght@0,400&family=Inter:ital,wght@0,400;0,600;0,700;0,800&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700&family=Mulish:ital,wght@0,400&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Raleway:ital,wght@0,400;0,700;0,800&display=swap';

</style><link rel="stylesheet" type="text/css" href="https://static.klaviyo.com/onsite/js/532.dd9a1df84d96cf83ca19.css" crossorigin="anonymous"><style id="_goober"> .go3176171171{color:#000000;line-height:normal;}.go3176171171 p{margin:0px;}.go3176171171 span{display:inline;}.go3176171171 ol,.go3176171171 ul{padding:0 0 0 48px;margin:0;}.go3176171171 ul{list-style-type:disc;}.go3176171171 li{line-height:18px;}.go3176171171 a{color:#0066cc;text-decoration:underline;border-bottom:none;}.go1596356512 > div{padding-bottom:8px;padding-top:8px;}.go681896951{cursor:pointer;}.go681896951 *{cursor:pointer;}.go1272136950.go1272136950.go1272136950::before{content:'';background-color:rgba(20, 20, 20, 0.5);height:100%;width:100%;left:0;top:0;bottom:0;right:0;position:fixed;z-index:90000;opacity:1;}.go2497042341.go2497042341.go2497042341::before{content:'';height:100%;background-color:#E5D4B8;top:-50%;width:100%;position:absolute;}.go1583380846.go1583380846.go1583380846::before{content:'';display:block;height:20px;width:100%;}.go1583380846.go1583380846.go1583380846::after{content:'';display:block;height:20px;width:100%;}.go3979775424.go3979775424.go3979775424::placeholder{color:#B4BBC3;font-family:'Poppins', "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;letter-spacing:0px;}.go3979775424.go3979775424.go3979775424::-moz-placeholder{line-height:53px;}.go3979775424.go3979775424.go3979775424:hover{border-color:#000000 !important;}.go3894874857.go3894874857.go3894874857:focus{box-shadow:0 0 5px #0064CD;}.go1206756546.go1206756546.go1206756546::before{content:'';height:100%;background-color:rgba(11,11,11,1);top:-50%;width:100%;position:absolute;}.go2934825004.go2934825004.go2934825004::before{content:'';display:block;height:16px;width:100%;}.go2934825004.go2934825004.go2934825004::after{content:'';display:block;height:16px;width:100%;}.go3262877916.go3262877916.go3262877916::placeholder{color:#91979F;font-family:'Kanit', "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;letter-spacing:0px;}.go3262877916.go3262877916.go3262877916::-moz-placeholder{line-height:50px;}.go3262877916.go3262877916.go3262877916:hover{border-color:#000000 !important;}.go2812342971.go2812342971.go2812342971:focus{box-shadow:0 0 5px rgba(225,42,11,0.91);}.go3754826361.go3754826361.go3754826361::before{content:'';height:100%;background-color:#FFFFFF;top:-50%;width:100%;position:absolute;}.go2142240638.go2142240638.go2142240638::placeholder{color:#B4BBC3;font-family:'Poppins', "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:16px;font-weight:700;letter-spacing:0px;}.go2142240638.go2142240638.go2142240638::-moz-placeholder{line-height:50px;}.go2142240638.go2142240638.go2142240638:hover{border-color:#000000 !important;}.go2332254342.go2332254342.go2332254342:focus{box-shadow:0 0 5px rgba(239,18,18,0);}</style><style type="text/css" class="ju_CSSJS_default">
.ju_Con{text-align:left;z-index:99999998;top:0px;left:0px;display:none;font-family:Arial, Helvetica, sans-serif;width:100%;position:absolute;position:fixed; box-sizing:content-box;line-height: normal;-moz-transition: none;-webkit-transition: none;-o-transition: color 0 ease-in;transition: none;} .ju_overlay {text-align: center; display: none; -webkit-transform: translateZ(0); position: fixed; left: 0%; top: 0%; width: 100%; height: 100%; z-index: 999998; background-position: center center; background-repeat: no-repeat; background-size: cover;}.ju_overlay:before {content: '';height: 100%;display: inline-block;vertical-align: middle;} .ju_iframe{border:none !important;width:100%;height:100% !important;display:block !important;opacity:0;max-width:none !important;} .ju_inpage_con {padding:0 !important;} .ju_inpage_back {background-position: center center; background-repeat: no-repeat; background-size: cover;} .ju_hideall {display:none !important;} </style></head>
<div class="darkbg">
	<div class="container darkbg">
		<div class="biography">
			<div class="row">
                <div class="ce col-md-12">
					<h1>Claude Monet Biography In Details</h1>
                </div>
            </div>
		</div>
	</div>
</div>
<div class="darkbg">
    <div class="container darkbg">
    <div class="biography">
        <div class="inner-wrap">
            <div class="bio-block">
                                        <div class="bio-pic bio-pic-left">
                    <a><img alt="Claude Monet - Self Portrait With A Beret" src="https://www.claudemonetgallery.org/thumbnail/81000/81127/mini_normal/Self-Portrait-With-A-Beret.jpg?ts=1459229076" title="Claude Monet - Self Portrait With A Beret"></a>
                </div>
                                        <div class="bio-block-text bio-block-text-pic-on-left">
                    <h2>Early life</h2>
                    <div class="bio-paragraph">
<p><strong>Claude Monet</strong> also known as <strong>Oscar-Claude Monet</strong> or <strong>Claude Oscar Monet</strong> (November 14, 1840 – December 5, 1926) was a founder of French impressionist painting, and the most consistent and prolific practitioner of the movement's philosophy of expressing one's perceptions before nature, especially as applied to plein-air landscape painting. The term Impressionism is derived from the title of his painting Impression, Sunrise.</p>
</div>

<div class="bio-paragraph">
<p>Claude Monet was born on November 14, 1840 on the fifth floor of 45 rue Laffitte, in the ninth arrondissement of Paris. He was the second son of Claude-Adolphe and Louise-Justine Aubrée Monet, both of them second-generation Parisians. On May 20, 1841, he was baptized into the local church parish, Notre-Dame-de-Lorette as Oscar-Claude. In 1845, his family moved to Le Havre in Normandy. His father wanted him to go into the family grocery store business, but Claude Monet wanted to become an artist. His mother was a singer.</p>
</div>

<div class="bio-paragraph">
<p>&nbsp;</p>
</div>

<div class="bio-paragraph">
<p>On the first of April 1851, Monet entered the Le Havre secondary school of the arts. He first became known locally for his charcoal caricatures, which he would sell for ten to twenty francs. Monet also undertook his first drawing lessons from Jacques-François Ochard, a former student of Jacques-Louis David. On the beaches of Normandy in about 1856/1857 he met fellow artist Eugène Boudin who became his mentor and taught him to use oil paints. Boudin taught Monet "en plein air" (outdoor) techniques for painting.</p>
</div>

<div class="bio-paragraph">
<p>&nbsp;</p>
</div>

<div class="bio-paragraph">
<p>On 28 January 1857 his mother died. He was 16 years old when he left school, and went to live with his widowed childless aunt, Marie-Jeanne Lecadre.</p>
</div>

<div class="bio-paragraph">
<p>&nbsp;</p>
</div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <div class="spacer"></div>
</div>
</div>
<div class="container">
    <div class="biography">
        <div class="inner-wrap">
            <div class="bio-block">
                                        <div class="bio-pic bio-pic-right">
                    <a href="/Camille-Aka-The-Woman-In-A-Green-Dress.html"><img alt="Claude Monet - Camille Aka The Woman In A Green Dress" src="https://www.claudemonetgallery.org/thumbnail/80000/80730/mini_normal/Camille-Aka-The-Woman-In-A-Green-Dress.jpg?ts=1459229076" title="Claude Monet - Camille Aka The Woman In A Green Dress"></a>
                </div>
                                        <div class="bio-block-text bio-block-text-pic-on-right">
                    <h2>Paris</h2>
                    <div class="bio-paragraph">
<p>When Monet traveled to Paris to visit The Louvre, he witnessed painters copying from the old masters. Monet, having brought his paints and other tools with him, would instead go and sit by a window and paint what he saw. Monet was in Paris for several years and met several painters who would become friends and fellow impressionists. One of those friends was Édouard Manet.</p>
</div>

<div class="bio-paragraph">
<p>&nbsp;</p>
</div>

<div class="bio-paragraph">
<p>In June 1861 Monet joined the First Regiment of African Light Cavalry in Algeria for two years of a seven-year commitment, but upon his contracting typhoid his aunt Marie-Jeanne Lecadre intervened to get him out of the army if he agreed to complete an art course at a university. It is possible that the Dutch painter Johan Barthold Jongkind, whom Monet knew, may have prompted his aunt on this matter. Disillusioned with the traditional art taught at universities, in 1862 Monet became a student of Charles Gleyre in Paris, where he met Pierre-Auguste Renoir, Frédéric Bazille, and Alfred Sisley. Together they shared new approaches to art, painting the effects of light en plein air with broken color and rapid brushstrokes, in what later came to be known as Impressionism.</p>
</div>

<div class="bio-paragraph">
<p>&nbsp;</p>
</div>

<div class="bio-paragraph">
<p>Monet's Camille or The Woman in the Green Dress (La Femme à la Robe Verte), painted in 1866, brought him recognition, and was one of many works featuring his future wife, Camille Doncieux; she was the model for the figures in The Woman in the Garden of the following year, as well as for On the Bank of the Seine, Bennecourt, 1868, pictured here. Shortly thereafter Doncieux became pregnant and gave birth to their first child, Jean. In 1868, due to financial reasons, Monet attempted suicide by throwing himself into the Seine.</p>
</div>

<div class="bio-paragraph">
<p>&nbsp;</p>
</div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <div class="spacer"></div>
</div>
<div class="container">
    <div class="biography">
        <div class="inner-wrap">
            <div class="bio-block">
                                        <div class="bio-pic bio-pic-right">
                    <a href="/Impression-Sunrise.html"><img alt="Claude Monet - Impression  Sunrise" src="https://www.claudemonetgallery.org/thumbnail/80000/80912/mini_normal/Impression-Sunrise.jpg?ts=1459229076" title="Claude Monet - Impression  Sunrise"></a>
                </div>
                                        <div class="bio-block-text bio-block-text-pic-on-right">
                    <h2>Franco-Prussian War, Impressionism, and Argenteuil</h2>
                    <div class="bio-paragraph">
<p>After the outbreak of the Franco-Prussian War (July 19, 1870), Monet took refuge in England in September 1870. While there, he studied the works of John Constable and Joseph Mallord William Turner, both of whose landscapes would serve to inspire Monet's innovations in the study of color. In the Spring of 1871, Monet's works were refused authorisation to be included in the Royal Academy exhibition.</p>
</div>

<div class="bio-paragraph">
<p>&nbsp;</p>
</div>

<div class="bio-paragraph">
<p>In May 1871 he left London to live in Zaandam, where he made 25 paintings (and the police suspected him of revolutionary activities). He also paid a first visit to nearby Amsterdam. In October or November 1871 he returned to France. Monet lived from December 1871 to 1878 at Argenteuil, a village on the Seine near Paris, and here he painted some of his best known works. In 1874, he briefly returned to Holland.</p>
</div>

<div class="bio-paragraph">
<p>&nbsp;</p>
</div>

<div class="bio-paragraph">
<p>In 1872 (or 1873), he painted Impression, Sunrise (Impression: soleil levant) depicting a Le Havre landscape. It hung in the first Impressionist exhibition in 1874 and is now displayed in the Musée Marmottan-Monet, Paris. From the painting's title, art critic Louis Leroy coined the term "Impressionism", which he intended as disparagement but which the Impressionists appropriated for themselves.</p>
</div>

<div class="bio-paragraph">
<p>&nbsp;</p>
</div>

<div class="bio-paragraph">
<p>Monet and Camille Doncieux had married just before the war (June 28, 1870) and, after their excursion to London and Zaandam, they had moved into a house in Argenteuil near the Seine River in December 1871. She became ill in 1876. They had a second son, Michel, on March 17, 1878, (Jean was born in 1867). This second child weakened her already fading health. In that same year, he moved to the village of Vétheuil. At the age of thirty-two, Madame Monet died on 5 September 1879 of tuberculosis; Monet painted her on her death bed.</p>
</div>

<div class="bio-paragraph">
<p>&nbsp;</p>
</div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <div class="spacer"></div>
</div>
</body>
`

const htmlToReactParser = new HtmlToReactParser();
const reactElement = htmlToReactParser.parse(rawHTML);
const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);


export default class History extends Component {
    render() {
        return (
          <div>
              { <div dangerouslySetInnerHTML={{ __html: reactHtml }} /> }
          </div>
          )
      }
    }