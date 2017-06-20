# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


if User.count < 1
  User.create({name: "Eric", email: "Eric@awesome.com"})
  puts "#{User.count} created."
end


10.times do

  name      = Faker::Name.unique.name
  address   = Faker::Address.street_address
  sales_rep = Faker::Name.name

  Inquiry.create!({
    name: name,
    address: address,
    sales_rep: sales_rep,
    user_id: 1
  })

end

puts "#{Inquiry.count} created."



if UserSetting.count < 1

  settings  = { fields: [ "name", "address", "sales_rep"] }.to_json
  settings2 = { fields: [ "sales_rep", "address", "name"] }.to_json

  UserSetting.create({ title: "setting 1", key: 'inquiries', default: true, user_id: 1, settings: settings })
  UserSetting.create({ title: "setting 2", key: 'inquiries', default: false, user_id: 1, settings: settings2 })

  puts "#{UserSetting.count} created."
end


