import React from 'react'
import Navbar from '../components/navbar/navbar'
import GitHubCalendar from 'react-github-calendar'
import { FaGithub } from "react-icons/fa"
import BackgroundEffect from '../components/background/backgroundEffect';


const username = process.env.GITHUB_USERNAME || "HarisonRios";

export default function Project() {
  return (
    <>
      <BackgroundEffect />
      <Navbar />
      <GitHubCalendar username={username} />
      <FaGithub />
    </>
  );
}
