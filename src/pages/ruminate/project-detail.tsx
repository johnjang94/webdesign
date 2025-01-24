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
          <li>5 UX Designers</li>
          <li>4 UX Researchers</li>
          <li>5 Web Designers</li>
          <li>3 Product Strategists</li>
          <li>2 Project Managers</li>
        </ul>
      </div>
      <div className="flex space-x-5 mx-5 text-gray-900 dark:text-gray-100">
        <p className="font-bold">Tools</p>
        <ul>
          <li>Figma</li>
          <li>FigJam</li>
          <li>Miro</li>
          <li>Slack</li>
        </ul>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Vercel</li>
        </ul>
      </div>
      <div className="flex space-x-10 mx-5 text-gray-900 dark:text-gray-100">
        <p className="font-bold">Timeline</p>
        <div className="text-center">
          <p>August 2023 ~ October 2023</p>
          <span>(13 weeks)</span>
        </div>
      </div>
    </div>
  );
}
