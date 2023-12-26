import golazo from '../assets/golazo.jpeg';  
import vini from '../assets/golaso.webp';
import jre from '../assets/joe.jpeg';
import goggin_time from '../assets/goggins.webp';
import max from '../assets/max.jpeg';
import LastOfUs from '../assets/last.webp';
import crunchy from '../assets/crunch.jpeg';
import roger from '../assets/roger.webp';
import mkbhd from '../assets/mkbhd.jpeg';
import Sundar from '../assets/mkbhd.webp';
import fireship from '../assets/fireship.jpeg';
import js23 from '../assets/JS 2023.webp';
import complex from '../assets/complex.jpeg';
import CR7 from '../assets/CR7.webp';
import ML from '../assets/ML_is_for_everyone.webp';
import freeCode from '../assets/freecode.jpeg';
import beast from '../assets/beast.jpeg';
import variety from '../assets/variety.jpeg';
import forbes from '../assets/forbes.jpeg';
import rockstar from '../assets/rockstar.jpeg';
import jokes from '../assets/jokes.jpeg';
import coldplay from '../assets/coldplay.jpeg';
import times from '../assets/times.jpeg';
import prem from '../assets/prem.svg';
import hex from '../assets/hex.svg';
import you_tv from '../assets/you-tv.svg';
import red_circle from '../assets/red-circle.svg';
import you_kids from '../assets/you-kids.svg';
import { Home, Shirt, FileVideo, PlaySquare, CircleUserRound, History,
  Videotape, Clapperboard, Clock3, ThumbsUp, Flame, ShoppingBag, Trophy,
  Music2, Radio, Gamepad2, Newspaper, Lightbulb, Glasses, Podcast, HelpCircle,
  Settings, Flag, MessageSquarePlus} from 'lucide-react';

export const fullBarItems = [
  [
    { src: <Home/>, name: 'Home', lucid:'icon' },
    { src: <Shirt/>, name: 'Shirts', lucid:'icon' },
    { src: <FileVideo/>, name: 'Subscriptions', lucid:'icon' }],
  [
    { src: <CircleUserRound/>, name: 'Your channel', lucid:'icon' },
    { src: <History/>, name: 'History', lucid:'icon' },
    { src: <Videotape/>, name: 'Your videos', lucid:'icon' },
    { src: <Clapperboard/>, name: 'Your movies & TV', lucid:'icon' },
    { src: <Clock3/>, name: 'Watch later', lucid:'icon' },
    { src: <ThumbsUp/>, name: 'Liked videos', lucid:'icon' }],
  [
    { image: golazo, name: 'CBS Sports Golazo' },
    { image: beast, name: 'MrBeast' },
    { image: variety, name: 'Variety' },
    { image: mkbhd, name: 'Marques Brownlee' },
    { image: forbes, name: 'Forbes' },
    { image: rockstar, name: 'Rockstar Games' },
    { image: jokes, name: 'al jokes' },
    { image: coldplay, name: 'Coldplay'},
    { image: times, name: 'The New York Times'}],
  [
    { src: <Flame/>, name: 'Trending', lucid:'icon' },
    { src: <ShoppingBag/>, name: 'Shopping', lucid:'icon' },
    { src: <Music2/>, name: 'Music', lucid:'icon' },
    { src: <Clapperboard/>, name: 'Movies & TV', lucid:'icon' },
    { src: <Radio/>, name: 'Live', lucid:'icon' },
    { src: <Gamepad2/>, name: 'Gaming', lucid:'icon' },
    { src: <Newspaper/>, name: 'News', lucid:'icon' },
    { src: <Trophy/>, name: 'Sports', lucid:'icon' },
    { src: <Lightbulb/>, name: 'Learning', lucid:'icon' },
    { src: <Glasses/>, name: 'Fashion & Beauty', lucid:'icon' },
    { src: <Podcast/>, name: 'Podcasts', lucid:'icon' }],
  [
    { image: prem, name: 'YouTube Premium' },
    { image: hex, name: 'YouTube Studio' },
    { image: you_tv, name: 'YouTube TV' },
    { image: red_circle, name: 'YouTube Music' },
    { image: you_kids, name: 'YouTube kids' }],
  [
    { src: <Settings/>, name: 'Settings', lucid:'icon' },
    { src: <Flag/>, name: 'Report history', lucid:'icon' },
    { src: <HelpCircle/>, name: 'Help', lucid:'icon' },
    { src: <MessageSquarePlus/>, name: 'Send feedback', lucid:'icon' }]
  ];

