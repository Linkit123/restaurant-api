## 1. start mongoDb replica set
 - cd resrouces/mongodb-replica-set
 - .\dbstart.sh
 - important: 
   + if mongo-rs-setup service not working, check your EOL file of rs-init.sh
      make sure EOL type is Unit(LF)
      you can use notpadd++ to convert: Edit -> EOL Conversion -> Unit(LF)
   + set host in your computer -> 127.0.0.1 mongo1 mongo2 mongo3

## 2. connection string mongoDb replica set:
 - mongodb://localhost:27021,localhost:27022,localhost:27023/?replicaSet=dbrs

## 3. start nodejs:
 - npm start
 - run with debug: npm run inspect
 
## 4. to access into a container use:
 - docker exec -it mongo1 bash
 - connect to mongo by: mongosh localhost:27021
 - mongo replicaset (rs) command:
    + rs.initiate(): init rs
    + rs.status(): check rs status
    + rs.reconfig(): reinit rs

## run with auth - (WIP)
 - install openssl
 - create keyfile: openssl rand -base64 756 > keyfile