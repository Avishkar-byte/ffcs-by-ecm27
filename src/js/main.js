/*
 *  This file contains the events and functions applied to
 *  the document body that is common to all sections or
 *  that doesn't fit into any particular section
 */

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import '../scss/main.scss';
import '../scss/course-panel.scss';
import '../scss/timetable.scss';
import '../scss/course-list.scss';

import localforage from 'localforage/dist/localforage';

import './attacher';
import './course-panel';
import './timetable';
import './course-list';
import * as Utils from './utils';

const lastUpdate = require('../../package.json')['lastUpdate'];

$(function () {
    /*
        Remove focus from quick buttons once clicked
     */
    $('.quick-buttons .btn').on('click', function () {
        $(this).trigger('blur');
    });

    localforage.getItem('campus').then((campus) => {
        window.location.hash = '#Chennai';
        window.campus = 'Chennai';
        $('#campus').text('Chennai Campus');
        $('#last-update').text(lastUpdate.chennai);
        
        getCourses();
        initializeTimetable();
    });

    Utils.removeTouchHoverCSSRule();
});

/*
    Function to switch campuses (now only maintains Chennai)
 */
window.switchCampus = () => {
    window.location.hash = '#Chennai';
    window.campus = 'Chennai';
    $('#campus').text('Chennai Campus');
    $('#last-update').text(lastUpdate.chennai);
    
    localforage.setItem('campus', 'Chennai').catch(console.error);
    getCourses();
    initializeTimetable();
};

/*
    Redirect to the GitHub page when Ctrl + U is clicked
    instead of showing the page source code
 */
document.onkeydown = function (e) {
    if (e.ctrlKey && e.key == 'u') {
        window.open('https://github.com/vatz88/FFCSonTheGo');
        return false;
    } else {
        return true;
    }
};

/*
    Function to clear all sections
 */
window.resetPage = () => {
    clearPanel();
    clearTimetable();
    clearCourseList();
};

/*
    Prompt add to home screen
 */
window.addEventListener('beforeinstallprompt', (e) => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'A2H',
        eventAction: 'Seen',
        eventLabel: `A2H Shown`,
    });

    e.userChoice.then((choiceResult) => {
        ga('send', {
            hitType: 'event',
            eventCategory: 'A2H',
            eventAction: 'click',
            eventLabel: `A2H ${choiceResult.outcome}`,
        });
    });
});
