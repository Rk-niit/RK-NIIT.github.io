function Peoplescorner(url,youtube_url,static_url) {
	this.siteUrl = url+'peoplescorner/';
	this.youtube_embed_url = youtube_url;
	this.staticUrl = static_url;
	this.maxBarHeight = 16;//30;
	this.minBarHeight = 10;//15
	this.barPadding = 2;//space between bars
	this.barWidth = 1;//width of each bar
	this.totalBars =140;//total bars to create
	this.barColor = '#7d7d7d';
	this.canvas = '';
	this.ctx = '';
	this.bar = [];
	this.fps = 15;
}
Peoplescorner.prototype.video = function(fanid,vtype,videoid){
	var _this = this;
	
	var data = '';
	//data += '<input type="hidden" id="listtype" value="'+vtype+'"><input type="hidden" id="content_type" name="content_type" value="video"><input type="hidden" name="fanid" id="id-fanid" value="'+fanid+'"><div class="element"><object width="658" height="383" data="'+_this.youtube_embed_url+videoid+'" type="application/x-shockwave-flash"><param name="src" value="'+_this.youtube_embed_url+videoid+'" /></object></div>';
	
	data += '<input type="hidden" id="listtype" value="'+vtype+'"><input type="hidden" id="list_type" name="list_type" value="'+fanid+'-video"><input type="hidden" id="content_type" name="content_type" value="video"><input type="hidden" name="fanid" id="id-fanid" value="'+fanid+'"><div class="element"><iframe width="658" height="383" src="'+_this.youtube_embed_url+videoid+'"></iframe></div>';
	$('#responce').html('');
	$( "#responce" ).removeClass('playBox');
	$('#responce').html(data);
	//console.log(data);
	$('.commentOverFlow').css({
		'height':'288px'
	});
	_this.comment(fanid,'video');
}

