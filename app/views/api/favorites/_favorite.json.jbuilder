json.set! favorite.id do 
  json.extract! favorite, :id, :pet_id, :user_id
  json.pet_name favorite.pet.name
end