/**
 * SEO Configuration Tests
 * Validates that sitemap, robots.txt, and metadata are properly configured
 * 
 * NOTE: These are integration tests that require a running Next.js dev/prod server.
 * They are skipped in unit test mode and should be run separately with:
 * `npm run dev` (in another terminal) and then `npm test -- --testNamePattern="SEO Configuration" --detectOpenHandles`
 */

describe.skip("SEO Configuration", () => {
  describe("Robots.txt", () => {
    it("should allow all major search engines", async () => {
      const response = await fetch("http://localhost:3000/robots.txt");
      const content = await response.text();

      expect(content).toContain("User-agent: Googlebot");
      expect(content).toContain("User-agent: Bingbot");
      expect(content).toContain("Allow: /");
    });

    it("should allow AI agents to crawl", async () => {
      const response = await fetch("http://localhost:3000/robots.txt");
      const content = await response.text();

      expect(content).toContain("User-agent: GPTBot");
      expect(content).toContain("User-agent: Claude-Web");
      expect(content).toContain("User-agent: CCBot");
    });

    it("should include sitemap reference", async () => {
      const response = await fetch("http://localhost:3000/robots.txt");
      const content = await response.text();

      expect(content).toContain("sitemap:");
    });
  });

  describe("Sitemap.xml", () => {
    it("should return valid XML", async () => {
      const response = await fetch("http://localhost:3000/sitemap.xml");
      const content = await response.text();

      expect(content).toContain('<?xml version="1.0"');
      expect(content).toContain("<urlset");
      expect(content).toContain("</urlset>");
    });

    it("should include homepage", async () => {
      const response = await fetch("http://localhost:3000/sitemap.xml");
      const content = await response.text();

      expect(content).toContain("<loc>");
      expect(content).toContain("</loc>");
    });

    it("should include all key pages", async () => {
      const response = await fetch("http://localhost:3000/sitemap.xml");
      const content = await response.text();

      const requiredPages = [
        "/study-jam",
        "/events",
        "/campus",
        "/resources",
        "/spotlight",
        "/success-stories",
        "/discord",
        "/whatsapp",
      ];

      requiredPages.forEach((page) => {
        expect(content).toContain(page);
      });
    });

    it("should include lastmod dates", async () => {
      const response = await fetch("http://localhost:3000/sitemap.xml");
      const content = await response.text();

      expect(content).toContain("<lastmod>");
      expect(content).toContain("</lastmod>");
    });

    it("should include changefreq", async () => {
      const response = await fetch("http://localhost:3000/sitemap.xml");
      const content = await response.text();

      expect(content).toContain("<changefreq>");
      expect(content).toContain("</changefreq>");
    });

    it("should include priority", async () => {
      const response = await fetch("http://localhost:3000/sitemap.xml");
      const content = await response.text();

      expect(content).toContain("<priority>");
      expect(content).toContain("</priority>");
    });
  });

  describe("Metadata & Open Graph", () => {
    it("should have proper title and description", async () => {
      const response = await fetch("http://localhost:3000");
      const content = await response.text();

      expect(content).toContain(
        "TinkerHub SNGCE — Student Maker Community"
      );
      expect(content).toContain("Empowering students");
    });

    it("should include canonical URL", async () => {
      const response = await fetch("http://localhost:3000");
      const content = await response.text();

      expect(content).toContain('rel="canonical"');
    });

    it("should include JSON-LD schema", async () => {
      const response = await fetch("http://localhost:3000");
      const content = await response.text();

      expect(content).toContain('application/ld+json');
      expect(content).toContain("Organization");
      expect(content).toContain("TinkerHub SNGCE");
    });

    it("should have Open Graph tags", async () => {
      const response = await fetch("http://localhost:3000");
      const content = await response.text();

      expect(content).toContain('property="og:type"');
      expect(content).toContain('property="og:title"');
      expect(content).toContain('property="og:description"');
      expect(content).toContain('property="og:image"');
    });

    it("should have Twitter Card tags", async () => {
      const response = await fetch("http://localhost:3000");
      const content = await response.text();

      expect(content).toContain('name="twitter:card"');
      expect(content).toContain('name="twitter:title"');
      expect(content).toContain('name="twitter:description"');
    });
  });

  describe("Robots Meta Tags", () => {
    it("should allow indexing", async () => {
      const response = await fetch("http://localhost:3000");
      const content = await response.text();

      expect(content).toContain('name="robots"');
      expect(content).not.toContain('content="noindex"');
    });

    it("should allow following links", async () => {
      const response = await fetch("http://localhost:3000");
      const content = await response.text();

      expect(content).toContain('content="index, follow');
    });
  });
});
