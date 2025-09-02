"use client";

export function ProductBanner() {
  return (
    <section 
      className="rc20v1 rc20v3 rc20v4 rh02 rh02v1"
      data-trackas="rc20"
      data-a11y="true"
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
        minHeight: "400px"
      }}
    >
              <div 
          id="rc20panels" 
          className="rh02w1 rc20panels flex flex-col md:flex-row"
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "auto",
            minHeight: "100%"
          }}
        >
        {/* Cloud Applications Panel - Left */}
        <div 
          id="rc20p1" 
          className="rh02panel rh02p1 w-full md:w-1/2"
          data-trackas="rc20:panel1"
          style={{
            height: "auto",
            minHeight: "300px",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div 
            className="rh02w2 darktheme rh02defpanel"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#577346",
              backgroundImage: "url('https://www.oracle.com/asset/web/i/rh02-panel2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "0 24px"
            }}
          >
            <div className="rh02w5" style={{ textAlign: "right", maxWidth: "400px", marginLeft: "auto" }}>
              <div 
                className="rh02-pcontent focus-visible"
                data-lbl="panel1-home-apps-content-area"
              >
                <h1 
                  role="heading" 
                  aria-level={2} 
                  className="rh02-ttl oracleprefix"
                  style={{
                    fontSize: "32px",
                    lineHeight: "38px",
                    fontWeight: "400",
                    color: "#fff",
                    marginBottom: "16px",
                    fontFamily: "Times, serif",
                    textAlign: "right"
                  }}
                >
                  Cloud <b style={{ fontWeight: "700" }}>Applications</b>
                </h1>
                
                <div 
                  className="rh02-sub"
                  style={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#fff",
                    marginBottom: "24px",
                    opacity: 0.95,
                    textAlign: "right"
                  }}
                >
                  A complete suite of cloud applications delivering consistent processes and data across your business Cloud
                </div>
                
                <div className="rh02-cta" style={{ textAlign: "right" }}>
                  <div className="obttns">
                    <div>
                      <a 
                        data-lbl="panel1-home-apps-learn-more" 
                        href="/product/"
                        style={{
                          backgroundColor: "transparent",
                          color: "#fff",
                          padding: "10px 24px",
                          textDecoration: "none",
                          border: "2px solid #fff",
                          borderRadius: "0",
                          fontSize: "14px",
                          fontWeight: "600",
                          display: "inline-block",
                          transition: "all 0.3s ease",
                          textTransform: "none"
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = "#fff";
                          (e.target as HTMLElement).style.color = "#577346";
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = "transparent";
                          (e.target as HTMLElement).style.color = "#fff";
                        }}
                      >
                        Explore cloud apps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Agents Panel - Right */}
        <div 
          id="rc20p2" 
          className="rh02panel rh02p2 w-full md:w-1/2"
          data-trackas="rc20:panel2"
          style={{
            height: "auto",
            minHeight: "300px",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div 
            className="rh02w2 darktheme rh02defpanel"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#4a5c6a",
              backgroundImage: "url('https://www.oracle.com/asset/web/i/rh02-panel1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0 24px"
            }}
          >
            <div className="rh02w5" style={{ textAlign: "left", maxWidth: "400px", marginRight: "auto" }}>
              <div 
                className="rh02-pcontent focus-visible"
                data-lbl="panel2-home-ai-content-area"
              >
                <h1 
                  role="heading" 
                  aria-level={2} 
                  className="rh02-ttl oracleprefix"
                  style={{
                    fontSize: "32px",
                    lineHeight: "38px",
                    fontWeight: "400",
                    color: "#fff",
                    marginBottom: "16px",
                    fontFamily: "Times, serif",
                    textAlign: "left"
                  }}
                >
                  Augment <b style={{ fontWeight: "700" }}>AI Agents</b>
                </h1>
                
                <div 
                  className="rh02-sub"
                  style={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#fff",
                    marginBottom: "24px",
                    opacity: 0.95,
                    textAlign: "left"
                  }}
                >
                  Intelligent automation agents that understand context, learn from interactions, and execute complex tasks across your business processes
                </div>
                
                <div className="rh02-cta" style={{ textAlign: "left" }}>
                  <div className="obttns">
                    <div>
                      <a 
                        data-lbl="panel2-home-ai-learn-more" 
                        href="/product/"
                        style={{
                          backgroundColor: "transparent",
                          color: "#fff",
                          padding: "10px 24px",
                          textDecoration: "none",
                          border: "2px solid #fff",
                          borderRadius: "0",
                          fontSize: "14px",
                          fontWeight: "600",
                          display: "inline-block",
                          transition: "all 0.3s ease",
                          textTransform: "none"
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = "#fff";
                          (e.target as HTMLElement).style.color = "#4a5c6a";
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = "transparent";
                          (e.target as HTMLElement).style.color = "#fff";
                        }}
                      >
                        Explore AI Agents
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
