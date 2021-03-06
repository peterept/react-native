/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 * @providesModule SettingsExample
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Settings,
} = ReactNative;

class SettingsExample extends React.Component {

  constructor(props) {
      super(props);

      let count = Settings.get("launchCount") || 0;
      count++; 
      Settings.set({launchCount: count});

      this.state = {launchCount: count};  
    };


  render() {
    return (
        <Text>Launched ${this.state.launchCount} times!</Text>
    );
  }
}


exports.title = 'Settings';
exports.description = 'API for settings.';
exports.examples = [
  {
    title: 'Launch Count using Settings',
    render(): React.Element<any> { return <SettingsExample />; }
  },
];
