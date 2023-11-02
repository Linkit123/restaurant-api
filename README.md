1. start mongoDb replica set:
 - cd restaurant-api\resrouces
 - .\dbstart.sh
 - important: then set host like this: 127.0.0.1 mongo1 mongo2 mongo3
2. start nodejs:
 - npm start
 - run with debug: npm run inspect
 
3. connection string mongoDb replica set:
 - mongodb://localhost:27021,localhost:27022,localhost:27023/?replicaSet=dbrs