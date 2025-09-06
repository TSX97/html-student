from fastapi import FastAPI
from pydantic import BaseModel
import sqlite3
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Contact(BaseModel):
    name: str
    phone: str

def init_db():
    conn = sqlite3.connect('contacts.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS contacts
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  name TEXT NOT NULL,
                  phone TEXT NOT NULL,
                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)''')
    conn.commit()
    conn.close()

@app.post("/submit_contact")
def submit_contact(contact: Contact):
    conn = sqlite3.connect('contacts.db')
    c = conn.cursor()
    c.execute("INSERT INTO contacts (name, phone) VALUES (?, ?)", 
              (contact.name, contact.phone))
    conn.commit()
    conn.close()
    return {"message": "Контакт сохранен", "status": "success"}

@app.get("/contacts")
def get_contacts():
    conn = sqlite3.connect('contacts.db')
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("SELECT * FROM contacts ORDER BY created_at DESC")
    contacts = [dict(row) for row in c.fetchall()]
    conn.close()
    return contacts

@app.delete("/contacts/{contact_id}")
def delete_contact(contact_id: int):
    conn = sqlite3.connect('contacts.db')
    c = conn.cursor()
    c.execute("DELETE FROM contacts WHERE id = ?", (contact_id,))
    conn.commit()
    deleted = c.rowcount
    conn.close()
    return {"message": f"Удалено {deleted} контактов"}

if __name__ == "__main__":
    init_db()
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
