from pydantic import BaseModel, EmailStr, SecretStr
from typing import Optional
from datetime import datetime

class UserCreate(BaseModel):
    org_id: Optional[int] 
    username: str          
    email: EmailStr       
    password: str          
    first_name: str      
    last_name: str         
    role: Optional[str]    
    is_active: Optional[bool] = True  
    created_at: Optional[str] = None   

    class Config:
        orm_mode = True
        
class UserLogin(BaseModel):
    email: EmailStr
    password: str
           
class OrganizationCreate(BaseModel):
    organization_name: str               
    first_name: str                       
    last_name: str                      
    organization_address: Optional[str]   
    organization_email: EmailStr          
    password: SecretStr                   
    role: str                             
    created_at: Optional[datetime] = None 
    is_active: Optional[bool] = True     

    class Config:
        orm_mode = True 
        
class OrgLogin(BaseModel):
    email: EmailStr
    password: str
    
    class Config:
        orm_mode = True


class User(BaseModel):
    user_id: int
    email: EmailStr

    class Config:
        orm_mode = True

# Define Tenant schema
class TenantCreate(BaseModel):
    tenant_firstname: str
    tenant_lastname: str
    tenant_address: str
    tenant_email: EmailStr
    password: SecretStr  
    role: Optional[str] # Default to 'user'
    is_approved: Optional[bool] = False
    is_active: Optional[bool] = True
    org_id: int
    created_at: Optional[datetime] = None

class TenantLogin(BaseModel):
    email: EmailStr
    password: str

