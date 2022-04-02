"""empty message

Revision ID: 9ddb31778b69
Revises: 3df580448b26
Create Date: 2022-02-28 16:04:50.841705

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9ddb31778b69'
down_revision = '3df580448b26'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('nomadvanplace', sa.Column('image', sa.String(length=2500), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('nomadvanplace', 'image')
    # ### end Alembic commands ###