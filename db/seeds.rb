# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
{
  email:'becca@email.com',
  password:'12345678',
},
{
  email:'dylan@email.com',
  password:'9876543',
},
{
  email:'wilt@email.com',
  password:'24681012',
},
]
users.each do |user|
  User.create user
  puts "Created user: #{user}"
end

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
  user_id:User.first.id,
  image:'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80',
},
{
  street:'2468 Hot Avenue',
  city:'Palm Springs',
  state:'FL',
  manager:'Dylan',
  email:'dylan@email.com',
  price:'$700',
  bedrooms:7,
  bathrooms:2,
  pets:'no',
  user_id:User.second.id,
  image:'https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
},
{
  street:'0863 Warm Lane',
  city:'Topeka',
  state:'KS',
  manager:'Wilt',
  email:'wilt@email.com',
  price:'$2500',
  bedrooms:4,
  bathrooms:4,
  pets:'yes',
  user_id:User.third.id,
  image:'https://images.unsplash.com/photo-1486304873000-235643847519?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
},
{
  street:'8246 Chilly Boulevard',
  city:'Seattle',
  state:'WA',
  manager:'Wilt',
  email:'wilt@email.com',
  price:'$1200',
  bedrooms:5,
  bathrooms:5,
  pets:'yes',
  user_id:User.third.id,
  image:'https://images.unsplash.com/photo-1534595038511-9f219fe0c979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
},
]
apartments.each do |apartment|
  Apartment.create apartment
  puts "Created apartment: #{apartment}"
end
