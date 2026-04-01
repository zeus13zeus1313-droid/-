// test-mongo.js
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://zeusadmin:28oyX5thnmG2YerK@chatzeuscluster.kd3pgaa.mongodb.net/?retryWrites=true&w=majority&appName=ChatZeusCluste"; // ضع رابط Atlas هنا

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB Atlas");
    const db = client.db(); // يستخدم الـ DB الافتراضي من الرابط
    const collections = await db.listCollections().toArray();
    console.log("Collections:", collections.map(c => c.name));
  } catch (err) {
    console.error("❌ Connection failed:");
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
