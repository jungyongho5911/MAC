var createNavgation=x=>{
	return+'<div class="btn-group">'
	  +'<button type="button" class="btn btn-danger">Action</button>'
	  +'<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-expanded="false">'
	    +'<span class="caret"></span>'
	    +'<span class="sr-only">Toggle Dropdown</span>'
	  +'</button>'
	  +'<ul class="dropdown-menu" role="menu">'
	    +'<li><a href="#">Action</a></li>'
	    +'<li><a href="#">Another action</a></li>'
	    +'<li><a href="#">Something else here</a></li>'
	    +'<li class="divider"></li>'
	    +'<li><a href="#">Separated link</a></li>'
	  +'</ul>'
	+'</div>';
}

var createNav=x=>{
    return'<nav id="'+x.id+'" class="'+x.clazz+'"></nav>';
}
var createFont=x=>{
    return '<font>'+x.val+'</font>';
}
var createATag=x=>{
    return '<a id="'+x.id+'" href="#">'+x.val+'</a>';
}
var createSpan=x=>{
    return '<span id="'+x.id+'" class="glyphicon '+x.clazz+'" aria-hidden="true"> &nbsp;'
    +x.val+'</span>'
}
var createHTag=x=>{
    return '<h'+x.num+'>'+x.val+'</h'+x.num+'>';
}
var createDiv=x=>{
    return '<div id="'+x.id+'" class="'+x.clazz+'"></div>';
}
var createTab=x=>{
    return tab = '<table id="'+x.id+'" class="'+x.clazz+'"></table>';
}
var createButton=x=>{
    return '<button type="button" id="'+x.id+'" class="btn'+x.clazz+'" >'+x.val+'</button>';
}
var createUL=(x)=>{
    return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
}
var createLI=(x)=>{
    return '<ll id="'+x.id+'" class="'+x.clazz+'">'+x.val+'</ll>';
}
var createInput=x=>{
    return '<input id="'+x.id+'" placeholder="'+x.val+'" type="'+x.type+'"/>'
}
var createText=x=>{
    return '<h1 style="text-align: center;" id="'+x+'"></h1>';
}
var createForm=x=>{
    return '<form id="'+x.id+'" action="'+x.action+'" class="'+x.clazz+'" method="post"></form>';
}

var createPtag=x=>{
	return '<p class="'+x.clazz+'" id="'+x.id+'">'+x.val+'</p>';
}

var createEmail=()=>{
	return '<div class="site-email-signup-v1 site-email-signup">'
	+'<a id="site-email-signup" href="/customer_service/contact_us.tmpl" title="이메일 문의하기" class="site-email-signup__link jquery-once-1-processed"><i class="icon--envelope site-email-signup__link-icon"></i></a>'
	+'</div>';
}