export const sidebar_mini = [
  {buttonName: 'home-icon', imgName: 'image', src: <Home/>, detail: <p>Home</p>},
  {buttonName: 'shorts-icon', imgName: 'image', src: <Shirt/>, detail: <p>Shirts</p>},
  {buttonName: 'sub-icon', imgName: 'image', src: <FileVideo/>, detail: <p>Subscriptions</p>},
  {buttonName: 'you-icon', imgName: 'image', src: <PlaySquare/>, detail: <p>You</p>},
];

export const categories = ["All", "Music", "Sports", "News", "Games", 
"Python", "Culinary arts", "Podcasts", "Sports leagues", "JavaScript", 
"Robotics", "Physics", "Stanford", "Benjamin Netanyahu", "Joe Biden", 
"Chrisiano Ronaldo", "Lionel Messi", "Bukayo Saka", "Man City", "Liverpool F.C.", 
"PSG", "Champions League", "Recently uploaded", "Watched", "New to you"];

export const videos = [
  {
    holder: "Madridista",
    id: "1",
    title: "Liverpool vs. Real Madrid: Extended Highlights | UCL Final",
    channel: {
      name: "CBS Sports Golazo",
      id: "cbssportsgolazo",
      profileUrl:
        golazo,
    },
    views: 2300000,
    postedAt: new Date("2022-05-28"),
    duration: "11:43",
    thumbnailUrl: vini,
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    holder: "boats",
    id: "2",
    title: "Joe Rogan Experience #1080 - David Goggins",
    channel: {
      name: "PowerfulJRE",
      id: "powerfuljre",
      profileUrl: jre,
    },
    views: 11000000,
    postedAt: new Date("2018-02-19"),
    duration: "1:54:23",
    thumbnailUrl: goggin_time,
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    holder: "lastofus",
    id: "3",
    title: "The Last of Us | Official Trailer | Max",
    channel: {
      name: "Max",
      id: "max",
      profileUrl: max,
    },
    views: 24000000,
    postedAt: new Date("2022-12-03"),
    duration: "2:13",
    thumbnailUrl: LastOfUs,
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    holder: "whitebeard",
    id: "4",
    title: "Gol D Roger vs Whitebeard | One Piece",
    channel: {
      name: "Crunchyroll Collection",
      id: "crunchyrollcollection",
      profileUrl: crunchy,
    },
    views: 13000000,
    postedAt: new Date("2021-03-07"),
    duration: "1:40",
    thumbnailUrl: roger,
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    holder: "talkingtech",
    id: "5",
    title: "Talking Tech and AI with Google CEO Sundar Pichai!",
    channel: {
      name: "Marques Brownlee",
      id: "marquesbrownlee",
      profileUrl: mkbhd,
    },
    views: 4200000,
    postedAt: new Date("2021-05-21"),
    duration: "14:21",
    thumbnailUrl: Sundar,
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    holder: "jschanges",
    id: "6",
    title: "10 JavaScript changes you missed in 2023",
    channel: {
      name: "Fireship",
      id: "fireship",
      profileUrl: fireship,
    },
    views: 392000,
    postedAt: new Date("2023-11-27"),
    duration: "5:55",
    thumbnailUrl: js23,
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    holder: "cristiano",
    id: "7",
    title: "Cristiano Ronaldo Goes Sneaker Shopping With Complex",
    channel: {
      name: "Complex",
      id: "complex",
      profileUrl: complex,
    },
    views: 37000000,
    postedAt: new Date("2018-08-13"),
    duration: "9:34",
    thumbnailUrl: CR7,
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    holder: "machine",
    id: "8",
    title: "Machine Learning for Everybody - Full Course",
    channel: {
      name: "freeCodeCamp.org",
      id: "freeCodeCamp.org",
      profileUrl: freeCode,
    },
    views: 3000000,
    postedAt: new Date("2022-09-26"),
    duration: "3:53:52",
    thumbnailUrl: ML,
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
]