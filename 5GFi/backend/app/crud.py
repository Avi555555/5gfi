from sqlalchemy.orm import Session
import models, schemas
from passlib.context import CryptContext
from datetime import datetime

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = pwd_context.hash(user.password)
    db_user = models.User(email=user.email, password_hash=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def create_organization(db: Session, org: schemas.OrganizationCreate):
    
    hashed_password = pwd_context.hash(org.password.get_secret_value())
    db_org = models.Organization(
        organization_name=org.organization_name, 
        first_name=org.first_name,
        last_name=org.last_name,
        organization_address=org.organization_address, 
        organization_email=org.organization_email,  # Add email from the schema
        password=hashed_password,  # Store the hashed password
        role=org.role,             # Add role from the schema
        created_at=org.created_at or datetime.now(),  # Set to current time if None
        is_active=org.is_active    # Use the value provided in the schema
    )
    # Add and commit the new organization to the database
    db.add(db_org)
    db.commit()
    db.refresh(db_org)
    return db_org

def get_organization_by_email(db: Session, email: str):
    return db.query(models.Organization).filter(models.Organization.organization_email == email).first()

def create_tenant(db: Session, tenant: schemas.TenantCreate):
    # Hash the tenant's password before storing it
    # hashed_password = pwd_context.hash(tenant.password)
    plain_password = tenant.password.get_secret_value()
    hashed_password = pwd_context.hash(plain_password)
    # Create a new tenant instance using the schema data
    db_tenant = models.Tenant(
        tenant_firstname=tenant.tenant_firstname,
        tenant_lastname=tenant.tenant_lastname,
        tenant_address=tenant.tenant_address,
        tenant_email=tenant.tenant_email,
        password=hashed_password,  # Store the hashed password
        role=tenant.role,               # Add role from the schema (admin/user)
        org_id=tenant.org_id,           # Set the organization ID
        created_at=tenant.created_at or datetime.now(),  # Default to current time if not provided
        is_approved=tenant.is_approved,  # Set is_approved status
        is_active=tenant.is_active      # Set is_active status
    )
    # Add the new tenant to the database and commit the changes
    db.add(db_tenant)
    db.commit()
    db.refresh(db_tenant)  # Refresh the instance to reflect the committed data
    
    return db_tenant

# Function to retrieve a tenant by email
def get_tenant_by_email(db: Session, email: str):
    return db.query(models.Tenant).filter(models.Tenant.tenant_email == email).first()


