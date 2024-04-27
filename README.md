# fixmi-docker-compose

This repo hosts the docker compose for the fixmi app, running and connecting all the microservices

Run with
```bash
sudo docker compose up
```

Or you can run in detached mode by adding `-d` flag to run everything in the background
```bash
sudo docker compose up -d
```
And then you can stop it with
```bash
sudo docker compose down
```

---

This compose runs:
- Task microservice
- Authentication microservice
- Database microservice
- Reverse proxy

### Network configuration

All the microservices run on the same network and are configured with a static ip address, defined in `.env`

### Database configuration

You can put the database configuration in `init_scripts/init.js`
When you run the database container, a `db/` directory will be create to maintain data persistency between docker instances.
