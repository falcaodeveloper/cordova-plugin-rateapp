/*
 * Copyright (C) 2013 Wolfgang Koller
 * 
 * This file is part of GOFG Sports Computer - http://www.gofg.at/.
 * 
 * GOFG Sports Computer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * GOFG Sports Computer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with GOFG Sports Computer.  If not, see <http://www.gnu.org/licenses/>.
 */


var RateApp = function() {
};

RateApp.prototype.m_androidId = '';
RateApp.prototype.m_iOSUrl = '';        // 'itms-apps://ax.itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?type=Purple+Software&id=453824252'

/**
 * Needs to be called before the rate function is executed in order to setup URLs for rating
 * @param androidId The identifier of your android app (e.g. at.gofg.sportscomputer)
 * @param iOSUrl
 * @returns {undefined}
 */
RateApp.prototype.setUrls = function(androidId, iOSUrl) {
    this.m_androidId = androidId;
    this.m_iOSUrl = iOSUrl;
};

/**
 * Show the rate dialog for this app
 * 
 * @param successCallback function to be called when the rate dialog was opened
 * @param errorCallback function to be called when there was a problem opening the rate dialog
 */
RateApp.prototype.rate = function(successCallback, errorCallback) {
    switch (device.platform) {
        case 'Android':
            // open play store for rating
            navigator.app.loadUrl('market://details?id=' + this.m_androidId, {openExternal: true});
            if( typeof successCallback === 'function' ) successCallback();
            break;
        case 'WinCE':
        case 'Win32NT':
            // open marketplace for rating
            cordova.exec(successCallback, errorCallback, 'RateApp', 'rate', []);
            break;
        case 'iPhone':
        case 'iOS':
            // open AppStore for rating
            window.open(this.m_iOSUrl, '_system');
            if( typeof successCallback === 'function' ) successCallback();
            break;
    }
};

module.exports = new RateApp();
