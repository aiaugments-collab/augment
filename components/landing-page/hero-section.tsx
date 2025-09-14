"use client";

import { useState, useEffect } from "react";

interface HeroSlide {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    title: "Introducing Augment's new, AI-driven business automation platform",
    description: "The next-generation Augment platform helps businesses focus more on growth, provide more intelligent solutions, and reduce their operational burden.",
    ctaText: "Read the release",
    ctaLink: "/news/augment-ai-platform",
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "slide-2", 
    title: "Augment to offer advanced AI Agents via Cloud Infrastructure",
    description: "Service includes cutting-edge AI agents for building intelligent automation for a wide range of use cases, including advanced sales and workflow optimization.",
    ctaText: "Read the release",
    ctaLink: "/news/ai-agents-announcement",
    backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "slide-3",
    title: "Transform your business with intelligent automation",
    description: "Tech improvements this quarter are making for faster, more efficient operations and a more streamlined business experience.",
    ctaText: "Explore Solutions", 
    ctaLink: "/product",
    backgroundImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "slide-4",
    title: "Get AI-certified—for free!",
    description: "Join thousands of your peers already seeking a competitive edge by registering for Augment's Certification Program. The program is free until March 31.",
    ctaText: "Join the Program",
    ctaLink: "/certification",
    backgroundImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-rotate slides
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section 
      className="rh08 rh08v0 px-4 md:px-0"
      style={{ 
        fontFamily: "var(--oraclesans)",
        fontSize: "1.6rem",
        lineHeight: "1.4",
        marginTop: "60px", // Account for fixed header
        minHeight: "480px",
        position: "relative",
        margin: "0 auto",
        maxWidth: "1325px"
      }}
    >
      {/* Slider container */}
      <div 
        className="rh08slider rh08init rh08t-fade"
        style={{ 
          visibility: "visible",
          minHeight: "480px",
          position: "relative",
          margin: "0 auto",
          maxWidth: "1325px"
        }}
      >
        {/* Navigation arrows */}
        <div className="rh08-arrows" style={{ display: "block" }}>
          <button 
            onClick={prevSlide}
            className="rh08-arrow rh08-prevarrow"
            style={{
              background: "none",
              border: "solid #3a3631",
              borderWidth: "0 4px 4px 0",
              color: "#3a3631",
              cursor: "pointer",
              padding: "12px",
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translateY(-50%) rotate(135deg)",
              outline: "none"
            }}
            aria-label="previous slide"
          />
          <button 
            onClick={nextSlide}
            className="rh08-arrow rh08-nextarrow"
            style={{
              background: "none",
              border: "solid #3a3631",
              borderWidth: "0 4px 4px 0",
              color: "#3a3631",
              cursor: "pointer",
              padding: "12px",
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translateY(-50%) rotate(-45deg)",
              outline: "none"
            }}
            aria-label="next slide"
          />
        </div>

