# Task Manager

### This is a simple task manager which adds, deletes, updates tasks that's made using React and JSON server.

<br/>

## **Install node_modules**

## `npm install`

## **Run**

## `npm run dev`

### _Here the above command concurrently run JSON server and react._

### **package.json**

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server --watch db.json --port 5001",
    "dev": "concurrently \"npm start\" \"npm run server\""
    }
```
