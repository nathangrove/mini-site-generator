var z=`{z}`=='true',d=document,a=`{html}`,b=`{js}`,c=`{css}`,i=setInterval(y,100);
s=d.createElement('script');
s.src='https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.4.4/lz-string.min.js';
if (z) d.head.appendChild(s);
function y(){ 
    if (!LZString&&z) return; 
    clearInterval(i);
    d.body.innerHTML=(z?LZString.decompressFromBase64(a):atob(a));
    s=d.createElement('script');
    s.innerHTML=(z?LZString.decompressFromBase64(b):atob(b));
    d.body.appendChild(s);
    s=d.createElement('style');
    s.innerHTML=(z?LZString.decompressFromBase64(c):atob(c));
    d.head.appendChild(s);
}