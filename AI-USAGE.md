# AI Usage – Lab 06

## Generated
- Initial drafts of the rendering strategy demonstration.
- React TypeScript components and application structure.
- Documentation drafts.

## Reviewed
- Checked the code against the Lab 06 manual.
- Tested CSR, SSR, SSG, ISR, and streaming routes.
- Tested React booking buttons and keyboard interaction.
- Ran the production build successfully.
- Completed the Lighthouse accessibility audit with a score of 100.

## Rejected
- Suggestions that changed the required lab structure.
- Unnecessary features outside the Lab 06 requirements.
# Rendering Strategies – Lab 06

## 1. Rendering Strategy Comparison

| Strategy | Where HTML is generated | JavaScript required for initial content? | Main benefit |
|---|---|---|---|
| CSR | Browser | Yes | Interactive user interfaces |
| SSR | Server on each request | No | Fresh content on every request |
| SSG | During build time | No | Fast delivery of static pages |
| ISR | Server with cached regeneration | No | Combines caching with periodic updates |
| Streaming | Server sends HTML in chunks | No | Content can arrive progressively |

## 2. Testing Observations

- CSR: Initially displays Loading... and then renders content using browser JavaScript.
- SSR: Displays content generated on the server.
- SSG: Displays pre-generated HTML. Its build timestamp remains unchanged between refreshes.
- ISR: Reuses cached HTML and regenerates it after the five-second cache period expires.
- Streaming: Sends the first HTML chunk immediately and the second chunk after 1.5 seconds.

## 3. Strategy Selection

### Blog Website
SSG is suitable because blog content does not change frequently. Pages can be generated during the build and delivered quickly.

### Live Stock Price Dashboard
SSR can provide fresh data whenever a user requests the page. Client-side updates can then keep stock prices current.

### User Account Page
SSR is suitable because account information is personalized and should be generated for the authenticated user.

## 4. React Mental Model

React uses components to divide the interface into reusable parts.

- Greeting displays the page heading.
- SlotRow displays one office-hours row.
- SlotTable displays the complete schedule.
- StatusMessage displays the booking count.
- App manages booking state using useState.

React updates the interface when state changes instead of manually changing DOM elements.

## 5. Islands Architecture

Islands architecture keeps most of a page as static HTML and adds JavaScript only to interactive sections. This can reduce the amount of JavaScript required by the page.

## 6. Conclusion

This lab demonstrated different rendering strategies and introduced the React component and state model. Testing showed how rendering location, caching, JavaScript, and streaming affect web applications.