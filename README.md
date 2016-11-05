# Freecycle-API
Scrapes Freecycle groups and creates API from data. Scraper based off [Hughjmp's work](https://github.com/Hughjmp/freecycle). 

# Install
## 1. Set Up Database
Create a new database (Recommended: https://mlab.com) and set MONGODB_URL as the database url provided in scraper/scraper/.env.example. Then rename .env.example to .env.

## 2. Install Dependencies
Install Express
```ssh
$ cd /scraper
$ npm install
```

Install Express dependencies
```ssh
$ cd /scraper/scraper
$ npm install
```

# Start Server
Development
```ssh
cd scraper/scraper
npm run dev
```
Production
```ssh
$ cd scraper scraper
$ npm run start
```

# Deploy
The API uses Zeit Now.
## 1. Install Now
```ssh
$ npm install -g now
```
## 2. Set Environment variables
For each environment variable execute the following. This only needs to be done once.
```ssh
$ now secrets add mongodb-url "<MONGODB_URL>"
$ now -e MONGODB_URL=@mongodb-url
``
## 3. Deploy
```ssh
$ npm run deploy
```