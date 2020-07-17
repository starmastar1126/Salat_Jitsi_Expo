import * as WebBrowser from 'expo-web-browser';
import React, { Component } from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

import moment from "moment";

const times =[
  [1,1,"06:14","08:32","12:20","13:42", "15:53","18:04"  ],
  [1,2,"06:13","08:32","12:20","13:43", "15:54","18:05"  ],
  [1,3,"06:13","08:31","12:20","13:44", "15:55","18:06"  ],
  [1,4,"06:13","08:31","12:21","13:45", "15:56","18:07"  ],
  [1,5,"06:13","08:31","12:21","13:46", "15:58","18:08"  ],
  [1,6,"06:13","08:30","12:22","13:47", "15:59","18:09"  ],
  [1,7,"06:12","08:29","12:22","13:49", "16:01","18:10"  ],
  [1,8,"06:12","08:29","12:23","13:50", "16:02","18:12"  ],
  [1,9,"06:12","08:28","12:23","13:51", "16:04","18:13"  ],
  [1,10,"06:11","08:27","12:24","13:52", "16:05","18:14"  ],
  [1,11,"06:11","08:26","12:24","13:53", "16:07","18:15"  ],
  [1,12,"06:10","08:25","12:24","13:55", "16:09","18:17"  ],
  [1,13,"06:09","08:24","12:25","13:56", "16:11","18:18"  ],
  [1,14,"06:09","08:23","12:25","13:57", "16:12","18:20"  ],
  [1,15,"06:08","08:22","12:25","13:58", "16:14","18:21"  ],
  [1,16,"06:07","08:21","12:26","14:00", "16:16","18:23"  ],
  [1,17,"06:07","08:20","12:26","14:01", "16:18","18:24"  ],
  [1,18,"06:06","08:19","12:27","14:03", "16:20","18:26"  ],
  [1,19,"06:05","08:17","12:27","14:04", "16:22","18:27"  ],
  [1,20,"06:04","08:16","12:27","14:05", "16:24","18:29"  ],
  [1,22,"06:03","08:15","12:27","14:07", "16:26","18:30"  ],
  [1,21,"06:02","08:13","12:28","14:08", "16:28","18:32"  ],
  [1,23,"06:01","08:12","12:28","14:10", "16:30","18:34"  ],
  [1,24,"06:00","08:10","12:28","14:11", "16:32","18:35"  ],
  [1,25,"05:58","08:09","12:28","14:13", "16:34","18:37"  ],
  [1,26,"05:57","08:07","12:29","14:14", "16:36","18:39"  ],
  [1,27,"05:56","08:05","12:29","14:16", "16:38","18:40"  ],
  [1,28,"05:54","08:04","12:29","14:18", "16:40","18:42"  ],
  [1,29,"05:53","08:02","12:29","14:19", "16:42","18:44"  ],
  [1,30,"05:52","08:00","12:30","14:21", "16:44","18:46"  ],
  [1,31,"05:50","07:58","12:30","14:22", "16:46","18:47"  ],
  [2,1,"05:49","07:57","12:30","14:24", "16:49","18:49"  ],
  [2,2,"05:47","07:55","12:30","14:25", "16:51","18:51"  ],
  [2,3,"05:46","07:53","12:30","14:27", "16:53","18:53"  ],
  [2,4,"05:44","07:51","12:30","14:29", "16:55","18:55"  ],
  [2,5,"05:42","07:49","12:30","14:30", "16:57","18:57"  ],
  [2,6,"05:41","07:47","12:30","14:32", "16:59","18:59"  ],
  [2,7,"05:39","07:45","12:30","14:33", "17:02","19:00"  ],
  [2,8,"05:37","07:43","12:30","14:35", "17:04","19:02"  ],
  [2,9,"05:35","07:41","12:31","14:37", "17:06","19:04"  ],
  [2,10,"05:33","07:38","12:31","14:38", "17:08","19:06"  ],
  [2,11,"05:31","07:36","12:31","14:40", "17:10","19:08"  ],
  [2,12,"05:29","07:34","12:31","14:41", "17:13","19:10"  ],
  [2,13,"05:27","07:32","12:31","14:43", "17:15","19:12"  ],
  [2,14,"05:25","07:30","12:31","14:45", "17:17","19:14"  ],
  [2,15,"05:23","07:27","12:31","14:46", "17:19","19:16"  ],
  [2,16,"05:21","07:25","12:30","14:48", "17:21","19:18"  ],
  [2,17,"05:19","07:23","12:30","14:49", "17:23","19:20"  ],
  [2,18,"05:17","07:21","12:30","14:51", "17:26","19:22"  ],
  [2,19,"05:15","07:18","12:30","14:53", "17:28","19:24"  ],
  [2,20,"05:13","07:16","12:30","14:54", "17:30","19:26"  ],
  [2,22,"05:10","07:13","12:30","14:56", "17:32","19:28"  ],
  [2,21,"05:08","07:11","12:30","14:57", "17:34","19:30"  ],
  [2,23,"05:06","07:09","12:30","14:59", "17:36","19:32"  ],
  [2,24,"05:03","07:06","12:30","15:00", "17:39","19:34"  ],
  [2,25,"05:01","07:04","12:30","15:02", "17:41","19:36"  ],
  [2,26,"04:58","07:01","12:29","15:03", "17:43","19:38"  ],
  [2,27,"04:56","06:59","12:29","15:05", "17:45","19:41"  ],
  [2,28,"04:53","06:56","12:29","15:06", "17:47","19:43"  ],
  [3,1,"04:51","06:54","12:29","15:08", "17:49","19:45"  ],
  [3,2,"04:48","06:51","12:29","15:09", "17:51","19:47"  ],
  [3,3,"04:46","06:49","12:28","15:11", "17:53","19:49"  ],
  [3,4,"04:43","06:46","12:28","15:12", "17:56","19:51"  ],
  [3,5,"04:40","06:44","12:28","15:13", "17:58","19:54"  ],
  [3,6,"04:38","06:41","12:28","15:15", "18:00","19:56"  ],
  [3,7,"04:35","06:39","12:28","15:16", "18:02","19:58"  ],
  [3,8,"04:32","06:36","12:27","15:18", "18:04","20:00"  ],
  [3,9,"04:30","06:34","12:27","15:19", "18:06","20:02"  ],
  [3,10,"04:27","06:31","12:27","15:20", "18:08","20:05"  ],
  [3,11,"04:24","06:28","12:27","15:22", "18:10","20:07"  ],
  [3,12,"04:21","06:26","12:26","15:23", "18:12","20:09"  ],
  [3,13,"04:18","06:23","12:26","15:24", "18:14","20:12"  ],
  [3,14,"04:15","06:21","12:26","15:26", "18:16","20:14"  ],
  [3,15,"04:12","06:18","12:25","15:27", "18:18","20:16"  ],
  [3,16,"04:09","06:15","12:25","15:28", "18:20","20:19"  ],
  [3,17,"04:06","06:13","12:25","15:30", "18:23","20:21"  ],
  [3,18,"04:03","06:10","12:25","15:31", "18:25","20:24"  ],
  [3,19,"04:00","06:07","12:24","15:32", "18:27","20:26"  ],
  [3,20,"03:57","06:05","12:24","15:33", "18:29","20:29"  ],
  [3,21,"03:53","06:02","12:24","15:35", "18:31","20:31"  ],
  [3,22,"03:50","06:00","12:23","15:36", "18:33","20:34"  ],
  [3,23,"03:47","05:57","12:23","15:37", "18:35","20:37"  ],
  [3,24,"03:43","05:54","12:23","15:38", "18:37","20:39"  ],
  [3,25,"03:40","05:52","12:23","15:39", "18:39","20:42"  ],
  [3,26,"03:37","05:49","12:22","15:41", "18:41","20:44"  ],
  [3,27,"03:33","05:46","12:22","15:42", "18:43","20:47"  ],
  [3,28,"03:30","05:44","12:22","15:43", "18:45","20:50"  ],
  [3,29,"03:27","05:41","12:21","15:44", "18:47","20:53"  ],
  [3,30,"03:23","05:38","12:21","15:45", "18:49","20:55"  ],
  [3,31,"04:19","06:36","13:21","16:46", "19:51","21:58"  ],
  [4,1,"04:16","06:33","13:20","16:48", "19:53","22:01"  ],
  [4,2,"04:12","06:30","13:20","16:49", "19:55","22:04"  ],
  [4,3,"04:09","06:28","13:20","16:50", "19:57","22:07"  ],
  [4,4,"04:05","06:25","13:20","16:51", "20:00","22:10"  ],
  [4,5,"04:03","06:22","13:19","16:52", "20:02","22:13"  ],
  [4,6,"04:01","06:20","13:19","16:53", "20:04","22:16"  ],
  [4,7,"04:00","06:17","13:19","16:54", "20:06","22:19"  ],
  [4,8,"03:59","06:15","13:18","16:55", "20:08","22:22"  ],
  [4,9,"03:58","06:12","13:18","16:56", "20:10","22:24"  ],
  [4,10,"03:56","06:09","13:18","16:57", "20:12","22:25"  ],
  [4,11,"03:55","06:07","13:18","16:58", "20:14","22:26"  ],
  [4,12,"03:54","06:04","13:17","16:59", "20:16","22:26"  ],
  [4,13,"03:53","06:02","13:17","17:00", "20:18","22:27"  ],
  [4,14,"03:51","05:59","13:17","17:01", "20:20","22:28"  ],
  [4,15,"03:50","05:56","13:17","17:02", "20:22","22:29"  ],
  [4,16,"03:49","05:54","13:16","17:03", "20:24","22:29"  ],
  [4,17,"03:48","05:51","13:16","17:04", "20:26","22:30"  ],
  [4,18,"03:46","05:49","13:16","17:05", "20:28","22:31"  ],
  [4,19,"03:45","05:46","13:16","17:06", "20:30","22:32"  ],
  [4,20,"03:44","05:44","13:15","17:07", "20:33","22:32"  ],
  [4,22,"03:43","05:41","13:15","17:08", "20:35","22:33"  ],
  [4,21,"03:41","05:39","13:15","17:09", "20:37","22:34"  ],
  [4,23,"03:40","05:36","13:15","17:10", "20:39","22:35"  ],
  [4,24,"03:39","05:34","13:15","17:11", "20:41","22:36"  ],
  [4,25,"03:38","05:31","13:14","17:12", "20:43","22:37"  ],
  [4,26,"03:37","05:29","13:14","17:13", "20:45","22:37"  ],
  [4,27,"03:35","05:27","13:14","17:14", "20:47","22:38"  ],
  [4,28,"03:34","05:24","13:14","17:14", "20:49","22:39"  ],
  [4,29,"03:33","05:22","13:14","17:15", "20:51","22:40"  ],
  [4,30,"03:32","05:20","13:14","17:16", "20:53","22:41"  ],
  [5,1,"03:31","05:17","13:14","17:17", "20:55","22:42"  ],
  [5,2,"03:30","05:15","13:13","17:18", "20:57","22:43"  ],
  [5,3,"03:29","05:13","13:13","17:19", "20:59","22:43"  ],
  [5,4,"03:28","05:11","13:13","17:19", "21:01","22:44"  ],
  [5,5,"03:26","05:08","13:13","17:20", "21:03","22:45"  ],
  [5,6,"03:25","05:06","13:13","17:21", "21:05","22:46"  ],
  [5,7,"03:24","05:04","13:13","17:22", "21:07","22:47"  ],
  [5,8,"03:23","05:02","13:13","17:23", "21:09","22:48"  ],
  [5,9,"03:22","05:00","13:13","17:24", "21:11","22:49"  ],
  [5,10,"03:21","04:58","13:13","17:24", "21:13","22:50"  ],
  [5,11,"03:20","04:56","13:13","17:25", "21:15","22:51"  ],
  [5,12,"03:19","04:54","13:13","17:26", "21:17","22:52"  ],
  [5,13,"03:18","04:52","13:13","17:27", "21:19","22:53"  ],
  [5,14,"03:17","04:50","13:13","17:27", "21:21","22:54"  ],
  [5,15,"03:16","04:48","13:13","17:28", "21:23","22:54"  ],
  [5,16,"03:16","04:46","13:13","17:29", "21:25","22:55"  ],
  [5,17,"03:15","04:44","13:13","17:30", "21:27","22:56"  ],
  [5,18,"03:14","04:42","13:13","17:30", "21:29","22:57"  ],
  [5,19,"03:13","04:40","13:13","17:31", "21:31","22:58"  ],
  [5,20,"03:12","04:39","13:13","17:32", "21:32","22:59"  ],
  [5,22,"03:11","04:37","13:13","17:32", "21:34","23:00"  ],
  [5,21,"03:11","04:35","13:13","17:33", "21:36","23:01"  ],
  [5,23,"03:10","04:34","13:13","17:34", "21:38","23:02"  ],
  [5,24,"03:09","04:32","13:13","17:34", "21:39","23:03"  ],
  [5,25,"03:08","04:31","13:13","17:35", "21:41","23:03"  ],
  [5,26,"03:08","04:29","13:13","17:36", "21:43","23:04"  ],
  [5,27,"03:07","04:28","13:13","17:36", "21:44","23:05"  ],
  [5,28,"03:07","04:27","13:14","17:37", "21:46","23:06"  ],
  [5,29,"03:06","04:25","13:14","17:37", "21:47","23:07"  ],
  [5,30,"03:06","04:24","13:14","17:38", "21:49","23:07"  ],
  [5,31,"03:05","04:23","13:14","17:38", "21:50","23:08"  ],
  [6,1,"03:05","04:22","13:14","17:39", "21:52","23:09"  ],
  [6,2,"03:04","04:21","13:14","17:40", "21:53","23:10"  ],
  [6,3,"03:04","04:20","13:14","17:40", "21:54","23:11"  ],
  [6,4,"03:03","04:19","13:15","17:41", "21:56","23:11"  ],
  [6,5,"03:03","04:18","13:15","17:41", "21:57","23:12"  ],
  [6,6,"03:03","04:17","13:15","17:42", "21:58","23:13"  ],
  [6,7,"03:02","04:17","13:15","17:42", "21:59","23:13"  ],
  [6,8,"03:02","04:16","13:15","17:43", "22:00","23:14"  ],
  [6,9,"03:02","04:15","13:15","17:43", "22:01","23:14"  ],
  [6,10,"03:02","04:15","13:16","17:43", "22:02","23:15"  ],
  [6,11,"03:02","04:14","13:16","17:44", "22:03","23:15"  ],
  [6,12,"03:02","04:14","13:16","17:44", "22:04","23:16"  ],
  [6,13,"03:02","04:13","13:16","17:45", "22:05","23:16"  ],
  [6,14,"03:01","04:13","13:16","17:45", "22:05","23:17"  ],
  [6,15,"03:01","04:13","13:17","17:45", "22:06","23:17"  ],
  [6,16,"03:02","04:13","13:17","17:46", "22:06","23:18"  ],
  [6,17,"03:02","04:13","13:17","17:46", "22:07","23:18"  ],
  [6,18,"03:02","04:13","13:17","17:46", "22:07","23:18"  ],
  [6,19,"03:02","04:13","13:18","17:46", "22:08","23:19"  ],
  [6,20,"03:02","04:13","13:18","17:47", "22:08","23:19"  ],
  [6,22,"03:02","04:13","13:18","17:47", "22:08","23:19"  ],
  [6,21,"03:02","04:13","13:18","17:47", "22:09","23:19"  ],
  [6,23,"03:03","04:14","13:18","17:47", "22:09","23:20"  ],
  [6,24,"03:03","04:14","13:19","17:47", "22:09","23:20"  ],
  [6,25,"03:03","04:14","13:19","17:48", "22:09","23:20"  ],
  [6,26,"03:04","04:15","13:19","17:48", "22:09","23:20"  ],
  [6,27,"03:04","04:15","13:19","17:48", "22:09","23:20"  ],
  [6,28,"03:04","04:16","13:19","17:48", "22:08","23:20"  ],
  [6,29,"03:05","04:17","13:20","17:48", "22:08","23:20"  ],
  [6,30,"03:05","04:17","13:20","17:48", "22:08","23:20"  ],
  [7,1,"03:06","04:18","13:20","17:48", "22:07","23:20"  ],
  [7,2,"03:06","04:19","13:20","17:48", "22:07","23:20"  ],
  [7,3,"03:07","04:20","13:20","17:48", "22:06","23:20"  ],
  [7,4,"03:07","04:21","13:21","17:48", "22:06","23:19"  ],
  [7,5,"03:08","04:22","13:21","17:48", "22:05","23:19"  ],
  [7,6,"03:09","04:23","13:21","17:48", "22:04","23:19"  ],
  [7,7,"03:09","04:24","13:21","17:48", "22:04","23:19"  ],
  [7,8,"03:10","04:25","13:21","17:48", "22:03","23:18"  ],
  [7,9,"03:11","04:27","13:21","17:47", "22:02","23:18"  ],
  [7,10,"03:11","04:28","13:22","17:47", "22:01","23:17"  ],
  [7,11,"03:12","04:29","13:22","17:47", "22:00","23:17"  ],
  [7,12,"03:13","04:31","13:22","17:47", "21:59","23:16"  ],
  [7,13,"03:14","04:32","13:22","17:46", "21:58","23:16"  ],
  [7,14,"03:14","04:33","13:22","17:46", "21:56","23:15"  ],
  [7,15,"03:15","04:35","13:22","17:46", "21:55","23:15"  ],
  [7,16,"03:16","04:36","13:22","17:45", "21:54","23:14"  ],
  [7,17,"03:17","04:38","13:22","17:45", "21:52","23:14"  ],
  [7,18,"03:18","04:40","13:23","17:44", "21:51","23:13"  ],
  [7,19,"03:18","04:41","13:23","17:44", "21:50","23:12"  ],
  [7,20,"03:19","04:43","13:23","17:44", "21:48","23:12"  ],
  [7,22,"03:20","04:45","13:23","17:43", "21:46","23:11"  ],
  [7,21,"03:21","04:46","13:23","17:42", "21:45","23:10"  ],
  [7,23,"03:22","04:48","13:23","17:42", "21:43","23:09"  ],
  [7,24,"03:23","04:50","13:23","17:41", "21:41","23:09"  ],
  [7,25,"03:24","04:52","13:23","17:41", "21:40","23:08"  ],
  [7,26,"03:24","04:53","13:23","17:40", "21:38","23:07"  ],
  [7,27,"03:25","04:55","13:23","17:39", "21:36","23:06"  ],
  [7,28,"03:26","04:57","13:23","17:39", "21:34","23:05"  ],
  [7,29,"03:27","04:59","13:23","17:38", "21:32","23:04"  ],
  [7,30,"03:28","05:01","13:23","17:37", "21:30","23:03"  ],
  [7,31,"03:29","05:03","13:23","17:36", "21:28","23:02"  ],
  [8,1,"03:30","05:05","13:23","17:35", "21:26","23:01"  ],
  [8,2,"03:31","05:06","13:23","17:35", "21:24","23:00"  ],
  [8,3,"03:31","05:08","13:23","17:34", "21:22","22:59"  ],
  [8,4,"03:32","05:10","13:23","17:33", "21:20","22:58"  ],
  [8,5,"03:33","05:12","13:22","17:32", "21:18","22:57"  ],
  [8,6,"03:34","05:14","13:22","17:31", "21:16","22:56"  ],
  [8,7,"03:35","05:16","13:22","17:30", "21:14","22:55"  ],
  [8,8,"03:36","05:18","13:22","17:29", "21:12","22:54"  ],
  [8,9,"03:37","05:20","13:22","17:28", "21:09","22:53"  ],
  [8,10,"03:38","05:22","13:22","17:27", "21:07","22:52"  ],
  [8,11,"03:38","05:24","13:22","17:26", "21:05","22:50"  ],
  [8,12,"03:39","05:26","13:22","17:25", "21:02","22:49"  ],
  [8,13,"03:40","05:28","13:21","17:23", "21:00","22:48"  ],
  [8,14,"03:41","05:30","13:21","17:22", "20:58","22:47"  ],
  [8,15,"03:42","05:32","13:21","17:21", "20:55","22:46"  ],
  [8,16,"03:42","05:34","13:21","17:20", "20:53","22:45"  ],
  [8,17,"03:43","05:36","13:21","17:19", "20:51","22:43"  ],
  [8,18,"03:44","05:38","13:20","17:17", "20:48","22:42"  ],
  [8,19,"03:45","05:40","13:20","17:16", "20:46","22:41"  ],
  [8,20,"03:46","05:42","13:20","17:15", "20:43","22:40"  ],
  [8,22,"03:46","05:44","13:20","17:13", "20:41","22:38"  ],
  [8,21,"03:47","05:46","13:19","17:12", "20:38","22:37"  ],
  [8,23,"03:48","05:48","13:19","17:11", "20:36","22:36"  ],
  [8,24,"03:49","05:50","13:19","17:09", "20:33","22:35"  ],
  [8,25,"03:49","05:52","13:19","17:08", "20:31","22:33"  ],
  [8,26,"03:50","05:54","13:18","17:06", "20:28","22:32"  ],
  [8,27,"03:51","05:56","13:18","17:05", "20:26","22:31"  ],
  [8,28,"03:51","05:58","13:18","17:03", "20:23","22:30"  ],
  [8,29,"03:52","06:00","13:18","17:02", "20:21","22:28"  ],
  [8,30,"03:53","06:02","13:17","17:00", "20:18","22:27"  ],
  [8,31,"03:54","06:04","13:17","16:59", "20:15","22:26"  ],
  [9,1,"03:54","06:06","13:17","16:57", "20:13","22:24"  ],
  [9,2,"03:55","06:08","13:16","16:56", "20:10","22:23"  ],
  [9,3,"03:55","06:10","13:16","16:54", "20:08","22:22"  ],
  [9,4,"03:56","06:12","13:16","16:52", "20:05","22:20"  ],
  [9,5,"03:57","06:14","13:15","16:51", "20:02","22:16"  ],
  [9,6,"03:57","06:16","13:15","16:49", "20:00","22:12"  ],
  [9,7,"03:58","06:18","13:15","16:47", "19:57","22:08"  ],
  [9,8,"04:00","06:20","13:14","16:46", "19:54","22:05"  ],
  [9,9,"04:03","06:22","13:14","16:44", "19:52","22:01"  ],
  [9,10,"04:06","06:24","13:14","16:42", "19:49","21:58"  ],
  [9,11,"04:09","06:26","13:13","16:41", "19:46","21:54"  ],
  [9,12,"04:11","06:28","13:13","16:39", "19:44","21:51"  ],
  [9,13,"04:14","06:30","13:13","16:37", "19:41","21:47"  ],
  [9,14,"04:17","06:32","13:12","16:35", "19:38","21:44"  ],
  [9,15,"04:20","06:34","13:12","16:33", "19:36","21:40"  ],
  [9,16,"04:23","06:35","13:11","16:32", "19:33","21:37"  ],
  [9,17,"04:25","06:37","13:11","16:30", "19:30","21:34"  ],
  [9,18,"04:28","06:39","13:11","16:28", "19:28","21:31"  ],
  [9,19,"04:31","06:41","13:10","16:26", "19:25","21:27"  ],
  [9,20,"04:33","06:43","13:10","16:24", "19:22","21:24"  ],
  [9,22,"04:36","06:45","13:10","16:22", "19:20","21:21"  ],
  [9,21,"04:38","06:47","13:09","16:21", "19:17","21:18"  ],
  [9,23,"04:41","06:49","13:09","16:19", "19:14","21:14"  ],
  [9,24,"04:44","06:51","13:09","16:17", "19:12","21:11"  ],
  [9,25,"04:46","06:53","13:08","16:15", "19:09","21:08"  ],
  [9,26,"04:48","06:55","13:08","16:13", "19:06","21:05"  ],
  [9,27,"04:51","06:57","13:08","16:11", "19:04","21:02"  ],
  [9,28,"04:53","07:00","13:07","16:09", "19:01","20:59"  ],
  [9,29,"04:55","07:01","13:07","16:08", "18:58","20:56"  ],
  [9,30,"04:58","07:03","13:07","16:06", "18:56","20:53"  ],
  [10,1,"05:00","07:05","13:06","16:04", "18:53","20:50"  ],
  [10,2,"05:02","07:07","13:06","16:02", "18:50","20:47"  ],
  [10,3,"05:05","07:09","13:06","16:00", "18:48","20:45"  ],
  [10,4,"05:07","07:11","13:05","15:58", "18:45","20:42"  ],
  [10,5,"05:09","07:13","13:05","15:56", "18:43","20:39"  ],
  [10,6,"05:11","07:15","13:05","15:54", "18:40","20:36"  ],
  [10,7,"05:13","07:17","13:04","15:52", "18:37","20:33"  ],
  [10,8,"05:15","07:19","13:04","15:50", "18:35","20:31"  ],
  [10,9,"05:18","07:21","13:04","15:48", "18:32","20:28"  ],
  [10,10,"05:20","07:23","13:04","15:46", "18:30","20:25"  ],
  [10,11,"05:22","07:25","13:03","15:45", "18:27","20:23"  ],
  [10,12,"05:24","07:27","13:03","15:43", "18:25","20:20"  ],
  [10,13,"05:26","07:29","13:03","15:41", "18:22","20:18"  ],
  [10,14,"05:28","07:31","13:03","15:39", "18:20","20:15"  ],
  [10,15,"05:30","07:33","13:02","15:37", "18:17","20:13"  ],
  [10,16,"05:32","07:35","13:02","15:35", "18:15","20:10"  ],
  [10,17,"05:34","07:37","13:02","15:33", "18:12","20:08"  ],
  [10,18,"05:36","07:39","13:02","15:31", "18:10","20:05"  ],
  [10,19,"05:38","07:41","13:01","15:30", "18:07","20:03"  ],
  [10,20,"05:40","07:43","13:01","15:28", "18:05","20:01"  ],
  [10,21,"05:44","07:47","13:01","15:24", "18:00","19:56"  ],
  [10,22,"05:42","07:45","13:01","15:26", "18:02","19:58"  ],
  [10,23,"05:46","07:49","13:01","15:22", "17:58","19:54"  ],
  [10,24,"05:48","07:52","13:01","15:21", "17:55","19:52"  ],
  [10,25,"05:50","07:54","13:00","15:19", "17:53","19:49"  ],
  [10,26,"05:52","07:56","13:00","15:17", "17:50","19:47"  ],
  [10,27,"04:54","06:58","12:00","14:15", "16:48","18:45"  ],
  [10,28,"04:56","07:00","12:00","14:14", "16:46","18:43"  ],
  [10,29,"04:57","07:02","12:00","14:12", "16:44","18:41"  ],
  [10,30,"05:00","07:04","12:00","14:10", "16:41","18:39"  ],
  [10,31,"05:01","07:06","12:00","14:09", "16:39","18:37"  ],
  [11,1,"05:03","07:08","12:00","14:07", "16:37","18:35"  ],
  [11,2,"05:05","07:10","12:00","14:06", "16:35","18:33"  ],
  [11,3,"05:07","07:12","12:00","14:04", "16:33","18:31"  ],
  [11,4,"05:09","07:15","12:00","14:03", "16:31","18:29"  ],
  [11,5,"05:10","07:17","12:00","14:01", "16:29","18:28"  ],
  [11,6,"05:12","07:19","12:00","14:00", "16:27","18:26"  ],
  [11,7,"05:14","07:21","12:00","13:58", "16:25","18:24"  ],
  [11,8,"05:16","07:23","12:00","13:57", "16:23","18:23"  ],
  [11,9,"05:17","07:25","12:00","13:55", "16:21","18:21"  ],
  [11,10,"05:19","07:27","12:00","13:54", "16:19","18:19"  ],
  [11,11,"05:21","07:29","12:00","13:53", "16:17","18:18"  ],
  [11,12,"05:23","07:31","12:00","13:51", "16:15","18:16"  ],
  [11,13,"05:24","07:33","12:00","13:50", "16:13","18:15"  ],
  [11,14,"05:26","07:35","12:01","13:49", "16:11","18:13"  ],
  [11,15,"05:28","07:37","12:01","13:48", "16:10","18:12"  ],
  [11,16,"05:29","07:39","12:01","13:47", "16:08","18:11"  ],
  [11,17,"05:31","07:41","12:01","13:45", "16:06","18:10"  ],
  [11,18,"05:33","07:43","12:01","13:44", "16:05","18:08"  ],
  [11,19,"05:34","07:45","12:02","13:43", "16:03","18:07"  ],
  [11,20,"05:36","07:47","12:02","13:42", "16:02","18:06"  ],
  [11,22,"05:37","07:49","12:02","13:41", "16:00","18:05"  ],
  [11,21,"05:39","07:51","12:02","13:41", "15:59","18:04"  ],
  [11,23,"05:40","07:53","12:03","13:40", "15:57","18:03"  ],
  [11,24,"05:42","07:55","12:03","13:39", "15:56","18:02"  ],
  [11,25,"05:43","07:57","12:03","13:38", "15:55","18:01"  ],
  [11,26,"05:45","07:59","12:03","13:37", "15:54","18:00"  ],
  [11,27,"05:46","08:00","12:04","13:37", "15:52","17:59"  ],
  [11,28,"05:48","08:02","12:04","13:36", "15:51","17:59"  ],
  [11,29,"05:49","08:04","12:04","13:35", "15:50","17:58"  ],
  [11,30,"05:50","08:06","12:05","13:35", "15:49","17:57"  ],
  [12,1,"05:52","08:07","12:05","13:34", "15:48","17:57"  ],
  [12,2,"05:53","08:09","12:05","13:34", "15:47","17:56"  ],
  [12,3,"05:54","08:11","12:06","13:34", "15:47","17:56"  ],
  [12,4,"05:56","08:12","12:06","13:33", "15:46","17:55"  ],
  [12,5,"05:57","08:14","12:07","13:33", "15:45","17:55"  ],
  [12,6,"05:58","08:15","12:07","13:33", "15:44","17:54"  ],
  [12,7,"06:00","08:17","12:07","13:32", "15:44","17:54"  ],
  [12,8,"06:00","08:18","12:08","13:32", "15:43","17:54"  ],
  [12,9,"06:01","08:19","12:08","13:32", "15:43","17:54"  ],
  [12,10,"06:02","08:20","12:09","13:32", "15:43","17:53"  ],
  [12,11,"06:03","08:22","12:09","13:32", "15:42","17:53"  ],
  [12,12,"06:04","08:23","12:10","13:32", "15:42","17:53"  ],
  [12,13,"06:05","08:24","12:10","13:32", "15:42","17:53"  ],
  [12,14,"06:06","08:25","12:11","13:32", "15:42","17:53"  ],
  [12,15,"06:07","08:26","12:11","13:32", "15:42","17:54"  ],
  [12,16,"06:08","08:27","12:12","13:33", "15:42","17:54"  ],
  [12,17,"06:08","08:28","12:12","13:33", "15:42","17:54"  ],
  [12,18,"06:09","08:29","12:13","13:33", "15:42","17:54"  ],
  [12,19,"06:10","08:29","12:13","13:33", "15:42","17:55"  ],
  [12,20,"06:10","08:30","12:14","13:34", "15:43","17:55"  ],
  [12,22,"06:11","08:31","12:14","13:34", "15:43","17:55"  ],
  [12,21,"06:11","08:31","12:15","13:35", "15:43","17:56"  ],
  [12,23,"06:12","08:31","12:15","13:35", "15:44","17:56"  ],
  [12,24,"06:12","08:32","12:16","13:36", "15:45","17:57"  ],
  [12,25,"06:13","08:32","12:16","13:37", "15:45","17:58"  ],
  [12,26,"06:13","08:32","12:17","13:37", "15:46","17:58"  ],
  [12,27,"06:13","08:32","12:17","13:38", "15:47","17:59"  ],
  [12,28,"06:13","08:33","12:17","13:39", "15:48","18:00"  ],
  [12,29,"06:13","08:33","12:18","13:39", "15:49","18:01"  ],
  [12,30,"06:13","08:32","12:18","13:40", "15:50","18:02"  ],
  [12,31,"06:14","08:32","12:19","13:41", "15:51","18:02"  ]
];

