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
	    		 })).attr('style','color:white;font-size: 20px; padding:10px; margin-left:150px;').appendTo('#div-second');
	    		 $(createSpan({
	    			 id:'span-email',
	    			 clazz:'glyphicon glyphicon-envelope',
	    			 val:''
	    		 })).attr('style','color:white;font-size: 20px; padding:10px;').appendTo('#div-second');
	    		 
	    		 $(createATag({
	    			 id:'a-login',
	    			 val:'로그인'
	    		 })).attr('style','color:white;font-size: 20px; padding:10px;').appendTo('#div-second')
	    		 .click(()=>{
	 				app.login.onCreate();
	 				$('#content').empty();
	 				$('#wrapper').empty();
	 			 });;
	 			$('#div-second').append('<!-- Trigger the modal with a button -->'
	    				  +'<a style="height:30px; background:black; color:white; font-size:20px;"  data-toggle="modal" data-target="#myModal">장바구니</a>'
	    				+''
	    				  +'<!-- Modal -->'
	    				  +'<div class="modal fade" id="myModal" role="dialog">'
	    				    +'<div class="modal-dialog">'
	    				+'    '
	    				      +'<!-- Modal content-->'
	    				      +'<div class="modal-content">'
	    				        +'<div class="modal-header" id="div-modal">'
	    				          +'<button type="button" class="close" data-dismiss="modal">&times;</button>'
	    				          +'<h4 class="modal-title">장바구니</h4>'
	    				        +'</div>'
	    				        +'<div class="modal-body" id="div-basket">'	         
	    				        +'</div>'
	    				        +'<div class="modal-footer">'
	    				          +'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
	    				        +'</div>'
	    				      +'</div>'
	    				+'      '
	    				    +'</div>'
	    				  +'</div>'
	    				+'  '
	    				);
	 			$(createATag({
	 				id:'a-basket-update',
	 				val:'수정'
	 			})).appendTo('#div-modal');
				$(createDiv({
					id:'div-item1',
					clazz:''
				})).appendTo('#div-basket');
				$(createImg({
					img:'item0.jpg'
				})).attr('style','margin-left:50px;').appendTo('#div-item1');
				$(createATag({
					id:'a-item-name2',
					val:'매트립스틱'
				})).attr('style','margin-left:100px;').appendTo('#div-item1');
				$(createATag({
					id:'a-item-name2',
					val:'MATTELIPSTICK'
				})).attr('style','margin-left:20px;').appendTo('#div-item1');
				$(createDiv({
					id:'div-item2',
					clazz:''
				})).appendTo('#div-item1');
				$(createHTag({
					num:'',
					val:'수량:1'
				})).attr('style','margin-left:60px; font-size: 15px;').appendTo('#div-item2');
				$(createHTag({
					num:'',
					val:'가격:30000'
				})).attr('style','margin-left:30px; font-size: 15px;').appendTo('#div-item2');
				$('#div-item1').append($(createDiv({
					id:'div-checkout',
					clazz:''
				})));
				$(createSpan({
					id:'',
					clazz:'',
					val:'총금액:'
				})).attr('style','margin-left:20px; font-size: 25px;').appendTo('#div-checkout');
				$(createSpan({
					id:'',
					clazz:'',
					val:'81600'		
				})).attr('style','font-size: 25px;').appendTo('#div-checkout');
				
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
    		 })).attr('style','color:white;font-size: 20px; padding:10px; margin-left:150px;').appendTo('#div-second');
    		 $(createSpan({
    			 id:'span-email',
    			 clazz:'glyphicon glyphicon-envelope',
    			 val:''
    		 })).attr('style','color:white;font-size: 20px; padding:10px;').appendTo('#div-second');
    		 
    		 $(createATag({
    			 id:'a-login',
    			 val:'로그인'
    		 })).attr('style','color:white;font-size: 20px; padding:10px;').appendTo('#div-second')
    		 .click(()=>{
 				app.login.onCreate();
 				$('#content').empty();
 				$('#wrapper').empty();
 			 });;
 			$('#div-second').append('<!-- Trigger the modal with a button -->'
  				  +'<a style="height:30px; background:black; color:white; font-size:20px;"  data-toggle="modal" data-target="#myModal">장바구니</a>'
  				+''
  				  +'<!-- Modal -->'
  				  +'<div class="modal fade" id="myModal" role="dialog">'
  				    +'<div class="modal-dialog">'
  				+'    '
  				      +'<!-- Modal content-->'
  				      +'<div class="modal-content">'
  				        +'<div class="modal-header" id="div-modal">'
  				          +'<button type="button" class="close" data-dismiss="modal">&times;</button>'
  				          +'<h4 class="modal-title">장바구니</h4>'
  				        +'</div>'
  				        +'<div class="modal-body" id="div-basket">'	         
  				        +'</div>'
  				        +'<div id="div-modal-footer" class="modal-footer">'  				         
  				        +'</div>'
  				      +'</div>'
  				+'      '
  				    +'</div>'
  				  +'</div>'
  				+'  '
  				);
			$(createATag({
				id:'a-basket-update',
				val:'수정'
			})).appendTo('#div-modal');
			$(createDiv({
				id:'div-item1',
				clazz:''
			})).appendTo('#div-basket');
			$(createImg({
				img:'item0.jpg'
			})).attr('style','margin-left:50px;').appendTo('#div-item1');
			$(createATag({
				id:'a-item-name2',
				val:'매트립스틱'
			})).attr('style','margin-left:100px;').appendTo('#div-item1');
			$(createATag({
				id:'a-item-name2',
				val:'MATTELIPSTICK'
			})).attr('style','margin-left:20px;').appendTo('#div-item1');
			$(createDiv({
				id:'div-item2',
				clazz:''
			})).appendTo('#div-item1');
			$(createHTag({
				num:'',
				val:'수량:1'
			})).attr('style','margin-left:60px; font-size: 15px;').appendTo('#div-item2');
			$(createHTag({
				num:'',
				val:'가격:30000'
			})).attr('style','margin-left:30px; font-size: 15px;').appendTo('#div-item2');
			$('#div-item1').append($(createDiv({
				id:'div-checkout',
				clazz:''
			})));
			$(createSpan({
				id:'',
				clazz:'',
				val:'총금액:'
			})).attr('style','margin-left:20px; font-size: 25px;').appendTo('#div-checkout');
			$(createSpan({
				id:'',
				clazz:'',
				val:'81600'		
			})).attr('style','font-size: 25px;').appendTo('#div-checkout');
			$(createButton({
				id:'btn-close',
				clazz:'btn btn-default',
				val:'close'
			})).attr('data-dismiss','modal').appendTo('#div-modal-footer');
			$(createButton({
				id:'btn-order',
				clazz:'btn btn-default',
				val:'주문하기'
			})).attr('data-dismiss','modal').appendTo('#div-modal-footer')
			.on('click',e=>{
				order(e);
			});
         });
	 };
	 var order=x=>{
		 x.preventDefault();
		alert('알러트 작동');
		$.getScript(view,()=>{
			$('#content').empty();
			$(createTab({
				id:'tab-order',
				clazz:''
			})).appendTo('#content');
			$(createDiv({
				id:'div-order-main',
				clazz:''
			})).appendTo('#tab-order');
			$(createDiv({
				id:'div-order-continue-shopping',
				clazz:''
			})).appendTo('#div-order-main');
			$(createATag({
				id:'a-order-continue-shopping',
				val:'쇼핑계속하기'
			})).attr('style','margin-top:40px;').appendTo('#div-order-continue-shopping');
			$('#div-order-continue-shopping')
			.append($(createDiv({
				id:'div-order-basket',
				clazz:''
			})));
			$(createHTag({
				num:'2',
				val:'장바구니'
			})).attr('style','margin-left:650px;').appendTo('#div-order-basket')
			$('#div-order-basket')
			.append($(createDiv({
				id:'div-order-buy-now',
				clazz:''
			})));
			 $(createButton({
					id : 'btn-order-buy-now',
					 clazz : 'btn-order',
					 val :'지금 구매하기'
				})).attr('style','border-radius: 0; height:60px; width:300px; margin-left:550px; background: black; color: white;')
				.appendTo('#div-order-buy-now')
				.on('click',e=>{
					
				});			
		});
		} 
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
				})).attr('style','border-radius: 0; height:60px; width:300px; margin-left:200px; background: black; color: white;')
				.appendTo('#div-login-box')
				.on('click',e=>{
					
				});
			 
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