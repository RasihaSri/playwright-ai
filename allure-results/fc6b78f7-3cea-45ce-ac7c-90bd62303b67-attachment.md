# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 12_Handle_SVG\Task_Maps.spec.ts >> SVG Element Interactions >> locate India SVG Maps
- Location: tests\12_Handle_SVG\Task_Maps.spec.ts:14:9

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Error: strict mode violation: locator('//div[@id="admin1_map_inner"]//*[name()="svg"]//*[name()="text"]') resolved to 36 elements:
    1) <text y="578.264" opacity="1" stroke="none" fill="#ffffff" stroke-width="0" font-size="16px" font-weight="bold" font="10px "Arial"" font-family="Arial" text-anchor="middle" x="540.7679999999999" class="sm_label sm_label_INAN" transform="matrix(0.688,0,0,0.688,168.7196,180.4184)">…</text> aka locator('text').filter({ hasText: 'Andaman and Nicobar' })
    2) <text x="305.816" y="480.568" opacity="1" stroke="none" fill="#ffffff" stroke-width="0" font-size="16px" font-weight="bold" font="10px "Arial"" font-family="Arial" text-anchor="middle" class="sm_label sm_label_INAP" transform="matrix(0.688,0,0,0.688,95.4146,149.9372)">…</text> aka locator('text').filter({ hasText: 'Andhra Pradesh' })
    3) <text opacity="1" stroke="none" fill="#ffffff" stroke-width="0" font-size="16px" font-weight="bold" font="10px "Arial"" font-family="Arial" text-anchor="middle" x="563.8159999999999" y="232.88799999999998" class="sm_label sm_label_INAR" transform="matrix(0.688,0,0,0.688,175.9106,72.6611)">…</text> aka locator('text').filter({ hasText: 'Arunachal Pradesh' })
    4) <text y="275.2" x="533.544" opacity="1" stroke="none" fill="#ffffff" stroke-width="0" font-size="16px" font-weight="bold" font="10px "Arial"" font-family="Arial" text-anchor="middle" class="sm_label sm_label_INAS" transform="matrix(0.688,0,0,0.688,166.4657,85.8624)">…</text> aka locator('text').filter({ hasText: 'Assam' })
    5) <text y="278.64" opacity="1" stroke="none" fill="#ffffff" stroke-width="0" font-size="16px" font-weight="bold" font="10px "Arial"" font-family="Arial" text-anchor="middle" x="400.41599999999994" class="sm_label sm_label_INBR" transform="matrix(0.688,0,0,0.688,124.9298,86.9357)">…</text> aka locator('text').filter({ hasText: 'Bihar' })
    6) <text x="230.48" y="175.44" opacity="1" stroke="none" fill="#ffffff" stroke-width="0" font-size="16px" font-weight="bold" font="10px "Arial"" font-family="Arial" text-anchor="middle" class="sm_label sm_label_INCH" transform="matrix(0.688,0,0,0.688,71.9098,54.7373)">…</text> aka locator('text').filter({ hasText: 'Chandigarh' })
    7) <text x="335.056" opacity="1" stroke="none" fill="#ffffff" stroke-width="0" font-size="16px" font-weight="bold" font="10px "Arial"" font-family="Arial" text-anchor="middle" y="380.11999999999995" class="sm_label sm_label_INCT" transform="matrix(0.688,0,0,0.688,104.5375,118.5974)">…</text> aka locator('text').filter({ hasText: 'Chhattisgarh' })
    8) <text x="160.992" y="395.256" opacity="1" stroke="none" fill="#ffffff" stroke-width="0" font-size="16px" font-weight="bold" font="10px "Arial"" font-family="Arial" text-anchor="middle" class="sm_label sm_label_INDH" transform="matrix(0.688,0,0,0.688,50.2295,123.3199)">…</text> aka locator('text').filter({ hasText: 'Dādra and Nagar Haveli and' })
    9) <text opacity="1" stroke="none" fill="#ffffff" stroke-width="0" font-size="16px" font-weight="bold" font="10px "Arial"" font-family="Arial" text-anchor="middle" x="236.67199999999997" y="220.84799999999998" class="sm_label sm_label_INDL" transform="matrix(0.688,0,0,0.688,73.8417,68.9046)">…</text> aka locator('text').filter({ hasText: 'Delhi' })
    10) <text opacity="1" stroke="none" fill="#ffffff" stroke-width="0" font-size="16px" font-weight="bold" font="10px "Arial"" font-family="Arial" text-anchor="middle" x="178.19199999999998" y="491.57599999999996" class="sm_label sm_label_INGA" transform="matrix(0.688,0,0,0.688,55.5959,153.3717)">…</text> aka locator('text').filter({ hasText: 'Goa' })
    ...

