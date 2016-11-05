# Freecycle-API
Scrapes Freecycle groups and creates API from data. Scraper based off [Hughjmp's work](https://github.com/Hughjmp/freecycle). 

# Install
## 1. Set Up Database
Create a new database (Recommended: https://mlab.com) and set MONGODB_URL as the database url provided in Freecycle-API/app/.env.example. Then rename .env.example to .env.

## 2. Install Dependencies
```ssh
$ cd Freecycle-API/
$ npm install
```

# Start Server
Development
```ssh
cd Freecycle-API/
npm run dev
```
Production
```ssh
$ cd Freecycle-API/app/
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
$ cd Freecycle-API/
$ npm run deploy
```