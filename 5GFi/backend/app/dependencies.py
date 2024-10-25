from app.database import get_db
from fastapi import Depends

def get_database(db=Depends(get_db)):
    return db
