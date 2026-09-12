from sqlmodel import SQLModel, Field

class Element(SQLModel, table=True):
    id: int = Field(primary_key=True)
    category: str = Field(index=True)
    name: str = Field(index=True)