json.pets do 
    @pets.each do |pet|
        json.set! pet.id do
            json.extract! pet, :id, :name, :age, :sex, :size, :about, :adopted_by
            json.photoUrls pet.photos.map { |file| url_for(file) }
        end
    end

end