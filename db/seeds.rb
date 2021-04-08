# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

apartments = [
{
  street:'1624 Cold Street',
  city:'Madison',
  state:'WI',
  manager:'Rebecca',
  email:'becca@email.com',
  price:'$500',
  bedrooms:6,
  bathrooms:8,
  pets:'no',
  user_id:1,
},
{
  street:'5678 South Avenue',
  city:'Fort Worth',
  state:'TX',
  manager:'Linda',
  email:'linda@email.com',
  price:'$1500',
  bedrooms:1,
  bathrooms:1,
  pets:'no',
  user_id:2,
},
{
  street:'9876 West Lane',
  city:'Duluth',
  state:'MN',
  manager:'Greg',
  email:'greg@email.com',
  price:'$2000',
  bedrooms:2,
  bathrooms:2,
  pets:'yes',
  user_id:1,
}
]
apartments.each do |apartment|
  Apartment.create apartment
  puts "Created apartment: #{apartment}"
end

users = [
{
  id:,
  email:''
}
]
users.each do |user|
  User.create user
  puts "Created user: #{user}"
end
