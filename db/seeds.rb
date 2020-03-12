# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Pet.destroy_all

demo_user = User.create!({first_name: 'Tom', last_name: 'Hanks', email: 'big@gmail.com', username: 't0mhank$', password: 'password'});
user1 = User.create!({first_name: 'Danny', last_name: 'Devito', email: 'bigdoglover@gmail.com', username: 'dannylovesdogs', password: 'password'});
user2 = User.create!({first_name: 'Steve', last_name: 'Carell', email: 'bestboss@gmail.com', username: 'scottstots', password: 'password'});

pet1 = Pet.create!({name: 'Jim', breed: 'Labrador Retreiver', age: 11, sex: 'M', size: 'L', about: "I don't mean to brag, but New Year's Eve...I was home by nine.", adopted_by: demo_user.id})
pet2 = Pet.create!({name: 'Pam', breed: 'Cocker Spaniel', age: 10, sex: 'F', size: 'M', about: "I don't care what they say about me. I just want to eat.", adopted_by: demo_user.id})
pet3 = Pet.create({name: 'Dwight', breed: 'Mastiff', age: 11, sex: 'M', size: 'L', about: 'I am fast. To give you a reference point, I am somewhere between a snake and a mongoose… And a panther.'})
pet4 = Pet.create({name: 'Angela', breed: 'Sphynx', age: 9, sex: 'F', size: 'XS', about: 'If you pray enough, you can change yourself into a cat person.'})
pet5 = Pet.create({name: 'Michael', breed: 'Corgi', age: 14, sex: 'M', size: 'S', about: "I'm an early bird and a night owl, so I'm wise and have worms.", adopted_by: user2.id})
pet6 = Pet.create({name: 'Stanley', breed: 'Shar Pei', age: 13, sex: 'M', size: 'L', about: "I have varicose veins. I have swollen ankles. I'm constantly hungry.", adopted_by: user1.id})
pet7 = Pet.create({name: 'Kevin', breed: 'Bulldog', age: 12, sex: 'M', size: 'M', about: 'I just want to sit on the beach and eat hot dogs.'})
pet8 = Pet.create({name: 'Phyllis', breed: 'Afghan Hound', age: 14, sex: 'F', size: 'L', about: 'I have an ice cream cake in the car.'})
pet9 = Pet.create({name: 'Creed', breed: 'Mutt', age: 296, sex: 'M', size: 'M', about: "I've never owned a refridgerator before."})
pet10 = Pet.create({name: 'Tucker', breed: 'Golden Retreiver', age: 10, sex: 'M', size: 'L', about: 'I wake up at 5:30AM sharp, which means you will also wake up at 5:30AM sharp.'})
pet11 = Pet.create({name: 'Buttercup', breed: 'Golden Retreiver', age: 9, sex: 'F', size: 'M', about: "I don't love other dogs. Or humans. Please adopt me. Or don't."})
pet12 = Pet.create({name: 'Epi', breed: 'Jack Russell', age: 15, sex: 'F', size: 'S', about: "I love sunshine and naps and naps in the sunshine. My diet consists exclusively of chicken and dried anchovies.", adopted_by: user1.id})
pet13 = Pet.create({name: 'Sparta', breed: 'Yorkshire Terrier', age: 7, sex: 'F', size: 'XS', about: "You will never have to wonder where I am because I will always be on your lap/feet/shoulder/hand/etc.", adopted_by: user1.id})
pet14 = Pet.create({name: 'Nova', breed: 'Husky', age: 8, sex: 'F', size: 'L', about: "One time, I ate trash. Just kidding. I eat trash all the time.", adopted_by: user1.id})
pet15 = Pet.create({name: 'Tiger', breed: 'Husky', age: 7, sex: 'M', size: 'L', about: "I am sweet, sleepy and clingy. I come from a bad home, so I need a human who can give me extra love.", adopted_by: user1.id})
pet16 = Pet.create({name: 'Barley', breed: 'Maltipoo', age: 6, sex: 'M', size: 'S', about: "I don't care much for dog food. I do, however, care a lot about bananas. Love bananas."})
pet17 = Pet.create({name: 'Jimmy Dean', breed: 'Pot Belly', age: 8, sex: 'M', size: 'M', about: "I am cute, definitely a dog, cuddly and did I mention that I'm a dog?"})
pet18 = Pet.create({name: 'Catto', breed: 'Cat', age: 25, sex: 'F', size: 'S', about: "I love pizza, snacks, yoga and other people's babies."})
pet19 = Pet.create({name: 'Jamie', breed: '???', age: 99, sex: 'F', size: 'S', about: 'hungry baby'})
pet20 = Pet.create({name: 'Chelsea', breed: 'Mix Shepherd', age: 7, sex: 'F', size: 'L', about: 'I am always happy to make a new human friend. My tail spins around like a helicopter blade.'})
pet21 = Pet.create({name: 'Gucci', breed: 'Mix Terrier, Pit Bull', age: 8, sex: 'M', size: 'XL', about: 'I am goofy, good-looking and guaranteed to make you smile! I like to play with a big-ole-ball and cannot wait to meet you.!'})
pet22 = Pet.create({name: 'Leia', breed: 'Australian Cattle Dog Mix', age: 6, sex: 'F', size: 'L', about: 'I am sweet, like to be petted and loves treats which I take from your hand so daintily! I walk well on a leash and will happily meander with you for a nice long walk.'})
pet23 = Pet.create({name: 'Sparky', breed: 'Mix Terrier, Pit Bull', age: 7, sex: 'M', size: 'L', about: "I am one handsome fellow. It takes me a second to warm up, but before you know it, I am ready for love. There isn't a smell out there that I don't want to check out."})
pet24 = Pet.create({name: 'Remi', breed: 'Mix Terrier, Pit Bulll', age: 5, sex: 'F', size: 'L', about: "I haven't yet met a human I don't like! I love other dogs and don't care if they are small or large: I LOVE DOGS!"})
pet25 = Pet.create({name: 'Kiwi', breed: 'Mix Terrier, Tibetan', age: 5, sex: 'F', size: 'M', about: "I am fuzzy, just like my namesake fruit, but the fruit doesn't want to spend all of its time in your lap like I do. A huge plus - I make the cutest snorting sounds."})
pet26 = Pet.create({name: 'Maxie', breed: 'Domestic Longhair Mix', age: 5, sex: 'M', size: 'S', about: 'I enjoy meeting new people, while my sister Snowbelle likes to watch from afar until I give her the sign to come out and socialize. I am told by everyone that visits me that I am very handsome.'})
pet27 = Pet.create({name: 'Darla', breed: 'Domestic Shorthair Mix', age: 12, sex: 'F', size: 'XS', about: 'I love nothing more than giving head butts to visitors and receiving oodles of pets in return. Please adopt me and give me oodles of pets.'})
pet28 = Pet.create({name: 'Miss Kitty', breed: 'Domestic Medium Hair Mix', age: 12, sex: 'F', size: 'XS', about: 'I am a very well behaved cat and promise to be a great addition to your home. I just want to be loved.'})
pet29 = Pet.create({name: 'Mochi', breed: 'Domestic Shorthair Mix', age: 6, sex: 'F', size: 'S', about: "I am feeling a bit overwhelmed in my new surroundings. I am not anti-social and have been described by others as calm and friendly, but right now, I am none of those things. With time, I promise I will return to my usual self!"})
pet30 = Pet.create({name: 'Camelia', breed: 'Domestic Shorthair Mix', age: 12, sex: 'F', size: 'XS', about: 'I am a very sweet senior kitty which basically means I am a kitten with experience. I’m what you would call a Tortoiseshell – based on my fancy coat. I enjoy being a couch potato and like to spend time watching TV with my humans or simply sitting next to you while you read or work on your laptop.'})