class HomeScreen extends Component {
  
  render() {

  let month = moment().format("M");
    let day = moment().format("D");
    let hour = moment().format("HH");

    let found = times.find(array => array[0] == month && array[1] == day);

    let todaysPrayers = [
        {title: "Fajr", value: found[2]},
        {title: "Shuruq", value: found[3]},
        {title: "Dhuhr", value: found[4]},
        {title: "Aser", value: found[5]},
        {title: "Maghrib", value: found[6]},
        {title: "Isha", value: found[7]},
    ];

    let boldIndex = Object.values(todaysPrayers).findIndex(prayerTime => prayerTime > hour);

    if(boldIndex === -0) {
        boldIndex = 0;
    }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
        <Text>Hejsan</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          
        <View style={{ width: 250, height: '100%', color: 'black' }}>
        {
            todaysPrayers.map((prayer, index) => (
            <Text style={{ color: 'black', fontWeight: boldIndex === index ? 'bold' : 'normal' }}> {prayer.title}  {prayer.value}</Text>
            ))
        }
        </View>
    </View>
        </View>
        
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>Nyheter</Text>

        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>Corona-mmmm</MonoText>
        </View>
      </View>
    </View>
  );
}
}

HomeScreen.navigationOptions = {
  header: null,
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});



export default HomeScreen;