        {/* Slides wrapper */}
        <div className="rh08sliderw1" style={{ position: "relative", zIndex: 0, overflow: "hidden" }}>
          <div className="rh08sliderw2" style={{ display: "block" }}>
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`rh08slide ${index === currentSlide ? "slick-active" : ""}`}
                style={{
                  position: index === currentSlide ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                  zIndex: index === currentSlide ? 1 : 0,
                  opacity: index === currentSlide ? 1 : 0,
                  width: "100%",
                  maxWidth: "100%",
                  transition: "opacity 0.5s ease"
                }}
                aria-hidden={index !== currentSlide}
                tabIndex={index === currentSlide ? 0 : -1}
                role="group"
              >
                {/* Oracle's exact structure */}
                                  <div 
                    className="rh08w1 cpad flex flex-col md:grid md:grid-cols-12 md:justify-between gap-5 md:gap-0"
                    style={{
                      width: "100%",
                      margin: "auto",
                      gridTemplateRows: "16px repeat(1, [row-start] 1fr)",
                      paddingTop: "18px",
                      paddingBottom: "0"
                    }}
                  >
                  {/* Background Image */}
                  <div 
                    className="rh08w2 rh02-img w-full md:col-start-2 md:col-span-7 order-1 md:order-1"
                    style={{
                      backgroundImage: `url('${slide.backgroundImage}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      maxWidth: "775px",
                      height: "300px",
                      minHeight: "300px",
                      position: "relative",
                      zIndex: -1
                    }}
                  />

                  {/* White Card with Content */}
                  <div 
                    className="rh08w2 rh02txt w-full md:col-start-6 md:col-span-6 order-2 md:order-2 md:ml-auto"
                    style={{
                      background: "#fff",
                      padding: "32px",
                      maxWidth: "588px",
                      minHeight: "300px",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                      zIndex: 2,
                      position: "relative"
                    }}
                  >
                    <div className="rh08w5" style={{ display: "flex" }}>
                      <div 
                        className="rh08w6"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center"
                        }}
                      >
                        <h2 
                          className="rwaccent-4 text-xl md:text-2xl lg:text-3xl"
                          style={{
                            margin: 0,
                            fontSize: "24px",
                            lineHeight: "30px",
                            fontFamily: "var(--oracleserif)",
                            fontWeight: "400",
                            color: "#161513",
                            marginBottom: "16px"
                          }}
                        >
                          {slide.title}
                        </h2>
                        
                        {/* Oracle's accent line */}
                        <div 
                          style={{
                            width: "60px",
                            height: "3px",
                            backgroundColor: "#C74634",
                            margin: "16px 0 24px 0"
                          }}
                        />
                        
                        <div className="rh08body">
                          <p 
                            style={{
                              fontSize: "16px",
                              lineHeight: "20px",
                              marginBottom: "24px",
                              color: "#161513",
                              fontFamily: "var(--oraclesans)"
                            }}
                          >
                            {slide.description}
                          </p>
                          <div 
                            className="obttns"
                            style={{ display: "flex" }}
                          >
                            <div className="obttn">
                              <a 
                                href={slide.ctaLink}
                                style={{
                                  backgroundColor: "#C74634",
                                  color: "#fff",
                                  padding: "12px 24px",
                                  textDecoration: "none",
                                  borderRadius: "4px",
                                  fontFamily: "var(--oraclesans)",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                  display: "inline-block",
                                  transition: "background-color 0.3s ease"
                                }}
                                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = "#A63429"}
                                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = "#C74634"}
                              >
                                {slide.ctaText}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide indicators (pills) - Oracle style */}
        <div 
          className="rh08-pills rh02w6"
          style={{
            position: "relative",
            bottom: 0,
            display: "flex",
            alignItems: "center",
            margin: "0 auto",
            width: "100%",
            justifyContent: "center",
            paddingTop: "40px"
          }}
        >
          <ul 
            className="rh08-pillsw1 slick-animated-dots init dot-height"
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: "18px"
            }}
          >
            {heroSlides.map((_, index) => (
              <li key={index} className="rh08-pill" style={{ width: "72px", height: "40px", margin: "0 9px" }}>
                <button
                  className={`rh08-pillbtn ${index === currentSlide ? "slick-active" : ""}`}
                  style={{
                    border: "1px solid #3a3631",
                    width: "72px",
                    height: "6px",
                    background: index === currentSlide ? "#3a3631" : "transparent",
                    cursor: "pointer",
                    outline: "none"
                  }}
                  type="button"
                  title={`Slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  tabIndex={0}
                  aria-current={index === currentSlide ? "true" : undefined}
                >
                  <span style={{ display: "none" }}>Slide {index + 1}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Oracle-style Pause/Play button */}
          <div className="rh08-pause" style={{ position: "relative", height: "100%", display: "flex", alignSelf: "center", alignItems: "center", marginLeft: "24px" }}>
            <button
              className="rh08-pausew1"
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                height: "36px",
                padding: "0 12px 0 14px",
                border: "1px solid #665f5b",
                borderRadius: "4px",
                display: "inline-flex",
                alignItems: "center",
                background: "transparent",
                cursor: "pointer",
                transition: "all 0.5s"
              }}
              aria-live="polite"
              tabIndex={0}
              title={isPlaying ? "Pause" : "Play"}
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "#161513";
                (e.target as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
                (e.target as HTMLElement).style.color = "inherit";
              }}
            >
              <div 
                className={`rh08-pausebtn ${isPlaying ? "" : "paused"}`}
                style={{
                  background: "transparent",
                  boxSizing: "border-box",
                  height: isPlaying ? "9px" : "10px",
                  borderColor: isPlaying ? "transparent transparent transparent #202020" : "transparent transparent transparent #202020",
                  borderStyle: isPlaying ? "solid" : "double",
                  borderWidth: isPlaying ? "0 0 0 6px" : "0px 0 0px 6px",
                  transition: "100ms all ease",
                  width: "0"
                }}
              />
              <span style={{ display: "none", whiteSpace: "nowrap", marginLeft: "5px", marginTop: "-1px" }}>
                {isPlaying ? "Pause" : "Play"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
