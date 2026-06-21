# MongoDB Installation

## 1. What is it?
MongoDB Installation is the process of setting up either a local MongoDB Community database server on your physical machine, or configuring a secure, cloud-hosted MongoDB server cluster via MongoDB Atlas.

## 2. Why do we use it?
Developers use local installations for offline development, speed, and local testing without incurring internet latency or cloud costs. They use MongoDB Atlas (Cloud Setup) for staging, production, collaboration, and high availability, as cloud-hosted databases handle backups, scaling, and security configurations automatically.

## 3. How does it work?
- **Local Database (Part A)**: The database daemon (`mongod`) runs as a system background service on your local computer, storing binary data on your hard drive, while you query it using a client shell (`mongosh`) connecting to local port `27017`.
- **Cloud Database (Part B)**: A multi-cloud clustered database runs in MongoDB's Atlas environment (on AWS, GCP, or Azure). You connect using a TLS-encrypted URI string, authenticating with a database user, and whitelisting IP addresses to authorize traffic.

## 4. Where is it used?
- **Local**: Developing full-stack web applications on your laptop.
- **Cloud**: Connecting a production API hosted on Vercel or Render to a shared cloud database.

## 5. How do we build with it?

### Part A: Local Installation Steps
#### 1. Windows (MSI Installer)
- Download the MongoDB Community Server MSI package from the official site.
- Run the installer, select **"Complete"** setup, and check **"Install MongoDB as a Service"**.
- Ensure **"Install MongoDB Compass"** is selected for a graphical user interface.
- Download and install **MongoDB Shell (mongosh)** separately and add its bin folder path to your system's Environment Variables (PATH).
- Run `mongosh` in any terminal to connect to `mongodb://localhost:27017`.

#### 2. Mac (Homebrew)
- Run: `brew tap mongodb/brew`
- Run: `brew install mongodb-community@7.0`
- Start the server: `brew services start mongodb-community@7.0`
- Connect: run `mongosh` in your terminal.

#### 3. Linux (Ubuntu/Debian)
- Import the public GPG key and add the MongoDB repository to sources.
- Run: `sudo apt-get install -y mongodb-org`
- Start: `sudo systemctl start mongod`
- Connect: run `mongosh`.

### Part B: MongoDB Atlas Cloud Setup Steps
1. Create a free account on [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new Shared Free Cluster (M0 Sandbox) choosing AWS/GCP and your closest region.
3. Under **Database Access**, create a database user with password-based authentication.
4. Under **Network Access**, click **Add IP Address** and whitelist `0.0.0.0/0` (allows connections from anywhere, required for hosting providers like Render/Vercel) or add your current IP for maximum local security.
5. In your cluster dashboard, click **Connect** -> **Drivers** (Node.js) and copy the connection URI template.

```sh
# Example Local Shell Connection Command
mongosh "mongodb://localhost:27017"

# Example Atlas Cloud URI String
mongodb+srv://db_user:db_password@cluster0.abcde.mongodb.net/myDatabase?retryWrites=true&w=majority
```

- **Expected Output**: Command terminal prints server configuration stats and enters interactive shell.
- **Best Practice**: Always store your connection URI in an environment variable (`process.env.MONGODB_URI`) and never commit passwords to GitHub!
