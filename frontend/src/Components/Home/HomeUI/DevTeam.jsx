import React from "react";
import HighlightText from "../core/Homepage/HighlightText";

import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialMediaIcons = {
  github: FaGithub,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
};

const users = [
  {
    name: "Ishu Singh",

    description: "Developer",
    image: "ishu",
    socialMediaLinks: {
      github: "https://github.com/user1",
      linkedin: "https://github.com/user2",
      twitter: "https://twitter.com/user1",
      instagram: "https://www.instagram.com/user1/",
    },
  },
  {
    name: "Anuraj Kumar",

    description: "Developer",
    image: "anuraj",
    socialMediaLinks: {
      github: "https://github.com/user2",
      linkedin: "https://github.com/user2",
      twitter: "https://twitter.com/user2",
      instagram: "https://www.instagram.com/user2/",
    },
  },
  {
    name: "Kingshuk Mondal",

    description: "Developer",
    image: "kingshuk",
    socialMediaLinks: {
      github: "https://github.com/ImKKingshuk",
      linkedin: "https://linkedin.com/in/ImKKingshuk",
      twitter: "https://twitter.com/ImKKingshuk",
      instagram: "https://www.instagram.com/ImKKingshuk",
    },
  },
  {
    name: "Puskar Roy",

    description: "Developer",
    image: "puskar",
    socialMediaLinks: {
      github: "https://github.com/user2",
      linkedin: "https://github.com/user2",
      twitter: "https://twitter.com/user2",
      instagram: "https://www.instagram.com/user2/",
    },
  },
];

function DevTeam() {
  return (
    <div>
      <h1 className="text-[2rem] text-center py-[6rem] ">
        Developers of <HighlightText text={"ऊँची उड़ान"} />
      </h1>

      <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
        {users.map((user, index) => (
          <div
            key={index}
            className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
          >
            <div className="rounded overflow-hidden shadow-md bg-white">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    src={`/Devs/${user.image}.jpeg`}
                    alt={`Display Picture of ${user.name}`}
                    className="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div className="px-6 mt-16">
                <h1 className="font-bold text-3xl text-center mb-1">
                  {user.name}
                </h1>

                <p className="text-center text-gray-600 text-base pt-2 font-normal">
                  {user.description}
                </p>
                <div className="w-full flex justify-center pt-5 pb-5">
                  {Object.entries(user.socialMediaLinks).map(
                    ([media, link]) => (
                      <a
                        key={media}
                        href={link}
                        className="mx-5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="text-[1.5rem]">
                          {React.createElement(socialMediaIcons[media])}
                        </div>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DevTeam;
