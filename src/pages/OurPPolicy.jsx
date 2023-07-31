import React from "react";
import SubHero from "../components/SubHero/SubHero";
import { Col, Container, Row } from "react-bootstrap";
import CustomAccordion from "../components/CEX/CustomAccordion";

const data = [
  {
    heading: "What does this Policy cover?",
    text: "This Privacy Policy explains how we collect, use, and share your personal information when you visit or make a purchase from buybitz website.",
  },
  {
    heading: "What does we collect when you access our website?    ",
    text: "When you access our website, we collect certain details about your device, such as your IP address, web browser, time zone, and cookies installed on your device. As you navigate through the website, we also collect information about the specific web pages or products you view, as well as the websites or search terms that led you to our website. This information is automatically gathered and referred to as 'Device Information'.    ",
  },
  {
    heading: "What type of information we collect?    ",
    text: "We use various technologies to collect Device Information, which includes cookies, log files, web beacons, tags, and pixels.    ",
  },
  {
    heading: "What is cookies?    ",
    text: "Cookies are data files that are downloaded and stored on your device, typically with a unique identifier. If you want to learn more about cookies and how to disable them, you can visit http://www.allaboutcookies.org.    ",
  },
  {
    heading: "What is Log File?    ",
    text: "Log files monitor and record the actions you take on the website, such as your IP address, internet service provider, browser type, referring/exit pages, and date/time stamps. Additionally, web beacons, tags, and pixels are electronic files that gather information on your browsing behaviour while you are on our website.    ",
  },
  {
    heading: "Buybitz risk disclosure    ",
    text: "Trading cryptocurrency involves several potential risks, including price volatility, technology risks, low liquidity, crypto hacks, and legal/regulatory uncertainty. The value of cryptocurrencies can change drastically within short periods, and the technology used to support them can be vulnerable to flaws and vulnerabilities. Some cryptocurrencies may also have low trading volumes, which can make it difficult to buy or sell them without impacting their value. Furthermore, exchanges and wallets used to store cryptocurrencies can be targeted by hackers, putting your funds at risk. Finally, the legal status of cryptocurrencies varies by country, creating uncertainty regarding their regulation and use.    ",
  },
];

const OurPPolicy = () => {
  return (
    <>
      <SubHero heading="Our Global Privacy Policy" />
      <div className="w-full py-20 bg-[#1E1B36] ">
        <Container>
          <Row className="g-3 flex justify-center">
            {data?.map((items, index) => (
              <Col xs={12} sm={12} md={10} lg={8} key={index}>
                <CustomAccordion
                  heading={items.heading}
                  text={items.text}
                  body={items.body}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurPPolicy;
