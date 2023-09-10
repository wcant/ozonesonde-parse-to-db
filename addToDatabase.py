import psycopg2

# Establish a connection to the PostgreSQL database
conn = psycopg2.connect(
    host="your_host",
    database="your_database",
    user="your_username",
    password="your_password"
)

# Create a cursor object to interact with the database
cursor = conn.cursor()

# Execute a query
cursor.execute("SELECT * FROM your_table")

# Fetch the results
results = cursor.fetchall()

# Print the results
for row in results:
    print(row)

# Close the cursor and the database connection
cursor.close()
conn.close()