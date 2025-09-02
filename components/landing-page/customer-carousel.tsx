"use client";

import { useState } from "react";

interface CustomerStory {
  id: string;
  name: string;
  logoBlack: string;
  logoColor: string;
  backgroundImage: string;
  story: string;
  link: string;
}

const customerStories: CustomerStory[] = [
  {
    id: "uber",
    name: "Uber",
    logoBlack: "https://www.oracle.com/a/ocom/img/customerlogo-uber-logo-blk.svg",
    logoColor: "https://www.oracle.com/a/ocom/img/customerlogo-uber-logo-blk.svg",
    backgroundImage: "https://www.oracle.com/a/ocom/img/rc64-uber-alternate-banner.webp",
    story: "Uber relies on Augment AI to deliver on promises to its customers",
    link: "/customers/uber"
  },
  {
    id: "aon",
    name: "Aon",
    logoBlack: "https://www.oracle.com/a/ocom/img/customerlogo-aon-blk.svg",
    logoColor: "https://www.oracle.com/a/ocom/img/customerlogo-aon-color.svg",
    backgroundImage: "https://www.oracle.com/a/ocom/img/rc64-aon-offices-uk-banner.webp",
    story: "Aon enhances its end-to-end client strategy with Augment Cloud",
    link: "/customers/aon"
  },
  {
    id: "australian-university",
    name: "The Australian National University",
    logoBlack: "https://www.oracle.com/a/ocom/img/customerlogo-australian-natl-univ-blk.svg",
    logoColor: "https://www.oracle.com/a/ocom/img/customerlogo-australian-natl-univ-clr.svg",
    backgroundImage: "https://www.oracle.com/a/ocom/img/rc64-anu-banner.webp",
    story: "The Australian National University helps researchers achieve breakthrough insights with AI",
    link: "/customers/australian-national-university"
  },
  {
    id: "mgm",
    name: "MGM Resorts International",
    logoBlack: "https://www.oracle.com/a/ocom/img/customerlogo-mgm-blk.svg",
    logoColor: "https://www.oracle.com/a/ocom/img/customerlogo-mgm-clr.svg",
    backgroundImage: "https://www.oracle.com/a/ocom/img/rc64-mgm-hero-banner.webp",
    story: "MGM Resorts impresses guests with help from Augment Cloud Platform",
    link: "/customers/mgm-resorts"
  },
  {
    id: "amc",
    name: "AMC Theatres",
    logoBlack: "https://www.oracle.com/a/ocom/img/customerlogo-amc-theatres-blk.svg",
    logoColor: "https://www.oracle.com/a/ocom/img/customerlogo-amc-theatres-clr.svg",
    backgroundImage: "https://www.oracle.com/a/ocom/img/rc64-amc-theatres-hero-banner.webp",
    story: "AMC adopts cloud-based AI foundation and sees future growth with Augment Cloud",
    link: "/customers/amc-theatres"
  },
  {
    id: "grant-thornton",
    name: "Grant Thornton",
    logoBlack: "https://www.oracle.com/a/ocom/img/customerlogo-grant-thornton-blk.svg",
    logoColor: "https://www.oracle.com/a/ocom/img/customerlogo-grant-thorntor-clr.svg",
    backgroundImage: "https://www.oracle.com/a/ocom/img/rc64-grant-thornton-hero-banner.webp",
    story: "Grant Thornton reimagines its business landscape with Augment Cloud AI",
    link: "/customers/grant-thornton"
  }
];

