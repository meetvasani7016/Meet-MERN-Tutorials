# Inside mongosh terminal shell:
# Show active databases
show dbs

# Select database to use
use schoolDB

# Create collections
db.createCollection("students")
db.createCollection("teachers")

# Show collections in active DB
show collections