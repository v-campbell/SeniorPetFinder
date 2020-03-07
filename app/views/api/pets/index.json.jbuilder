json.array! @pets do |pet|
    json.partial! 'api/pets/pet', pet: pet
end