## user_problem_statement: there is no project named "Water Resources Dept…" and instead keep the other items like "Private Institutions", CSIL(sewa internationals). And in the later section, include the cards for NTPC, Sewa Internationals, Castillo, Shivalik,
## frontend:
  - task: "Update Projects page with OCR data and new client tags"
    implemented: true
    working: "NA"
    file: "/app/frontend/lib/mock.js, /app/frontend/app/projects/page.jsx"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "Updated TRUSTED_BY in mock.js to remove Water Resources Dept and include Private Institutions, CSIL, Sewa International, Shivalik, Castillo. Added 4 new project cards for NTPC, Sewa International, Shivalik, and Castillo in the PROJECTS array. Re-rendered the Projects page to show 19 client tags instead of 12. Waiting for testing agent."

agent_communication:
    -agent: "main"
    -message: "Please test the Projects page (/projects). Verify that the Institutional Clients grid at the top has been expanded to show 19 buttons including Sewa International, Shivalik, Castillo, and CSIL. Verify that clicking on one of the new client tags smoothly scrolls to a project card below."
