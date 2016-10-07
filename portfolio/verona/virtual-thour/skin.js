// Garden Gnome Software - Skin
// Pano2VR 4.5.1/10655
// Filename: verona.ggsk
// Generated Вт 4. ноя 23:40:37 2014

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/pmap0__o.png';
		preLoadImg.src=basePath + 'images/pmap__o.png';
	}
	
	this.addSkin=function() {
		this._controller=document.createElement('div');
		this._controller.ggId="controller";
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container';
		this._controller.ggType='container';
		this._controller.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-55 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  -55px;';
		hs+='width: 202px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._controller.setAttribute('style',hs);
		this._up0=document.createElement('div');
		this._up0.ggId="up";
		this._up0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up0.ggVisible=true;
		this._up0.className='ggskin ggskin_svg';
		this._up0.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  -5px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up0.setAttribute('style',hs);
		this._up0__img=document.createElement('img');
		this._up0__img.className='ggskin ggskin_svg';
		this._up0__img.setAttribute('src',basePath + 'images/up0.svg');
		this._up0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._up0__img['ondragstart']=function() { return false; };
		this._up0.appendChild(this._up0__img);
		this._up0.onmouseover=function () {
			me._up0__img.src=basePath + 'images/up0__o.svg';
		}
		this._up0.onmouseout=function () {
			me._up0__img.src=basePath + 'images/up0.svg';
			me.elementMouseDown['up0']=false;
		}
		this._up0.onmousedown=function () {
			me.elementMouseDown['up0']=true;
		}
		this._up0.onmouseup=function () {
			me.elementMouseDown['up0']=false;
		}
		this._up0.ontouchend=function () {
			me.elementMouseDown['up0']=false;
		}
		this._controller.appendChild(this._up0);
		this._down0=document.createElement('div');
		this._down0.ggId="down";
		this._down0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down0.ggVisible=true;
		this._down0.className='ggskin ggskin_svg';
		this._down0.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  25px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down0.setAttribute('style',hs);
		this._down0__img=document.createElement('img');
		this._down0__img.className='ggskin ggskin_svg';
		this._down0__img.setAttribute('src',basePath + 'images/down0.svg');
		this._down0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._down0__img['ondragstart']=function() { return false; };
		this._down0.appendChild(this._down0__img);
		this._down0.onmouseover=function () {
			me._down0__img.src=basePath + 'images/down0__o.svg';
		}
		this._down0.onmouseout=function () {
			me._down0__img.src=basePath + 'images/down0.svg';
			me.elementMouseDown['down0']=false;
		}
		this._down0.onmousedown=function () {
			me.elementMouseDown['down0']=true;
		}
		this._down0.onmouseup=function () {
			me.elementMouseDown['down0']=false;
		}
		this._down0.ontouchend=function () {
			me.elementMouseDown['down0']=false;
		}
		this._controller.appendChild(this._down0);
		this._left0=document.createElement('div');
		this._left0.ggId="left";
		this._left0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left0.ggVisible=true;
		this._left0.className='ggskin ggskin_svg';
		this._left0.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left0.setAttribute('style',hs);
		this._left0__img=document.createElement('img');
		this._left0__img.className='ggskin ggskin_svg';
		this._left0__img.setAttribute('src',basePath + 'images/left0.svg');
		this._left0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._left0__img['ondragstart']=function() { return false; };
		this._left0.appendChild(this._left0__img);
		this._left0.onmouseover=function () {
			me._left0__img.src=basePath + 'images/left0__o.svg';
		}
		this._left0.onmouseout=function () {
			me._left0__img.src=basePath + 'images/left0.svg';
			me.elementMouseDown['left0']=false;
		}
		this._left0.onmousedown=function () {
			me.elementMouseDown['left0']=true;
		}
		this._left0.onmouseup=function () {
			me.elementMouseDown['left0']=false;
		}
		this._left0.ontouchend=function () {
			me.elementMouseDown['left0']=false;
		}
		this._controller.appendChild(this._left0);
		this._right0=document.createElement('div');
		this._right0.ggId="right";
		this._right0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right0.ggVisible=true;
		this._right0.className='ggskin ggskin_svg';
		this._right0.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 50px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right0.setAttribute('style',hs);
		this._right0__img=document.createElement('img');
		this._right0__img.className='ggskin ggskin_svg';
		this._right0__img.setAttribute('src',basePath + 'images/right0.svg');
		this._right0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._right0__img['ondragstart']=function() { return false; };
		this._right0.appendChild(this._right0__img);
		this._right0.onmouseover=function () {
			me._right0__img.src=basePath + 'images/right0__o.svg';
		}
		this._right0.onmouseout=function () {
			me._right0__img.src=basePath + 'images/right0.svg';
			me.elementMouseDown['right0']=false;
		}
		this._right0.onmousedown=function () {
			me.elementMouseDown['right0']=true;
		}
		this._right0.onmouseup=function () {
			me.elementMouseDown['right0']=false;
		}
		this._right0.ontouchend=function () {
			me.elementMouseDown['right0']=false;
		}
		this._controller.appendChild(this._right0);
		this._zoomin=document.createElement('div');
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg';
		this._zoomin.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 91px;';
		hs+='top:  -6px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.onmouseover=function () {
			me._zoomin__img.src=basePath + 'images/zoomin__o.svg';
		}
		this._zoomin.onmouseout=function () {
			me._zoomin__img.src=basePath + 'images/zoomin.svg';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._controller.appendChild(this._zoomin);
		this._zoomout=document.createElement('div');
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg';
		this._zoomout.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 91px;';
		hs+='top:  23px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.onmouseover=function () {
			me._zoomout__img.src=basePath + 'images/zoomout__o.svg';
		}
		this._zoomout.onmouseout=function () {
			me._zoomout__img.src=basePath + 'images/zoomout.svg';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._controller.appendChild(this._zoomout);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg';
		this._fullscreen.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 134px;';
		hs+='top:  9px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='inherit';
			me._tt_fullscreen.ggVisible=true;
			me._fullscreen__img.src=basePath + 'images/fullscreen__o.svg';
		}
		this._fullscreen.onmouseout=function () {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='hidden';
			me._tt_fullscreen.ggVisible=false;
			me._fullscreen__img.src=basePath + 'images/fullscreen.svg';
		}
		this._tt_fullscreen=document.createElement('div');
		this._tt_fullscreen__text=document.createElement('div');
		this._tt_fullscreen.className='ggskin ggskin_textdiv';
		this._tt_fullscreen.ggTextDiv=this._tt_fullscreen__text;
		this._tt_fullscreen.ggId="tt_fullscreen";
		this._tt_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen.ggVisible=false;
		this._tt_fullscreen.className='ggskin ggskin_text';
		this._tt_fullscreen.ggType='text';
		hs ='position:absolute;';
		hs+='left: -49px;';
		hs+='top:  28px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen__text.setAttribute('style',hs);
		this._tt_fullscreen__text.innerHTML="\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c";
		this._tt_fullscreen.appendChild(this._tt_fullscreen__text);
		this._tt_fullscreen_white=document.createElement('div');
		this._tt_fullscreen_white__text=document.createElement('div');
		this._tt_fullscreen_white.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white.ggTextDiv=this._tt_fullscreen_white__text;
		this._tt_fullscreen_white.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white.ggVisible=true;
		this._tt_fullscreen_white.className='ggskin ggskin_text';
		this._tt_fullscreen_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_fullscreen_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white__text.setAttribute('style',hs);
		this._tt_fullscreen_white__text.innerHTML="\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c";
		this._tt_fullscreen_white.appendChild(this._tt_fullscreen_white__text);
		this._tt_fullscreen.appendChild(this._tt_fullscreen_white);
		this._fullscreen.appendChild(this._tt_fullscreen);
		this._controller.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._controller);
		this.__=document.createElement('div');
		this.__.ggId="\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435";
		this.__.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__.ggVisible=true;
		this.__.className='ggskin ggskin_container';
		this.__.ggType='container';
		this.__.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-482 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -482px;';
		hs+='top:  4px;';
		hs+='width: 479px;';
		hs+='height: 21px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__.setAttribute('style',hs);
		this.__0=document.createElement('div');
		this.__0__text=document.createElement('div');
		this.__0.className='ggskin ggskin_textdiv';
		this.__0.ggTextDiv=this.__0__text;
		this.__0.ggId="\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435-\u0447\u0435\u0440\u043d\u043e\u0435";
		this.__0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__0.ggVisible=true;
		this.__0.className='ggskin ggskin_text';
		this.__0.ggType='text';
		hs ='position:absolute;';
		hs+='left: 70px;';
		hs+='top:  -1px;';
		hs+='width: 398px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__0.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 398px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this.__0__text.setAttribute('style',hs);
		this.__0.ggUpdateText=function() {
			var hs=me.player.userdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this.__0.ggUpdateText();
		this.__0.appendChild(this.__0__text);
		this.__1=document.createElement('div');
		this.__1__text=document.createElement('div');
		this.__1.className='ggskin ggskin_textdiv';
		this.__1.ggTextDiv=this.__1__text;
		this.__1.ggId="\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435";
		this.__1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1.ggVisible=true;
		this.__1.className='ggskin ggskin_text';
		this.__1.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  1px;';
		hs+='width: 398px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__1.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 398px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this.__1__text.setAttribute('style',hs);
		this.__1.ggUpdateText=function() {
			var hs=me.player.userdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this.__1.ggUpdateText();
		this.__1.appendChild(this.__1__text);
		this.__0.appendChild(this.__1);
		this.__.appendChild(this.__0);
		this.divSkin.appendChild(this.__);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container';
		this._loading.ggType='container';
		this._loading.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-105 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-30 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -105px;';
		hs+='top:  -30px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading.setAttribute('style',hs);
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle';
		this._loadingbg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='background: #f0511a;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbg.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbg);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId="loadingbrd";
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		this._loadingbrd.className='ggskin ggskin_rectangle';
		this._loadingbrd.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 208px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbrd.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text';
		this._loadingtext.ggType='text';
		this._loadingtext.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (176-this.ggTextDiv.offsetWidth)*0) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  12px;';
		hs+='width: 176px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		this._loadingtext.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle';
		this._loadingbar.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  35px;';
		hs+='width: 181px;';
		hs+='height: 12px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #808080;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		this._loadingbar.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._hide_template=document.createElement('div');
		this._hide_template.ggId="Hide_template";
		this._hide_template.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_template.ggVisible=false;
		this._hide_template.className='ggskin ggskin_container';
		this._hide_template.ggType='container';
		hs ='position:absolute;';
		hs+='left: 1019px;';
		hs+='top:  277px;';
		hs+='width: 18px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._hide_template.setAttribute('style',hs);
		this._markertemplate=document.createElement('div');
		this._markertemplate.ggId="markertemplate";
		this._markertemplate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate.ggVisible=true;
		this._markertemplate.className='ggskin ggskin_mark';
		this._markertemplate.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  -8px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._markertemplate.setAttribute('style',hs);
		this._markertemplate.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate);
		this._markertemplate.ggActivate=function () {
			me._radar.style[domTransition]='none';
			me._radar.ggParameter.rx=15;me._radar.ggParameter.ry=-8;
			me._radar.style[domTransform]=parameterToTransform(me._radar.ggParameter);
		}
		this._hide_template.appendChild(this._markertemplate);
		this._node_active=document.createElement('div');
		this._node_active.ggId="node_active";
		this._node_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._node_active.ggVisible=true;
		this._node_active.className='ggskin ggskin_image';
		this._node_active.ggType='image';
		this._node_active.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-6 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-11 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -6px;';
		hs+='top:  -11px;';
		hs+='width: 20px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._node_active.setAttribute('style',hs);
		this._node_active__img=document.createElement('img');
		this._node_active__img.className='ggskin ggskin_image';
		this._node_active__img.setAttribute('src',basePath + 'images/node_active.png');
		this._node_active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._node_active__img.className='ggskin ggskin_image';
		this._node_active__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._node_active__img);
		this._node_active.appendChild(this._node_active__img);
		this._hide_template.appendChild(this._node_active);
		this._node_normal=document.createElement('div');
		this._node_normal.ggId="node_normal";
		this._node_normal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._node_normal.ggVisible=true;
		this._node_normal.className='ggskin ggskin_image';
		this._node_normal.ggType='image';
		this._node_normal.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-6 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(5 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -6px;';
		hs+='top:  5px;';
		hs+='width: 20px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._node_normal.setAttribute('style',hs);
		this._node_normal__img=document.createElement('img');
		this._node_normal__img.className='ggskin ggskin_image';
		this._node_normal__img.setAttribute('src',basePath + 'images/node_normal.png');
		this._node_normal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._node_normal__img.className='ggskin ggskin_image';
		this._node_normal__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._node_normal__img);
		this._node_normal.appendChild(this._node_normal__img);
		this._hide_template.appendChild(this._node_normal);
		this.divSkin.appendChild(this._hide_template);
		this._hotspots=document.createElement('div');
		this._hotspots.ggId="Hotspots";
		this._hotspots.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hotspots.ggVisible=true;
		this._hotspots.className='ggskin ggskin_container';
		this._hotspots.ggType='container';
		hs ='position:absolute;';
		hs+='left: 68px;';
		hs+='top:  93px;';
		hs+='width: 68px;';
		hs+='height: 72px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._hotspots.setAttribute('style',hs);
		this.divSkin.appendChild(this._hotspots);
		this._image_1=document.createElement('div');
		this._image_1.ggId="Image 1";
		this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1.ggVisible=true;
		this._image_1.className='ggskin ggskin_image';
		this._image_1.ggType='image';
		this._image_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-75 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -180px;';
		hs+='top:  -75px;';
		hs+='width: 171px;';
		hs+='height: 67px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.6;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._image_1.setAttribute('style',hs);
		this._image_1__img=document.createElement('img');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
		this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1__img);
		this._image_1.appendChild(this._image_1__img);
		this._image_1.onclick=function () {
			me.player.openUrl("http:\/\/verona-for.me\/","_blank");
		}
		this.divSkin.appendChild(this._image_1);
		this._map=document.createElement('div');
		this._map.ggId="Map";
		this._map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map.ggVisible=true;
		this._map.className='ggskin ggskin_container';
		this._map.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 307px;';
		hs+='height: 462px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map.setAttribute('style',hs);
		this._mappic=document.createElement('div');
		this._mappic.ggId="Map-pic";
		this._mappic.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mappic.ggVisible=true;
		this._mappic.className='ggskin ggskin_image';
		this._mappic.ggType='image';
		hs ='position:absolute;';
		hs+='left: 72px;';
		hs+='top:  26px;';
		hs+='width: 244px;';
		hs+='height: 300px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._mappic.setAttribute('style',hs);
		this._mappic__img=document.createElement('img');
		this._mappic__img.className='ggskin ggskin_image';
		this._mappic__img.setAttribute('src',basePath + 'images/mappic.png');
		this._mappic__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._mappic__img.className='ggskin ggskin_image';
		this._mappic__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._mappic__img);
		this._mappic.appendChild(this._mappic__img);
		this._map.appendChild(this._mappic);
		this._radar=document.createElement('div');
		this._radar.ggId="radar";
		this._radar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar.ggVisible=true;
		this._radar.className='ggskin ggskin_container';
		this._radar.ggType='container';
		hs ='position:absolute;';
		hs+='left: -32px;';
		hs+='top:  -32px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._radar.setAttribute('style',hs);
		this._radar_beam=document.createElement('div');
		this._radar_beam.ggId="radar beam";
		this._radar_beam.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_beam.ggVisible=true;
		this._radar_beam.className='ggskin ggskin_image';
		this._radar_beam.ggType='image';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._radar_beam.setAttribute('style',hs);
		this._radar_beam__img=document.createElement('img');
		this._radar_beam__img.className='ggskin ggskin_image';
		this._radar_beam__img.setAttribute('src',basePath + 'images/radar_beam.png');
		this._radar_beam__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._radar_beam__img.className='ggskin ggskin_image';
		this._radar_beam__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._radar_beam__img);
		this._radar_beam.appendChild(this._radar_beam__img);
		this._radar.appendChild(this._radar_beam);
		this._map.appendChild(this._radar);
		this._p0=document.createElement('div');
		this._p0.ggId="p0";
		this._p0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p0.ggVisible=true;
		this._p0.className='ggskin ggskin_mark';
		this._p0.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 237px;';
		hs+='top:  226px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._p0.setAttribute('style',hs);
		this._p0.ggMarkerNodeId='p00';
		nodeMarker.push(this._p0);
		this._p0.onclick=function () {
			me.player.openNext("00.swf","");
		}
		this._p0.onmouseover=function () {
			me.elementMouseOver['p0']=true;
		}
		this._p0.onmouseout=function () {
			me._tr00.style[domTransition]='none';
			me._tr00.style.visibility='hidden';
			me._tr00.ggVisible=false;
			me.elementMouseOver['p0']=false;
		}
		this._p0.ontouchend=function () {
			me.elementMouseOver['p0']=false;
		}
		this._p0.ggActivate=function () {
			me._radar.style[domTransition]='none';
			me._radar.ggParameter.rx=237;me._radar.ggParameter.ry=226;
			me._radar.style[domTransform]=parameterToTransform(me._radar.ggParameter);
		}
		this._tr00=document.createElement('div');
		this._tr00.ggId="TR0";
		this._tr00.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tr00.ggVisible=false;
		this._tr00.className='ggskin ggskin_image';
		this._tr00.ggType='image';
		hs ='position:absolute;';
		hs+='left: -187px;';
		hs+='top:  104px;';
		hs+='width: 250px;';
		hs+='height: 125px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tr00.setAttribute('style',hs);
		this._tr00__img=document.createElement('img');
		this._tr00__img.className='ggskin ggskin_image';
		this._tr00__img.setAttribute('src',basePath + 'images/tr00.png');
		this._tr00__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tr00__img.className='ggskin ggskin_image';
		this._tr00__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tr00__img);
		this._tr00.appendChild(this._tr00__img);
		this._p0.appendChild(this._tr00);
		this._map.appendChild(this._p0);
		this._p1=document.createElement('div');
		this._p1.ggId="p1";
		this._p1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p1.ggVisible=true;
		this._p1.className='ggskin ggskin_mark';
		this._p1.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 241px;';
		hs+='top:  167px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._p1.setAttribute('style',hs);
		this._p1.ggMarkerNodeId='p01';
		nodeMarker.push(this._p1);
		this._p1.onclick=function () {
			me.player.openNext("01.swf","");
		}
		this._p1.onmouseover=function () {
			me.elementMouseOver['p1']=true;
		}
		this._p1.onmouseout=function () {
			me._tr10.style[domTransition]='none';
			me._tr10.style.visibility='hidden';
			me._tr10.ggVisible=false;
			me.elementMouseOver['p1']=false;
		}
		this._p1.ontouchend=function () {
			me.elementMouseOver['p1']=false;
		}
		this._p1.ggActivate=function () {
			me._radar.style[domTransition]='none';
			me._radar.ggParameter.rx=241;me._radar.ggParameter.ry=167;
			me._radar.style[domTransform]=parameterToTransform(me._radar.ggParameter);
		}
		this._tr10=document.createElement('div');
		this._tr10.ggId="TR1";
		this._tr10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tr10.ggVisible=false;
		this._tr10.className='ggskin ggskin_image';
		this._tr10.ggType='image';
		hs ='position:absolute;';
		hs+='left: -191px;';
		hs+='top:  163px;';
		hs+='width: 250px;';
		hs+='height: 125px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tr10.setAttribute('style',hs);
		this._tr10__img=document.createElement('img');
		this._tr10__img.className='ggskin ggskin_image';
		this._tr10__img.setAttribute('src',basePath + 'images/tr10.png');
		this._tr10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tr10__img.className='ggskin ggskin_image';
		this._tr10__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tr10__img);
		this._tr10.appendChild(this._tr10__img);
		this._p1.appendChild(this._tr10);
		this._map.appendChild(this._p1);
		this._p2=document.createElement('div');
		this._p2.ggId="p2";
		this._p2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p2.ggVisible=true;
		this._p2.className='ggskin ggskin_mark';
		this._p2.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 239px;';
		hs+='top:  110px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._p2.setAttribute('style',hs);
		this._p2.ggMarkerNodeId='p02';
		nodeMarker.push(this._p2);
		this._p2.onclick=function () {
			me.player.openNext("02.swf","");
		}
		this._p2.onmouseover=function () {
			me.elementMouseOver['p2']=true;
		}
		this._p2.onmouseout=function () {
			me._tr20.style[domTransition]='none';
			me._tr20.style.visibility='hidden';
			me._tr20.ggVisible=false;
			me.elementMouseOver['p2']=false;
		}
		this._p2.ontouchend=function () {
			me.elementMouseOver['p2']=false;
		}
		this._p2.ggActivate=function () {
			me._radar.style[domTransition]='none';
			me._radar.ggParameter.rx=239;me._radar.ggParameter.ry=110;
			me._radar.style[domTransform]=parameterToTransform(me._radar.ggParameter);
		}
		this._tr20=document.createElement('div');
		this._tr20.ggId="TR2";
		this._tr20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tr20.ggVisible=false;
		this._tr20.className='ggskin ggskin_image';
		this._tr20.ggType='image';
		hs ='position:absolute;';
		hs+='left: -189px;';
		hs+='top:  220px;';
		hs+='width: 250px;';
		hs+='height: 125px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tr20.setAttribute('style',hs);
		this._tr20__img=document.createElement('img');
		this._tr20__img.className='ggskin ggskin_image';
		this._tr20__img.setAttribute('src',basePath + 'images/tr20.png');
		this._tr20__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tr20__img.className='ggskin ggskin_image';
		this._tr20__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tr20__img);
		this._tr20.appendChild(this._tr20__img);
		this._p2.appendChild(this._tr20);
		this._map.appendChild(this._p2);
		this._p3=document.createElement('div');
		this._p3.ggId="p3";
		this._p3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p3.ggVisible=true;
		this._p3.className='ggskin ggskin_mark';
		this._p3.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 169px;';
		hs+='top:  86px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._p3.setAttribute('style',hs);
		this._p3.ggMarkerNodeId='p03';
		nodeMarker.push(this._p3);
		this._p3.onclick=function () {
			me.player.openNext("03.swf","");
		}
		this._p3.onmouseover=function () {
			me.elementMouseOver['p3']=true;
		}
		this._p3.onmouseout=function () {
			me._tr30.style[domTransition]='none';
			me._tr30.style.visibility='hidden';
			me._tr30.ggVisible=false;
			me.elementMouseOver['p3']=false;
		}
		this._p3.ontouchend=function () {
			me.elementMouseOver['p3']=false;
		}
		this._p3.ggActivate=function () {
			me._radar.style[domTransition]='none';
			me._radar.ggParameter.rx=169;me._radar.ggParameter.ry=86;
			me._radar.style[domTransform]=parameterToTransform(me._radar.ggParameter);
		}
		this._tr30=document.createElement('div');
		this._tr30.ggId="TR3";
		this._tr30.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tr30.ggVisible=false;
		this._tr30.className='ggskin ggskin_image';
		this._tr30.ggType='image';
		hs ='position:absolute;';
		hs+='left: -119px;';
		hs+='top:  244px;';
		hs+='width: 250px;';
		hs+='height: 125px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tr30.setAttribute('style',hs);
		this._tr30__img=document.createElement('img');
		this._tr30__img.className='ggskin ggskin_image';
		this._tr30__img.setAttribute('src',basePath + 'images/tr30.png');
		this._tr30__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tr30__img.className='ggskin ggskin_image';
		this._tr30__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tr30__img);
		this._tr30.appendChild(this._tr30__img);
		this._p3.appendChild(this._tr30);
		this._map.appendChild(this._p3);
		this._p4=document.createElement('div');
		this._p4.ggId="p4";
		this._p4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p4.ggVisible=true;
		this._p4.className='ggskin ggskin_mark';
		this._p4.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 166px;';
		hs+='top:  255px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._p4.setAttribute('style',hs);
		this._p4.ggMarkerNodeId='p04';
		nodeMarker.push(this._p4);
		this._p4.onclick=function () {
			me.player.openNext("04.swf","");
		}
		this._p4.onmouseover=function () {
			me.elementMouseOver['p4']=true;
		}
		this._p4.onmouseout=function () {
			me._tr40.style[domTransition]='none';
			me._tr40.style.visibility='hidden';
			me._tr40.ggVisible=false;
			me.elementMouseOver['p4']=false;
		}
		this._p4.ontouchend=function () {
			me.elementMouseOver['p4']=false;
		}
		this._p4.ggActivate=function () {
			me._radar.style[domTransition]='none';
			me._radar.ggParameter.rx=166;me._radar.ggParameter.ry=255;
			me._radar.style[domTransform]=parameterToTransform(me._radar.ggParameter);
		}
		this._tr40=document.createElement('div');
		this._tr40.ggId="TR4";
		this._tr40.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tr40.ggVisible=false;
		this._tr40.className='ggskin ggskin_image';
		this._tr40.ggType='image';
		hs ='position:absolute;';
		hs+='left: -116px;';
		hs+='top:  75px;';
		hs+='width: 250px;';
		hs+='height: 125px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tr40.setAttribute('style',hs);
		this._tr40__img=document.createElement('img');
		this._tr40__img.className='ggskin ggskin_image';
		this._tr40__img.setAttribute('src',basePath + 'images/tr40.png');
		this._tr40__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tr40__img.className='ggskin ggskin_image';
		this._tr40__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tr40__img);
		this._tr40.appendChild(this._tr40__img);
		this._p4.appendChild(this._tr40);
		this._map.appendChild(this._p4);
		this._t0=document.createElement('div');
		this._t0__text=document.createElement('div');
		this._t0.className='ggskin ggskin_textdiv';
		this._t0.ggTextDiv=this._t0__text;
		this._t0.ggId="T0";
		this._t0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._t0.ggVisible=true;
		this._t0.className='ggskin ggskin_text';
		this._t0.ggType='text';
		this._t0.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 200px;';
		hs+='top:  246px;';
		hs+='width: 96px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._t0.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._t0__text.setAttribute('style',hs);
		this._t0__text.innerHTML="\u0412\u0445\u043e\u0434";
		this._t0.appendChild(this._t0__text);
		this._map.appendChild(this._t0);
		this._t01=document.createElement('div');
		this._t01__text=document.createElement('div');
		this._t01.className='ggskin ggskin_textdiv';
		this._t01.ggTextDiv=this._t01__text;
		this._t01.ggId="T0-1";
		this._t01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._t01.ggVisible=true;
		this._t01.className='ggskin ggskin_text';
		this._t01.ggType='text';
		this._t01.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 199px;';
		hs+='top:  245px;';
		hs+='width: 96px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._t01.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._t01__text.setAttribute('style',hs);
		this._t01__text.innerHTML="\u0412\u0445\u043e\u0434";
		this._t01.appendChild(this._t01__text);
		this._map.appendChild(this._t01);
		this._t4=document.createElement('div');
		this._t4__text=document.createElement('div');
		this._t4.className='ggskin ggskin_textdiv';
		this._t4.ggTextDiv=this._t4__text;
		this._t4.ggId="T4";
		this._t4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._t4.ggVisible=true;
		this._t4.className='ggskin ggskin_text';
		this._t4.ggType='text';
		this._t4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 129px;';
		hs+='top:  277px;';
		hs+='width: 96px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._t4.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._t4__text.setAttribute('style',hs);
		this._t4__text.innerHTML="\u0428\u043e\u0443 \u0440\u0443\u043c";
		this._t4.appendChild(this._t4__text);
		this._map.appendChild(this._t4);
		this._t41=document.createElement('div');
		this._t41__text=document.createElement('div');
		this._t41.className='ggskin ggskin_textdiv';
		this._t41.ggTextDiv=this._t41__text;
		this._t41.ggId="T4-1";
		this._t41.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._t41.ggVisible=true;
		this._t41.className='ggskin ggskin_text';
		this._t41.ggType='text';
		this._t41.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 128px;';
		hs+='top:  276px;';
		hs+='width: 96px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._t41.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._t41__text.setAttribute('style',hs);
		this._t41__text.innerHTML="\u0428\u043e\u0443 \u0440\u0443\u043c";
		this._t41.appendChild(this._t41__text);
		this._map.appendChild(this._t41);
		this._t3=document.createElement('div');
		this._t3__text=document.createElement('div');
		this._t3.className='ggskin ggskin_textdiv';
		this._t3.ggTextDiv=this._t3__text;
		this._t3.ggId="T3";
		this._t3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._t3.ggVisible=true;
		this._t3.className='ggskin ggskin_text';
		this._t3.ggType='text';
		this._t3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 96px;';
		hs+='top:  109px;';
		hs+='width: 96px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._t3.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._t3__text.setAttribute('style',hs);
		this._t3__text.innerHTML="\u0417\u0430\u043b \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043c\u0435\u0431\u0435\u043b\u0438";
		this._t3.appendChild(this._t3__text);
		this._map.appendChild(this._t3);
		this._t31=document.createElement('div');
		this._t31__text=document.createElement('div');
		this._t31.className='ggskin ggskin_textdiv';
		this._t31.ggTextDiv=this._t31__text;
		this._t31.ggId="T3-1";
		this._t31.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._t31.ggVisible=true;
		this._t31.className='ggskin ggskin_text';
		this._t31.ggType='text';
		this._t31.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 95px;';
		hs+='top:  108px;';
		hs+='width: 96px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._t31.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._t31__text.setAttribute('style',hs);
		this._t31__text.innerHTML="\u0417\u0430\u043b \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043c\u0435\u0431\u0435\u043b\u0438";
		this._t31.appendChild(this._t31__text);
		this._map.appendChild(this._t31);
		this._t2=document.createElement('div');
		this._t2__text=document.createElement('div');
		this._t2.className='ggskin ggskin_textdiv';
		this._t2.ggTextDiv=this._t2__text;
		this._t2.ggId="T2";
		this._t2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._t2.ggVisible=true;
		this._t2.className='ggskin ggskin_text';
		this._t2.ggType='text';
		this._t2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 205px;';
		hs+='top:  132px;';
		hs+='width: 96px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._t2.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._t2__text.setAttribute('style',hs);
		this._t2__text.innerHTML="\u0417\u0430\u043b \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043a\u043b\u0430\u0441\u0441\u0438\u043a\u0438";
		this._t2.appendChild(this._t2__text);
		this._map.appendChild(this._t2);
		this._t21=document.createElement('div');
		this._t21__text=document.createElement('div');
		this._t21.className='ggskin ggskin_textdiv';
		this._t21.ggTextDiv=this._t21__text;
		this._t21.ggId="T2-1";
		this._t21.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._t21.ggVisible=true;
		this._t21.className='ggskin ggskin_text';
		this._t21.ggType='text';
		this._t21.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 204px;';
		hs+='top:  131px;';
		hs+='width: 96px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._t21.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._t21__text.setAttribute('style',hs);
		this._t21__text.innerHTML="\u0417\u0430\u043b \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043a\u043b\u0430\u0441\u0441\u0438\u043a\u0438";
		this._t21.appendChild(this._t21__text);
		this._map.appendChild(this._t21);
		this._t1=document.createElement('div');
		this._t1__text=document.createElement('div');
		this._t1.className='ggskin ggskin_textdiv';
		this._t1.ggTextDiv=this._t1__text;
		this._t1.ggId="T1";
		this._t1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._t1.ggVisible=true;
		this._t1.className='ggskin ggskin_text';
		this._t1.ggType='text';
		this._t1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 206px;';
		hs+='top:  193px;';
		hs+='width: 96px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._t1.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._t1__text.setAttribute('style',hs);
		this._t1__text.innerHTML="\u0417\u0430\u043b \u043c\u0435\u0431\u0435\u043b\u0438 \u0432 \u0441\u0442\u0438\u043b\u0435 \u043c\u043e\u0434\u0435\u0440\u043d";
		this._t1.appendChild(this._t1__text);
		this._map.appendChild(this._t1);
		this._t11=document.createElement('div');
		this._t11__text=document.createElement('div');
		this._t11.className='ggskin ggskin_textdiv';
		this._t11.ggTextDiv=this._t11__text;
		this._t11.ggId="T1-1";
		this._t11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._t11.ggVisible=true;
		this._t11.className='ggskin ggskin_text';
		this._t11.ggType='text';
		this._t11.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 205px;';
		hs+='top:  192px;';
		hs+='width: 96px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._t11.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._t11__text.setAttribute('style',hs);
		this._t11__text.innerHTML="\u0417\u0430\u043b \u043c\u0435\u0431\u0435\u043b\u0438 \u0432 \u0441\u0442\u0438\u043b\u0435 \u043c\u043e\u0434\u0435\u0440\u043d";
		this._t11.appendChild(this._t11__text);
		this._map.appendChild(this._t11);
		this._close_map=document.createElement('div');
		this._close_map.ggId="close_map";
		this._close_map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close_map.ggVisible=true;
		this._close_map.className='ggskin ggskin_svg';
		this._close_map.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 268px;';
		hs+='top:  36px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._close_map.setAttribute('style',hs);
		this._close_map__img=document.createElement('img');
		this._close_map__img.className='ggskin ggskin_svg';
		this._close_map__img.setAttribute('src',basePath + 'images/close_map.svg');
		this._close_map__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._close_map__img['ondragstart']=function() { return false; };
		this._close_map.appendChild(this._close_map__img);
		this._close_map.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._map.ggParameter.rx=0;me._map.ggParameter.ry=-470;
			me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
		}
		this._close_map.onmouseover=function () {
			me._close_map__img.src=basePath + 'images/close_map__o.svg';
		}
		this._close_map.onmouseout=function () {
			me._close_map__img.src=basePath + 'images/close_map.svg';
		}
		this._map.appendChild(this._close_map);
		this.divSkin.appendChild(this._map);
		this._cmini=document.createElement('div');
		this._cmini.ggId="C-mini";
		this._cmini.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cmini.ggVisible=true;
		this._cmini.className='ggskin ggskin_container';
		this._cmini.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 508px;';
		hs+='height: 420px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._cmini.setAttribute('style',hs);
		this._tr4=document.createElement('div');
		this._tr4.ggId="Tr4";
		this._tr4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tr4.ggVisible=true;
		this._tr4.className='ggskin ggskin_image';
		this._tr4.ggType='image';
		hs ='position:absolute;';
		hs+='left: 256px;';
		hs+='top:  288px;';
		hs+='width: 250px;';
		hs+='height: 125px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._tr4.setAttribute('style',hs);
		this._tr4__img=document.createElement('img');
		this._tr4__img.className='ggskin ggskin_image';
		this._tr4__img.setAttribute('src',basePath + 'images/tr4.png');
		this._tr4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tr4__img.className='ggskin ggskin_image';
		this._tr4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tr4__img);
		this._tr4.appendChild(this._tr4__img);
		this._tr4.onclick=function () {
			me.player.openNext("04.swf","");
		}
		this._tc4=document.createElement('div');
		this._tc4__text=document.createElement('div');
		this._tc4.className='ggskin ggskin_textdiv';
		this._tc4.ggTextDiv=this._tc4__text;
		this._tc4.ggId="TC4";
		this._tc4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tc4.ggVisible=true;
		this._tc4.className='ggskin ggskin_text';
		this._tc4.ggType='text';
		this._tc4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (243-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 5px;';
		hs+='top:  99px;';
		hs+='width: 241px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tc4.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._tc4__text.setAttribute('style',hs);
		this._tc4__text.innerHTML="\u0428\u043e\u0443 \u0440\u0443\u043c";
		this._tc4.appendChild(this._tc4__text);
		this._tr4.appendChild(this._tc4);
		this._cmini.appendChild(this._tr4);
		this._tr3=document.createElement('div');
		this._tr3.ggId="Tr3";
		this._tr3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tr3.ggVisible=true;
		this._tr3.className='ggskin ggskin_image';
		this._tr3.ggType='image';
		hs ='position:absolute;';
		hs+='left: 1px;';
		hs+='top:  288px;';
		hs+='width: 250px;';
		hs+='height: 125px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._tr3.setAttribute('style',hs);
		this._tr3__img=document.createElement('img');
		this._tr3__img.className='ggskin ggskin_image';
		this._tr3__img.setAttribute('src',basePath + 'images/tr3.png');
		this._tr3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tr3__img.className='ggskin ggskin_image';
		this._tr3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tr3__img);
		this._tr3.appendChild(this._tr3__img);
		this._tr3.onclick=function () {
			me.player.openNext("03.swf","");
		}
		this._tc3=document.createElement('div');
		this._tc3__text=document.createElement('div');
		this._tc3.className='ggskin ggskin_textdiv';
		this._tc3.ggTextDiv=this._tc3__text;
		this._tc3.ggId="TC3";
		this._tc3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tc3.ggVisible=true;
		this._tc3.className='ggskin ggskin_text';
		this._tc3.ggType='text';
		this._tc3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (245-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  99px;';
		hs+='width: 243px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tc3.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._tc3__text.setAttribute('style',hs);
		this._tc3__text.innerHTML="\u0417\u0430\u043b \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043c\u0435\u0431\u0435\u043b\u0438";
		this._tc3.appendChild(this._tc3__text);
		this._tr3.appendChild(this._tc3);
		this._cmini.appendChild(this._tr3);
		this._tr2=document.createElement('div');
		this._tr2.ggId="Tr2";
		this._tr2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tr2.ggVisible=true;
		this._tr2.className='ggskin ggskin_image';
		this._tr2.ggType='image';
		hs ='position:absolute;';
		hs+='left: 256px;';
		hs+='top:  159px;';
		hs+='width: 250px;';
		hs+='height: 125px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._tr2.setAttribute('style',hs);
		this._tr2__img=document.createElement('img');
		this._tr2__img.className='ggskin ggskin_image';
		this._tr2__img.setAttribute('src',basePath + 'images/tr2.png');
		this._tr2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tr2__img.className='ggskin ggskin_image';
		this._tr2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tr2__img);
		this._tr2.appendChild(this._tr2__img);
		this._tr2.onclick=function () {
			me.player.openNext("02.swf","");
		}
		this._tc2=document.createElement('div');
		this._tc2__text=document.createElement('div');
		this._tc2.className='ggskin ggskin_textdiv';
		this._tc2.ggTextDiv=this._tc2__text;
		this._tc2.ggId="TC2";
		this._tc2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tc2.ggVisible=true;
		this._tc2.className='ggskin ggskin_text';
		this._tc2.ggType='text';
		this._tc2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (245-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  99px;';
		hs+='width: 243px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tc2.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._tc2__text.setAttribute('style',hs);
		this._tc2__text.innerHTML="\u0417\u0430\u043b \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043a\u043b\u0430\u0441\u0441\u0438\u043a\u0438";
		this._tc2.appendChild(this._tc2__text);
		this._tr2.appendChild(this._tc2);
		this._cmini.appendChild(this._tr2);
		this._tr1=document.createElement('div');
		this._tr1.ggId="Tr1";
		this._tr1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tr1.ggVisible=true;
		this._tr1.className='ggskin ggskin_image';
		this._tr1.ggType='image';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  158px;';
		hs+='width: 250px;';
		hs+='height: 125px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._tr1.setAttribute('style',hs);
		this._tr1__img=document.createElement('img');
		this._tr1__img.className='ggskin ggskin_image';
		this._tr1__img.setAttribute('src',basePath + 'images/tr1.png');
		this._tr1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tr1__img.className='ggskin ggskin_image';
		this._tr1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tr1__img);
		this._tr1.appendChild(this._tr1__img);
		this._tr1.onclick=function () {
			me.player.openNext("01.swf","");
		}
		this._tc10=document.createElement('div');
		this._tc10__text=document.createElement('div');
		this._tc10.className='ggskin ggskin_textdiv';
		this._tc10.ggTextDiv=this._tc10__text;
		this._tc10.ggId="TC1";
		this._tc10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tc10.ggVisible=true;
		this._tc10.className='ggskin ggskin_text';
		this._tc10.ggType='text';
		this._tc10.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (245-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 3px;';
		hs+='top:  100px;';
		hs+='width: 243px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tc10.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._tc10__text.setAttribute('style',hs);
		this._tc10__text.innerHTML="\u0417\u0430\u043b \u043c\u0435\u0431\u0435\u043b\u0438 \u0432 \u0441\u0442\u0438\u043b\u0435 \u043c\u043e\u0434\u0435\u0440\u043d";
		this._tc10.appendChild(this._tc10__text);
		this._tr1.appendChild(this._tc10);
		this._cmini.appendChild(this._tr1);
		this._tr0=document.createElement('div');
		this._tr0.ggId="Tr0";
		this._tr0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tr0.ggVisible=true;
		this._tr0.className='ggskin ggskin_image';
		this._tr0.ggType='image';
		hs ='position:absolute;';
		hs+='left: 256px;';
		hs+='top:  29px;';
		hs+='width: 250px;';
		hs+='height: 125px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._tr0.setAttribute('style',hs);
		this._tr0__img=document.createElement('img');
		this._tr0__img.className='ggskin ggskin_image';
		this._tr0__img.setAttribute('src',basePath + 'images/tr0.png');
		this._tr0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tr0__img.className='ggskin ggskin_image';
		this._tr0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tr0__img);
		this._tr0.appendChild(this._tr0__img);
		this._tr0.onclick=function () {
			me.player.openNext("00.swf","");
		}
		this._tc1=document.createElement('div');
		this._tc1__text=document.createElement('div');
		this._tc1.className='ggskin ggskin_textdiv';
		this._tc1.ggTextDiv=this._tc1__text;
		this._tc1.ggId="TC1";
		this._tc1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tc1.ggVisible=true;
		this._tc1.className='ggskin ggskin_text';
		this._tc1.ggType='text';
		this._tc1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (245-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 3px;';
		hs+='top:  100px;';
		hs+='width: 243px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tc1.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._tc1__text.setAttribute('style',hs);
		this._tc1__text.innerHTML="\u0412\u0445\u043e\u0434";
		this._tc1.appendChild(this._tc1__text);
		this._tr0.appendChild(this._tc1);
		this._cmini.appendChild(this._tr0);
		this._close_mini=document.createElement('div');
		this._close_mini.ggId="close_mini";
		this._close_mini.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close_mini.ggVisible=true;
		this._close_mini.className='ggskin ggskin_svg';
		this._close_mini.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 510px;';
		hs+='top:  35px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._close_mini.setAttribute('style',hs);
		this._close_mini__img=document.createElement('img');
		this._close_mini__img.className='ggskin ggskin_svg';
		this._close_mini__img.setAttribute('src',basePath + 'images/close_mini.svg');
		this._close_mini__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._close_mini__img['ondragstart']=function() { return false; };
		this._close_mini.appendChild(this._close_mini__img);
		this._close_mini.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._cmini.style[domTransition]='none';
			} else {
				me._cmini.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._cmini.ggParameter.rx=0;me._cmini.ggParameter.ry=-420;
			me._cmini.style[domTransform]=parameterToTransform(me._cmini.ggParameter);
		}
		this._close_mini.onmouseover=function () {
			me._close_mini__img.src=basePath + 'images/close_mini__o.svg';
		}
		this._close_mini.onmouseout=function () {
			me._close_mini__img.src=basePath + 'images/close_mini.svg';
		}
		this._cmini.appendChild(this._close_mini);
		this.divSkin.appendChild(this._cmini);
		this._container_1=document.createElement('div');
		this._container_1.ggId="Container 1";
		this._container_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_1.ggVisible=true;
		this._container_1.className='ggskin ggskin_container';
		this._container_1.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 133px;';
		hs+='height: 57px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._container_1.setAttribute('style',hs);
		this._pmap0=document.createElement('div');
		this._pmap0.ggId="P-map";
		this._pmap0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pmap0.ggVisible=true;
		this._pmap0.className='ggskin ggskin_button';
		this._pmap0.ggType='button';
		hs ='position:absolute;';
		hs+='left: 63px;';
		hs+='top:  11px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pmap0.setAttribute('style',hs);
		this._pmap0__img=document.createElement('img');
		this._pmap0__img.className='ggskin ggskin_button';
		this._pmap0__img.setAttribute('src',basePath + 'images/pmap0.png');
		this._pmap0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._pmap0__img.className='ggskin ggskin_button';
		this._pmap0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pmap0__img);
		this._pmap0.appendChild(this._pmap0__img);
		this._pmap0.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._cmini.style[domTransition]='none';
			} else {
				me._cmini.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._cmini.ggParameter.rx=0;me._cmini.ggParameter.ry=0;
			me._cmini.style[domTransform]=parameterToTransform(me._cmini.ggParameter);
			if (me.player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._map.ggParameter.rx=0;me._map.ggParameter.ry=-470;
			me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
			if (me.player.transitionsDisabled) {
				me._cmini.style[domTransition]='none';
			} else {
				me._cmini.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._cmini.style.opacity='1';
			me._cmini.style.visibility=me._cmini.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map.style.opacity='0';
			me._map.style.visibility='hidden';
		}
		this._pmap0.onmouseover=function () {
			me._pmap0__img.src=basePath + 'images/pmap0__o.png';
			me.elementMouseOver['pmap0']=true;
		}
		this._pmap0.onmouseout=function () {
			me._tmini.style[domTransition]='none';
			me._tmini.style.visibility='hidden';
			me._tmini.ggVisible=false;
			me._tmini1.style[domTransition]='none';
			me._tmini1.style.visibility='hidden';
			me._tmini1.ggVisible=false;
			me._pmap0__img.src=basePath + 'images/pmap0.png';
			me.elementMouseOver['pmap0']=false;
		}
		this._pmap0.ontouchend=function () {
			me.elementMouseOver['pmap0']=false;
		}
		this._tmini=document.createElement('div');
		this._tmini__text=document.createElement('div');
		this._tmini.className='ggskin ggskin_textdiv';
		this._tmini.ggTextDiv=this._tmini__text;
		this._tmini.ggId="T-mini";
		this._tmini.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tmini.ggVisible=false;
		this._tmini.className='ggskin ggskin_text';
		this._tmini.ggType='text';
		this._tmini.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (67-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -15px;';
		hs+='top:  31px;';
		hs+='width: 65px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tmini.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._tmini__text.setAttribute('style',hs);
		this._tmini__text.innerHTML="\u0417\u0430\u043b\u044b";
		this._tmini.appendChild(this._tmini__text);
		this._pmap0.appendChild(this._tmini);
		this._tmini1=document.createElement('div');
		this._tmini1__text=document.createElement('div');
		this._tmini1.className='ggskin ggskin_textdiv';
		this._tmini1.ggTextDiv=this._tmini1__text;
		this._tmini1.ggId="T-mini-1";
		this._tmini1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tmini1.ggVisible=false;
		this._tmini1.className='ggskin ggskin_text';
		this._tmini1.ggType='text';
		this._tmini1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (67-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -16px;';
		hs+='top:  30px;';
		hs+='width: 65px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tmini1.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._tmini1__text.setAttribute('style',hs);
		this._tmini1__text.innerHTML="\u0417\u0430\u043b\u044b";
		this._tmini1.appendChild(this._tmini1__text);
		this._pmap0.appendChild(this._tmini1);
		this._container_1.appendChild(this._pmap0);
		this._pmap=document.createElement('div');
		this._pmap.ggId="P-map";
		this._pmap.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pmap.ggVisible=true;
		this._pmap.className='ggskin ggskin_button';
		this._pmap.ggType='button';
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  6px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pmap.setAttribute('style',hs);
		this._pmap__img=document.createElement('img');
		this._pmap__img.className='ggskin ggskin_button';
		this._pmap__img.setAttribute('src',basePath + 'images/pmap.png');
		this._pmap__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._pmap__img.className='ggskin ggskin_button';
		this._pmap__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pmap__img);
		this._pmap.appendChild(this._pmap__img);
		this._pmap.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._cmini.style[domTransition]='none';
			} else {
				me._cmini.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._cmini.ggParameter.rx=0;me._cmini.ggParameter.ry=-420;
			me._cmini.style[domTransform]=parameterToTransform(me._cmini.ggParameter);
			if (me.player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._map.ggParameter.rx=0;me._map.ggParameter.ry=0;
			me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
			flag=me._cmini.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._cmini.style[domTransition]='none';
			} else {
				me._cmini.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._cmini.style.opacity='1';
				me._cmini.style.visibility=me._cmini.ggVisible?'inherit':'hidden';
			} else {
				me._cmini.style.opacity='0';
				me._cmini.style.visibility='hidden';
			}
			me._cmini.ggOpacitiyActive=!flag;
			flag=me._map.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._map.style.opacity='1';
				me._map.style.visibility=me._map.ggVisible?'inherit':'hidden';
			} else {
				me._map.style.opacity='1';
				me._map.style.visibility=me._map.ggVisible?'inherit':'hidden';
			}
			me._map.ggOpacitiyActive=!flag;
		}
		this._pmap.onmouseover=function () {
			me._pmap__img.src=basePath + 'images/pmap__o.png';
			me.elementMouseOver['pmap']=true;
		}
		this._pmap.onmouseout=function () {
			me._tmap.style[domTransition]='none';
			me._tmap.style.visibility='hidden';
			me._tmap.ggVisible=false;
			me._tmap1.style[domTransition]='none';
			me._tmap1.style.visibility='hidden';
			me._tmap1.ggVisible=false;
			me._pmap__img.src=basePath + 'images/pmap.png';
			me.elementMouseOver['pmap']=false;
		}
		this._pmap.ontouchend=function () {
			me.elementMouseOver['pmap']=false;
		}
		this._tmap=document.createElement('div');
		this._tmap__text=document.createElement('div');
		this._tmap.className='ggskin ggskin_textdiv';
		this._tmap.ggTextDiv=this._tmap__text;
		this._tmap.ggId="T-map";
		this._tmap.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tmap.ggVisible=false;
		this._tmap.className='ggskin ggskin_text';
		this._tmap.ggType='text';
		this._tmap.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (67-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -14px;';
		hs+='top:  36px;';
		hs+='width: 65px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tmap.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._tmap__text.setAttribute('style',hs);
		this._tmap__text.innerHTML="\u041a\u0430\u0440\u0442\u0430";
		this._tmap.appendChild(this._tmap__text);
		this._pmap.appendChild(this._tmap);
		this._tmap1=document.createElement('div');
		this._tmap1__text=document.createElement('div');
		this._tmap1.className='ggskin ggskin_textdiv';
		this._tmap1.ggTextDiv=this._tmap1__text;
		this._tmap1.ggId="T-map-1";
		this._tmap1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tmap1.ggVisible=false;
		this._tmap1.className='ggskin ggskin_text';
		this._tmap1.ggType='text';
		this._tmap1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (67-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -15px;';
		hs+='top:  35px;';
		hs+='width: 65px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tmap1.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._tmap1__text.setAttribute('style',hs);
		this._tmap1__text.innerHTML="\u041a\u0430\u0440\u0442\u0430";
		this._tmap1.appendChild(this._tmap1__text);
		this._pmap.appendChild(this._tmap1);
		this._container_1.appendChild(this._pmap);
		this.divSkin.appendChild(this._container_1);
		this._markertemplate__normal=this._node_normal.cloneNode(true);
		this._markertemplate__normal.style.visibility='inherit';
		this._markertemplate__normal.style.left=0;
		this._markertemplate__normal.style.top=0;
		this._markertemplate.ggMarkerNormal=this._markertemplate__normal;
		this._markertemplate__active=this._node_active.cloneNode(true);
		this._markertemplate__active.style.visibility='hidden';
		this._markertemplate__active.style.left=0;
		this._markertemplate__active.style.top=0;
		this._markertemplate.ggMarkerActive=this._markertemplate__active;
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__active,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__active);
		}
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__normal,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__normal);
		}
		this._p0__normal=this._node_normal.cloneNode(true);
		this._p0__normal.style.visibility='inherit';
		this._p0__normal.style.left=0;
		this._p0__normal.style.top=0;
		this._p0.ggMarkerNormal=this._p0__normal;
		this._p0__active=this._node_active.cloneNode(true);
		this._p0__active.style.visibility='hidden';
		this._p0__active.style.left=0;
		this._p0__active.style.top=0;
		this._p0.ggMarkerActive=this._p0__active;
		if (this._p0.firstChild) {
			this._p0.insertBefore(this._p0__active,this._p0.firstChild);
		} else {
			this._p0.appendChild(this._p0__active);
		}
		if (this._p0.firstChild) {
			this._p0.insertBefore(this._p0__normal,this._p0.firstChild);
		} else {
			this._p0.appendChild(this._p0__normal);
		}
		this._p1__normal=this._node_normal.cloneNode(true);
		this._p1__normal.style.visibility='inherit';
		this._p1__normal.style.left=0;
		this._p1__normal.style.top=0;
		this._p1.ggMarkerNormal=this._p1__normal;
		this._p1__active=this._node_active.cloneNode(true);
		this._p1__active.style.visibility='hidden';
		this._p1__active.style.left=0;
		this._p1__active.style.top=0;
		this._p1.ggMarkerActive=this._p1__active;
		if (this._p1.firstChild) {
			this._p1.insertBefore(this._p1__active,this._p1.firstChild);
		} else {
			this._p1.appendChild(this._p1__active);
		}
		if (this._p1.firstChild) {
			this._p1.insertBefore(this._p1__normal,this._p1.firstChild);
		} else {
			this._p1.appendChild(this._p1__normal);
		}
		this._p2__normal=this._node_normal.cloneNode(true);
		this._p2__normal.style.visibility='inherit';
		this._p2__normal.style.left=0;
		this._p2__normal.style.top=0;
		this._p2.ggMarkerNormal=this._p2__normal;
		this._p2__active=this._node_active.cloneNode(true);
		this._p2__active.style.visibility='hidden';
		this._p2__active.style.left=0;
		this._p2__active.style.top=0;
		this._p2.ggMarkerActive=this._p2__active;
		if (this._p2.firstChild) {
			this._p2.insertBefore(this._p2__active,this._p2.firstChild);
		} else {
			this._p2.appendChild(this._p2__active);
		}
		if (this._p2.firstChild) {
			this._p2.insertBefore(this._p2__normal,this._p2.firstChild);
		} else {
			this._p2.appendChild(this._p2__normal);
		}
		this._p3__normal=this._node_normal.cloneNode(true);
		this._p3__normal.style.visibility='inherit';
		this._p3__normal.style.left=0;
		this._p3__normal.style.top=0;
		this._p3.ggMarkerNormal=this._p3__normal;
		this._p3__active=this._node_active.cloneNode(true);
		this._p3__active.style.visibility='hidden';
		this._p3__active.style.left=0;
		this._p3__active.style.top=0;
		this._p3.ggMarkerActive=this._p3__active;
		if (this._p3.firstChild) {
			this._p3.insertBefore(this._p3__active,this._p3.firstChild);
		} else {
			this._p3.appendChild(this._p3__active);
		}
		if (this._p3.firstChild) {
			this._p3.insertBefore(this._p3__normal,this._p3.firstChild);
		} else {
			this._p3.appendChild(this._p3__normal);
		}
		this._p4__normal=this._node_normal.cloneNode(true);
		this._p4__normal.style.visibility='inherit';
		this._p4__normal.style.left=0;
		this._p4__normal.style.top=0;
		this._p4.ggMarkerNormal=this._p4__normal;
		this._p4__active=this._node_active.cloneNode(true);
		this._p4__active.style.visibility='hidden';
		this._p4__active.style.left=0;
		this._p4__active.style.top=0;
		this._p4.ggMarkerActive=this._p4__active;
		if (this._p4.firstChild) {
			this._p4.insertBefore(this._p4__active,this._p4.firstChild);
		} else {
			this._p4.appendChild(this._p4__active);
		}
		if (this._p4.firstChild) {
			this._p4.insertBefore(this._p4__normal,this._p4.firstChild);
		} else {
			this._p4.appendChild(this._p4__normal);
		}
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
			me._cmini.style[domTransition]='none';
			me._cmini.ggParameter.rx=0;me._cmini.ggParameter.ry=-420;
			me._cmini.style[domTransform]=parameterToTransform(me._cmini.ggParameter);
			me._map.style[domTransition]='none';
			me._map.ggParameter.rx=0;me._map.ggParameter.ry=-470;
			me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='inherit';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
		if (id=='p4') {
			me._p0.onclick();
		}
		if (id=='p1') {
			me._p1.onclick();
		}
		if (id=='p2') {
			me._p2.onclick();
		}
		if (id=='p3') {
			me._p3.onclick();
		}
		if (id=='p4') {
			me._p4.onclick();
		}
	}
	this.hotspotProxyOver=function(id) {
		if (id=='p4') {
			me._p0.onmouseover();
		}
		if (id=='p1') {
			me._p1.onmouseover();
		}
		if (id=='p2') {
			me._p2.onmouseover();
		}
		if (id=='p3') {
			me._p3.onmouseover();
		}
		if (id=='p4') {
			me._p4.onmouseover();
		}
	}
	this.hotspotProxyOut=function(id) {
		if (id=='p4') {
			me._p0.onmouseout();
		}
		if (id=='p1') {
			me._p1.onmouseout();
		}
		if (id=='p2') {
			me._p2.onmouseout();
		}
		if (id=='p3') {
			me._p3.onmouseout();
		}
		if (id=='p4') {
			me._p4.onmouseout();
		}
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['up0']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down0']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['left0']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right0']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		this.__0.ggUpdateText();
		this.__1.ggUpdateText();
		this._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		var hs='';
		if (me._radar_beam.ggParameter) {
			hs+=parameterToTransform(me._radar_beam.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		me._radar_beam.style[domTransform]=hs;
		if (me.elementMouseOver['p0']) {
			me._tr00.style[domTransition]='none';
			me._tr00.style.visibility='inherit';
			me._tr00.ggVisible=true;
		}
		if (me.elementMouseOver['p1']) {
			me._tr10.style[domTransition]='none';
			me._tr10.style.visibility='inherit';
			me._tr10.ggVisible=true;
		}
		if (me.elementMouseOver['p2']) {
			me._tr20.style[domTransition]='none';
			me._tr20.style.visibility='inherit';
			me._tr20.ggVisible=true;
		}
		if (me.elementMouseOver['p3']) {
			me._tr30.style[domTransition]='none';
			me._tr30.style.visibility='inherit';
			me._tr30.ggVisible=true;
		}
		if (me.elementMouseOver['p4']) {
			me._tr40.style[domTransition]='none';
			me._tr40.style.visibility='inherit';
			me._tr40.ggVisible=true;
		}
		if (me.elementMouseOver['pmap0']) {
			me._tmini.style[domTransition]='none';
			me._tmini.style.visibility='inherit';
			me._tmini.ggVisible=true;
			me._tmini1.style[domTransition]='none';
			me._tmini1.style.visibility='inherit';
			me._tmini1.ggVisible=true;
		}
		if (me.elementMouseOver['pmap']) {
			me._tmap.style[domTransition]='none';
			me._tmap.style.visibility='inherit';
			me._tmap.ggVisible=true;
			me._tmap1.style[domTransition]='none';
			me._tmap1.style.visibility='inherit';
			me._tmap1.ggVisible=true;
		}
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='up') {
			this.__div=document.createElement('div');
			this.__div.ggId="up";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 32px;';
			hs+='top:  7px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._tstr8.style[domTransition]='none';
				me._tstr8.style.visibility='hidden';
				me._tstr8.ggVisible=false;
				me._tstr17.style[domTransition]='none';
				me._tstr17.style.visibility='hidden';
				me._tstr17.ggVisible=false;
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.style.opacity='0.8';
				me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.ggParameter.sx=0.8;me.skin.__div.ggParameter.sy=0.8;
				me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this._image_377=document.createElement('div');
			this._image_377.ggId="Image 37";
			this._image_377.ggParameter={ rx:0,ry:0,a:0,sx:0.65,sy:0.65 };
			this._image_377.ggVisible=true;
			this._image_377.className='ggskin ggskin_image';
			this._image_377.ggType='image';
			hs ='position:absolute;';
			hs+='left: -32px;';
			hs+='top:  -7px;';
			hs+='width: 68px;';
			hs+='height: 72px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_377.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._image_377.setAttribute('style',hs);
			this._image_377__img=document.createElement('img');
			this._image_377__img.className='ggskin ggskin_image';
			this._image_377__img.setAttribute('src',basePath + 'images/image_377.png');
			this._image_377__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_377__img.className='ggskin ggskin_image';
			this._image_377__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_377__img);
			this._image_377.appendChild(this._image_377__img);
			this.__div.appendChild(this._image_377);
			this._tstr8=document.createElement('div');
			this._tstr8__text=document.createElement('div');
			this._tstr8.className='ggskin ggskin_textdiv';
			this._tstr8.ggTextDiv=this._tstr8__text;
			this._tstr8.ggId="T-str";
			this._tstr8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr8.ggVisible=false;
			this._tstr8.className='ggskin ggskin_text';
			this._tstr8.ggType='text';
			this._tstr8.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -45px;';
			hs+='top:  -23px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr8.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr8__text.setAttribute('style',hs);
			this._tstr8__text.innerHTML=me.hotspot.title;
			this._tstr8.appendChild(this._tstr8__text);
			this.__div.appendChild(this._tstr8);
			this._tstr17=document.createElement('div');
			this._tstr17__text=document.createElement('div');
			this._tstr17.className='ggskin ggskin_textdiv';
			this._tstr17.ggTextDiv=this._tstr17__text;
			this._tstr17.ggId="T-str-1";
			this._tstr17.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr17.ggVisible=false;
			this._tstr17.className='ggskin ggskin_text';
			this._tstr17.ggType='text';
			this._tstr17.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -46px;';
			hs+='top:  -24px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr17.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr17__text.setAttribute('style',hs);
			this._tstr17__text.innerHTML=me.hotspot.title;
			this._tstr17.appendChild(this._tstr17__text);
			this.__div.appendChild(this._tstr17);
			me.skin._radar_beam.style[domTransition]='none';
			me.skin._radar_beam.ggParameter.a=me.player.userdata.information;
			me.skin._radar_beam.style[domTransform]=parameterToTransform(me.skin._radar_beam.ggParameter);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					me._tstr8.style[domTransition]='none';
					me._tstr8.style.visibility='inherit';
					me._tstr8.ggVisible=true;
					me._tstr17.style[domTransition]='none';
					me._tstr17.style.visibility='inherit';
					me._tstr17.ggVisible=true;
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.style.opacity='1';
					me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.ggParameter.sx=1;me.skin.__div.ggParameter.sy=1;
					me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='up_r') {
			this.__div=document.createElement('div');
			this.__div.ggId="up_r";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 33px;';
			hs+='top:  9px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._tstr7.style[domTransition]='none';
				me._tstr7.style.visibility='hidden';
				me._tstr7.ggVisible=false;
				me._tstr16.style[domTransition]='none';
				me._tstr16.style.visibility='hidden';
				me._tstr16.ggVisible=false;
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.style.opacity='0.8';
				me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.ggParameter.sx=0.8;me.skin.__div.ggParameter.sy=0.8;
				me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this._image_376=document.createElement('div');
			this._image_376.ggId="Image 37";
			this._image_376.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
			this._image_376.ggVisible=true;
			this._image_376.className='ggskin ggskin_image';
			this._image_376.ggType='image';
			hs ='position:absolute;';
			hs+='left: -55px;';
			hs+='top:  -4px;';
			hs+='width: 60px;';
			hs+='height: 59px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_376.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._image_376.setAttribute('style',hs);
			this._image_376__img=document.createElement('img');
			this._image_376__img.className='ggskin ggskin_image';
			this._image_376__img.setAttribute('src',basePath + 'images/image_376.png');
			this._image_376__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_376__img.className='ggskin ggskin_image';
			this._image_376__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_376__img);
			this._image_376.appendChild(this._image_376__img);
			this.__div.appendChild(this._image_376);
			this._tstr7=document.createElement('div');
			this._tstr7__text=document.createElement('div');
			this._tstr7.className='ggskin ggskin_textdiv';
			this._tstr7.ggTextDiv=this._tstr7__text;
			this._tstr7.ggId="T-str";
			this._tstr7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr7.ggVisible=false;
			this._tstr7.className='ggskin ggskin_text';
			this._tstr7.ggType='text';
			this._tstr7.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -46px;';
			hs+='top:  -25px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr7.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr7__text.setAttribute('style',hs);
			this._tstr7__text.innerHTML=me.hotspot.title;
			this._tstr7.appendChild(this._tstr7__text);
			this.__div.appendChild(this._tstr7);
			this._tstr16=document.createElement('div');
			this._tstr16__text=document.createElement('div');
			this._tstr16.className='ggskin ggskin_textdiv';
			this._tstr16.ggTextDiv=this._tstr16__text;
			this._tstr16.ggId="T-str-1";
			this._tstr16.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr16.ggVisible=false;
			this._tstr16.className='ggskin ggskin_text';
			this._tstr16.ggType='text';
			this._tstr16.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -47px;';
			hs+='top:  -26px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr16.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr16__text.setAttribute('style',hs);
			this._tstr16__text.innerHTML=me.hotspot.title;
			this._tstr16.appendChild(this._tstr16__text);
			this.__div.appendChild(this._tstr16);
			me.skin._radar_beam.style[domTransition]='none';
			me.skin._radar_beam.ggParameter.a=me.player.userdata.information;
			me.skin._radar_beam.style[domTransform]=parameterToTransform(me.skin._radar_beam.ggParameter);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					me._tstr7.style[domTransition]='none';
					me._tstr7.style.visibility='inherit';
					me._tstr7.ggVisible=true;
					me._tstr16.style[domTransition]='none';
					me._tstr16.style.visibility='inherit';
					me._tstr16.ggVisible=true;
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.style.opacity='1';
					me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.ggParameter.sx=1;me.skin.__div.ggParameter.sy=1;
					me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='right') {
			this.__div=document.createElement('div');
			this.__div.ggId="right";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 32px;';
			hs+='top:  7px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._tstr6.style[domTransition]='none';
				me._tstr6.style.visibility='hidden';
				me._tstr6.ggVisible=false;
				me._tstr15.style[domTransition]='none';
				me._tstr15.style.visibility='hidden';
				me._tstr15.ggVisible=false;
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.style.opacity='0.8';
				me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.ggParameter.sx=0.8;me.skin.__div.ggParameter.sy=0.8;
				me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this._image_375=document.createElement('div');
			this._image_375.ggId="Image 37";
			this._image_375.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
			this._image_375.ggVisible=true;
			this._image_375.className='ggskin ggskin_image';
			this._image_375.ggType='image';
			hs ='position:absolute;';
			hs+='left: -50px;';
			hs+='top:  -25px;';
			hs+='width: 55px;';
			hs+='height: 58px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_375.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._image_375.setAttribute('style',hs);
			this._image_375__img=document.createElement('img');
			this._image_375__img.className='ggskin ggskin_image';
			this._image_375__img.setAttribute('src',basePath + 'images/image_375.png');
			this._image_375__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_375__img.className='ggskin ggskin_image';
			this._image_375__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_375__img);
			this._image_375.appendChild(this._image_375__img);
			this.__div.appendChild(this._image_375);
			this._tstr6=document.createElement('div');
			this._tstr6__text=document.createElement('div');
			this._tstr6.className='ggskin ggskin_textdiv';
			this._tstr6.ggTextDiv=this._tstr6__text;
			this._tstr6.ggId="T-str";
			this._tstr6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr6.ggVisible=false;
			this._tstr6.className='ggskin ggskin_text';
			this._tstr6.ggType='text';
			this._tstr6.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -45px;';
			hs+='top:  -23px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr6.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr6__text.setAttribute('style',hs);
			this._tstr6__text.innerHTML=me.hotspot.title;
			this._tstr6.appendChild(this._tstr6__text);
			this.__div.appendChild(this._tstr6);
			this._tstr15=document.createElement('div');
			this._tstr15__text=document.createElement('div');
			this._tstr15.className='ggskin ggskin_textdiv';
			this._tstr15.ggTextDiv=this._tstr15__text;
			this._tstr15.ggId="T-str-1";
			this._tstr15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr15.ggVisible=false;
			this._tstr15.className='ggskin ggskin_text';
			this._tstr15.ggType='text';
			this._tstr15.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -46px;';
			hs+='top:  -24px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr15.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr15__text.setAttribute('style',hs);
			this._tstr15__text.innerHTML=me.hotspot.title;
			this._tstr15.appendChild(this._tstr15__text);
			this.__div.appendChild(this._tstr15);
			me.skin._radar_beam.style[domTransition]='none';
			me.skin._radar_beam.ggParameter.a=me.player.userdata.information;
			me.skin._radar_beam.style[domTransform]=parameterToTransform(me.skin._radar_beam.ggParameter);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					me._tstr6.style[domTransition]='none';
					me._tstr6.style.visibility='inherit';
					me._tstr6.ggVisible=true;
					me._tstr15.style[domTransition]='none';
					me._tstr15.style.visibility='inherit';
					me._tstr15.ggVisible=true;
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.style.opacity='1';
					me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.ggParameter.sx=1;me.skin.__div.ggParameter.sy=1;
					me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='nextpano') {
			this.__div=document.createElement('div');
			this.__div.ggId="nextpano";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 32px;';
			hs+='top:  7px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._tstr5.style[domTransition]='none';
				me._tstr5.style.visibility='hidden';
				me._tstr5.ggVisible=false;
				me._tstr14.style[domTransition]='none';
				me._tstr14.style.visibility='hidden';
				me._tstr14.ggVisible=false;
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.style.opacity='0.8';
				me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.ggParameter.sx=0.8;me.skin.__div.ggParameter.sy=0.8;
				me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this._image_374=document.createElement('div');
			this._image_374.ggId="Image 37";
			this._image_374.ggParameter={ rx:0,ry:0,a:0,sx:0.65,sy:0.65 };
			this._image_374.ggVisible=true;
			this._image_374.className='ggskin ggskin_image';
			this._image_374.ggType='image';
			hs ='position:absolute;';
			hs+='left: -33px;';
			hs+='top:  -6px;';
			hs+='width: 68px;';
			hs+='height: 72px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_374.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._image_374.setAttribute('style',hs);
			this._image_374__img=document.createElement('img');
			this._image_374__img.className='ggskin ggskin_image';
			this._image_374__img.setAttribute('src',basePath + 'images/image_374.png');
			this._image_374__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_374__img.className='ggskin ggskin_image';
			this._image_374__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_374__img);
			this._image_374.appendChild(this._image_374__img);
			this._image_374.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			this._image_374.onmouseover=function () {
				me.elementMouseOver['image_374']=true;
			}
			this._image_374.onmouseout=function () {
				me._image_374.style[domTransition]='none';
				me._image_374.style.opacity='0.7';
				me._image_374.style.visibility=me._image_374.ggVisible?'inherit':'hidden';
				me.elementMouseOver['image_374']=false;
			}
			this._image_374.ontouchend=function () {
				me.elementMouseOver['image_374']=false;
			}
			this.__div.appendChild(this._image_374);
			this._tstr5=document.createElement('div');
			this._tstr5__text=document.createElement('div');
			this._tstr5.className='ggskin ggskin_textdiv';
			this._tstr5.ggTextDiv=this._tstr5__text;
			this._tstr5.ggId="T-str";
			this._tstr5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr5.ggVisible=false;
			this._tstr5.className='ggskin ggskin_text';
			this._tstr5.ggType='text';
			this._tstr5.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -45px;';
			hs+='top:  -23px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr5.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr5__text.setAttribute('style',hs);
			this._tstr5__text.innerHTML=me.hotspot.title;
			this._tstr5.appendChild(this._tstr5__text);
			this.__div.appendChild(this._tstr5);
			this._tstr14=document.createElement('div');
			this._tstr14__text=document.createElement('div');
			this._tstr14.className='ggskin ggskin_textdiv';
			this._tstr14.ggTextDiv=this._tstr14__text;
			this._tstr14.ggId="T-str-1";
			this._tstr14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr14.ggVisible=false;
			this._tstr14.className='ggskin ggskin_text';
			this._tstr14.ggType='text';
			this._tstr14.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -46px;';
			hs+='top:  -24px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr14.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr14__text.setAttribute('style',hs);
			this._tstr14__text.innerHTML=me.hotspot.title;
			this._tstr14.appendChild(this._tstr14__text);
			this.__div.appendChild(this._tstr14);
			me.skin._radar_beam.style[domTransition]='none';
			me.skin._radar_beam.ggParameter.a=me.player.userdata.information;
			me.skin._radar_beam.style[domTransform]=parameterToTransform(me.skin._radar_beam.ggParameter);
			me.skin._radar_beam.style[domTransition]='none';
			me.skin._radar_beam.ggParameter.a=me.player.userdata.information;
			me.skin._radar_beam.style[domTransform]=parameterToTransform(me.skin._radar_beam.ggParameter);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					me._tstr5.style[domTransition]='none';
					me._tstr5.style.visibility='inherit';
					me._tstr5.ggVisible=true;
					me._tstr14.style[domTransition]='none';
					me._tstr14.style.visibility='inherit';
					me._tstr14.ggVisible=true;
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.style.opacity='1';
					me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.ggParameter.sx=1;me.skin.__div.ggParameter.sy=1;
					me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				}
				if (me.elementMouseOver['image_374']) {
					me._image_374.style[domTransition]='none';
					me._image_374.style.opacity='1';
					me._image_374.style.visibility=me._image_374.ggVisible?'inherit':'hidden';
					me._image_374.style[domTransition]='none';
					me._image_374.ggParameter.sx=1;me._image_374.ggParameter.sy=1;
					me._image_374.style[domTransform]=parameterToTransform(me._image_374.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='left') {
			this.__div=document.createElement('div');
			this.__div.ggId="left";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 32px;';
			hs+='top:  7px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._tstr4.style[domTransition]='none';
				me._tstr4.style.visibility='hidden';
				me._tstr4.ggVisible=false;
				me._tstr13.style[domTransition]='none';
				me._tstr13.style.visibility='hidden';
				me._tstr13.ggVisible=false;
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.style.opacity='0.8';
				me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.ggParameter.sx=0.8;me.skin.__div.ggParameter.sy=0.8;
				me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this._image_373=document.createElement('div');
			this._image_373.ggId="Image 37";
			this._image_373.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
			this._image_373.ggVisible=true;
			this._image_373.className='ggskin ggskin_image';
			this._image_373.ggType='image';
			hs ='position:absolute;';
			hs+='left: -2px;';
			hs+='top:  -28px;';
			hs+='width: 55px;';
			hs+='height: 58px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_373.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._image_373.setAttribute('style',hs);
			this._image_373__img=document.createElement('img');
			this._image_373__img.className='ggskin ggskin_image';
			this._image_373__img.setAttribute('src',basePath + 'images/image_373.png');
			this._image_373__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_373__img.className='ggskin ggskin_image';
			this._image_373__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_373__img);
			this._image_373.appendChild(this._image_373__img);
			this._image_373.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			this._image_373.onmouseover=function () {
				me.elementMouseOver['image_373']=true;
			}
			this._image_373.onmouseout=function () {
				me._image_373.style[domTransition]='none';
				me._image_373.style.opacity='0.7';
				me._image_373.style.visibility=me._image_373.ggVisible?'inherit':'hidden';
				me._image_373.style[domTransition]='none';
				me._image_373.ggParameter.sx=0.65;me._image_373.ggParameter.sy=0.65;
				me._image_373.style[domTransform]=parameterToTransform(me._image_373.ggParameter);
				me.elementMouseOver['image_373']=false;
			}
			this._image_373.ontouchend=function () {
				me.elementMouseOver['image_373']=false;
			}
			this.__div.appendChild(this._image_373);
			this._tstr4=document.createElement('div');
			this._tstr4__text=document.createElement('div');
			this._tstr4.className='ggskin ggskin_textdiv';
			this._tstr4.ggTextDiv=this._tstr4__text;
			this._tstr4.ggId="T-str";
			this._tstr4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr4.ggVisible=false;
			this._tstr4.className='ggskin ggskin_text';
			this._tstr4.ggType='text';
			this._tstr4.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -45px;';
			hs+='top:  -23px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr4.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr4__text.setAttribute('style',hs);
			this._tstr4__text.innerHTML=me.hotspot.title;
			this._tstr4.appendChild(this._tstr4__text);
			this.__div.appendChild(this._tstr4);
			this._tstr13=document.createElement('div');
			this._tstr13__text=document.createElement('div');
			this._tstr13.className='ggskin ggskin_textdiv';
			this._tstr13.ggTextDiv=this._tstr13__text;
			this._tstr13.ggId="T-str-1";
			this._tstr13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr13.ggVisible=false;
			this._tstr13.className='ggskin ggskin_text';
			this._tstr13.ggType='text';
			this._tstr13.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -46px;';
			hs+='top:  -24px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr13.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr13__text.setAttribute('style',hs);
			this._tstr13__text.innerHTML=me.hotspot.title;
			this._tstr13.appendChild(this._tstr13__text);
			this.__div.appendChild(this._tstr13);
			me.skin._radar_beam.style[domTransition]='none';
			me.skin._radar_beam.ggParameter.a=me.player.userdata.information;
			me.skin._radar_beam.style[domTransform]=parameterToTransform(me.skin._radar_beam.ggParameter);
			me.skin._radar_beam.style[domTransition]='none';
			me.skin._radar_beam.ggParameter.a=me.player.userdata.information;
			me.skin._radar_beam.style[domTransform]=parameterToTransform(me.skin._radar_beam.ggParameter);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					me._tstr4.style[domTransition]='none';
					me._tstr4.style.visibility='inherit';
					me._tstr4.ggVisible=true;
					me._tstr13.style[domTransition]='none';
					me._tstr13.style.visibility='inherit';
					me._tstr13.ggVisible=true;
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.style.opacity='1';
					me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.ggParameter.sx=1;me.skin.__div.ggParameter.sy=1;
					me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				}
				if (me.elementMouseOver['image_373']) {
					me._image_373.style[domTransition]='none';
					me._image_373.style.opacity='1';
					me._image_373.style.visibility=me._image_373.ggVisible?'inherit':'hidden';
					me._image_373.style[domTransition]='none';
					me._image_373.ggParameter.sx=1;me._image_373.ggParameter.sy=1;
					me._image_373.style[domTransform]=parameterToTransform(me._image_373.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='down_l') {
			this.__div=document.createElement('div');
			this.__div.ggId="down_l";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 32px;';
			hs+='top:  7px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._tstr3.style[domTransition]='none';
				me._tstr3.style.visibility='hidden';
				me._tstr3.ggVisible=false;
				me._tstr12.style[domTransition]='none';
				me._tstr12.style.visibility='hidden';
				me._tstr12.ggVisible=false;
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.style.opacity='0.8';
				me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.ggParameter.sx=0.8;me.skin.__div.ggParameter.sy=0.8;
				me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this._image_372=document.createElement('div');
			this._image_372.ggId="Image 37";
			this._image_372.ggParameter={ rx:0,ry:0,a:0,sx:0.65,sy:0.65 };
			this._image_372.ggVisible=true;
			this._image_372.className='ggskin ggskin_image';
			this._image_372.ggType='image';
			hs ='position:absolute;';
			hs+='left: -8px;';
			hs+='top:  -52px;';
			hs+='width: 60px;';
			hs+='height: 59px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_372.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._image_372.setAttribute('style',hs);
			this._image_372__img=document.createElement('img');
			this._image_372__img.className='ggskin ggskin_image';
			this._image_372__img.setAttribute('src',basePath + 'images/image_372.png');
			this._image_372__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_372__img.className='ggskin ggskin_image';
			this._image_372__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_372__img);
			this._image_372.appendChild(this._image_372__img);
			this._image_372.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			this._image_372.onmouseover=function () {
				me.elementMouseOver['image_372']=true;
			}
			this._image_372.onmouseout=function () {
				me._image_372.style[domTransition]='none';
				me._image_372.style.opacity='0.7';
				me._image_372.style.visibility=me._image_372.ggVisible?'inherit':'hidden';
				me._image_372.style[domTransition]='none';
				me._image_372.ggParameter.sx=0.65;me._image_372.ggParameter.sy=0.65;
				me._image_372.style[domTransform]=parameterToTransform(me._image_372.ggParameter);
				me.elementMouseOver['image_372']=false;
			}
			this._image_372.ontouchend=function () {
				me.elementMouseOver['image_372']=false;
			}
			this.__div.appendChild(this._image_372);
			this._tstr3=document.createElement('div');
			this._tstr3__text=document.createElement('div');
			this._tstr3.className='ggskin ggskin_textdiv';
			this._tstr3.ggTextDiv=this._tstr3__text;
			this._tstr3.ggId="T-str";
			this._tstr3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr3.ggVisible=false;
			this._tstr3.className='ggskin ggskin_text';
			this._tstr3.ggType='text';
			this._tstr3.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -45px;';
			hs+='top:  -23px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr3.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr3__text.setAttribute('style',hs);
			this._tstr3__text.innerHTML=me.hotspot.title;
			this._tstr3.appendChild(this._tstr3__text);
			this.__div.appendChild(this._tstr3);
			this._tstr12=document.createElement('div');
			this._tstr12__text=document.createElement('div');
			this._tstr12.className='ggskin ggskin_textdiv';
			this._tstr12.ggTextDiv=this._tstr12__text;
			this._tstr12.ggId="T-str-1";
			this._tstr12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr12.ggVisible=false;
			this._tstr12.className='ggskin ggskin_text';
			this._tstr12.ggType='text';
			this._tstr12.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -46px;';
			hs+='top:  -24px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr12.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr12__text.setAttribute('style',hs);
			this._tstr12__text.innerHTML=me.hotspot.title;
			this._tstr12.appendChild(this._tstr12__text);
			this.__div.appendChild(this._tstr12);
			me.skin._radar_beam.style[domTransition]='none';
			me.skin._radar_beam.ggParameter.a=me.player.userdata.information;
			me.skin._radar_beam.style[domTransform]=parameterToTransform(me.skin._radar_beam.ggParameter);
			me.skin._radar_beam.style[domTransition]='none';
			me.skin._radar_beam.ggParameter.a=me.player.userdata.information;
			me.skin._radar_beam.style[domTransform]=parameterToTransform(me.skin._radar_beam.ggParameter);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					me._tstr3.style[domTransition]='none';
					me._tstr3.style.visibility='inherit';
					me._tstr3.ggVisible=true;
					me._tstr12.style[domTransition]='none';
					me._tstr12.style.visibility='inherit';
					me._tstr12.ggVisible=true;
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.style.opacity='1';
					me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.ggParameter.sx=1;me.skin.__div.ggParameter.sy=1;
					me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				}
				if (me.elementMouseOver['image_372']) {
					me._image_372.style[domTransition]='none';
					me._image_372.style.opacity='1';
					me._image_372.style.visibility=me._image_372.ggVisible?'inherit':'hidden';
					me._image_372.style[domTransition]='none';
					me._image_372.ggParameter.sx=1;me._image_372.ggParameter.sy=1;
					me._image_372.style[domTransform]=parameterToTransform(me._image_372.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='down_r') {
			this.__div=document.createElement('div');
			this.__div.ggId="down_r";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 32px;';
			hs+='top:  7px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._tstr2.style[domTransition]='none';
				me._tstr2.style.visibility='hidden';
				me._tstr2.ggVisible=false;
				me._tstr11.style[domTransition]='none';
				me._tstr11.style.visibility='hidden';
				me._tstr11.ggVisible=false;
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.style.opacity='0.8';
				me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.ggParameter.sx=0.8;me.skin.__div.ggParameter.sy=0.8;
				me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this._image_371=document.createElement('div');
			this._image_371.ggId="Image 37";
			this._image_371.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
			this._image_371.ggVisible=true;
			this._image_371.className='ggskin ggskin_image';
			this._image_371.ggType='image';
			hs ='position:absolute;';
			hs+='left: -40px;';
			hs+='top:  -43px;';
			hs+='width: 50px;';
			hs+='height: 50px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_371.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._image_371.setAttribute('style',hs);
			this._image_371__img=document.createElement('img');
			this._image_371__img.className='ggskin ggskin_image';
			this._image_371__img.setAttribute('src',basePath + 'images/image_371.png');
			this._image_371__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_371__img.className='ggskin ggskin_image';
			this._image_371__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_371__img);
			this._image_371.appendChild(this._image_371__img);
			this._image_371.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			this._image_371.onmouseover=function () {
				me.elementMouseOver['image_371']=true;
			}
			this._image_371.onmouseout=function () {
				me._image_371.style[domTransition]='none';
				me._image_371.style.opacity='0.7';
				me._image_371.style.visibility=me._image_371.ggVisible?'inherit':'hidden';
				me._image_371.style[domTransition]='none';
				me._image_371.ggParameter.sx=0.65;me._image_371.ggParameter.sy=0.65;
				me._image_371.style[domTransform]=parameterToTransform(me._image_371.ggParameter);
				me.elementMouseOver['image_371']=false;
			}
			this._image_371.ontouchend=function () {
				me.elementMouseOver['image_371']=false;
			}
			this.__div.appendChild(this._image_371);
			this._tstr2=document.createElement('div');
			this._tstr2__text=document.createElement('div');
			this._tstr2.className='ggskin ggskin_textdiv';
			this._tstr2.ggTextDiv=this._tstr2__text;
			this._tstr2.ggId="T-str";
			this._tstr2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr2.ggVisible=false;
			this._tstr2.className='ggskin ggskin_text';
			this._tstr2.ggType='text';
			this._tstr2.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -45px;';
			hs+='top:  -23px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr2.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr2__text.setAttribute('style',hs);
			this._tstr2__text.innerHTML=me.hotspot.title;
			this._tstr2.appendChild(this._tstr2__text);
			this.__div.appendChild(this._tstr2);
			this._tstr11=document.createElement('div');
			this._tstr11__text=document.createElement('div');
			this._tstr11.className='ggskin ggskin_textdiv';
			this._tstr11.ggTextDiv=this._tstr11__text;
			this._tstr11.ggId="T-str-1";
			this._tstr11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr11.ggVisible=false;
			this._tstr11.className='ggskin ggskin_text';
			this._tstr11.ggType='text';
			this._tstr11.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -46px;';
			hs+='top:  -24px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr11.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr11__text.setAttribute('style',hs);
			this._tstr11__text.innerHTML=me.hotspot.title;
			this._tstr11.appendChild(this._tstr11__text);
			this.__div.appendChild(this._tstr11);
			me.skin._radar_beam.style[domTransition]='none';
			me.skin._radar_beam.ggParameter.a=me.player.userdata.information;
			me.skin._radar_beam.style[domTransform]=parameterToTransform(me.skin._radar_beam.ggParameter);
			me.skin._radar_beam.style[domTransition]='none';
			me.skin._radar_beam.ggParameter.a=me.player.userdata.information;
			me.skin._radar_beam.style[domTransform]=parameterToTransform(me.skin._radar_beam.ggParameter);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					me._tstr2.style[domTransition]='none';
					me._tstr2.style.visibility='inherit';
					me._tstr2.ggVisible=true;
					me._tstr11.style[domTransition]='none';
					me._tstr11.style.visibility='inherit';
					me._tstr11.ggVisible=true;
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.style.opacity='1';
					me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.ggParameter.sx=1;me.skin.__div.ggParameter.sy=1;
					me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				}
				if (me.elementMouseOver['image_371']) {
					me._image_371.style[domTransition]='none';
					me._image_371.style.opacity='1';
					me._image_371.style.visibility=me._image_371.ggVisible?'inherit':'hidden';
					me._image_371.style[domTransition]='none';
					me._image_371.ggParameter.sx=1;me._image_371.ggParameter.sy=1;
					me._image_371.style[domTransform]=parameterToTransform(me._image_371.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='down') {
			this.__div=document.createElement('div');
			this.__div.ggId="down";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 32px;';
			hs+='top:  7px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._tstr0.style[domTransition]='none';
				me._tstr0.style.visibility='hidden';
				me._tstr0.ggVisible=false;
				me._tstr10.style[domTransition]='none';
				me._tstr10.style.visibility='hidden';
				me._tstr10.ggVisible=false;
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.style.opacity='0.8';
				me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.ggParameter.sx=0.8;me.skin.__div.ggParameter.sy=0.8;
				me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this._image_370=document.createElement('div');
			this._image_370.ggId="Image 37";
			this._image_370.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
			this._image_370.ggVisible=true;
			this._image_370.className='ggskin ggskin_image';
			this._image_370.ggType='image';
			hs ='position:absolute;';
			hs+='left: -27px;';
			hs+='top:  -56px;';
			hs+='width: 55px;';
			hs+='height: 58px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_370.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._image_370.setAttribute('style',hs);
			this._image_370__img=document.createElement('img');
			this._image_370__img.className='ggskin ggskin_image';
			this._image_370__img.setAttribute('src',basePath + 'images/image_370.png');
			this._image_370__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_370__img.className='ggskin ggskin_image';
			this._image_370__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_370__img);
			this._image_370.appendChild(this._image_370__img);
			this._image_370.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			this._image_370.onmouseover=function () {
				me.elementMouseOver['image_370']=true;
			}
			this._image_370.onmouseout=function () {
				me._image_370.style[domTransition]='none';
				me._image_370.style.opacity='0.7';
				me._image_370.style.visibility=me._image_370.ggVisible?'inherit':'hidden';
				me._image_370.style[domTransition]='none';
				me._image_370.ggParameter.sx=0.65;me._image_370.ggParameter.sy=0.65;
				me._image_370.style[domTransform]=parameterToTransform(me._image_370.ggParameter);
				me.elementMouseOver['image_370']=false;
			}
			this._image_370.ontouchend=function () {
				me.elementMouseOver['image_370']=false;
			}
			this.__div.appendChild(this._image_370);
			this._tstr0=document.createElement('div');
			this._tstr0__text=document.createElement('div');
			this._tstr0.className='ggskin ggskin_textdiv';
			this._tstr0.ggTextDiv=this._tstr0__text;
			this._tstr0.ggId="T-str";
			this._tstr0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr0.ggVisible=false;
			this._tstr0.className='ggskin ggskin_text';
			this._tstr0.ggType='text';
			this._tstr0.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -45px;';
			hs+='top:  -23px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr0.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr0__text.setAttribute('style',hs);
			this._tstr0__text.innerHTML=me.hotspot.title;
			this._tstr0.appendChild(this._tstr0__text);
			this.__div.appendChild(this._tstr0);
			this._tstr10=document.createElement('div');
			this._tstr10__text=document.createElement('div');
			this._tstr10.className='ggskin ggskin_textdiv';
			this._tstr10.ggTextDiv=this._tstr10__text;
			this._tstr10.ggId="T-str-1";
			this._tstr10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr10.ggVisible=false;
			this._tstr10.className='ggskin ggskin_text';
			this._tstr10.ggType='text';
			this._tstr10.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -46px;';
			hs+='top:  -24px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr10.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr10__text.setAttribute('style',hs);
			this._tstr10__text.innerHTML=me.hotspot.title;
			this._tstr10.appendChild(this._tstr10__text);
			this.__div.appendChild(this._tstr10);
			me.skin._radar_beam.style[domTransition]='none';
			me.skin._radar_beam.ggParameter.a=me.player.userdata.information;
			me.skin._radar_beam.style[domTransform]=parameterToTransform(me.skin._radar_beam.ggParameter);
			me.skin._radar_beam.style[domTransition]='none';
			me.skin._radar_beam.ggParameter.a=me.player.userdata.information;
			me.skin._radar_beam.style[domTransform]=parameterToTransform(me.skin._radar_beam.ggParameter);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					me._tstr0.style[domTransition]='none';
					me._tstr0.style.visibility='inherit';
					me._tstr0.ggVisible=true;
					me._tstr10.style[domTransition]='none';
					me._tstr10.style.visibility='inherit';
					me._tstr10.ggVisible=true;
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.style.opacity='1';
					me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.ggParameter.sx=1;me.skin.__div.ggParameter.sy=1;
					me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				}
				if (me.elementMouseOver['image_370']) {
					me._image_370.style[domTransition]='none';
					me._image_370.style.opacity='1';
					me._image_370.style.visibility=me._image_370.ggVisible?'inherit':'hidden';
					me._image_370.style[domTransition]='none';
					me._image_370.ggParameter.sx=1;me._image_370.ggParameter.sy=1;
					me._image_370.style[domTransform]=parameterToTransform(me._image_370.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="up_l";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 32px;';
			hs+='top:  7px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._tstr.style[domTransition]='none';
				me._tstr.style.visibility='hidden';
				me._tstr.ggVisible=false;
				me._tstr1.style[domTransition]='none';
				me._tstr1.style.visibility='hidden';
				me._tstr1.ggVisible=false;
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.style.opacity='0.8';
				me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.ggParameter.sx=0.8;me.skin.__div.ggParameter.sy=0.8;
				me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this._image_37=document.createElement('div');
			this._image_37.ggId="Image 37";
			this._image_37.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
			this._image_37.ggVisible=true;
			this._image_37.className='ggskin ggskin_image';
			this._image_37.ggType='image';
			hs ='position:absolute;';
			hs+='left: -7px;';
			hs+='top:  -7px;';
			hs+='width: 60px;';
			hs+='height: 59px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_37.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._image_37.setAttribute('style',hs);
			this._image_37__img=document.createElement('img');
			this._image_37__img.className='ggskin ggskin_image';
			this._image_37__img.setAttribute('src',basePath + 'images/image_37.png');
			this._image_37__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_37__img.className='ggskin ggskin_image';
			this._image_37__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_37__img);
			this._image_37.appendChild(this._image_37__img);
			this.__div.appendChild(this._image_37);
			this._tstr=document.createElement('div');
			this._tstr__text=document.createElement('div');
			this._tstr.className='ggskin ggskin_textdiv';
			this._tstr.ggTextDiv=this._tstr__text;
			this._tstr.ggId="T-str";
			this._tstr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr.ggVisible=false;
			this._tstr.className='ggskin ggskin_text';
			this._tstr.ggType='text';
			this._tstr.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -45px;';
			hs+='top:  -23px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr__text.setAttribute('style',hs);
			this._tstr__text.innerHTML=me.hotspot.title;
			this._tstr.appendChild(this._tstr__text);
			this.__div.appendChild(this._tstr);
			this._tstr1=document.createElement('div');
			this._tstr1__text=document.createElement('div');
			this._tstr1.className='ggskin ggskin_textdiv';
			this._tstr1.ggTextDiv=this._tstr1__text;
			this._tstr1.ggId="T-str-1";
			this._tstr1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tstr1.ggVisible=false;
			this._tstr1.className='ggskin ggskin_text';
			this._tstr1.ggType='text';
			this._tstr1.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -46px;';
			hs+='top:  -24px;';
			hs+='width: 96px;';
			hs+='height: 22px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tstr1.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tstr1__text.setAttribute('style',hs);
			this._tstr1__text.innerHTML=me.hotspot.title;
			this._tstr1.appendChild(this._tstr1__text);
			this.__div.appendChild(this._tstr1);
			me.skin._radar_beam.style[domTransition]='none';
			me.skin._radar_beam.ggParameter.a=me.player.userdata.information;
			me.skin._radar_beam.style[domTransform]=parameterToTransform(me.skin._radar_beam.ggParameter);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					me._tstr.style[domTransition]='none';
					me._tstr.style.visibility='inherit';
					me._tstr.ggVisible=true;
					me._tstr1.style[domTransition]='none';
					me._tstr1.style.visibility='inherit';
					me._tstr1.ggVisible=true;
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.style.opacity='1';
					me.skin.__div.style.visibility=me.skin.__div.ggVisible?'inherit':'hidden';
					me.skin.__div.style[domTransition]='none';
					me.skin.__div.ggParameter.sx=1;me.skin.__div.ggParameter.sy=1;
					me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};