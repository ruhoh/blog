var tocplus = {"visibility_show":"\u663e\u793a","visibility_hide":"\u9690\u85cf","width":"15em"};

jQuery(document).ready(function($) {
    
    if ( $.smoothScroll ) {
	var target = hostname = pathname = qs = hash = null;

	$('body a').click(function(event) {
	    // 1.6 moved some attributes to the .prop method
	    if ( minVersion('1.6') ) {
		hostname = $(this).prop('hostname');
		pathname = $(this).prop('pathname');
		qs = $(this).prop('search');
		hash = $(this).prop('hash');
	    }
	    else {
		hostname = $(this).attr('hostname');
		pathname = $(this).attr('pathname');
		qs = $(this).attr('search');
		hash = $(this).attr('hash');
	    }
	    console.log('attr')
	    console.log(hostname);
	    console.log(pathname);
	    console.log(qs);
	    console.log(hash);
	    // ie strips out the preceeding / from pathname
	    if ( pathname.length > 0 ) {
		if ( pathname.charAt(0) != '/' ) {
		    pathname = '/' + pathname;
		}
	    }
	    
	    if ( (window.location.hostname == hostname) && (window.location.pathname == pathname) && (window.location.search == qs) && (hash !== '') ) {
		// escape jquery selector chars, but keep the #
		var hash_selector = hash.replace(/([ !"$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g, '\\$1');
		console.log(hash_selector)
		// check if element exists with id=__
		if ( $( hash_selector ).length > 0 )
		    target = hash;
		else {
		    // must be an anchor (a name=__)
		    anchor = hash;
		    anchor = anchor.replace('#', '');
		    target = 'a[name="' + anchor  + '"]';
		    // verify it exists
		    if ( $(target).length == 0 )
			target = '';
		}
		
		// check offset setting
		var offset = -10;
		if (typeof tocplus != 'undefined')
		    if (typeof tocplus.smooth_scroll_offset != 'undefined')
			offset = -1 * tocplus.smooth_scroll_offset;
		
		if ( target ) {
		    event.preventDefault();
		    $.smoothScroll({
			scrollTarget: target,
			offset: offset
		    });
		}
	    }
	});
    }
    
    if ( typeof tocplus != 'undefined' ) {
	$.fn.shrinkTOCWidth = function() {
	    $(this).css({
		width: 'auto',
		display: 'table'
	    });
	    if ( $.browser.msie && parseInt($.browser.version) == 7 )
		$(this).css('width', '');
	}
	
	if ( $.cookie )
	    var visibility_text = ($.cookie('tocplus_hidetoc')) ? tocplus.visibility_show : tocplus.visibility_hide ;
	else 
	    var visibility_text = tocplus.visibility_show; //默認關閉目錄
	

	$('#toc_container p.toc_title').append(' <span class="toc_toggle">[<a href="#">' + visibility_text + '</a>]</span>');
	if ( visibility_text == tocplus.visibility_show ) {
	    $('ul.toc_list').hide();
	    $('#toc_container').shrinkTOCWidth();
	}

	$('span.toc_toggle a').click(function(event) {
	    event.preventDefault();
	    switch( $(this).html() ) {
	    case $('<div/>').html(tocplus.visibility_hide).text():
		$(this).html(tocplus.visibility_show);
		if ( $.cookie ) $.cookie('tocplus_hidetoc', '1', { expires: 30, path: '/' });
		$('ul.toc_list').hide('fast');
		$('#toc_container').shrinkTOCWidth();
		break;
		
	    case $('<div/>').html(tocplus.visibility_show).text():	// do next
	    default:
		$(this).html(tocplus.visibility_hide);
		if ( $.cookie ) $.cookie('tocplus_hidetoc', null, { path: '/' });
		$('#toc_container').css('width', tocplus.width);
		$('ul.toc_list').show('fast');
	    }
	});
    }
    
    function minVersion(version) {
	var $vrs = window.jQuery.fn.jquery.split('.'),
	min = version.split('.');
	for (var i=0, len=$vrs.length; i<len; i++) {
	    if (min[i] && $vrs[i] < min[i]) {
		return false;
	    }
	}
	return true;
    }

});