#pet 1 photos
pet1.photos.attach(io: open('https://senior-pet-finder-seeds.s3-us-west-1.amazonaws.com/floor.jpg'), filename: "floor.jpg")
pet1.photos.attach(io: open('https://senior-pet-finder-seeds.s3-us-west-1.amazonaws.com/oldhappy.jpg'), filename: "oldhappy.jpg")
pet1.photos.attach(io: open('http://senior-pet-finder-seeds.s3-us-west-1.amazonaws.com/doublehappy.jpg'), filename: "doublehappy.jpg")

#pet 2 photos
pet2.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/pam1.png'), filename: "pam1.png")
pet2.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/pam2.png'), filename: "pam2.png")
pet2.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/pam3.jpg'), filename: "pam3.png")

#pet 3 photos
pet3.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/dwight1.jpg'), filename: "dwight1.jpg")
pet3.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/dwight2.png'), filename: "dwight2.png")
pet3.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/dwight3.png'), filename: "dwight3.png")

#pet 4 photos
pet4.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/angela1.jpg'), filename: "angela1.jpg")
pet4.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/angela2.png'), filename: "angela2.png")
pet4.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/dwight3.jpg'), filename: "angela3.jpg")

#pet 5 photos
pet5.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/michael1.jpg'), filename: "michael1.png")
pet5.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/michael2.jpg'), filename: "michael2.png")
pet5.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/michael3.jpg'), filename: "michael3.png")


