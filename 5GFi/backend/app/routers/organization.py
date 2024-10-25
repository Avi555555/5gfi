from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import schemas, crud
from database import get_db
# from passlib.context import CryptContext


# pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

router = APIRouter()

@router.post("/add/organization/", response_model=schemas.OrganizationCreate)
def signup(org: schemas.OrganizationCreate, db: Session = Depends(get_db)):
    # db_user = crud.create_organization(db, user.email)
    # if db_user:
        # raise HTTPException(status_code=400, detail="Email already registered")
    create_org = crud.create_organization(db=db, user=org)
    if create_org:
        return create_org
    raise HTTPException(status_code=400, detail="Org already registered")