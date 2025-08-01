import './bootstrap';
import React, { useEffect } from 'react';

import Nav from './component/layout/Navbar/Nav';
import Footer from './component/layout/Footer/Footer';
import Routeer from './Route/Routeer';


import { BrowserRouter as Router, NavLink } from 'react-router-dom';


function Main() {
  useEffect(() => {
    const userTheme = localStorage.getItem('theme'); // 'dark' / 'light' / null
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userTheme === 'dark' || (!userTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  (function($) { "use strict";

    $(document).ready(function(){"use strict";
    
        //Scroll back to top
    
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function() {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
          } else {
            jQuery('.progress-wrap').removeClass('active-progress');
          }
        });
        jQuery('.progress-wrap').on('click', function(event) {
          event.preventDefault();
          jQuery('html, body').animate({scrollTop: 0}, duration);
          return false;
        })
    
    
      });
    
    })(jQuery);
  
    return (
      <div className="min-h-screen">
        <Router>
     <Nav />
     <Routeer />
     <Footer />
 </Router>
      </div>
    );
  }

export default Main;