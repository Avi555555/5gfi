from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
import schemas, crud
from database import get_db
from passlib.context import CryptContext


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

router = APIRouter()


@router.post("/signup/user", response_model=schemas.User)
def signup(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    return crud.create_user(db=db, user=user)

@router.post("/signin/user")
def login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, user.email)
    if not db_user or not pwd_context.verify(user.password, db_user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"msg": "Login successful", "user_id": db_user.user_id}

@router.post("/signup/tenant", response_model=schemas.TenantCreate)
def signup_tenant(tenant: schemas.TenantCreate, db: Session = Depends(get_db)):
    # Check if a tenant with the same email already exists
    db_tenant = crud.get_tenant_by_email(db, tenant.tenant_email)
    if db_tenant:
        raise HTTPException(status_code=400, detail="Email already registered")
    # Create a new tenant
    return crud.create_tenant(db=db, tenant=tenant)

# Tenant Sign-in
@router.post("/login/tenant")
def login_tenant(tenant: schemas.TenantLogin, db: Session = Depends(get_db)):
    # Fetch tenant by email
    db_tenant = crud.get_tenant_by_email(db, tenant.email)
    # Validate credentials
    if not db_tenant or not pwd_context.verify(tenant.password, db_tenant.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    # Return success message and tenant ID
    return {"msg": "Login successful", "tenant_id": db_tenant.tenant_id}

@router.post("/signup/admin/", response_model=schemas.OrganizationCreate)
def signup_admin(org: schemas.OrganizationCreate, db: Session = Depends(get_db)):
    create_org = crud.create_organization(db=db, org=org)
    if create_org:
        return create_org
    raise HTTPException(status_code=400, detail="Admin already registered")

@router.post("/login/admin")
def login_admin(signin_data: schemas.OrgLogin, db: Session = Depends(get_db)):
    # Fetch organization by email
    org = crud.get_organization_by_email(db, email=signin_data.email)
    
    if not org:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail="Admin User not found"
        )
    if not pwd_context.verify(signin_data.password, org.password):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail="Incorrect password"
        )
    return {"Admin": org, "message": "Sign-in successful"}