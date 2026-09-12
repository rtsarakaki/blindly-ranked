from fastapi import FastAPI, Depends, Query
from models import Element
from utils import create_db_and_tables
from sqlmodel import create_engine, Session, select
from typing import Annotated

sqlite_db = "database.db"
sqlite_url = f"sqlite:///{sqlite_db}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)

async def lifespan(app: FastAPI):
    create_db_and_tables(engine)
    yield

app = FastAPI(lifespan=lifespan)

def get_session():
    with Session(engine) as session:
        yield session

SessionDep = Annotated[Session, Depends(get_session)]

@app.post("/cadastrar")
def adicionar_db(element: Element, session: SessionDep):
    session.add(element)
    session.commit()
    session.refresh(element)
    return element

@app.get("/elementos")
def listar_elementos(session: SessionDep) -> list[Element]:
    elements = session.exec(select(Element)).all()
    return elements