Call log:
  - waiting for locator('//div[@id="admin1_map_inner"]//*[name()="svg"]//*[name()="text"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - img [ref=e7]
      - generic: 
    - list [ref=e27]:
      - listitem [ref=e28]:
        - link "US Map" [ref=e29] [cursor=pointer]:
          - /url: /us
      - listitem [ref=e30]:
        - link "World Map" [ref=e31] [cursor=pointer]:
          - /url: /world
      - listitem [ref=e32]:
        - link "Features" [ref=e33] [cursor=pointer]:
          - /url: /features
      - listitem [ref=e34]:
        - link "Docs" [ref=e35] [cursor=pointer]:
          - /url: /docs
      - listitem [ref=e36]:
        - link "Pricing" [ref=e37] [cursor=pointer]:
          - /url: /pricing
      - listitem [ref=e38]:
        - link "Contact" [ref=e39] [cursor=pointer]:
          - /url: /contact
      - listitem [ref=e40]:
        - link "All" [ref=e41] [cursor=pointer]:
          - /url: "#"
          - text: All
  - generic [ref=e45]:
    - generic [ref=e46]:
      - heading "Free India SVG Maps | Resources" [level=2] [ref=e47]
      - generic [ref=e49]:
        - paragraph [ref=e50]: We've created multiple SVG maps for the country of India.
        - generic [ref=e51]:
          - tablist [ref=e52]:
            - tab "Admin Areas (level 1)" [expanded] [selected] [ref=e53]:
              - link "Admin Areas (level 1)" [ref=e54]:
                - /url: "#admin1"
            - tab "All of India" [ref=e55]:
              - link "All of India" [ref=e56] [cursor=pointer]:
                - /url: "#all"
          - tabpanel "Admin Areas (level 1)" [ref=e57]:
            - paragraph [ref=e58]: "Below is an SVG map of the country of India. It has been cleaned and optimized for web use. Features include:"
            - list [ref=e59]:
              - listitem [ref=e60]: Simplified to load quickly with minimal loss of detail (208.4 KB).
              - listitem [ref=e61]:
                - text: "License:"
                - link "Free for Commercial and Personal Use" [ref=e62] [cursor=pointer]:
                  - /url: /resources/svg-license
                - text: (attribution appreciated!).
              - listitem [ref=e63]:
                - text: First-level administrative regions identified by
                - code [ref=e64]: name
                - text: and
                - code [ref=e65]: id
                - text: in the source code.
              - listitem [ref=e66]:
                - text: Uses the beautiful
                - link "Mercator Projection" [ref=e67] [cursor=pointer]:
                  - /url: https://en.wikipedia.org/wiki/Mercator_projection
                - text: .
            - paragraph
            - paragraph [ref=e68]:
              - img "SVG India Map Using Mercator Projection" [ref=e69]
            - paragraph [ref=e70]:
              - link "Download SVG" [ref=e71] [cursor=pointer]:
                - /url: /static/svg/country/in/admin1/in.svg
              - link "View Source GIS" [ref=e72] [cursor=pointer]:
                - /url: /gis/country/in#admin1
              - link "Customize Online as Interactive Map" [ref=e73] [cursor=pointer]:
                - /url: /ajax/set-map-abs/?url_slug=country&mapinfo_src=https://simplemaps.com/static/svg/country/in/admin1/mapinfo.js&mapdata_src=https://simplemaps.com/static/svg/country/in/admin1/mapdata.js
            - heading "Make this India map interactive and customize it online!" [level=3] [ref=e74]
            - paragraph [ref=e75]:
              - text: Our software turns this static SVG map into a zoomable, clickable, mobile-friendly map like the one below. We make it easy to customize region colors, descriptions, urls etc. and add locations like the capital city, New Delhi, to your map. Get started now with our
              - link "online customization tool" [ref=e76] [cursor=pointer]:
                - /url: /ajax/set-map-abs/?url_slug=country&mapinfo_src=https://simplemaps.com/static/svg/country/in/admin1/mapinfo.js&mapdata_src=https://simplemaps.com/static/svg/country/in/admin1/mapdata.js
              - text: .
            - generic [ref=e79]:
              - img [ref=e81]
              - img [ref=e87]
            - link " Customize this map " [ref=e127] [cursor=pointer]:
              - /url: /ajax/set-map-abs/?url_slug=country&mapinfo_src=https://simplemaps.com/static/svg/country/in/admin1/mapinfo.js&mapdata_src=https://simplemaps.com/static/svg/country/in/admin1/mapdata.js
              - generic [ref=e128]: 
              - text: Customize this map
              - generic [ref=e129]: 
            - heading "Included Administrative Regions" [level=3] [ref=e130]
            - code [ref=e132]: "{ \"INAN\": \"Andaman and Nicobar\", \"INAP\": \"Andhra Pradesh\", \"INAR\": \"Arunachal Pradesh\", \"INAS\": \"Assam\", \"INBR\": \"Bihar\", \"INCH\": \"Chandigarh\", \"INCT\": \"Chhattisgarh\", \"INDH\": \"Dādra and Nagar Haveli and Damān and Diu\", \"INDL\": \"Delhi\", \"INGA\": \"Goa\", \"INGJ\": \"Gujarat\", \"INHP\": \"Himachal Pradesh\", \"INHR\": \"Haryana\", \"INJH\": \"Jharkhand\", \"INJK\": \"Jammu and Kashmir\", \"INKA\": \"Karnataka\", \"INKL\": \"Kerala\", \"INLA\": \"Ladakh\", \"INLD\": \"Lakshadweep\", \"INMH\": \"Maharashtra\", \"INML\": \"Meghalaya\", \"INMN\": \"Manipur\", \"INMP\": \"Madhya Pradesh\", \"INMZ\": \"Mizoram\", \"INNL\": \"Nagaland\", \"INOR\": \"Orissa\", \"INPB\": \"Punjab\", \"INPY\": \"Puducherry\", \"INRJ\": \"Rajasthan\", \"INSK\": \"Sikkim\", \"INTG\": \"Telangana\", \"INTN\": \"Tamil Nadu\", \"INTR\": \"Tripura\", \"INUP\": \"Uttar Pradesh\", \"INUT\": \"Uttaranchal\", \"INWB\": \"West Bengal\" }"
          - text:  
    - generic [ref=e133]:
      - heading "Resources" [level=3] [ref=e134]
      - paragraph [ref=e135]: Tools, freebies, and articles about mapping and web development. Things we've learned and want to share!
      - list [ref=e136]:
        - listitem [ref=e137]:
          - link "Introduction" [ref=e138] [cursor=pointer]:
            - /url: /resources
      - heading "Free SVG Maps" [level=3] [ref=e139]
      - list [ref=e140]:
        - listitem [ref=e141]:
          - link "All Free SVG Maps" [ref=e142] [cursor=pointer]:
            - /url: /resources/svg-maps
        - listitem [ref=e143]:
          - link "World SVG Map" [ref=e144] [cursor=pointer]:
            - /url: /resources/svg-world
        - listitem [ref=e145]:
          - link "USA SVG Map" [ref=e146] [cursor=pointer]:
            - /url: /resources/svg-us
      - heading "Free Interactive Maps" [level=3] [ref=e147]
      - list [ref=e148]:
        - listitem [ref=e149]:
          - link "Free World Map" [ref=e150] [cursor=pointer]:
            - /url: /resources/free-world-map
        - listitem [ref=e151]:
          - link "Free US Map" [ref=e152] [cursor=pointer]:
            - /url: "/resources/free-us-map "
        - listitem [ref=e153]:
          - link "Free Continent" [ref=e154] [cursor=pointer]:
            - /url: /resources/free-continent-map
      - heading "Data Articles" [level=3] [ref=e155]
      - list [ref=e156]:
        - listitem [ref=e157]:
          - link "CSV to Athena" [ref=e158] [cursor=pointer]:
            - /url: /resources/csv-to-athena
        - listitem [ref=e159]:
          - link "Athena over URL" [ref=e160] [cursor=pointer]:
            - /url: /resources/athena-over-url
        - listitem [ref=e161]:
          - link "Import CSV into MySQL" [ref=e162] [cursor=pointer]:
            - /url: /resources/import-csv-mysql
        - listitem [ref=e163]:
          - link "Import data subset with Power Query" [ref=e164] [cursor=pointer]:
            - /url: /resources/power-query
        - listitem [ref=e165]:
          - link "Retreive demographic data with VLOOKUP" [ref=e166] [cursor=pointer]:
            - /url: /resources/vlookup
        - listitem [ref=e167]:
          - link "Import CSV into Tableau" [ref=e168] [cursor=pointer]:
            - /url: /resources/import-tableau
        - listitem [ref=e169]:
          - link "Visualize places in QGIS" [ref=e170] [cursor=pointer]:
            - /url: /resources/cities-qgis
        - listitem [ref=e171]:
          - link "Filter places in Excel" [ref=e172] [cursor=pointer]:
            - /url: /resources/filter-excel
        - listitem [ref=e173]:
          - link "Location distance code (.js and .py)" [ref=e174] [cursor=pointer]:
            - /url: /resources/location-distance
      - heading "Map Articles" [level=3] [ref=e175]
      - list [ref=e176]:
        - listitem [ref=e177]:
          - link "Guide to MapShaper" [ref=e178] [cursor=pointer]:
            - /url: /resources/guide-to-mapshaper
        - listitem [ref=e179]:
          - link "Overlay polygons on Google Maps" [ref=e180] [cursor=pointer]:
            - /url: /resources/shapes-google-maps
        - listitem [ref=e181]:
          - link "Using Google Cloud" [ref=e182] [cursor=pointer]:
            - /url: /resources/google-cloud-project
        - listitem [ref=e183]:
          - link "Introduction to customizing SVG" [ref=e184] [cursor=pointer]:
            - /url: /resources/customize-us-svg
        - listitem [ref=e185]:
          - link "Software we use at SimpleMaps" [ref=e186] [cursor=pointer]:
            - /url: /resources/software-at-simplemaps
        - listitem [ref=e187]:
          - link "Alternative to Google Maps" [ref=e188] [cursor=pointer]:
            - /url: /resources/alternative-to-google-maps
        - listitem [ref=e189]:
          - link "Flash vs. HTML5 maps" [ref=e190] [cursor=pointer]:
            - /url: /resources/flash-vs-html5
      - heading "Data and Tools" [level=3] [ref=e191]
      - list [ref=e192]:
        - listitem [ref=e193]:
          - link "US Address/Cities Geocoder" [ref=e194] [cursor=pointer]:
            - /url: us-geocoder
        - listitem [ref=e195]:
          - link "World cities data (by country)" [ref=e196] [cursor=pointer]:
            - /url: /resources/free-country-cities
      - heading "Visualizations" [level=3] [ref=e197]
      - list [ref=e198]:
        - listitem [ref=e199]:
          - link "US Gold Medalists Rio 2016" [ref=e200] [cursor=pointer]:
            - /url: /viz/rio16
        - listitem [ref=e201]:
          - link "US Unemployment (auto-updated)" [ref=e202] [cursor=pointer]:
            - /url: /viz/unemployment
        - listitem [ref=e203]:
          - link "Snakes and Bears" [ref=e204] [cursor=pointer]:
            - /url: /viz/wild
        - listitem [ref=e205]:
          - link "Zip Code Visualizations" [ref=e206] [cursor=pointer]:
            - /url: /resources/zip-code-visualizations
      - heading "Links" [level=3] [ref=e207]
      - list [ref=e208]:
        - listitem [ref=e209]:
          - link "Raphael.js" [ref=e210] [cursor=pointer]:
            - /url: http://dmitrybaranovskiy.github.io/raphael/
        - listitem [ref=e211]:
          - link "MapShaper" [ref=e212] [cursor=pointer]:
            - /url: http://www.mapshaper.org/
        - listitem [ref=e213]:
          - link "Old articles about Flash maps" [ref=e214] [cursor=pointer]:
            - /url: /flash
  - paragraph [ref=e216]:
    - link "Home" [ref=e217] [cursor=pointer]:
      - /url: /
    - text: "|"
    - link "License" [ref=e218] [cursor=pointer]:
      - /url: /license
    - text: "|"
    - link "Privacy" [ref=e219] [cursor=pointer]:
      - /url: /privacy
    - text: "|"
    - link "Releases" [ref=e220] [cursor=pointer]:
      - /url: /releases
    - text: "|"
    - link "Testimonials" [ref=e221] [cursor=pointer]:
      - /url: /testimonials
    - text: "|"
    - link "Resources" [ref=e222] [cursor=pointer]:
      - /url: /resources
    - text: "|"
    - link "Documentation |" [ref=e223] [cursor=pointer]:
      - /url: /docs/
    - link "Order Lookup" [ref=e224] [cursor=pointer]:
      - /url: /updates
    - text: "|"
    - link "All Maps" [ref=e225] [cursor=pointer]:
      - /url: /all-maps
    - text: "|"
    - link "FAQs" [ref=e226] [cursor=pointer]:
      - /url: https://faqs.simplemaps.com
    - text: Formerly FlashUSAmap.com and FlashWorldMap.com
    - text: SimpleMaps.com is a product of Pareto Software, LLC. © 2010-2026.
  - generic [ref=e227]:
    - generic:
      - img
    - iframe [ref=e228]:
      - button "Help" [ref=f3e4] [cursor=pointer]:
        - generic:
          - img
        - generic:
          - img
        - generic:
          - img
        - generic [ref=f3e5]: Help
```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | 
  3  | // Replace with your actual test URL containing SVG elements
  4  | const SIMPLE_MAPS_URL = 'https://simplemaps.com/svg/country/in';
  5  | 
  6  | test.describe('SVG Element Interactions', () => {
  7  | 
  8  |     test.beforeEach(async ({ page }) => {
  9  |         await page.goto(SIMPLE_MAPS_URL);
  10 |         await page.waitForTimeout(2000); // Wait for the SVG map to load
  11 |         await page.setViewportSize({ width: 1920, height: 1080 });
  12 |     });
  13 | 
  14 |     test('locate India SVG Maps', async ({ page }) => {
  15 |         const allStates = page.locator('//div[@id="admin1_map_inner"]//*[name()="svg"]//*[name()="text"]');
> 16 |         await allStates.scrollIntoViewIfNeeded();
     |                         ^ Error: locator.scrollIntoViewIfNeeded: Error: strict mode violation: locator('//div[@id="admin1_map_inner"]//*[name()="svg"]//*[name()="text"]') resolved to 36 elements:
  17 |         console.log("All States: " + await allStates.allTextContents());
  18 | 
  19 |         const stateHandles = await allStates.elementHandles();
  20 |         for (const state of stateHandles) {
  21 |             if ((await state.textContent())?.includes("Uttar Pradesh")) {
  22 |                 await state.click();
  23 |                 break;
  24 |             }
  25 |         }
  26 | 
  27 |     });
  28 | });
  29 | 
```