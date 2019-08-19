/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';

const Header = () => (
  <ImageBackground
    accessibilityRole={'image'}
    source={require('../assets/img/react.png')}
    style={styles.background}
    imageStyle={styles.logo}>
    <Text style={styles.text}>Cian Meetup</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 75,
    paddingHorizontal: 32,
    backgroundColor: '#F3F3F3',
  },
  logo: {
    opacity: 0.6,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: 0x000000ff,
  },
});

export default Header;
