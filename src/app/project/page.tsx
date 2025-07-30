import React from 'react'
import Navbar from '../partials/navbar'
import BackgroundEffect from '../components/background/BackgroundEffect'
import GitHubCalendar from 'react-github-calendar'
import { FaGithub } from "react-icons/fa"
import "../../styles/globals.scss";

const username = process.env.GITHUB_USERNAME || "HarisonRios";

export default function Project() {
  return (
    <>
       <BackgroundEffect />
      <Navbar />
      <GitHubCalendar username={username} />
      <FaGithub/>

    </>
  );
}
