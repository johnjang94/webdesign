import React from "react";

export default function ProjectDetail() {
  return (
    <div className="space-y-10 md:space-y-0 md:flex md:items-start justify-center md:gap-2 my-0 md:my-20">
      <div className="flex md:space-x-10 gap-5 md:gap-0 md:mx-8 mx-5 text-gray-900 dark:text-gray-100">
        <p className="font-bold">My Role</p>
        <p>Web Designer</p>
      </div>
      <div className="flex space-x-10 mx-5 text-gray-900 dark:text-gray-100">
        <p className="font-bold">Team</p>
        <ul>
          <li>10 UX Designers</li>
          <li>5 UX Researchers</li>
          <li>3 Web Designers</li>
          <li>3 Project Managers</li>
          <li>1 Founder</li>
        </ul>
      </div>
      <div className="flex space-x-5 mx-5 text-gray-900 dark:text-gray-100">
        <p className="font-bold">Tools</p>
        <div className="grid grid-cols-2 space-x-2">
          <div className="space-y-12">
            <ul>
              <li>Figma</li>
              <li>FigJam</li>
              <li>Miro</li>
              <li>Slack</li>
            </ul>
            <ul>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="space-y-5">
            <ul>
              <li>MongoDB</li>
              <li>Mongoodse</li>
              <li>Express</li>
              <li>Node</li>
              <li>RESTful API</li>
            </ul>
            <ul>
              <li>Vercel</li>
              <li>Render</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex space-x-10 mx-5 text-gray-900 dark:text-gray-100">
        <p className="font-bold">Timeline</p>
        <div className="text-center">
          <p>December 2024 ~ Present</p>
          <span>(8 weeks)</span>
        </div>
      </div>
    </div>
  );
}
