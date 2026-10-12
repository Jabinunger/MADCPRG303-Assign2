
export type Video = {
id: string;
title: string;
channelName: string;
views: string;
uploaded: string;
duration: string;
thumbnail: string;
description: string; 

};

export type RootStackParamList = {
MainTabs: undefined;
Details: { videoId: string };

};

export type TabParamList = {
Home: undefined;
Create: undefined;
Library: undefined;

};