import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const PARALLAX = {
    HEADER_HEIGHT: 350,
    STICKY_HEADER: {
        HEIGHT: 70
    }
};

const styles = StyleSheet.create({
    // overall
    defaultFlex: {
      flex: 1
    },
    container: {
      flex: 1,
      flexDirection: 'row'
    },
    statusBar: {
      borderBottomWidth: 1,
      backgroundColor: '#F7F7F8',
      borderColor: '#C8C7CC'
    },
    statusBarText: {
      alignSelf:'center',
      marginTop: 30,
      marginBottom: 10,
      fontWeight: 'bold',
      fontSize: 16
    },
    // article section
    articleListContainer: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 6
    },
    articleFooterContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 12
    },
    articleListRow: {
        minHeight: 60,
        overflow: 'hidden',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#FFFFFF',
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginTop: 10,
        justifyContent: 'center'
    },
    articleListMetaTag: {
        color: "#777777",
        fontSize: 12
    },
    articleListTitle: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    articleListDesc: {
      fontSize: 14
    },
    articleListImage: {
        height: 60,
        borderRadius: 30,
        width: 60,
        marginTop: 6,
        marginBottom: 6,
        marginRight: 10
    },
    articleListIcon: {
        width: 16,
        height: 16
    },
    articleListHeroTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        paddingVertical: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 10
    },
    articleListHeroSubtitle: {
      color: '#FFFFFF',
      fontSize: 11,
      paddingVertical: 5,
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 10
    },
    parallaxScrollView: {
      position: 'absolute',
      top: 0,
      width: window.width,
      backgroundColor: 'rgba(0,0,0,.4)',
      height: PARALLAX.HEADER_HEIGHT
    },
    //
    stickySection: {
      height: PARALLAX.STICKY_HEADER.HEIGHT,
      width: 300,
      justifyContent: 'flex-end'
    },
    stickySectionText: {
      color: '#FFFFFF',
      fontSize: 14,
      margin: 10
    },
    fixedSection: {
      position: 'absolute',
      bottom: 10,
      right: 10
    },
    fixedSectionText: {
      color: '#999',
      fontSize: 14
    },
    parallaxHeader: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      paddingTop: 100
    }
});

module.exports = styles;