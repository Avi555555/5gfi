"""remove org_unique=True from field

Revision ID: 50fcfb3c8a28
Revises: 27eb5faa663f
Create Date: 2024-10-24 08:16:06.248319

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '50fcfb3c8a28'
down_revision: Union[str, None] = '27eb5faa663f'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###