#pet 6 photos
pet6.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/stanley1.png'), filename: "stanley1.png")
pet6.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/stanley1.png'), filename: "stanley2.png")
pet6.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/stanley1.png'), filename: "stanley3.png")

#pet 7 photos
pet7.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/kevin1.png'), filename: "kevin1.png")
pet7.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/kevin2.png'), filename: "kevin2.png")
pet7.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/kevin3.png'), filename: "kevin3.png")

#pet 8 photos
pet8.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/phyllis1.png'), filename: "phyllis1.png")
pet8.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/phyllis2.png'), filename: "phyllis2.png")
pet8.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/phyllis3.png'), filename: "phyllis3.png")


#pet 9 photos
pet9.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/creed1.png'), filename: "creed1.png")
pet9.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/creed2.png'), filename: "creed2.png")
pet9.photos.attach(io: open('https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/creed3.png'), filename: "creed3.png")

#pet 10 photos
pet10.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/tucker1.png"), filename: 'tucker1.png')
pet10.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/tucker2.png"), filename: 'tucker2.png')
pet10.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/tucker3.png"), filename: 'tucker3.png')

#pet 11 photos
pet11.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/buttercup1.png"), filename: 'buttercup1.png')
pet11.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/buttercup2.png"), filename: 'buttercup2.png')
pet11.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/buttercup3.png"), filename: 'buttercup3.png')

#pet 12 photos
pet12.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/epi1.png"), filename: 'epi1.png')
pet12.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/epi2.png"), filename: 'epi2.png')
pet12.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/epi3.png"), filename: 'epi3.png')

#pet 13 photos
pet13.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/sparta1.png"), filename: 'sparta1.png')
pet13.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/sparta2.png"), filename: 'sparta2.png')
pet13.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/sparta3.png"), filename: 'sparta3.png')

#pet 14 photos
pet14.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/nova1.png"), filename: 'nova1.png')
pet14.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/nova1.png"), filename: 'nova1.png')
pet14.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/nova1.png"), filename: 'nova1.png')

#pet 15 photos
pet15.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/tiger1.png"), filename: "tiger1.png")
pet15.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/tiger2.png"), filename: "tiger2.png")
pet15.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/tiger3.png"), filename: "tiger3.png")

#pet 16 photos
pet16.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/barley1.png"), filename: "barley1.png")
pet16.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/barley2.png"), filename: "barley2.png")
pet16.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/barley3.png"), filename: "barley3.png")

