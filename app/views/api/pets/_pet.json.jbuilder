json.extract! pet, :id, :name, :breed, :age, :sex, :size, :about, :adopted_by
# json.favorites pet.favorites.count
# json.favorited_by_current_user !!pet.favorites.find_by(user_id: current_user.id)
