

/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);



/*!
 * Feature Carousel, Version 1.3
 * http://www.bkosolutions.com
 *
 * Copyright 2011 Brian Osborne
 * Licensed under GPL version 3
 * brian@bkosborne.com
 *
 * http://www.gnu.org/licenses/gpl.txt
 */
(function($) {

  $.fn.featureCarousel = function (options) {

    // Adds support for multiple carousels on one page
    if (this.length > 1) {
      this.each(function() {
        $(this).featureCarousel(options);
      });
      return this;
    }
    
    // override the default options with user defined options
    options = $.extend({}, $.fn.featureCarousel.defaults, options || {});

    /* These are univeral values that are used throughout the plugin. Do not modify them
     * unless you know what you're doing. Most of them feed off the options
     * so most customization can be achieved by modifying the options values */
    var pluginData = {
      currentCenterNum:     options.startingFeature,
      containerWidth:       0,
      containerHeight:      0,
      largeFeatureWidth:    0,
      largeFeatureHeight:   0,
      smallFeatureWidth:    0,
      smallFeatureHeight:   0,
      totalFeatureCount:    $(this).children("div").length,
      currentlyMoving:      false,
      featuresContainer:    $(this),
      featuresArray:        [],
      containerIDTag:       "#"+$(this).attr("id"),
      timeoutVar:           null,
      rotationsRemaining:   0,
      itemsToAnimate:       0,
      borderWidth:              0
    };

    /**
     * Function to preload the images in the carousel if desired.
     * This is not recommended if there are a lot of images in the carousel because
     * it may take a while. Functionality does not depend on preloading the images
     */
    var preload = function(callback) {
      // user may not want to preload images
      if (options.preload == true) {
        var $imageElements = pluginData.featuresContainer.find("img");
        var loadedImages = 0;
        var totalImages = $imageElements.length;

        $imageElements.each(function (index, element) {
          // Attempt to load the images                 
                    var img = new Image();
          $(img).bind('load error', function () {
            // Add to number of images loaded and see if they are all done yet
            loadedImages++;
            if (loadedImages == totalImages) {
              // All done, perform callback
              callback();
            }
          });
                    
                    img.src = element.src;
        });
      } else {
        // if user doesn't want preloader, then just go right to callback
        callback();
      }
    }

    // Gets the feature container based on the number
    var getContainer = function(featureNum) {
      return pluginData.featuresArray[featureNum-1];
    }

    // get a feature given it's set position (the position that doesn't change)
    var getBySetPos = function(position) {
      $.each(pluginData.featuresArray, function () {
        if ($(this).data().setPosition == position)
          return $(this);
      });
    }

    // get previous feature number
    var getPreviousNum = function(num) {
      if ((num - 1) == 0) {
        return pluginData.totalFeatureCount;
      } else {
        return num - 1;
      }
    }

    // get next feature number
    var getNextNum = function(num) {
      if ((num + 1) > pluginData.totalFeatureCount) {
        return 1;
      } else {
        return num + 1;
      }
    }

    /**
     * Because there are several options the user can set for the width and height
     * of the feature images, this function is used to determine which options were set
     * and to set the appropriate dimensions used for a small and large feature
     */
    var setupFeatureDimensions = function() {
      // Set the height and width of the entire carousel container
      pluginData.containerWidth = pluginData.featuresContainer.width();
      pluginData.containerHeight = pluginData.featuresContainer.height();

      // Grab the first image for reference
      var $firstFeatureImage = $(pluginData.containerIDTag).find(".carousel-image:first");

      // Large Feature Width
      if (options.largeFeatureWidth > 1)
        pluginData.largeFeatureWidth = options.largeFeatureWidth;
      else if (options.largeFeatureWidth > 0 && options.largeFeatureWidth < 1)
        pluginData.largeFeatureWidth = $firstFeatureImage.width() * options.largeFeatureWidth;
      else
        pluginData.largeFeatureWidth = $firstFeatureImage.outerWidth();
      // Large Feature Height
      if (options.largeFeatureHeight > 1)
        pluginData.largeFeatureHeight = options.largeFeatureHeight;
      else if (options.largeFeatureHeight > 0 && options.largeFeatureHeight < 1)
        pluginData.largeFeatureHeight = $firstFeatureImage.height() * options.largeFeatureHeight;
      else
        pluginData.largeFeatureHeight = $firstFeatureImage.outerHeight();
      // Small Feature Width
      if (options.smallFeatureWidth > 1)
        pluginData.smallFeatureWidth = options.smallFeatureWidth;
      else if (options.smallFeatureWidth > 0 && options.smallFeatureWidth < 1)
        pluginData.smallFeatureWidth = $firstFeatureImage.width() * options.smallFeatureWidth;
      else
        pluginData.smallFeatureWidth = $firstFeatureImage.outerWidth() / 2;
      // Small Feature Height
      if (options.smallFeatureHeight > 1)
        pluginData.smallFeatureHeight = options.smallFeatureHeight;
      else if (options.smallFeatureHeight > 0 && options.smallFeatureHeight < 1)
        pluginData.smallFeatureHeight = $firstFeatureImage.height() * options.smallFeatureHeight;
      else
        pluginData.smallFeatureHeight = $firstFeatureImage.outerHeight() / 2;
    }

    /**
     * Function to take care of setting up various aspects of the carousel,
     * most importantly the default positions for the features
     */
    var setupCarousel = function() {
      // Set the total feature count to the amount the user wanted to cutoff
      if (options.displayCutoff > 0 && options.displayCutoff < pluginData.totalFeatureCount) {
        pluginData.totalFeatureCount = options.displayCutoff;
      }

      // fill in the features array
      pluginData.featuresContainer.find(".carousel-feature").each(function (index) {
        if (index < pluginData.totalFeatureCount) {
          pluginData.featuresArray[index] = $(this);
        }
      });

      // Determine the total border width around the feature if there is one
      if (pluginData.featuresContainer.find(".carousel-feature").first().css("borderLeftWidth") != "medium") {
        pluginData.borderWidth = parseInt(pluginData.featuresContainer.find(".carousel-feature").first().css("borderLeftWidth"))*2;
      }

      // Place all the features in a center hidden position to start off
      pluginData.featuresContainer
        // Have to make the container relative positioning
        .find(".carousel-feature").each(function () {
          // Center all the features in the middle and hide them
          $(this).css({
            'left': (pluginData.containerWidth / 2) - (pluginData.smallFeatureWidth / 2) - (pluginData.borderWidth / 2),
            'width': pluginData.smallFeatureWidth,
            'height': pluginData.smallFeatureHeight,
            'top': options.smallFeatureOffset + options.topPadding,
            'opacity': 0
          });
        })
        // Set all the images to small feature size
        .find(".carousel-image").css({
          'width': pluginData.smallFeatureWidth
        });
        
      // set position to relative of captions if displaying below image
      if (options.captionBelow) {
        pluginData.featuresContainer.find('.carousel-caption').css('position','relative');
      }

      // figure out number of items that will rotate each time
      if (pluginData.totalFeatureCount < 4) {
        pluginData.itemsToAnimate = pluginData.totalFeatureCount;
      } else {
        pluginData.itemsToAnimate = 4;
      }

      // Hide story info and set the proper positioning
      pluginData.featuresContainer.find(".carousel-caption")
        .show();
    }

    /**
     * Here all the position data is set for the features.
     * This is an important part of the carousel to keep track of where
     * each feature within the carousel is
     */
    var setupFeaturePositions = function() {
      // give all features a set number that won't change so they remember their
      // original order
      $.each(pluginData.featuresArray, function (i) {
        $(this).data('setPosition',i+1);
      });

      // Go back one - This is done because we call the move function right away, which
      // shifts everything to the right. So we set the current center back one, so that
      // it displays in the center when that happens
      var oneBeforeStarting = getPreviousNum(options.startingFeature);
      pluginData.currentCenterNum = oneBeforeStarting;

      // Center feature will be position 1
      var $centerFeature = getContainer(oneBeforeStarting);
      $centerFeature.data('position',1);

      // Everything before that center feature...
      var $prevFeatures = $centerFeature.prevAll();
      $prevFeatures.each(function (i) {
        $(this).data('position',(pluginData.totalFeatureCount - i));
      });

      // And everything after that center feature...
      var $nextFeatures = $centerFeature.nextAll();
      $nextFeatures.each(function (i) {
        if ($(this).data('setPosition') != undefined) {
          $(this).data('position',(i + 2));
        }
      });

      // if the counter style is for including number tags in description...
      if (options.counterStyle == 'caption') {
        $.each(pluginData.featuresArray, function () {
          var pos = getPreviousNum($(this).data('position'));
          var $numberTag = $("<span></span>");
          $numberTag.addClass("numberTag");
          $numberTag.html("("+ pos + " of " + pluginData.totalFeatureCount + ") ");
          $(this).find('.carousel-caption p').prepend($numberTag);
        });
      }
    }

    /**
     * This function will set up the two different types of trackers used
     */
    var setupTrackers = function()
    {
      if (options.trackerIndividual) {
        // construct the tracker list
        var $list = $("<ul></ul>");
        $list.addClass("tracker-individual-container");
        for (var i = 0; i < pluginData.totalFeatureCount; i++) {
          // item position one plus the index
          var counter = i+1;

          // Build the DOM for the tracker list
          var $trackerBlip = $("<div>"+counter+"</div>");
          $trackerBlip.addClass("tracker-individual-blip");
          $trackerBlip.css("cursor","pointer");
          $trackerBlip.attr("id","tracker-"+(i+1));
          var $listEntry = $("<li></li>");
          $listEntry.append($trackerBlip);
          $listEntry.css("float","left");
          $listEntry.css("list-style-type","none");
          $list.append($listEntry);
        }
        // add the blip list and then make sure it's visible
        $(pluginData.containerIDTag).append($list);
        $list.hide().show();
      }
      
      if (options.trackerSummation) {
        // Build the tracker div that will hold the tracking data
        var $tracker = $('<div></div>');
        $tracker.addClass('tracker-summation-container');
        // Collect info in spans
        var $current = $('<span></span>').addClass('tracker-summation-current').text(options.startingFeature);
        var $total = $('<span></span>').addClass('tracker-summation-total').text(pluginData.totalFeatureCount);
        var $middle = $('<span></span>').addClass('tracker-summation-middle').text(' of ');
        // Add it all together
        $tracker.append($current).append($middle).append($total);
        // Insert into DOM
        $(pluginData.containerIDTag).append($tracker);
      }
    }

    // Update the tracker information with the new centered feature
    var updateTracker = function(oldCenter, newCenter) {
      if (options.trackerIndividual) {
        // get selectors for the two trackers
        var $trackerContainer = pluginData.featuresContainer.find(".tracker-individual-container");
        var $oldCenter = $trackerContainer.find("#tracker-"+oldCenter);
        var $newCenter = $trackerContainer.find("#tracker-"+newCenter);

        // change classes
        $oldCenter.removeClass("tracker-individual-blip-selected");
        $newCenter.addClass("tracker-individual-blip-selected");
      }
      
      if (options.trackerSummation) {
        var $trackerContainer = pluginData.featuresContainer.find('.tracker-summation-container');
        $trackerContainer.find('.tracker-summation-current').text(newCenter);
      }
    }

    /**
     * This function will set the autoplay for the carousel to
     * automatically rotate it given the time in the options
     * pass in TRUE to just clear the timer
     */
    var setTimer = function(stop) {
      // clear the timeout var if it exists
      clearTimeout(pluginData.timeoutVar);

      // set interval for moving if autoplay is set
      if (!stop && options.autoPlay != 0) {
        var autoTime = (Math.abs(options.autoPlay) < options.carouselSpeed) ? options.carouselSpeed : Math.abs(options.autoPlay);
        pluginData.timeoutVar = setTimeout(function () {
          (options.autoPlay > 0) ? initiateMove(true,1) : initiateMove(false,1);
        }, autoTime);
      }
    }


    // This is a helper function for the animateFeature function that
    // will update the positions of all the features based on the direction
    var rotatePositions = function(direction) {
      $.each(pluginData.featuresArray, function () {
        var newPos;
        if (direction == false) {
          newPos = getNextNum($(this).data().position);
        } else {
          newPos = getPreviousNum($(this).data().position);
        }
        $(this).data('position',newPos);
      });
    }

    /**
     * This function is used to animate the given feature to the given
     * location. Valid locations are "left", "right", "center", "hidden"
     */
    var animateFeature = function($feature, direction)
    {
      var new_width, new_height, new_top, new_left, new_zindex, new_padding, new_fade;

      // Determine the old and new positions of the feature
      var oldPosition = $feature.data('position');
      var newPosition;
      if (direction == true)
        newPosition = getPreviousNum(oldPosition);
      else
        newPosition = getNextNum(oldPosition);
        
      // callback for moving out of center pos
      if (oldPosition == 1) {
        options.leavingCenter($feature);
      }

      // Caculate new new css values depending on where the feature will be located
      if (newPosition == 1) {
        new_width = pluginData.largeFeatureWidth;
        new_height = pluginData.largeFeatureHeight;
        new_top = options.topPadding;
        new_zindex = $feature.css("z-index");
        new_left = (pluginData.containerWidth / 2) - (pluginData.largeFeatureWidth / 2) - (pluginData.borderWidth / 2);
        new_fade = 1.0;
      } else {
        new_width = pluginData.smallFeatureWidth;
        new_height = pluginData.smallFeatureHeight;
        new_top = options.smallFeatureOffset + options.topPadding;
        new_zindex = 1;
        new_fade = 0.8;
        // some info is different for the left, right, and hidden positions
        // left
        if (newPosition == pluginData.totalFeatureCount) {
          new_left = options.sidePadding;
        // right
        } else if (newPosition == 2) {
          new_left = pluginData.containerWidth - pluginData.smallFeatureWidth - options.sidePadding - pluginData.borderWidth;
        // hidden
        } else {
          new_left = (pluginData.containerWidth / 2) - (pluginData.smallFeatureWidth / 2) - (pluginData.borderWidth / 2);
          new_fade = 0;
        }
      }
      // This code block takes care of hiding the feature information if the feature is leaving the center
      if (oldPosition == 1) {
        // Slide up the story information
        $feature.find(".carousel-caption")
          .show();
      }

      // Animate the feature div to its new location
      $feature
        .animate(
          {
            width: new_width,
            height: new_height,
            top: new_top,
            left: new_left,
            opacity: new_fade
          },
          options.carouselSpeed,
          options.animationEasing,
          function () {
            // Take feature info out of hiding if new position is center
            if (newPosition == 1) {
              // need to set the height to auto to accomodate caption if displayed below image
              if (options.captionBelow)
                $feature.css('height','auto');
              // fade in the feature information
              $feature.find(".carousel-caption")
                .fadeTo("fast",0.85);
              // callback for moved to center
              options.movedToCenter($feature);
            }
            // decrement the animation queue
            pluginData.rotationsRemaining = pluginData.rotationsRemaining - 1;
            // have to change the z-index after the animation is done
            $feature.css("z-index", new_zindex);
            // change trackers if using them
            if (options.trackerIndividual || options.trackerSummation) {
              // just update the tracker once; once the new center feature has arrived in center
              if (newPosition == 1) {
                // figure out what item was just in the center, and what item is now in the center
                var newCenterItemNum = pluginData.featuresContainer.find(".carousel-feature").index($feature) + 1;
                var oldCenterItemNum;
                if (direction == false)
                  oldCenterItemNum = getNextNum(newCenterItemNum);
                else
                  oldCenterItemNum = getPreviousNum(newCenterItemNum);
                // now update the trackers
                updateTracker(oldCenterItemNum, newCenterItemNum);
              }
            }

            // did all the the animations finish yet?
            var divide = pluginData.rotationsRemaining / pluginData.itemsToAnimate;
            if (divide % 1 == 0) {
              // if so, set moving to false...
              pluginData.currentlyMoving = false;
              // change positions for all items...
              rotatePositions(direction);

              // and move carousel again if queue is not empty
              if (pluginData.rotationsRemaining > 0)
                move(direction);
            }
            
            // reset timer and auto rotate again
            setTimer(false);
          }
        )
        // select the image within the feature
        .find('.carousel-image')
          // animate its size down
          .animate({
            width: new_width,
            height: new_height
          },
          options.carouselSpeed,
          options.animationEasing)
        .end();
    }

    /**
     * move the carousel to the left or to the right. The features that
     * will move into the four positions are calculated and then animated
     * rotate to the RIGHT when direction is TRUE and
     * rotate to the LEFT when direction is FALSE
     */
    var move = function(direction)
    {
      // Set the carousel to currently moving
      pluginData.currentlyMoving = true;

      // Obtain the new feature positions based on the direction that the carousel is moving
      var $newCenter, $newLeft, $newRight, $newHidden;
      if (direction == true) {
        // Shift features to the left
        $newCenter = getContainer(getNextNum(pluginData.currentCenterNum));
        $newLeft = getContainer(pluginData.currentCenterNum);
        $newRight = getContainer(getNextNum(getNextNum(pluginData.currentCenterNum)));
        $newHidden = getContainer(getPreviousNum(pluginData.currentCenterNum));
        pluginData.currentCenterNum = getNextNum(pluginData.currentCenterNum);
      } else {
        $newCenter = getContainer(getPreviousNum(pluginData.currentCenterNum));
        $newLeft = getContainer(getPreviousNum(getPreviousNum(pluginData.currentCenterNum)));
        $newRight = getContainer(pluginData.currentCenterNum);
        $newHidden = getContainer(getNextNum(pluginData.currentCenterNum));
        pluginData.currentCenterNum = getPreviousNum(pluginData.currentCenterNum);
      }

      // The z-index must be set before animations take place for certain movements
      // this makes the animations look nicer
      if (direction) {
        $newLeft.css("z-index", 3);
      } else {
        $newRight.css("z-index", 3);
      }
      $newCenter.css("z-index", 4);

      // Animate the features into their new positions
      animateFeature($newLeft, direction);
      animateFeature($newCenter, direction);
      animateFeature($newRight, direction);
      // Only want to animate the "hidden" feature if there are more than three
      if (pluginData.totalFeatureCount > 3) {
        animateFeature($newHidden, direction);
      }
    }

    // This is used to relegate carousel movement throughout the plugin
    // It will only initiate a move if the carousel isn't currently moving
    // It will set the animation queue to the number of rotations given
    var initiateMove = function(direction, rotations) {
      if (pluginData.currentlyMoving == false) {
        var queue = rotations * pluginData.itemsToAnimate;
        pluginData.rotationsRemaining = queue;
        move(direction);
      }
    }

    /**
     * This will find the shortest distance to travel the carousel from
     * one position to another position. It will return the shortest distance
     * in number form, and will be positive to go to the right and negative for left
     */
    var findShortestDistance = function(from, to) {
      var goingToLeft = 1, goingToRight = 1, tracker;
      tracker = from;
      // see how long it takes to go to the left
      while ((tracker = getPreviousNum(tracker)) != to) {
        goingToLeft++;
      }

      tracker = from;
      // see how long it takes to to to the right
      while ((tracker = getNextNum(tracker)) != to) {
        goingToRight++;
      }

      // whichever is shorter
      return (goingToLeft < goingToRight) ? goingToLeft*-1 : goingToRight;
    }

    // Move to the left if left button clicked
    $(options.leftButtonTag).live('click',function () {
      initiateMove(false,1);
    });

    // Move to right if right button clicked
    $(options.rightButtonTag).live('click',function () {
      initiateMove(true,1);
    });

    // These are the click and hover events for the features
    pluginData.featuresContainer.find(".carousel-feature")
      .click(function () {
        var position = $(this).data('position');
        if (position == 2) {
          initiateMove(true,1);
        } else if (position == pluginData.totalFeatureCount) {
          initiateMove(false,1);
        }
      })
      .mouseover(function () {
        if (pluginData.currentlyMoving == false) {
          var position = $(this).data('position');
          if (position == 2 || position == pluginData.totalFeatureCount) {
            $(this).css("opacity",0.8);
          }
        }
        // pause the rotation?
        if (options.pauseOnHover) setTimer(true);
        // stop the rotation?
        if (options.stopOnHover) options.autoPlay = 0;
      })
      .mouseout(function () {
        if (pluginData.currentlyMoving == false) {
          var position = $(this).data('position');
          if (position == 2 || position == pluginData.totalFeatureCount) {
            $(this).css("opacity",0.8);
          }
        }
        // resume the rotation
        if (options.pauseOnHover) {
          setTimer(false);
        }
      });

    // Add event listener to all clicks within the features container
    // This is done to disable any links that aren't within the center feature
    $("a", pluginData.containerIDTag).live("click", function (event) {
      // travel up to the container
      var $parents = $(this).parentsUntil(pluginData.containerIDTag);
      // now check each of the feature divs within it
      $parents.each(function () {
        var position = $(this).data('position');
        // if there are more than just feature divs within the container, they will
        // not have a position and it may come back as undefined. Throw these out
        if (position != undefined) {
          // if any of the links on a feature OTHER THAN the center feature were clicked,
          // initiate a carousel move but then throw the link action away
          if (position != 1) {
            if (position == pluginData.totalFeatureCount) {
              initiateMove(false,1);
            } else if (position == 2) {
              initiateMove(true,1);
            }
            event.preventDefault();
            return false;
          // if the position WAS the center (i.e. 1), fire callback
          } else {
            options.clickedCenter($(this));
          }
        }
      });
    });

    // Did someone click one of the individual trackers?
    $(".tracker-individual-blip",  pluginData.containerIDTag).live("click",function () {
      // grab the position # that was clicked
      var goTo = $(this).attr("id").substring(8);
      // find out where that feature # actually is in the carousel right now
      var whereIsIt = pluginData.featuresContainer.find(".carousel-feature").eq(goTo-1).data('position');
      // which feature # is currently in the center
      var currentlyAt = pluginData.currentCenterNum;
      // if the tracker was clicked for the current center feature, do nothing
      if (goTo != currentlyAt) {
        // find the shortest distance to move the carousel
        var shortest = findShortestDistance(1, whereIsIt);
        // initiate a move in that direction with given number of rotations
        if (shortest < 0) {
          initiateMove(false,(shortest*-1));
        } else {
          initiateMove(true,shortest);
        }
      }

    });
    
    /****************
     PUBLIC FUNCTIONS 
     ****************/
    this.initialize = function () {
      // Call the preloader and pass in our callback, which is just a slew of function calls
      // that should only be executed after the images have been loaded
      preload(function () {
        setupFeatureDimensions();
        setupCarousel();
        setupFeaturePositions();
        setupTrackers();
        initiateMove(true,1);
      });
 
      return this;
    };
    
    this.next = function() {
      initiateMove(true, 1);
    }
    this.prev = function () {
      initiateMove(false, 1);
    }
    this.pause = function () {
      setTimer(true);
    }
    this.start = function () {
      setTimer(false);
    }
   
    // Initialize the plugin
    return this.initialize();
  };
  
  $.fn.featureCarousel.defaults = {
    // If zero, take original width and height of image
    // If between 0 and 1, multiply by original width and height (acts as a percentage)
    // If greater than one, use as a forced width/height for all of the images
    largeFeatureWidth :   0,
    largeFeatureHeight:     0,
    smallFeatureWidth:    .6,
    smallFeatureHeight:     .8,
    // how much to pad the top of the carousel
    topPadding:           20,
    // spacing between the sides of the container
    sidePadding:          50,
    // the additional offset to pad the side features from the top of the carousel
    smallFeatureOffset:     50,
    // indicates which feature to start the carousel at
    startingFeature:      1,
    // speed in milliseconds it takes to rotate the carousel
    carouselSpeed:        1000,
    // time in milliseconds to set interval to autorotate the carousel
    // set to zero to disable it, negative to go left
    autoPlay:             4000,
    // with autoplay enabled, set this option to true to have the carousel pause rotating
    // when a user hovers over any feature
    pauseOnHover:         true,
    // with autoplay enabled, set this option to completely stop the autorotate functionality
    // when a user hovers over any feature
    stopOnHover:          false,
    // numbered blips can appear and be used to track the currently centered feature, as well as 
    // allow the user to click a number to move to that feature. Set to false to not process these at all
    // and true to process and display them
    trackerIndividual:    false,
    // a summation of the features can also be used to display an "x Of y" style of tracking
    // this can be combined with the above option as well
    trackerSummation:     false,
    // true to preload all images in the carousel before displaying anything. If this is set to false,
    // you will probably need to set a fixed width/height to prevent strangeness
    preload:              true,
    // Will only display this many features in the carousel
    // set to zero to disable
    displayCutoff:        0,
    // an easing can be specified for the animation of the carousel
    animationEasing:      'swing',
    // selector for the left arrow of the carousel
    leftButtonTag:        '#carousel-left',
    // selector for the right arrow of the carousel
    rightButtonTag:       '#carousel-right',
    // display captions below the image instead of on top
    captionBelow:         false,
    // callback function for when a feature has animated to the center
    movedToCenter:        $.noop,
    // callback function for when feature left center
    leavingCenter:        $.noop,
    // callback function for when center feature was clicked
    clickedCenter:        $.noop
  };
  
})(jQuery);