#pet 17 photos
pet17.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/jimmydean1.png"), filename: "jimmydean1.png")
pet17.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/jimmydean2.png"), filename: "jimmydean2.png")
pet17.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/jimmydean3.png"), filename: "jimmydean3.png")


#pet 18 photos
pet18.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/catto1.png"), filename: "catto1.png")
pet18.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/catto2.png"), filename: "catto2.png")

#pet 19 photos
pet19.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/jamie1.png"), filename: "jamie1.png")
pet19.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/jamie2.png"), filename: "jamie2.png")
pet19.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/jamie3.png"), filename: "jamie3.png")

#pet 20 photos
pet20.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Chelsea1.jpg"), filename: "Chelsea1.jpg")
pet20.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Chelsea2.jpg"), filename: "Chelsea2.jpg")
pet20.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Chelsea3.jpg"), filename: "Chelsea3.jpg")

#pet 21 photos
pet21.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Gucci1.jpg"), filename: "Gucci1.jpg")
pet21.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Gucci2.jpg"), filename: "Gucci2.jpg")
pet21.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Gucci3.jpg"), filename: "Gucci3.jpg")

#pet 22 photos
pet22.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Leia1.jpg"), filename: "Leia1.jpg")
pet22.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Leia2.jpg"), filename: "Leia2.jpg")
pet22.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Leia3.jpg"), filename: "Leia3.jpg")

#pet 23 photos
pet23.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Sparky1.jpg"), filename: "Sparky1.jpg")
pet23.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Sparky2.jpg"), filename: "Sparky2.jpg")
pet23.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Sparky3.jpg"), filename: "Sparky3.jpg")

#pet 24 photos
pet24.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Remi1.jpg"), filename: "Remi1.jpg")
pet24.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Remi2.jpg"), filename: "Remi2.jpg")
pet24.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Remi3.jpg"), filename: "Remi3.jpg")

#pet 25 photos
pet25.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Kiwi1.jpg"), filename: "Kiwi1.jpg")
pet25.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Kiwi2.jpg"), filename: "Kiwi2.jpg")
pet25.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Kiwi3.jpg"), filename: "Kiwi3.jpg")

#pet 26 photos
pet26.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Maxie1.jpg"), filename: "Maxi1.jpg")
pet26.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Maxie2.jpg"), filename: "Maxi2.jpg")
pet26.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Maxie3.jpg"), filename: "Maxi3.jpg")

#pet 27 photos
pet27.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Darla1.jpg"), filename: "Darla1.jpg")
pet27.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Darla2.jpg"), filename: "Darla2.jpg")
pet27.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Darla3.jpg"), filename: "Darla3.jpg")

#pet 28 photos
pet24.photos.attach(io: open("https://senior-pet-finder-seeds.s3-us-west-1.amazonaws.com/Miss+Kitty1.jpg"), filename: "Miss+Kitty1.jpg")
pet24.photos.attach(io: open("https://senior-pet-finder-seeds.s3-us-west-1.amazonaws.com/Miss+Kitty2.jpg"), filename: "Miss+Kitty2.jpg")
pet24.photos.attach(io: open("https://senior-pet-finder-seeds.s3-us-west-1.amazonaws.com/Miss+Kitty3.jpg"), filename: "Miss+Kitty3.jpg")

#pet 29 photos
pet29.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Mochi1.jpg"), filename: "Mochi1.jpg")
pet29.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Mochi2.jpg"), filename: "Mochi2.jpg")
pet29.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Mochi3.jpg"), filename: "Mochi3.jpg")

#pet 30 photos
pet30.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Camelia1.jpg"), filename: "Camelia1.jpg")
pet30.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Camelia2.jpg"), filename: "Camelia2.jpg")
pet30.photos.attach(io: open("https://senior-pet-finder-seeds.s3.us-west-1.amazonaws.com/Camelia3.jpg"), filename: "Camelia3.jpg")


