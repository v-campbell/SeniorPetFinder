# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Pet.destroy_all

demo_user = User.create!({first_name: 'Human First Name', last_name: 'Human Last Name', email: 'notadawg@gmail.com', username: 'definitelynotadog', password: 'password'});

pet1 = Pet.create!({name: 'Jim', breed: 'Labrador Retreiver', age: 11, sex: 'M', size: 'L', about: 'Loves lady dogs named Pam', adopted_by: 1})
pet2 = Pet.create!({name: 'Pam', breed: 'Cocker Spaniel', age: 10, sex: 'F', size: 'M', about: "I don't care what they say about me. I just want to eat."})
pet3 = Pet.create({name: 'Dwight', breed: 'Mastiff', age: 11, sex: 'M', size: 'L', about: 'I am fast. To give you a reference point, I am somewhere between a snake and a mongoose… And a panther.'})
pet4 = Pet.create({name: 'Angela', breed: 'Sphynx', age: 9, sex: 'F', size: 'XS', about: 'If you pray enough, you can change yourself into a cat person.', adopted_by: 1})
pet5 = Pet.create({name: 'Michael', breed: 'Jack Russell', age: 14, sex: 'M', size: 'S', about: "I'm an early bird and a night owl, so I'm wise and have worms."})
pet6 = Pet.create({name: 'Stanley', breed: 'Shar Pei', age: 13, sex: 'M', size: 'L', about: 'I have varicose veins. I have swollen ankles. I’m constantly hungry.'})
pet7 = Pet.create({name: 'Kevin', breed: 'Bulldog', age: 12, sex: 'M', size: 'M', about: 'I just want to sit on the beach and eat hot dogs.'})
pet8 = Pet.create({name: 'Phyllis', breed: 'Afghan Hound', age: 14, sex: 'F', size: 'L', about: 'I have an ice cream cake in the car.'})
pet9 = Pet.create({name: 'Creed', breed: 'Mutt', age: 296, sex: 'M', size: 'M', about: "I've never owned a refridgerator before."})

