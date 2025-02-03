
# Leaflet Challenge: Earthquake Data Visualization

## Overview

The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, ecosystems, environmental health, and the effects of climate and land-use change. USGS seeks a new set of tools to visualize earthquake data. They collect massive amounts of global earthquake data daily but lack an intuitive way to display it. This project aims to develop a visualization that showcases the data in a map form.

## Project Structure

This project is divided into three main components:

### 1. Fetching Data

Data is pulled directly from the USGS website using the following JSON URL: 

https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson. 

The URL takes all earthquakes from the previous week with a magnitude of 1 or higher.

### 2. Data Visualization with Leaflet.js

Using the JSON URL, earthquakes are plotted on a map using Leaflet, with markers based on longitude and latitude. The size of these markers are defined by earthquake magnitude and the color of the markers indicate earthquake depth. In addition, popups are included with additional details when markers are clicked. Lastly, a legend has been added to provide context regarding the data.

### 3. Deployment

The site is hosted on GitHub Pages for static deployment.

## Files

- **index.html**: Main HTML file for the dashboard.
- **static/js/logic.js**: JavaScript file containing D3.js and Leaflet.js code for data visualization.
- **static/css/style.css**: Stylesheet for dashboard styling.

## Setup and Dependencies

Before starting, ensure you have the following installed:

- Python (for running a local server)
- Javascript libraries:
    - D3.js
    - Leaflet.js

## Running the Analysis
- Access the map: `https://rjlaughlin.github.io/leaflet-challenge/`