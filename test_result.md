## user_problem_statement: Convert all headings, titles, labels, and important phrases to Title Case. Capitalize the first letter of each significant word. for the hero banner of homepage, please change the style of showing heading for ex: Building India's Green Infrastructure — One Project At A Time change the font family, rephrase it, we are already having multiple places where we are showing the project details/descriptions, instead show something more premium content
## frontend:
  - task: "Convert phrases to Title Case and redesign Hero content/font"
    implemented: true
    working: "NA"
    file: "/app/frontend/app/layout.jsx, globals.css, components/HeroCarousel.jsx, components/TrustedBy.jsx, app/**/*.jsx"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "Added Playfair Display font as '--font-hero' in layout.jsx and globals.css. Rewrote HeroCarousel.jsx SLIDES data with premium phrasing (e.g., 'Engineering Sustainable Landscapes For India's Future.') without project details. Changed hero h1 to use font-hero. Ran python script to update exact string matches across all page.jsx and component files to Title Case. Waiting for testing agent."

agent_communication:
    -agent: "main"
    -message: "Please test the homepage and other pages. Verify that the Hero carousel now uses a new premium serif font (Playfair Display, via 'font-hero' class) for the main headings, and that the content reflects high-end positioning rather than listing project details. Also verify that major headings and buttons (e.g., 'Get A Quote', 'Government & PSU Projects') are using Title Case."
