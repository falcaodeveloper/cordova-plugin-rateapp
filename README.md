RateApp
=======
Plugin for Cordova (3.0+)

The RateApp plugin allows to open the rating dialog for a given app on the device.
This is done using the same API on all supported platforms.

Currently the following platforms are supported:

* Android
* iOS
* WindowsPhone 7 & 8

Installation
---------
Install the plugin using the cordova command line utility:

`$ cordova plugin add https://github.com/Viras-/cordova-plugin-rateapp.git

Usage
---------
Call `window.rateApp.setUrls(androidId, iOSUrl)` before using the plugin.
Once you have done that you can call `window.rateApp.rate()` to display the rating dialog for the current platform.

License
=======
Copyright (C) 2013 Wolfgang Koller

This file is part of GOFG Sports Computer - http://www.gofg.at/.

GOFG Sports Computer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

GOFG Sports Computer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with GOFG Sports Computer.  If not, see <http://www.gnu.org/licenses/>.