export function CustomerCarousel() {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <section 
      className="rc64 rc64v1 cpad-top"
      data-trackas="rc64"
      data-ocomid="rc64"
      data-moretxt="More Customers"
      data-a11y="true"
      style={{
        padding: "80px 0",
        background: "#fcfbfa"
      }}
    >
      <div 
        className="rc64w1 cwidth"
        style={{
          maxWidth: "1344px",
          margin: "0 auto",
          padding: "0 20px"
        }}
      >
        {/* Header */}
        <header 
          className="rw-ctitle flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 md:gap-0"
          style={{
            marginBottom: "64px"
          }}
        >
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl"
            style={{
              fontFamily: "Times, serif",
              fontWeight: "normal",
              color: "#161513",
              margin: 0,
              lineHeight: "1.2"
            }}
          >
            Learn why our customers trust Augment
          </h2>
          <div>
            <a 
              href="/customers"
              style={{
                color: "#c74634",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "600",
                borderBottom: "2px solid transparent",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderBottomColor = "#c74634";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderBottomColor = "transparent";
              }}
              data-lbl="explore-all-customers"
            >
              Explore all customer stories
            </a>
          </div>
        </header>

        {/* Logo Navigation */}
        <ul 
          className="rc64nav grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between gap-4 lg:gap-0"
          style={{
            listStyle: "none",
            margin: "0 0 0 0",
            padding: 0,
            alignItems: "center",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          {customerStories.map((story, index) => (
            <li key={story.id} className="rc64-clr">
              <a
                data-target={`rc64panel_${index + 1}`}
                tabIndex={0}
                role="button"
                aria-current={index === activeStory}
                className={index === activeStory ? "active" : ""}
                data-lbl={`${story.id}-logo`}
                onClick={() => setActiveStory(index)}
                style={{
                  display: "block",
                  textDecoration: "none",
                  cursor: "pointer",
                  padding: "20px 16px",
                  transition: "all 0.3s ease",
                  borderRadius: "4px"
                }}
                onMouseEnter={(e) => {
                  if (index !== activeStory) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#f5f5f5";
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== activeStory) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }
                }}
              >
                <span style={{ 
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  padding: 0,
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0, 0, 0, 0)",
                  whiteSpace: "nowrap",
                  border: 0
                }}>
                  {story.name}
                </span>
                <div 
                  className="rw-logo rw-logo-centered"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "60px",
                    width: "120px"
                  }}
                >
                  {/* Black logo (default) */}
                  <img 
                    alt={`${story.name} logo`}
                    style={{
                      maxHeight: "50px",
                      maxWidth: "110px",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      display: index === activeStory ? "none" : "block"
                    }}
                    src={story.logoBlack}
                    onError={(e) => {
                      // Fallback to a placeholder or hide
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Color logo (active) */}
                  <img 
                    alt={`${story.name} logo`}
                    style={{
                      maxHeight: "50px",
                      maxWidth: "110px",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      display: index === activeStory ? "block" : "none"
                    }}
                    src={story.logoColor}
                    onError={(e) => {
                      // Fallback to a placeholder or hide
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Story Display */}
      <div className="rc64w2" style={{ marginTop: "0" }}>
        {customerStories.map((story, index) => (
          <div
            key={story.id}
            className={`rc64w3 ${index === activeStory ? "active" : ""}`}
            data-target={`rc64panel_${index + 1}`}
            data-bgimg={story.backgroundImage}
            style={{
              display: index === activeStory ? "block" : "none",
              backgroundImage: `url('${story.backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              minHeight: "400px",
              position: "relative",
              marginTop: "0"
            }}
          >
                          <div 
                className="rc64w4 cwidth"
                style={{
                  maxWidth: "1344px",
                  margin: "0 auto",
                  padding: "40px 20px 40px 20px",
                  minHeight: "400px",
                  display: "flex",
                  alignItems: "flex-end"
                }}
              >
              <div 
                className="rc64w5 rw-neutral-00bg"
                style={{
                  backgroundColor: "#fff",
                  padding: "24px",
                  borderRadius: "0",
                  maxWidth: "600px",
                  boxShadow: "none",
                  border: "none"
                }}
              >
                <div 
                  className="rc64sub"
                  style={{
                    fontSize: "24px",
                    lineHeight: "32px",
                    color: "#161513",
                    marginBottom: "32px",
                    fontWeight: "400",
                    fontFamily: "Times, serif"
                  }}
                >
                  {story.story}
                </div>
                <div className="obttns">
                  <div className="obttn">
                    <a 
                      href={story.link}
                      data-lbl={`cta-${story.id}`}
                      style={{
                        backgroundColor: "#c74634",
                        color: "#fff",
                        padding: "14px 32px",
                        textDecoration: "none",
                        borderRadius: "0",
                        fontSize: "16px",
                        fontWeight: "600",
                        display: "inline-block",
                        transition: "all 0.3s ease",
                        border: "none",
                        textTransform: "none",
                        letterSpacing: "0"
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = "#a63429";
                        (e.target as HTMLElement).style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = "#c74634";
                        (e.target as HTMLElement).style.transform = "translateY(0)";
                      }}
                    >
                      Read {story.name}&rsquo;s story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
