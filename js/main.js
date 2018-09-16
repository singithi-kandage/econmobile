/*
	Focal Point by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function ($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});


	$(function () {

		var $window = $(window),
			$body = $('body');

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		// Prioritize "important" elements on mobile.
		skel.on('+mobile -mobile', function () {
			$.prioritize(
				'.important\\28 mobile\\29',
				skel.breakpoint('mobile').active
			);
		});

		// Off-Canvas Navigation.

		// Title Bar.
		$(
			'<div id="titleBar">' +
			'<ul>' +
			'<li class="pull-left"><a href="#navPanel" style="color: #555"><svg style="width: 35px; height: 35px;"><g><path class="navIcon" d="M28.5 9h-27C.67 9 0 8.33 0 7.5S.67 6 1.5 6h27c.828 0 1.5.67 1.5 1.5S29.328 9 28.5 9zM28.5 17h-27C.67 17 0 16.328 0 15.5S.67 14 1.5 14h27c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zM28.5 25h-27C.67 25 0 24.328 0 23.5S.67 22 1.5 22h27c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5z"></path></g></svg></a></li>' +
			'</ul>' +
			'<ul id="titleBar-toggles">' +
			// Profile
			'<li class="pull-right" style="margin-top: -5px;"><a href="#"><img src="img/profile.svg" width="37"/></a>' +
			'<ul id="profileDrop">' +
			'<li><a href="profile.html">Profile</a></li>' +
			'<li><a href="notifications.html">Notifications</a></li>' +
			'<li><a href="account-settings.html">Account Settings</a></li>' +
			'<li class="line"><a href="progress.html">Progress</a></li>' +
			'<li class="line"><a href="login.html">Log Out</a></li>' +
			'</ul>' +
			'</li>' +
			// Notifications
			'<li class="pull-right"><a><svg style="width: 35px; height: 35px;"><g><path fill="none" d="M25.532 23.71c-1.71-1.71-2.53-3.47-2.53-8.71 0-5.31-3.432-9-8.003-9s-8.004 3.69-8.004 9c0 5.24-.82 7-2.53 8.71-.11.1-.19.2-.25.29H25.78c-.058-.09-.138-.19-.248-.29z"></path><path class="notif-icon" d="M9.34 20.974c.263.087.546-.054.634-.316.3-.903.36-1.605.36-3.195 0-3.065.418-4.508 2.52-6.61.195-.194.195-.51 0-.706-.195-.195-.512-.195-.707 0-2.323 2.323-2.814 4.01-2.814 7.317 0 1.484-.052 2.11-.308 2.88-.088.26.054.543.316.63z"></path><path class="notif-icon" d="M26.942 22.29c-1.29-1.29-1.94-2.53-1.94-7.29 0-4.32-1.96-7.83-5-9.64V4C20 1.8 18.2 0 16 0h-2c-2.2 0-4 1.8-4 4v1.36C6.957 7.17 4.997 10.68 4.997 15c0 4.76-.65 6-1.94 7.29-1.51 1.51-1.51 3.71.7 3.71h6.34c.46 2.28 2.482 4 4.902 4s4.44-1.72 4.9-4h6.34c2.21 0 2.21-2.2.7-3.71zM12 4c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v.46c-.94-.3-1.95-.46-3-.46s-2.06.16-3 .46V4zm3 24c-1.3 0-2.41-.84-2.82-2h5.64c-.41 1.16-1.52 2-2.82 2zM4.218 24c.06-.09.14-.19.25-.29 1.71-1.71 2.53-3.47 2.53-8.71 0-5.31 3.43-9 8.002-9s8.002 3.69 8.002 9c0 5.24.82 7 2.53 8.71.11.1.19.2.25.29H4.22z"></path></g></svg></a>' +
			'<ul id="notifDrop">' +
			'<li><a href="#">"03 Multiple Relations" due on Monday, October 23, 2017 8:00pm EDT.</a><span>Assignment Submission Due - PROG2230-17F-Sec2-3-4-Programming:Microsoft Web Technology</span></li>' +
			'<li class="line"><a href="profile.html">"A3_Lab3_Fri" due on Friday, October 20, 2017 1:30pm EDT.</a><span> Assignment Submission Due - INFO2080-17F-Sec1-Systems Development:Design</span></li>' +
			'</ul>' +
			'</li>' +
			// Calendar
			'<li class="pull-right"><a href="calendar.html"><svg height="30" viewBox="0 0 1792 1792" width="35" xmlns="http://www.w3.org/2000/svg"><path class="cal-icon" d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"/></svg></a></li>' +
			// Mail
			'<li class="mail pull-right"><a><svg style="width: 35px; height: 35px;"><g><path class="mail-icon" d="M27 6H3C1.35 6 0 7.35 0 9v12c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3V9c0-1.65-1.35-3-3-3zm1 2l-13 8L2 8h26zm0 13c0 .54-.46 1-1 1H3c-.54 0-1-.46-1-1V10.35l11.95 7.35c.32.2.69.3 1.05.3s.73-.1 1.05-.3L28 10.35V21z"></path></g></svg></a>' +
			'<ul id="mailDrop">' +
			'<li>' +
			'<a id="IM" href="mail.html">Instant Messages</a>' +
			'<a id="CM" href="mail.html"">Course Mail</a>' +
			'</li>' +
			'<li class="message"><span class="fa fa-envelope"></span><a href="profile.html">elearningsupport@conestogac.on.ca: Submission receipt</a><span class="dated">yesterday at 7:02 AM</span></li>' +
			'<li class="message"><span class="fa fa-envelope"></span><a href="profile.html">Laurie Doersam sent: Interview assignment instructions and faculty strike information</a><span class="dated">October 16 at 9:57 PM</span></li>' +
			'</ul>' +
			'</li>' +
			'</ul>' +
			'</div>'
		)
			.prependTo('#page-wrapper');

		// Navigation Panel.
		$(
			'<div id="navPanel">' +
			'<div id="navPanelHeader">' +
			'<a href="main.html" class="icon fa-home fa-2x" width="40" style="padding-right: .25em; padding-bottom:.5em; color: #555;"></a>' +
			'<a style="padding-right: .25em"; ><a><img src="img/daylight_eConestoga_logo.png" width="150" style="padding-bottom: 1.2em;"/></a>' +
			'<a id="course-list"><img src="img/apps.svg" width="27" style="float: right; padding-top: .25em;" /></a>' +
			'</div>' +
			'<ul id="main-nav">' +
			'<li><a href="https://studentportal.conestogac.on.ca/StudentPortal/Default.aspx" target="_blank">Tuition Fees</a></li>' +
			'<li><a href="https://parking.conestogac.on.ca/" target="_blank">Parking</a></li>' +
			'<li><a href="http://lib.conestogac.on.ca/meeting-rooms-learning-spaces/book" target="_blank">Work Room Bookings</a></li>' +
			'<li><a href="https://www3.conestogac.on.ca/lockers/options.jsp" target="_blank">Locker Registration</a></li>' +
			'<li><a href="eportfolio.html">ePortfolio</a></li>' +
			'<li><a href="student-support.html">Student Support</a></li>' +
			'<li><a href="https://d2lprod.service-now.com/conestoga_college" target="_blank">Contact Us</a></li>' +
			'<li style="border-top-style:solid;"><a class="admin-tools" href="#">Admin Tools<span class="fa fa-angle-right pull-right"></span></a></li>' +
			'</ul>' +
			/*Header*/
			'<div id="course-title"><a></a></div>' +
			/*Course Nav Bar*/
			'<ul class="nav" id="course-nav">' +
			'<li><a href="content.html">Content</a></li>' +
			'<li><a id="course-tools" href=#">Course Tools<span class="fa fa-angle-right pull-right"></span></a></li>' +
			'<li><a href="student-support.html">Student Support</a></li>' +
			'<li><a href="https://d2lprod.service-now.com/conestoga_college" target="_blank">Contact Us</a></li>' +
			'<li style="border-top: 1px solid  rgb(211, 211, 211);"><a class="admin-tools" href="#">Admin Tools<span class="fa fa-angle-right pull-right"></span></a></li>' +
			'</ul>' +
			'</div>'
		)
			.prependTo($body)
			.panel({
				delay: 500,
				side: 'right',
				target: $body,
				visibleClass: 'navPanel-visible'
			})

		$(
			'<div id="overlay"></div>'
		)
			.prependTo($body);


		$('#titleBar-toggles').dropotron({
			offsetY: -18,
			offsetX: -1,
			mode: 'fade',
			noOpenerFade: true,
			speed: 200,
			alignment: 'center'
		});

		$('.collapse').collapse();

		// Toggles Menu - Admin Tools
		$(".admin-tools").on('touchstart', function () {

			/* Append Admin Tools Nav Bar */
			$(
				'<ul class="nav" id="admin-tools-nav">' +
				'<li><a class="admin-tools-back" href="#"><span class="fa fa-angle-left" style="font-size: 1.5em;"></span><span style="padding-left: 2em;">Admin Tools</span></a></li>' +
				'<li><a href="eportfolio.html">ePortfolio</a></li>' +
				'</ul>'
			)
				.appendTo("#navPanel");

			if ($body.attr('class') == "homepage course-page navPanel-visible") {

				$('#course-nav .admin-tools').removeClass("active");
				$('#course-nav').animate({ left: '-80vw' }, 500);
				
				$('#admin-tools-nav').animate({ left: '0vw' }, 500, function () {

					$('#admin-tools-nav .admin-tools-back').addClass("active");

				});				
			}
			if ($body.attr('class') == "homepage navPanel-visible") {
				$('#main-nav .admin-tools').removeClass("active");
				$('#main-nav').animate({ left: '-80vw' }, 500);
				$('#admin-tools-nav').animate({ left: '0vw' }, 500, function () {

					$('#admin-tools-nav .admin-tools-back').addClass("active");

				});
			}


			//Hides Admin Tools Nav bar, and shows Main Nav
			$(".admin-tools-back").on('touchstart', function () {
			

				if ($body.attr('class') == "homepage course-page navPanel-visible") {

					$('#admin-tools-nav .admin-tools-back').removeClass("active");
					$('#admin-tools-nav').animate({ left: '80vw' }, 500);
					$('#course-nav #admin-tools').addClass("active");
	
					
					$('#course-nav').animate({ left: '0vw' }, 500, function () {
	
						/* Removes Admin Tools Nav Bar */
						$('#admin-tools-nav').remove();
	
					});

				}

				if ($body.attr('class') == "homepage navPanel-visible") {

					$('#main-nav .admin-tools-back').removeClass("active");
					$('#admin-tools-nav').animate({ left: '80vw' }, 500);

					$('#main-nav #admin-tools').addClass("active");
	
					
					$('#main-nav').animate({ left: '0vw' }, 500, function () {
	
						/* Removes Admin Tools Nav Bar */
						$('#admin-tools-nav').remove();
	
					});

				}

			});

		});

		//Toggles Menu - Course Nav 
		$("#course-tools").on('touchstart', function () {

			/* Append Course Contents Nav Bar */
			$(
				'<ul class="nav" id="course-contents-nav">' +
				'<li><a id="course-tools-back" href="#"><span class="fa fa-angle-left" style="font-size: 1.5em;"></span><span style="padding-left: 2em;">Course Tools</span></a></li>' +
				'<li><a href="announcements.html">Announcements</a></li>' +
				'<li><a href="assignments.html">Assignments</a></li>' +
				'<li><a href="attendance.html">Attendance</a></li>' +
				'<li><a href="awards.html">Awards</a></li>' +
				'<li><a href="blog.html">Blog</a></li>' +
				'<li><a href="calendar.html">Calendar</a></li>' +
				'<li><a href="chat.html">Chat</a></li>' +
				'<li><a href="classlist.html">Classlist</a></li>' +
				'<li><a href="mail.html">Course Mail</a></li>' +
				'<li><a href="discussions.html">Discussions</a></li>' +
				'<li><a href="eportfolio.html">ePortfolio</a></li>' +
				'<li><a href="grades.html">Grades</a></li>' +
				'<li><a href="groups.html">Groups</a></li>' +
				'<li><a href="quizzes.html">Quizzes</a></li>' +
				'<li><a href="rubrics.html">Rubrics</a></li>' +
				'<li><a href="survey.html">Surveys</a></li>' +
				'</ul>'
			)
				.appendTo("#navPanel");


			$('#course-nav #course-tools').removeClass("active");
			$('#course-nav').animate({ left: '-80vw' }, 500);
			$('#course-contents-nav').animate({ left: '0vw' }, 500, function () {

				$('#course-contents-nav #course-tools-back').addClass("active");

			});

			//Hides Course Contents, and shows Course Nav
			$("#course-tools-back").on('touchstart', function () {

				$('#course-contents-nav #course-tools-back').removeClass("active");
				$('#course-nav #course-tools').addClass("active");

				$('#course-contents-nav').animate({ left: '80vw' }, 500);
				$('#course-nav').animate({ left: '0vw' }, 500, function () {

					/* Remove Course Contents Nav Bar */
					$('#course-contents-nav').remove();

				});

			});

		});

		//Toggles Menu - Course List Nav 
		$("#course-list").on('touchstart', function () {

			$('#navPanel').children().hide();

			/* Append Course Contents Nav Bar */
			$(
				'<ul class="nav" id="course-list-nav">' +
				'<li><a id="course-list-back" href="#"><span class="fa fa-angle-left" style="font-size: 1.5em; padding:.5em;"></span><span style="padding: .5em 2em .5em .5em;">Return</span></a></li>' +
				'<li><a href="course1.html"><span class="title">Conestoga 101 - Business &amp; Hospitality</span><span class="fa fa-thumb-tack"></span></a></li>' +
				'<li><a href="#"><span class="title">MGMT8410-17F-Sec1-Project Management - Capstone 2</span><span class="fa fa-thumb-tack"></span></a></li>' +
				'<li><a href="#"><span class="title">MGMT8360-17F-Sec1-Project Planning, Schedule and Budget</span><span class="fa fa-thumb-tack"></span></a></li>' +
				'<li><a href="#"><span class="title">MGMT8370-17F-Sec1-Project Risk and Issues Management</span><span class="fa fa-thumb-tack"></span></a></li>' +
				'<li><a href="#"><span class="title">MGMT8400-17F-Sec1-Advanced Project Planning and Control</span><span class="fa fa-thumb-tack"></span></a></li>' +
				'<li><a href="#"><span class="title">MGMT8330-17F-Sec1-Organizational Leadership</span><span class="fa fa-thumb-tack"></span></a></li>' +
				'</ul>'
			)
				.prependTo("#navPanel");

			//Hides Course List nav, and shows Course Nav
			$("#course-list-back").on('touchstart', function () {

				$('#navPanel').children().show();

				$('#course-list-nav').remove();

			});

		});



		// Toggles Search Options Collapseble Panels
		$('.toggle-search-options > a').click(function () {
			$(this).text(function (i, old) {
				return old == 'Show Search Options' ? 'Hide Search Options' : 'Show Search Options';
			});
		});

		//Adds active classes
		$("#navPanel li a").on("touchstart", function () {
			$("#navPanel li a").removeClass("active");
			$(this).addClass("active");
		});

		//MAIL

		// Toggles Mail Panel.
		$(
			'<div id="mailPanel">' +
			'<div id="mailPanelHeader">' +
			'<a href="mail-reply.html"><button type="button" class="btn">Reply</button></a>' +
			'<a href="mail-reply.compose"><button type="button" class="btn">Reply All</button></a>' +
			'<a href="mail.forward"><button type="button" class="btn">Forward</button></a>' +
			'<div class="dropdown">' +
			'<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">More ' +
			'<span class="fa fa-angle-down"></span>' +
			'</button>' +
			'<ul class="dropdown-menu">' +
			'<li><a href="#">Refresh</a></li>' +
			'<li class="top-bordered"><a href="#">Folder Management</a></li>' +
			'</ul>' +
			'</div>' +
			'<br/>' +
			'<div class="row">' +
			'<div class="col-4"><b>From</b></div>' +
			'<div class="col-8">"Laurie Doersam"<br/>LDoersamCC10548910@D2L.conestoga.edu</div>' +
			'</div>' +
			'<div class="row">' +
			'<div class="col-4"><b>Received</b></div>' +
			'<div class="col-8">Nov 9, 2017 9:44 AM</div>' +
			'</div>' +
			'<div class="row">' +
			'<div class="col-4"><b>Course Offering</b></div>' +
			'<div class="col-8">CDEV1020-17F-Sec12-Co-op and Career Preparation</div>' +
			'</div>' +
			'<div class="row">' +
			'<div class="col-4"><b>Subject</b></div>' +
			'<dic class="col-8">CDEV course closing</div>' +
			'</div>' +
			'<div id="mailPanelBody">' +
			'<p>' +
			'Hi everyone:  Please be advised that I will be entering marks for the eight-week Co-op and Career Preparation course on November 17.  If you have any outstanding assignments in the course you will need to have these completed by midnight November 16.  Please note that late assignment submissions will only be marked to a pass (55%). <br/><br/>' +
			'Let me know if you have any questions, <br/><br/> Laurie' +
			'</p>' +
			'</div>' +
			'</div>' +
			'</div>'
		)
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				visibleClass: 'mailPanel-visible',
				target: $body
			})

		// Mail Functionality

		//View By Folder Name
		$('#folder').on('change', function () {

			$('.group-table').css('visibility', 'hidden');
			$('.group-table').css('display', 'none');

			$('#' + this.value).css('visibility', 'visible');
			$('#' + this.value).css('display', 'inline');

			if (this.value == "trash") {
				$('#mail-delete').text('Empty Trash');

				$('#mail-delete').click(function () {

					if ($('#trash > table > td').length > 0) {
						$('#trash > table > td').remove();
						alert("Your trash has been emptied");
					}

				});
			}
			else {
				$('#mail-delete').text('Delete');
			}
		});


		// Select all
		$('.select-all').click(function () {
			var checkboxes = $('td > input[type=checkbox]');

			checkboxes.prop('checked', !checkboxes.prop('checked'));

		});

		// Delete
		$('#mail-delete').click(function () {

			var checked = $('td > input[type=checkbox]:checked').parent().parent();

			if (checked.length > 0) {
				$('#trash > table').append(checked);
				$('td > input[type=checkbox]:checked').prop('checked', false);
				alert("Moved " + checked.length + " message(s) to trash.")
			}

		});

		// Mark as Read
		$('#mail-mark-as-read').click(function () {

			var checked = $('td > input[type=checkbox]:checked').parent();

			if (checked.length > 0) {
				checked.next().children().css('color', '#555');
				$('td > input[type=checkbox]:checked').prop('checked', false);
			}

		});

		// Mark as Unread
		$('#mail-mark-as-unread').click(function () {

			var checked = $('td > input[type=checkbox]:checked').parent();

			if (checked.length > 0) {
				checked.next().children().css('color', 'rgb(41, 148, 219)');
				$('td > input[type=checkbox]:checked').prop('checked', false);
			}

		});

		// Mark as Urgent
		$('#mail-mark-as-urgent').click(function () {

			var checked = $('td > input[type=checkbox]:checked').parent();

			if (checked.length > 0) {
				checked.next().next().append('<span class="fa fa-exclamation sign"></span>');

				$('td > input[type=checkbox]:checked').prop('checked', false);
			}

		});

		//Move to Inbox
		$('#move-to-inbox').click(function () {

			var checked = $('td > input[type=checkbox]:checked').parent().parent();

			if (!$('#inbox').is(':visible') && checked.length > 0) {
				$('#inbox > table').append(checked);
				$('td > input[type=checkbox]:checked').prop('checked', false);
				alert("Moved " + checked.length + " message(s) to inbox.")
			}

		});

		//Move to Sent Mail
		$('#move-to-sent-mail').click(function () {

			var checked = $('td > input[type=checkbox]:checked').parent().parent();

			if (!$('#sent-mail').is(':visible') && checked.length > 0) {
				$('#sent-mail >table').append(checked);
				$('td > input[type=checkbox]:checked').prop('checked', false);
				alert("Moved " + checked.length + " message(s) to Sent Mail.");
			}

		});

		//Move to Drafts
		$('#move-to-drafts').click(function () {

			var checked = $('td > input[type=checkbox]:checked').parent().parent();

			if (!$('#drafts').is(':visible') && checked.length > 0) {
				$('#drafts > table').append(checked);
				$('td > input[type=checkbox]:checked').prop('checked', false);
				alert("Moved " + checked.length + " message(s) to Drafts.");
			}

		});


		// Fix: Remove transitions on WP<10 (poor/buggy performance).
		if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
			$('#titleBar, #navPanel, #page-wrapper')
				.css('transition', 'none');

		// Compose Mail
		var poptroxSettings;

		if (skel.breakpoint('mobile').active)
			poptroxSettings = {
				selector: 'a.image',
				baseZIndex: 100000,
				overlayClass: 'poptrox-overlay skel-layers-fixed',
				usePopupDefaultStyling: false,
				overlayColor: '#222',
				overlayOpacity: 0.8,
				windowMargin: 10,
				useBodyOverflow: false,
				usePopupNav: false,
				usePopupEasyClose: true,
				usePopupCloser: false
			};
		else
			poptroxSettings = {
				selector: 'a.image',
				baseZIndex: 100000,
				overlayClass: 'poptrox-overlay skel-layers-fixed',
				usePopupDefaultStyling: false,
				overlayColor: '#222',
				overlayOpacity: 0.8,
				windowMargin: 30,
				useBodyOverflow: false,
				usePopupNav: true,
				usePopupEasyClose: false,
				popupCloserText: ''
			};

		//Calendar
		$('.date-tabs > li > a').click(function () {

			$('#day-text').text($(this).attr('id'));
			var tab = $(this).attr('id') + "Tab";
			$('.ttday').hide();
			$('#' + tab).show(function(){
				$('#' + tab).fadeIn();
			});

		});

		$('#right-arrow').click(function(){
			
			if(!$('.ttday:visible').is(':last-child')){
				var tab =  $('.ttday:visible').next().attr('id');
				
				$('.ttday').hide();
				$('#' + tab).show(function(){
					$('#' + tab).fadeIn();
				});
		
				$('#day-text').text(tab.replace(/Tab/i, '')); 
			}
		});

		$('#left-arrow').click(function(){
			
			if(!$('.ttday:visible').is(':first-child')){
				var tab =  $('.ttday:visible').prev().attr('id');
				
				$('.ttday').hide();
				$('#' + tab).show(function(){
					$('#' + tab).fadeIn();
				});
		
				$('#day-text').text(tab.replace(/Tab/i, '')); 
			}
		});

		// Save Button Functionality
		$('button.save-button').click(function () {
			alert("Your profile has been saved.");
			window.location.href = "main.html";
		});

		$('button.close-button').click(function () {			
			window.location.href = "main.html";
		});




	});

})(jQuery);

