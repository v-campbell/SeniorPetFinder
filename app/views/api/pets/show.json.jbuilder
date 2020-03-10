# json.pet do
#   json.partial! '/api/pets/pet', pet: @pet
# end

# json.set! @pet.id do
#     json.extract! pet, :id, :name, :breed, :age, :sex, :size, :about, :adopted_by
# end

# json.partial! 'pet', pet: @pet

json.extract! @pet, :id, :name, :breed, :age, :sex, :size, :about, :adopted_by
json.photoUrls @pet.photos.map { |file| url_for(file) }