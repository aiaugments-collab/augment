"use client";

interface CustomerStory {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  logoImage: string;
  logoAlt: string;
}

const customerStories: CustomerStory[] = [
  {
    id: "story-1",
    title: "Google gains trusted insights with Augment AI Analytics Platform",
    description: "Analytics service helps technology company make faster, more reliable business decisions across operations in more than 100 countries.",
    ctaText: "Read Google's story",
    ctaLink: "/customers/google",
    logoImage: "/google.svg",
    logoAlt: "Google logo"
  },
  {
    id: "story-2", 
    title: "Microsoft consolidates systems with Augment Cloud Platform",
    description: "Standardized processes help technology leader deliver more consistent service and performance across all operations.",
    ctaText: "Read Microsoft's story",
    ctaLink: "/customers/microsoft",
    logoImage: "https://logo.clearbit.com/microsoft.com",
    logoAlt: "Microsoft logo"
  },
  {
    id: "story-3",
    title: "Augment AI Agent lightens the workload for Amazon clinicians",
    description: "Intelligent automation records key elements of business interactions, simplifying workflow and improving operational quality.",
    ctaText: "Read Amazon's story", 
    ctaLink: "/customers/amazon",
    logoImage: "https://logo.clearbit.com/amazon.com",
    logoAlt: "Amazon logo"
  }
];

export function CustomerStories() {
  return (
    <section 
      className="rh09 rh09v3 rw-neutral-10bg rw-pattern9 rw-pattern-50p rw-pattern-small"
      style={{
        backgroundColor: "#f5f5f5",
        padding: "80px 0",
        position: "relative"
      }}
      data-trackas="rh09"
      data-ocomid="rh09"
      data-a11y="true"
    >
      {/* Background pattern overlay */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          opacity: 0.5
        }}
      />

      <h2 className="sr-only">Featured customers</h2>
      
              <div 
          className="rh09w1 cwidth"
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "0 20px"
          }}
        >
        <div 
          className="rh09tiles col-framework col-justified col-gutters col3"
          style={{
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <ul 
            className="col-w1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: "40px"
            }}
          >
            {customerStories.map((story) => (
              <li 
                key={story.id}
                className="col-item rh09tile rw-neutral-00bg rw-theme-accent-beforebg"
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  position: "relative",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)";
                }}
              >
                {/* Oracle's accent bar at bottom */}
                <div 
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    backgroundColor: "#4C825C"
                  }}
                />
                
                <div 
                  className="rh09-body"
                  style={{
                    padding: "32px",
                    paddingBottom: "24px"
                  }}
                >
                  <div className="rh09-ttl">
                    <h4 
                      role="heading" 
                      aria-level={3}
                      style={{
                        fontSize: "18px",
                        lineHeight: "24px",
                        fontWeight: "700",
                        color: "#161513",
                        marginBottom: "16px",
                        fontFamily: "var(--oraclesans)"
                      }}
                    >
                      {story.title}
                    </h4>
                  </div>
                  
                  <div className="rh09-copy">
                    <p 
                      style={{
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#666",
                        marginBottom: "24px",
                        fontFamily: "var(--oraclesans)"
                      }}
                    >
                      {story.description}
                    </p>
                    
                    <div className="rh09-cta" style={{ marginBottom: "24px" }}>
                      <a 
                        href={story.ctaLink}
                        style={{
                          color: "#0066cc",
                          textDecoration: "none",
                          fontSize: "16px",
                          fontWeight: "600",
                          fontFamily: "var(--oraclesans)",
                          borderBottom: "2px solid transparent",
                          transition: "border-color 0.3s ease"
                        }}
                        onMouseEnter={(e) => (e.target as HTMLElement).style.borderBottomColor = "#0066cc"}
                        onMouseLeave={(e) => (e.target as HTMLElement).style.borderBottomColor = "transparent"}
                      >
                        {story.ctaText}
                      </a>
                    </div>
                  </div>
                  
                  <div 
                    className="rh09-img"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      height: "120px",
                      padding: "20px 0"
                    }}
                  >
                    <img 
                      src={story.logoImage}
                      alt={story.logoAlt}
                      style={{
                        maxWidth: "200px",
                        maxHeight: "80px",
                        width: "auto",
                        height: "auto",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                </div>
                
                {/* Bottom CTA - Oracle has duplicate CTA */}
                <div 
                  className="rh09-cta"
                  style={{
                    padding: "0 32px 32px 32px"
                  }}
                >
                  <a 
                    href={story.ctaLink}
                    style={{
                      color: "#0066cc",
                      textDecoration: "none",
                      fontSize: "16px",
                      fontWeight: "600",
                      fontFamily: "var(--oraclesans)",
                      borderBottom: "2px solid transparent",
                      transition: "border-color 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.borderBottomColor = "#0066cc"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.borderBottomColor = "transparent"}
                  >
                    {story.ctaText}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
