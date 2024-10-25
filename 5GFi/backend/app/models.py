from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, func, ForeignKey
# Tenant
from sqlalchemy import Boolean, Column, Integer, String, DateTime
from database import Base
import datetime


Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    org_id = Column(Integer, ForeignKey("organizations.org_id"), default=None)  # Foreign key to organizations table
    username = Column(String(255), unique=True, index=True, default=None)
    email = Column(String(255), unique=True, index=True, default=None)
    password_hash = Column(String(255), default=None)
    first_name = Column(String(255), default=None)
    last_name = Column(String(255), default=None)
    role = Column(String(50), default=None)
    created_at = Column(DateTime, server_default=func.now())  # Automatically set to current timestamp on creation
    is_active = Column(Boolean, default=True)  # Default value is True

    # Relationship to the Organization model (optional)
    organization = relationship("Organization", back_populates="users")
    
    
class UserNew(Base):
    __tablename__ = "user"

    user_id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)  # Set length for the email column
    password_hash = Column(String(260))
    
class Organization(Base):
    __tablename__ = "organizations"

    org_id = Column(Integer, primary_key=True, index=True)
    organization_name = Column(String(255), nullable=False)  # Organization Name
    first_name = Column(String(255), nullable=False)  # First Name of the contact person
    last_name = Column(String(255), nullable=True)   # Last Name of the contact person
    organization_address = Column(Text, default=None)  # Organization Address
    organization_email = Column(String(255),nullable=False)  # Organization Email
    password = Column(String(255), nullable=False)    # Password (hashed)
    role = Column(String(100), nullable=False)        # Role of the contact person
    created_at = Column(DateTime, server_default=func.now())  # Creation timestamp
    is_active = Column(Boolean, default=True)  # Active status
    # Relationship to the User model (if applicable)
    users = relationship("User", back_populates="organization")
    tenants = relationship("Tenant", back_populates="organization")


# Tenant
from sqlalchemy import ForeignKey

class Tenant(Base):
    __tablename__ = "tenants"
    
    tenant_id = Column(Integer, primary_key=True, index=True)
    org_id = Column(Integer, ForeignKey("organizations.org_id"))  # Add ForeignKey to org_id in Organization
    tenant_firstname = Column(String(100))
    tenant_lastname = Column(String(100))
    tenant_address = Column(String(255))
    tenant_email = Column(String(100), unique=True, index=True)
    password = Column(String(255))
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    role = Column(String(50))
    is_approved = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    # Define relationship to Organization model
    organization = relationship("Organization", back_populates="tenants")

