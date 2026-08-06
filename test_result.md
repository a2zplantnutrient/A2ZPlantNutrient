## user_problem_statement: updated the services as per this visiting card
## frontend:
  - task: "Update mock data with full list of services"
    implemented: true
    working: "NA"
    file: "/app/frontend/lib/mock.js, /app/frontend/app/page.jsx"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "Updated SERVICES array in mock.js with all 17 services from the visiting card. Updated page.jsx to only show the first 6 on the homepage. Services page shows all of them. Waiting for testing agent."

agent_communication:
    -agent: "main"
    -message: "Please test the Services page (/services). Verify that a larger grid of services (approx 17 items) is rendering properly."
