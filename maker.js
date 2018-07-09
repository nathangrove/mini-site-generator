var d = document;
d.body.innerHTML=`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
<style>#p{width:100%} .wrapper, .jumbotron { padding: 5px; }</style>
<div class="jumbotron"><h1>Mini-site Generator</h1></div>
<div class="wrapp">

<div class="row">
    <div class="col-xs-4">
        <div class="form form-horizontal">
            <div class="form-group">
                <label for="" class="control-label col-xs-3">HTML</label>
                <div class="col-xs-9">
                    <textarea id="h" class="form-control"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="" class="control-label col-xs-3">CSS</label>
                <div class="col-xs-9">
                    <textarea id="c" class="form-control"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="" class="control-label col-xs-3">JS</label>
                <div class="col-xs-9">
                    <textarea id="j" class="form-control"></textarea>
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-9 col-xs-offset-3">
                    <input type="checkbox" id="z" name="z" class="pull-left" checked="true">
                    <label for="z" class="control-label pull-left">Compress? (This requires internet for end user)</label>
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-9 col-xs-offset-3"><button class="btn btn-primary form-control" onClick="g()">Generate</button></div>
            </div>
        </div>
    </div>
    
    <div class="col-xs-8">
        <div class="form-group">
            <label for="" class="control-label col-xs-3">URL (<span id="l">0</span> bytes)</label>
            <div class="col-xs-9">
                <textarea id="o" class="form-control" readonly></textarea>
            </div>
        </div>
        
        <h3>Preview</h3>
        <iframe id="p"></iframe>
    </div>
</div>
</div>
`


var d=document;
var s=d.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.4.4/lz-string.min.js';d.head.appendChild(s);
var s=d.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/html-minifier/3.5.18/htmlminifier.min.js';d.head.appendChild(s);
var s=d.createElement('script');s.src='https://kaizhu256.github.io/node-uglifyjs-lite/build..beta..travis-ci.org/app/assets.uglifyjs.js';d.head.appendChild(s);

function g(){
    var z = d.getElementById('z').checked,
    options = {"caseSensitive":false,"collapseBooleanAttributes":true,"collapseInlineTagWhitespace":false,"collapseWhitespace":true,"conservativeCollapse":false,"decodeEntities":true,"html5":true,"includeAutoGeneratedTags":false,"keepClosingSlash":false,"minifyCSS":true,"minifyJS":true,"preserveLineBreaks":false,"preventAttributesEscaping":false,"processConditionalComments":true,"processScripts":["text/html"],"removeAttributeQuotes":true,"removeComments":true,"removeEmptyAttributes":true,"removeEmptyElements":false,"removeOptionalTags":true,"removeRedundantAttributes":true,"removeScriptTypeAttributes":true,"removeStyleLinkTypeAttributes":true,"removeTagWhitespace":true,"sortAttributes":true,"sortClassName":true,"trimCustomFragments":true,"useShortDoctype":true},
    minify = require('html-minifier').minify,
    h = minify(d.getElementById('h').value,options),
    j = utility2_uglifyjs.local.uglify(d.getElementById('j').value),
    c = d.getElementById('c').value.replace(/\n/g,' ').replace(/(?!<\")\/\*[^\*]+\*\/(?!\")/g,' '),
    ch = z ? LZString.compressToBase64(h):btoa(h),
    cj = z ? LZString.compressToBase64(j):btoa(j),
    cc = z ? LZString.compressToBase64(c):btoa(c),

    o = "<script>var z=`{z}`=='true',d=document,a=`{html}`,b=`{js}`,c=`{css}`,i=setInterval(y,100);s=d.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.4.4/lz-string.min.js';if(z)d.head.appendChild(s);function y(){if(!LZString&&z)return;clearInterval(i);d.body.innerHTML=z?LZString.decompressFromBase64(a):atob(a);s=d.createElement('script');s.innerHTML=z?LZString.decompressFromBase64(b):atob(b);d.body.appendChild(s);s=d.createElement('style');s.innerHTML=z?LZString.decompressFromBase64(c):atob(c);d.head.appendChild(s)}</script>";
    o = o.replace('{html}',ch).replace('{js}',cj).replace('{css}',cc).replace('{z}',z);
    o = "data:text/html,"+o;
    d.getElementById('o').value=o;
    d.getElementById('l').innerHTML=o.length;
    if (window.top===window.self) d.getElementById('p').src=o;
}