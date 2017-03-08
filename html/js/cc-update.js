/*
 * Copyright 2012-2013 AGR Audio, Industria e Comercio LTDA. <contato@moddevices.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function ControlChainDeviceUpdateWindow(options) {
    var self = this;

    options = $.extend({
        updateInfoWindow: $('<div>'),
    }, options)

    options.updateInfoWindow.find('.js-cancel').click(function () {
        options.updateInfoWindow.hide()
        return false
    })

    this.show = function () {
        options.updateInfoWindow.show()
    }

    this.hide = function () {
        options.updateInfoWindow.hide()
    }
}