# json.array! @pets do |pet|
#     json.partial! 'api/pets/pet', pet: pet
# end

@pets.each do |pet|
    json.set! pet.id do
        json.partial! "pet", pet: pet
    end
end