import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ArtPageComponent from '../Art/ArtPage';
import MapPageComponent from '../Map/MapPage';
import CommunityPageComponent from '../Community/CommunityPage';
import ArtistsPageComponent from '../Artists/ArtistsPage';

export const MapPage = ({elem}) => {
  return (
      <MapPageComponent elem={elem} />
    )
}

export const ArtPage = ({elem}) => {
  return (
      <ArtPageComponent elem={elem} />
    )
}

export const CommunityPage = ({elem}) => {
  return (
      <CommunityPageComponent elem={elem} />
    )
}

export const ArtistsPage = ({elem}) => {
  return (
      <ArtistsPageComponent elem={elem} />
    )
}