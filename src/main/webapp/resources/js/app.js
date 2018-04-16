var app = app || {};
app = (()=>{
	var init = x =>{
	    $.getScript(x+'/resources/js/router.js',()=>{
	        $.extend(new Router(x));
	        app.nav.onCreate();
	    })
	};
	return {init:init};
})();
app.nav=(()=>{
	var $wrapper,context,view,image;
	var onCreate=()=>{
		 $wrapper = $('#wrapper');
		 $content = $('#content');
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/view.js';
	     setContentView();
	 };
	 var setContentView=()=>{
			 $.getScript(view,()=>{
				 $(createDiv({
	    			 id : 'container',
	    			 clazz : ''
	    		 })).appendTo($wrapper);
				 $(createNav({
					 id:'navbar-default',
					 clazz:'navbar navbar-default'
				 })).appendTo('#container');
				 $(createDiv({
	    			 id : 'div-container',
	    			 clazz : 'container-fluid'
	    		 })).appendTo('#navbar-default');
				 $(createDiv({
	    			 id : 'div-navbar-header',
	    			 clazz : 'navbar-header'
	    		 })).appendTo('#div-container');
				 $('#div-navbar-header')
				 .append('<button id="btn-nav" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">');
				 $(createATag({
		             id:'a-item',
		             val:createSpan({
		                 id:'span-item',
		                 clazz:'glyphicon-map-marker',
		                 val:'신제품'})}))
		        .appendTo($('#btn-nav'));
				 
	         });
		 };
		 return{onCreate:onCreate}
	 })();
app.login=(()=>{
	var $wrapper,context,view,image;
	var onCreate=()=>{
		 $wrapper = $('#wrapper');
		 $content = $('#content');
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/view.js';
	     setContentView();
	     content();
	 };
	 var setContentView=()=>{
		 $.getScript(view,()=>{
			 $(createDiv({
    			 id : 'div-main',
    			 clazz : ''
    		 })).appendTo($wrapper);
			 $(createDiv({
    			 id : 'div-header',
    			 clazz : 'wrap-tnb-menu'
    		 })).attr('style','background:black; height:60px;').appendTo('#div-main');
    		 $(createDiv({
    			 id : 'div-second',
    			 clazz : ''
    		 })).attr('style','background:black; height:60px; padding:15px;').appendTo('#div-header');
    		 $(createATag({
    			 id:'a-main',
    			 val:'M·A·C'
    		 })).attr('style','color:white;font-size: 20px; margin-left:100px;').appendTo('#div-second');
    		 $(createATag({
    			 id:'a-new-item',
    			 val:'신제품'
    		 })).attr('style','color:white;font-size: 20px; padding:10px;').appendTo('#div-second');
    		 $(createATag({
    			 id:'a-item',
    			 val:'제품'
    		 })).attr('style','color:white;font-size: 20px; padding:10px;').appendTo('#div-second');
    		 $(createATag({
    			 id:'a-best',
    			 val:'베스트셀러'
    		 })).attr('style','color:white;font-size: 20px; padding:10px;').appendTo('#div-second');
    		 $(createATag({
    			 id:'a-goodbye',
    			 val:'굿바이즈'
    		 })).attr('style','color:white;font-size: 20px; padding:10px;').appendTo('#div-second');
    		 $(createATag({
    			 id:'a-brand',
    			 val:'브랜드'
    		 })).attr('style','color:white;font-size: 20px; padding:10px;').appendTo('#div-second');
    		 $(createATag({
    			 id:'a-select',
    			 val:'맥셀렉트'
    		 })).attr('style','color:white;font-size: 20px; padding:10px;').appendTo('#div-second');
    		 $(createATag({
    			 id:'a-find-store',
    			 val:'매장안내'
    		 })).attr('style','color:white;font-size: 20px; padding:10px;').appendTo('#div-second');	
    		 $(createSpan({
    			 id:'span-search',
    			 clazz:'glyphicon glyphicon-search',
    			 val:''
    		 })).attr('style','color:white;font-size: 20px; padding:10px; margin-left:300px;').appendTo('#div-second');
    		 $(createSpan({
    			 id:'span-email',
    			 clazz:'glyphicon glyphicon-envelope',
    			 val:''
    		 })).attr('style','color:white;font-size: 20px; padding:10px;').appendTo('#div-second');
    		 $(createATag({
    			 id:'a-login',
    			 val:'로그인'
    		 })).attr('style','color:white;font-size: 20px; padding:10px;').appendTo('#div-second');
         });
	 };
	 var content=()=>{
		 $.getScript(view,()=>{
			 $(createDiv({
					id : 'mac-store',
					clazz : 'field-container field-container--grid'
				})).appendTo($content);
			 $(createTab({
				 id:'tab-login',
				 clazz:'table-condensed'
			 })).attr('style','width:90%; margin: 0auto; margin-top:70px; height:70%').appendTo('#mac-store');
			 $(createHTag({
				 num : '2',
				 val : '회원 로그인'
			 })).attr('style','margin-left: 200px; font-size: 4rem; font-weight: normal; line-height:0.875; ').appendTo('#tab-login');
			 $(createHTag({
				 num : '',
				 val : '아직 맥 공식 온라인몰 회원이 아니신가요?'
			 })).attr('style','margin-left: 200px; font-size: 15px;').appendTo('#tab-login');
			 $(createUL({
				 id:'ul-login',
				 clazz:''
			 })).appendTo('#tab-login');
			 $(createLI({
				 id:'li-login',
				 clazz:'',
				 val:'이메일 주소를 입력해 주세요.'
			 })).attr('style','margin-left: 160px; font-size: 15px;').appendTo('#ul-login');
			 $('#li-login').append('</br>');
			 $(createLI({
				 id:'li-pass',
				 clazz:'',
				 val:'비밀번호를 입력해 주세요.'
			 })).attr('style','margin-left: 160px; font-size: 15px;').appendTo('#li-login');
			 $(createDiv({
					id : 'div-input-bar',
					clazz : 'div-input-bar'
				})).appendTo('#tab-login');
			 $(createInput({
				 id : 'input-login',
				 val : '*예시:username@network.co.kr',
				 type :'text'
			 })).attr('style','height:60px; width:300px; margin-left:200px; border: 1px solid red;').appendTo('#div-input-bar');
			 $(createInput({
					id : 'input-pass',
					 val : '*비밀번호(영문 대소문자, 숫자, 특수문자 혼합 8자 이상 조합)',
					 type :'text'
				})).attr('style','height:60px; width:300px; margin-left: 20px; border: 1px solid red;').appendTo('#div-input-bar');
			 $('#div-input-bar').append($(createDiv({
					id : 'div-pass-question',
					clazz : 'div-input-bar'
				})));
			 $(createATag({
				 id:'a-pass',
				 val:'비밀번호를 잊어버리셨나요?'			
			 })).attr('style','margin-left:550px;').appendTo('#div-pass-question');
			 $('#div-pass-question').append($(createDiv({
					id : 'div-login-box',
					clazz : 'div-login-box'
				})));
			 $(createButton({
					id : 'input-login-box',
					 clazz : 'btn-login',
					 val :'로그인'
				})).attr('style','border-radius: 0; height:60px; width:300px; margin-left:200px; background: black; color: white;').appendTo('#div-login-box');
			 
		 });
	 }
		 return{onCreate:onCreate,content:content}
	 })();
		 
app.router = (()=>{
	  var onCreate=x=>{
	  $.getScript(x+'resources/js/router.js',()=>{ 
	      $.extend(new Router(x));
	      });        
	  };
	  return {onCreate:onCreate};
})();