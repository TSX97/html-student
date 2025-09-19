import sqlite3
from tabulate import tabulate

def view_database():
	conn = sqlite3.connect('contacts.db')
	conn.row_factory = sqlite3.Row
	cursor = conn.cursor()
	
	cursor.execute("SELECT * FROM contacts ORDER BY created_at ASC")
	rows = cursor.fetchall()

	if rows: 

		data = [dict(row) for row in rows]
		print(tabulate(data, headers="keys", tablefmt="grid"))
		print(f"\nВсего записей: {len(data)}")
	else:
		print("База данных пуста")
	conn.close()

if __name__ == "__main__":
	view_database()
