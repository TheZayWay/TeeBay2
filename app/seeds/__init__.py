from flask.cli import AppGroup
from .users import seed_users, undo_users
from .carts import seed_carts_teeshirts, undo_seed_carts_teeshirts, undo_seed_carts
from .reviews import seed_reviews, undo_reviews
from app.models.db import db, environment, SCHEMA

seed_commands = AppGroup('seed')

@seed_commands.command('all')
def seed():
    if environment == 'production':
        
        # undo_seed_listings()
        # undo_seed_listing_users()
        # undo_seed_teeshirts()
        undo_reviews() 
        undo_seed_carts_teeshirts()
        # undo_seed_carts()      
        # undo_brands()
        
        undo_users()
    # seed_users()
    
    # seed_carts()  
    seed_users()
    # seed_brands()
    seed_carts_teeshirts()
    seed_reviews()
    # seed_listing_users()
    

@seed_commands.command('undo')
def undo():
    # undo_seed_listings()
    # undo_seed_listing_users()
    # undo_seed_teeshirts()
    undo_reviews()
    undo_seed_carts_teeshirts()
    # undo_seed_carts()
    # undo_brands()
    
    undo_users()
    
  