Peoplescorner.prototype.audio = function(fanid,autype,audioid){
	
	var _this = this;
	var data = '';
	
	data += '<input type="hidden" id="listtype" value="'+autype+'"><input type="hidden" name="fanid" id="id-fanid" value="'+fanid+'"><input type="hidden" id="content_type" name="content_type" value="audio"><div class="audio_img"><img id="id-pause" src="'+_this.staticUrl+'images/fan/aduio_pause.jpg"><img id="id-play" src="'+_this.staticUrl+'images/fan/aduio_img.gif" style="display:none;"></div><div class="aduio_control"><audio controls id="topPlayer" onclick="fan.playaudio();"><source src="'+audioid+'" type="audio/mpeg"></audio></div>';
	
	$('#responce').html('');
	$("#responce" ).removeClass('playBox');
	$('#responce').html(data);
	
	$('.commentOverFlow').css({
		'height':'288px'
	});
	//this.canvas = document.getElementById('myCanvas');
	//this.ctx = _this.canvas.getContext("2d");
	//_this.InitBars();
	_this.comment(fanid,'audio');
}
Peoplescorner.prototype.poetry = function(fanid,potype,poetryid){
	var _this = this;
	
	var data = '';
	
	data += '<input type="hidden" id="listtype" value="'+potype+'"><input type="hidden" name="fanid" id="id-fanid" value="'+fanid+'"><input type="hidden" id="content_type" name="content_type" value="poetry"><ul class="fc_shareIcon2"><li><a class="facebook" id="id-fb" href="javascript:void(0);">Facebook</a></li><li><a class="twitter" id="id-tw" href="javascript:void(0);">Twitter</a></li></ul><img src="'+poetryid+'"  class="ref_img">';
	//data += '<input type="hidden" id="listtype" value="'+potype+'"><input type="hidden" name="fanid" id="id-fanid" value="'+fanid+'"><input type="hidden" id="content_type" name="content_type" value="poetry"><ul class="fc_shareIcon2"><li><a class="facebook" id="id-fb" href="javascript:void(0);">Facebook</a></li><li><a class="twitter" id="id-tw" href="javascript:void(0);">Twitter</a></li></ul><img src="http://cdn.narendramodi.in/cmsuploads/0.91475500_1483799083_poem-1.jpg" class="ref_img">';
	
	$('#responce').html('');
	$("#responce").addClass('playBox');
	$('#responce').html(data);
	
	var fblink = $('#'+potype+' #fbshare-'+fanid).attr('onclick'); 
	var twlink = $('#'+potype+' #twshare-'+fanid).attr('onclick');
	$('#id-fb').attr('onclick',fblink);
	$('#id-tw').attr('onclick',twlink);
	
	_this.divheight();
	
	/* $('#fc_video_play1 #responce').on(function(){
		console.log('HEIGHT :'+$('#responce').height());
	}); */
	
	_this.comment(fanid,'poetry');
}
Peoplescorner.prototype.painting = function(fanid,patype,paintingid){
	var _this = this;
	var data = '';
	
	data += '<input type="hidden" id="listtype" value="'+patype+'"><input type="hidden" name="fanid" id="id-fanid" value="'+fanid+'"><input type="hidden" id="content_type" name="content_type" value="painting"><ul class="fc_shareIcon2"><li><a id="id-fb" class="facebook" href="javascript:void(0);">Facebook</a></li><li><a id="id-tw" class="twitter" href="javascript:void(0);">Twitter</a></li></ul><img src="'+paintingid+'" class="ref_img">';
	
	
	$('#responce').html('');
	$('#responce').html(data);
	$("#responce").addClass('playBox');
	
	var fblink = $('#'+patype+' #fbshare-'+fanid).attr('onclick'); 
	var twlink = $('#'+patype+' #twshare-'+fanid).attr('onclick')
	
	$('#id-fb').attr('onclick',fblink);
	$('#id-tw').attr('onclick',twlink);
	
	_this.divheight();
	_this.comment(fanid,'painting');
}
Peoplescorner.prototype.divheight = function(){
	$('#fc_video_play1').on('shown.bs.modal', function(){
		var thisElement = $(this);
		var refElement = thisElement.find('.ref_img');
		if(refElement.length > 0){
			var refElHeight = refElement.height();
			var targetHeight = parseInt(refElHeight) - parseInt(90);
			$('.commentOverFlow').css({
				'height':targetHeight
			});
		   //console.log('height: '+targetHeight);
			//console.log($('.commentOverFlow').attr('style'));
		}
	});
}
Peoplescorner.prototype.nextpre = function(actype){
	var _this = this;
	var listtype = $('#listtype').val();
	var fanid = $('#id-fanid').val();
	var content_type = $('#content_type').val();
	if(fanid.length > 0){
		if(actype == 'next'){
			var elem = $('#'+listtype+' .cl-'+fanid).closest('.owl-item').next().find('input[name="dataitem"]');
		}
		if(actype == 'pre'){
			var elem = $('#'+listtype+' .cl-'+fanid).closest('.owl-item').prev().find('input[name="dataitem"]');
		}
		if(elem.length > 0){
			var data = $(elem).val();
			var newfanid = $(elem).attr('id');
			if(content_type == 'video'){
				_this.video(newfanid,listtype,data);				
			}
			if(content_type == 'audio'){
				_this.audio(newfanid,listtype,data);				
			}
			if(content_type == 'poetry'){
				_this.poetry(newfanid,listtype,data);				
			}
			if(content_type == 'painting'){
				_this.painting(newfanid,listtype,data);				
			}
		}
		
	}
}
Peoplescorner.prototype.comment = function(fanid,fantype){
	var _this = this;
	
	var title = $('#id-'+fanid).html();
	$('.post_title').html(title);
	
	var name = $('#id-name-'+fanid).html();
	$('#post_name').html('');
	$('#post_name').html(name);
	
	var date = $('#id-date-'+fanid).html();
	$('#post_date').html('');
	$('#post_date').html(date);
	//$(this).off('click');
	var a = jQuery.ajax({
		type: "POST",
		url: _this.siteUrl+'commentlist',
		async: true,
		data: {fanid:fanid,type:fantype},
		beforeSend: function (data){
			jQuery(".popup_spinner").show();
		},
		error: function (XHR, textStatus, errorThrown){
			console.log(textStatus);
		},
		complete: function (XHR, textStatus){
			jQuery(".popup_spinner").hide();
		},
		success: function(res){
			$('#commentlist').html('');
			$('#commentlist').html(res);
			
			if(fantype == 'poetry' || fantype == 'painting'){
				var height = jQuery("#responce .ref_img").height();
				var new_height = parseInt(height) - (90);
				$('.commentOverFlow').css({
					'height': new_height+'px'
				});
			}
		}
	});
	a = null;delete a;
}
Peoplescorner.prototype.loadlisting = function(page,ptype,responce){
	var _this = this;
	var a = jQuery.ajax({
		type: "POST",
		url: _this.siteUrl+'loadlisting',
		async: true,
		data: {page:page,type:ptype},
		beforeSend: function (data){
			
		},
		error: function (XHR, textStatus, errorThrown){
			console.log(textStatus);
		},
		success: function(res){
			$(responce).append(res);
			//console.log(res);
		 }
	});
	a = null;delete a;
}
Peoplescorner.prototype.loadcomments = function(){
	var _this = this;
	
	var lastID = $('.load-more').attr('lastid');
	var fan_id = $('#id-fanid').val();
	var ptype = $('#content_type').val();
	var a = jQuery.ajax({
		type: "POST",
		url: _this.siteUrl+'loadcommentlist',
		async: true,
		data: {fanid:fan_id,type:ptype,lastid:lastID},
		beforeSend: function (data){
			$('.load-more').show();
		},
		error: function (XHR, textStatus, errorThrown){
			console.log(textStatus);
		},
		success: function(res){
			$('#commentlist .load-more').remove();
			$('#commentlist').append(res);
		 }
	});
	
	a = null;delete a;
}
Peoplescorner.prototype.postcomment = function(){
	var comment = $('.cl-comment').val().trim();
	
	var fanid = $('#id-fanid').val();
	var type = $('#content_type').val();
	var _this = this;
	
	var a = jQuery.ajax({
		type: "POST",
		url: _this.siteUrl+'postcomment',
		async: true,
		data: {comment:comment,fanid:fanid,type:type},
		beforeSend: function (data){
			//console.log(data);
		},
		error: function (XHR, textStatus, errorThrown){
			console.log(textStatus);
		},
		success: function(res){
			$('#commentlist').html('');
			var result = JSON.parse(res);
			if(result['status'] == 'false'){
				$('.fc_viewPopup_close > a').click();
				$('.login > a').click();
			}
			if(result['status'] == 'true'){
				$('#commentlist').html(result['data']);
			}
			$('.cl-comment').val('');
		 }
	});
	a = null;delete a;
}
Peoplescorner.prototype.playaudio = function(){
	var _this = this;
	var myAudio = $('#topPlayer');
	myAudio[0].onseeking = function() {
		$('#id-pause').hide();
		$('#id-play').show();
	};
	myAudio[0].onplay = function() {
		$('#id-pause').hide();
		$('#id-play').show();
	};
	myAudio[0].onpause = function() {
		$('#id-pause').show();
		$('#id-play').hide();
	};
}	
Peoplescorner.prototype.InitBars = function(){
    var _this = this;
	var barHeight = 0;
  	var x = 0;
  	var y = 0;
  	for(var i=0; i<_this.totalBars; i++)
    {
      	barHeight = _this.RandomizeHeight();
      	x = (i + i) + _this.barPadding;
        y = _this.ComputeYAxis(barHeight);
      	_this.bar.push({
          height: barHeight,
          buffHeight: barHeight,
          x: x,
          y: y
      	});
      	_this.ShrinkBar(i);
    }
}
Peoplescorner.prototype.ShrinkBar = function(index){
  	var _this = this;
	if(_this.bar[index].height > _this.minBarHeight)
   	{
      	_this.ctx.fillStyle = _this.barColor;
      	_this.ctx.clearRect(_this.bar[index].x, _this.bar[index].y, _this.barWidth, _this.bar[index].height);
        _this.bar[index].height--;
      	_this.bar[index].y = _this.ComputeYAxis(_this.bar[index].height);
        _this.ctx.fillRect(_this.bar[index].x, _this.bar[index].y, _this.barWidth, _this.bar[index].height);
     // 	setTimeout(function() {
        requestAnimationFrame(function(){
      		_this.ShrinkBar(index)
    			})
    	//	}, 1000 / fps);
    }
  	else
    {
      	var newHeight = _this.RandomizeHeight();
      	while(newHeight==_this.minBarHeight)
        {
            newHeight = _this.RandomizeHeight();
        }
      	_this.bar[index].buffHeight = newHeight;
      	_this.GrowBar(index);
    }
   	
}
Peoplescorner.prototype.GrowBar = function(index){
  	var _this = this;
	if(_this.bar[index].height < _this.bar[index].buffHeight)
   	{
      	_this.ctx.fillStyle = _this.barColor;
      	_this.ctx.clearRect(_this.bar[index].x, _this.bar[index].y, _this.barWidth, _this.bar[index].height);
        _this.bar[index].height++;
      	_this.bar[index].y = _this.ComputeYAxis(_this.bar[index].height);
        _this.ctx.fillRect(_this.bar[index].x, _this.bar[index].y, _this.barWidth, _this.bar[index].height);
      //	setTimeout(function() {
        requestAnimationFrame(function(){
            _this.GrowBar(index)
          })
    	//	}, 1000 / fps);
    }
  	else
    {
      	_this.ShrinkBar(index);//shrink it again
    }
   
}
Peoplescorner.prototype.RandomizeHeight = function(index){//generate random seed number
  	var _this = this;
	return Math.floor((Math.random() * _this.maxBarHeight) + _this.minBarHeight);
}
Peoplescorner.prototype.ComputeYAxis = function(height){//computes the position of the y
   var _this = this;
   return Math.round((_this.maxBarHeight - height)/2);
}