"""empty message

Revision ID: 44fb4b97a766
Revises: 4be1bdc00871
Create Date: 2022-02-13 10:37:00.907499

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '44fb4b97a766'
down_revision = '4be1bdc00871'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('nomadvanplace_services_fkey', 'nomadvanplace', type_='foreignkey')
    op.drop_column('nomadvanplace', 'services')
    op.add_column('services', sa.Column('nomadvanplace', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'services', 'nomadvanplace', ['nomadvanplace'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'services', type_='foreignkey')
    op.drop_column('services', 'nomadvanplace')
    op.add_column('nomadvanplace', sa.Column('services', sa.INTEGER(), autoincrement=False, nullable=False))
    op.create_foreign_key('nomadvanplace_services_fkey', 'nomadvanplace', 'services', ['services'], ['id'])
    # ### end Alembic commands ###