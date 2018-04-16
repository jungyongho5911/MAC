var app = app || {};
app = (()=>{
	var init = x =>{
	    $.getScript(x+'/resources/js/router.js',()=>{
	        $.extend(new Router(x));
	        app.home.onCreate();
	    })
	};
	return {init:init};
})();
app.home=(()=>{
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
			 $(createPtag({
				 id:'p-nav',
				 clazz:'',
				 val:'M·A·C SELECT 공식몰 첫 구매 시 15% 할인'
			 })).attr('style','margin-left:600px; color:white; padding:15px;').appendTo('#div-header');
    		 $(createDiv({
    			 id : 'div-second',
    			 clazz : ''
    		 })).attr('style','background:black; height:60px;').appendTo('#div-header');
    		 $(createATag({
    			 id:'a-main',
    			 val:'MAC'
    		 })).attr('style','color:white;font-size: 20px;').appendTo('#div-second');
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
			 })).attr('style','width:90%; margin: 0auto; margin-top:70px;').appendTo('#mac-store');
			 $(createHTag({
				 num : '2',
				 val : '회원 로그인'
			 })).attr('style','margin-left: 20px;').appendTo('#tab-login');
			 $(createHTag({
				 num : '',
				 val : '아직 맥 공식 온라인몰 회원이 아니신가요?'
			 })).attr('style','margin-left: 20px;').appendTo('#tab-login');
			 $(createUL({
				 id:'ul-login',
				 clazz:''
			 })).appendTo('#tab-login');
			 $(createLI({
				 id:'li-login',
				 clazz:'',
				 val:'이메일 주소를 입력해 주세요.'
			 })).appendTo('#ul-login');
			 $('#li-login').append('</br>');
			 $(createLI({
				 id:'li-pass',
				 clazz:'',
				 val:'비밀번호를 입력해 주세요.'
			 })).appendTo('#li-login');
			 $(createDiv({
					id : 'login-bar',
					clazz : 'login-bar'
				})).appendTo('#tab-login');
			 $(createInput({
				 id : 'input-login',
				 val : '*예시:username@network.co.kr',
				 type :'text'
			 })).attr('style','height:60px; width:300px; margin-left:20px; border: 1px solid red;').appendTo('#login-bar');
			 $(createInput({
					id : 'input-pass',
					 val : '*비밀번호(영문 대소문자, 숫자, 특수문자 혼합 8자 이상 조합)',
					 type :'text'
				})).attr('style','height:60px; width:300px; margin-left: 20px; border: 1px solid red;').appendTo('#login-bar');
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