import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold"></h1>
          <div className="mt-10">
          {/* <p className="tablet:m-10 text-2xl">
             Hire me           
            </p> */}
            <h3 className="tablet:m-10 text-2xl text-bold">
              Get in Touch!           
            </h3>
            
            <p className="tablet:m-10 opacity-80 text-2xl">
              If you have any inquiries or would like to discuss a potential
              project, feel free to reach out to me through the contact email
              provided below. I'm always open to collaboration and love working
              with new clients.
              <br>
              </br>
              <br>
              </br>
              Additionally, if you simply want to connect or
              have any questions about my work, don't hesitate to drop me a
              message. Looking forward to hearing from you soon!
            </p>
            <Button type="primary">Say Hello!</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
