from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text

def seed_users():
    demo = User(
        email='demo@aa.io', password='password', first_name="Demo", last_name="Lition")
    marnie = User(
        email='marnie@aa.io', password='password', first_name="Marnie", last_name="Smith")
    bobbie = User(
        email='bobbie@aa.io', password='password', first_name="Bobbie", last_name="Handsome")

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()
    print("Users have been seeded.")

# def seed_listing_users(): 
#     user1 = User(email='demo@aa.io', password='password', first_name="Demo", last_name="Lition")
#     user2 = User(email='marnie@aa.io', password='password', first_name="Marnie", last_name="Smith")
#     user3 = User(email='bobbie@aa.io', password='password', first_name="Bobbie", last_name="Handsome")

#     # listing1 = Listing(teeshirts_id=3)
#     # listing2 = Listing(teeshirts_id=4)
#     # listing3 = Listing(teeshirts_id=5)
    

#     # user1.listings.extend([listing1])
#     # user2.listings.extend([listing2])
#     # user3.listings.extend([listing3])

#     db.session.add_all([user1, user2, user3]) # listing1, listing2, listing3
#     db.session.commit()
#     print("listings_users have been seeded.")
    
# def undo_seed_listing_users():
#     if environment == "production":
#         db.session.execute(f"TRUNCATE table {SCHEMA}.listing_users RESTART IDENTITY CASCADE;")
#     else:
#         db.session.execute(text("DELETE FROM listings_users"))
        
#     db.session.commit()
#     print("listings_users have been unseeded.")


def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        
    db.session.commit()
    print("Users have been unseeded.")