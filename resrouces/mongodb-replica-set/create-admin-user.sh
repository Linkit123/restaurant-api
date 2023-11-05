#!/bin/bash
mongosh localhost:27044 --eval '
        admin = db.getSiblingDB("admin")
        admin.createUser(
          {
            user: "siteUserAdmin",
            pwd: "admin333",
            roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
          }
        );
        admin.createUser(
          {
            user: "siteRootAdmin",
            pwd: "root333",
            roles: [ { role: "root", db: "admin" } ]
          }
        );
      '