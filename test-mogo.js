from pymongo import MongoClient

# ضع رابط الاتصال هنا
uri = "mongodb+srv://zeusadmin:28oyX5thnmG2YerK@chatzeuscluster.kd3pgaa.mongodb.net/?retryWrites=true&w=majority&appName=ChatZeusCluste"

try:
    client = MongoClient(uri)
    client.admin.command('ismaster')  # اختبار اتصال سريع
    print("✅ Connected successfully!")
    
    db = client.list_database_names()
    print("Databases:", db)
    
except Exception as e:
    print("❌ Connection failed:")
    print(e)
    
finally:
    client.close()
