import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";
import Image from "next/image";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [styleClassname, setStyleClassname] = useState(
    "mt-10 hidden flex-row items-center justify-between sticky dark:text-white top-0 z-10 tablet:flex"
  );

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setStyleClassname(
      (prevState) => `${prevState} ${theme &&"light" }`
    );
  }, [theme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    style={{margin:0,paddingRight:5 }}
                  >
                    <Image
                      className="h-6"
                      width={"25%"}
                      height={"25%"}
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                      alt="icon"
                    />
                  </Button>

                <Popover.Button>
                  <Image
                    className="h-5"
                    alt="icon"
                    width={"25%"}
                    height={"25%"}
                    style={{marginTop:2}}
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>

                  {showResume && (
                    <Button
                    onClick={() => router.push("/resume")}
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:harshchittora18@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>

                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:harshchittora18@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div className={styleClassname}>
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}
            <Button onClick={() => window.open("mailto:harshchittora18@gmail.com")}>
              Contact
            </Button>
            
            {mounted && theme  && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  className="h-6"
                  alt="icon"
                  width={"25%"}
                  height={"25%"}
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                />
              </Button>
            )}{" "}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>

            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:harshchittora18@gmail.com")}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  className="h-6"
                  alt="icon"
                  width={"25%"}
                  height={"25%"}
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
