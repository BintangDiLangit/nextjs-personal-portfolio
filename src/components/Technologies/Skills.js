import { DiAndroid, DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit, SiLaravel, SiGoogleanalytics, SiPython } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "android",
    Component: DiAndroid,
    title: "Android",
    Description: () => <>I work on ROMs, Kernels & Android Apps using Dart.</>,
  },
  {
    slug: "flutter",
    Component: RiFlutterFill,
    title: "Flutter",
    Description: () => <>Currently working with Dart & Flutter for app development. </>,
  },
  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => <>I can code in Java. But I mainly use it for Android app development.</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => <>I have written dozens of Shell scripts for various purposes.</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I have used Firebase for auth, database & analytics in my apps.</>,
  },
  {
    slug: "laravel",
    Component: SiLaravel,
    title: "Laravel",
    Description: () => <>I have used Laravel for make API, database & analytics in my apps.</>,
  },
  {
    slug: "google-analytics",
    Component: SiGoogleanalytics,
    title: "Google Analytics",
    Description: () => <>I have used Google Analytics for analyze and tracking my website</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
  {
    slug: "python",
    Component: SiPython,
    title: "Python",
    Description: () => <>I use python to solve CTF problems and AI and Machine Learning related problems</>,
  },
];
