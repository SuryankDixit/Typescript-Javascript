## Linux:
sudo service mysql start

```sql

CREATE DATABASE mytestdb;
CREATE USER myuser IDENTIFIED BY 'mypass';
USE mytestdb;

GRANT ALL PRIVILEGES ON mytestdb.* to myuser;
FLUSH privileges;
```

