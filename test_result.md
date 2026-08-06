## user_problem_statement: we are already mentioning 10,000+ plants installed in the description, no need to mention again in this card at bottom, instead use some other pointers and keep 3. And in the "Government & PSU projects" section, inside the cards, keep the bottom content in the corner of card(space between).
## frontend:
  - task: "Refine metrics display in Featured Project and PSU projects"
    implemented: true
    working: true
    file: "/app/frontend/app/page.jsx, /app/frontend/components/TrustedBy.jsx"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "Updated TrustedBy.jsx to remove redundant 10,000+ stat and replace it with three pointers (Native Species, 3 Years AMC, NHAI Mandate). Updated page.jsx to push project metrics to corners using justify-between and text alignment. Waiting for testing agent."
        -working: true
        -agent: "testing"
        -comment: "Tested both components successfully. TrustedBy Featured Delivery card displays all 3 new metrics correctly: 'Native' (Species Installed), '3 Years' (Survival AMC), and 'NHAI' (Project Mandate). Government & PSU project cards have metrics properly aligned to opposite corners using justify-between, text-left, and text-right classes. No console errors or failed requests. All tests passed."

agent_communication:
    -agent: "main"
    -message: "Please test the TrustedBy component and Government & PSU projects section on the homepage. Verify the Featured Delivery card has 3 new metrics (Native Species, 3 Years, NHAI). Verify the project cards in Government & PSU projects section have their metrics aligned to opposite corners (left and right)."
    -agent: "testing"
    -message: "Testing complete. Both components working correctly. TrustedBy component shows 3 new metrics as requested. Project cards have metrics aligned to opposite corners. Ready for summary and finish."
