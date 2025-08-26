"use client";

export function Footer() {
  return (
    <footer 
      id="u10" 
      className="u10 u10v6"
      data-trackas="footer" 
      data-ocomid="u10" 
      data-a11y="true"
      style={{
        backgroundColor: "#312D2A",
        color: "#FBF9F8",
        position: "relative",
        clear: "both",
        paddingTop: "64px",
        paddingBottom: "32px"
      }}
    >
      <nav className="u10w1" aria-label="Footer">
        <div 
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "48px"
          }}
        >
          {/* Resources for */}
          <div className="u10w2">
            <div className="u10w3">
              <h4 
                className="u10ttl" 
                id="resourcesfor"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#FBF9F8",
                  marginBottom: "24px",
                  fontFamily: "var(--font-family-sans, Arial, sans-serif)"
                }}
              >
                Resources for
              </h4>
              <ul 
                aria-labelledby="resourcesfor"
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0
                }}
              >
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="resources-for:career" 
                    href="/careers/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Careers
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="resources-for:developers" 
                    href="/developer/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Developers
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="resources-for:investors" 
                    href="/investors/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Investors
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="resources-for:partners" 
                    href="/partner/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Partners
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="resources-for:researchers" 
                    href="/research/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Researchers
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="resources-for:students-educators" 
                    href="/education/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Students and Educators
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Augment */}
          <div className="u10w2">
            <div className="u10w3">
              <h4 
                className="u10ttl" 
                id="whyaugment"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#FBF9F8",
                  marginBottom: "24px",
                  fontFamily: "var(--font-family-sans, Arial, sans-serif)"
                }}
              >
                Why Augment
              </h4>
              <ul 
                aria-labelledby="whyaugment"
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0
                }}
              >
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="why-augment:analyst-reports" 
                    href="/corporate/analyst-reports/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Analyst Reports
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="why-augment:best-ai-platform" 
                    href="/ai/platform/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Best AI Platform
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="why-augment:ai-economics" 
                    href="/ai/economics/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    AI Economics
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="why-augment:social-impact" 
                    href="/social-impact/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Social Impact
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="why-augment:culture-inclusion" 
                    href="/careers/diversity-inclusion/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Culture and Inclusion
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="why-augment:security-practices" 
                    href="/corporate/security-practices/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Security Practices
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Learn */}
          <div className="u10w2">
            <div className="u10w3">
              <h4 
                className="u10ttl" 
                id="learn"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#FBF9F8",
                  marginBottom: "24px",
                  fontFamily: "var(--font-family-sans, Arial, sans-serif)"
                }}
              >
                Learn
              </h4>
              <ul 
                aria-labelledby="learn"
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0
                }}
              >
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="learn:ai-agents" 
                    href="/artificial-intelligence/ai-agents/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    What are AI agents?
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="learn:intelligent-automation" 
                    href="/automation/intelligent-automation/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    What is intelligent automation?
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="learn:ai-finance" 
                    href="/ai/financials/ai-finance/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    How AI is transforming finance
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="learn:vector-db" 
                    href="/database/vector-database/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    What is a vector database?
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="learn:multicloud" 
                    href="/cloud/multicloud/what-is-multicloud/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    What is multicloud?
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="learn:machine-learning" 
                    href="/ai/machine-learning/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    What is machine learning?
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* News and Events */}
          <div className="u10w2">
            <div className="u10w3">
              <h4 
                className="u10ttl" 
                id="newsandevents"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#FBF9F8",
                  marginBottom: "24px",
                  fontFamily: "var(--font-family-sans, Arial, sans-serif)"
                }}
              >
                News and Events
              </h4>
              <ul 
                aria-labelledby="newsandevents"
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0
                }}
              >
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="newsandevents:news" 
                    href="/news/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    News
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="newsandevents:augment-ai-world" 
                    href="/ai-world/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Augment AI World
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="newsandevents:automation-summit" 
                    href="/automation/automation-summit/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Augment Automation Summit
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="newsandevents:dev-tour" 
                    href="/developer/dev-tour/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Augment Dev Tour
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="newsandevents:search-all-events" 
                    href="/events/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Search all events
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div className="u10w2">
            <div className="u10w3">
              <h4 
                className="u10ttl" 
                id="contactus"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#FBF9F8",
                  marginBottom: "24px",
                  fontFamily: "var(--font-family-sans, Arial, sans-serif)"
                }}
              >
                Contact Us
              </h4>
              <ul 
                aria-labelledby="contactus"
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0
                }}
              >
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    href="tel:18006330738"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    US Sales: +1.800.633.0738
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="contact-us:how-can-we-help" 
                    href="/corporate/contact/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    How can we help?
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="contact-us:subscribe-to-emails" 
                    href="/subscribe/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Subscribe to emails
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="contact-us:integrity-helpline" 
                    href="/corporate/integrity-helpline/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Integrity Helpline
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a 
                    data-lbl="contact-us:accessibility" 
                    href="/corporate/accessibility/"
                    style={{
                      color: "#FBF9F8",
                      textDecoration: "none",
                      fontSize: "18px",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.9"}
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="u10w4" style={{ margin: "48px 0" }}>
          <hr 
            style={{
              border: "none",
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              maxWidth: "1344px",
              margin: "0 auto"
            }}
          />
        </div>
      </nav>

      {/* Bottom Section */}
      <div 
        className="u10w11"
        style={{
          maxWidth: "1344px",
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px"
        }}
      >
        <nav className="u10w5 u10w10" aria-label="Site info">
          <ul 
            className="u10-links"
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "24px"
            }}
          >
            <li>
              <a 
                data-lbl="copyright" 
                href="/legal/copyright/"
                style={{
                  color: "#FBF9F8",
                  textDecoration: "none",
                  fontSize: "18px",
                  opacity: 0.8,
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.8"}
              >
                © 2025 Augment
              </a>
            </li>
            <li>
              <a 
                data-lbl="privacy" 
                href="/legal/privacy/"
                style={{
                  color: "#FBF9F8",
                  textDecoration: "none",
                  fontSize: "18px",
                  opacity: 0.8,
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.8"}
              >
                Privacy
              </a>
              <span style={{ margin: "0 8px", opacity: 0.6 }}>/</span>
              <a 
                data-lbl="do-not-sell-my-info" 
                href="/legal/privacy/privacy-choices/"
                style={{
                  color: "#FBF9F8",
                  textDecoration: "none",
                  fontSize: "18px",
                  opacity: 0.8,
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.8"}
              >
                Do Not Sell My Info
              </a>
            </li>
            <li>
              <a 
                data-lbl="ad-choices" 
                href="/legal/privacy/privacy-policy/#adchoices"
                style={{
                  color: "#FBF9F8",
                  textDecoration: "none",
                  fontSize: "18px",
                  opacity: 0.8,
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.8"}
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a 
                data-lbl="careers" 
                href="/corporate/careers/"
                style={{
                  color: "#FBF9F8",
                  textDecoration: "none",
                  fontSize: "18px",
                  opacity: 0.8,
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.8"}
              >
                Careers
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <nav className="u10scl" aria-label="Social media links">
          <ul 
            className="scl-icons"
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              gap: "16px",
              alignItems: "center"
            }}
          >
            <li className="scl-facebook">
              <a 
                data-lbl="scl-icon:facebook" 
                href="https://www.facebook.com/Augment/" 
                rel="noopener noreferrer" 
                target="_blank" 
                aria-label="Augment on Facebook"
                style={{
                  color: "#FBF9F8",
                  fontSize: "25px",
                  opacity: 0.8,
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.8"}
              >
                <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </li>
            <li className="scl-twitter">
              <a 
                data-lbl="scl-icon:twitter" 
                href="https://twitter.com/augment" 
                rel="noopener noreferrer" 
                target="_blank" 
                aria-label="Follow Augment on Twitter"
                style={{
                  color: "#FBF9F8",
                  fontSize: "25px",
                  opacity: 0.8,
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.8"}
              >
                <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </li>
            <li className="scl-linkedin">
              <a 
                data-lbl="scl-icon:linkedin" 
                href="https://www.linkedin.com/company/augment/" 
                rel="noopener noreferrer" 
                target="_blank" 
                aria-label="Augment on LinkedIn"
                style={{
                  color: "#FBF9F8",
                  fontSize: "25px",
                  opacity: 0.8,
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.8"}
              >
                <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </li>
            <li className="scl-youtube">
              <a 
                data-lbl="scl-icon:you-tube" 
                href="https://www.youtube.com/augment/" 
                rel="noopener noreferrer" 
                target="_blank" 
                aria-label="Watch Augment on YouTube"
                style={{
                  color: "#FBF9F8",
                  fontSize: "25px",
                  opacity: 0.8,
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = "1"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = "0.8"}
              >
                <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
